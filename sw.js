const CACHE_NAME = "purana-kathaigal-v2";
const CORE_ASSETS = [
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  // Only handle same-origin GET requests; let everything else (thumbnails, youtube embeds) go straight to network.
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) {
    return;
  }
  // Network-first: always try to get the latest version from the server first.
  // Only fall back to the cached copy if the device is offline / network fails.
  // This ensures updates to index.html show up immediately instead of showing a stale cached copy.
  event.respondWith(
    fetch(req)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
        return res;
      })
      .catch(() => caches.match(req))
  );
});
