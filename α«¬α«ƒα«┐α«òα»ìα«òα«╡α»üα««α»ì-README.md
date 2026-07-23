# PuranaKathaigal App — APK ஆக மாற்றுவது எப்படி (100% Free)

இந்த ZIP-ல் உங்க app-oda முழு code இருக்கு (index.html, manifest.json, sw.js, icons). இதை APK ஆ மாற்ற கீழே இருக்குற 3 வழிகள்ல ஏதாவது ஒண்ணு பண்ணுங்க.

---

## வழி 1 (Easy-ஆனது): GitHub Pages + PWABuilder — முழுக்க Free

**படி 1 — App-ஐ online-ல host பண்ணுங்க (free):**
1. github.com-ல ஒரு free account create பண்ணுங்க (இல்லனா login பண்ணுங்க).
2. ஒரு புதிய repository create பண்ணுங்க, பேரு: `purana-kathaigal`.
3. இந்த ZIP-ல இருக்குற எல்லா files-ஐயும் (index.html, manifest.json, sw.js, icons/ folder) அந்த repository-ல upload பண்ணுங்க.
4. Repository Settings → Pages → Source-ல "main branch" select பண்ணி Save பண்ணுங்க.
5. சில நிமிடங்கள்ல உங்க app-க்கு ஒரு link கிடைக்கும் (உதா: `https://yourusername.github.io/purana-kathaigal/`).

**படி 2 — அந்த link-ஐ APK ஆ மாற்றுங்க:**
1. **pwabuilder.com**-க்கு போங்க.
2. மேலே step 1-ல கிடைச்ச உங்க link-ஐ paste பண்ணி "Start" click பண்ணுங்க.
3. அது உங்க app-ஐ scan பண்ணி "Package for stores" -> **Android** select பண்ணுங்க.
4. "Generate Package" click பண்ணா ஒரு **.apk** (அல்லது .aab) file download ஆகும் — இது முழுக்க Free.
5. அந்த APK file-ஐ உங்க friends/family-க்கு WhatsApp/Google Drive மூலமா share பண்ணுங்க.

> Note: Android phones default-ஆ "Unknown apps" install பண்ண permission கேட்கும். அது install பண்றப்போ ஒரு தடவை "Allow" பண்ணனும் — இது normal, cost எதுவும் இல்ல.

---

## வழி 2: Netlify Drop (host பண்றதுக்கு இன்னும் Easy)

1. **app.netlify.com/drop**-க்கு போங்க (login தேவை இல்ல).
2. இந்த ZIP-ல இருக்குற folder-ஐ (unzip பண்ணி) அந்த page-ல drag & drop பண்ணுங்க.
3. உடனே ஒரு free link கிடைக்கும் (உதா: `https://random-name.netlify.app`).
4. அந்த link-ஐ **pwabuilder.com**-ல போட்டு மேலே Step 2-ல சொன்ன மாதிரியே APK generate பண்ணுங்க.

---

## வழி 3: WebView APK (advanced, Android Studio தேவை)

உங்களுக்கு Android Studio தெரிஞ்சிருந்தா, ஒரு simple WebView app பண்ணி இந்த hosted link-ஐ load பண்ணலாம். இது Play Store-க்கு தயார் ஆகற level app. இது வேணும்னா சொல்லுங்க, அந்த Android project code-உம் தயார் பண்ணி தர்றேன்.

---

## முக்கியமான Note

- **வீடியோ கதைகள் tab** — முன்னாடி இது YouTube-ல இருந்து automatic-ஆ fetch பண்ணும் மாதிரி இருந்தது, ஆனா அதுக்கு பயன்படுத்திய free proxy services எல்லாமே unreliable-ஆ இருந்ததால, இப்போ இதை **simple & 100% reliable** ஆன manual முறைக்கு மாத்தியிருக்கேன்.

**எப்படி ஒரு புது வீடியோ சேர்க்கறது:**
1. YouTube-ல உங்க video-ஐ open பண்ணுங்க, browser address bar-ல இருக்குற link-ஐ பாருங்க: `https://www.youtube.com/watch?v=XXXXXXXXXXX`
2. அந்த `v=` க்கு அப்புறம் இருக்குற 11 character code (உதா: `dQw4w9WgXcQ`) தான் **Video ID**
3. `index.html` file-ஐ notepad-ல திறந்து, `VIDEO_STORIES` array-ஐ தேடுங்க (Ctrl+F)
4. இப்படி ஒரு entry சேருங்க:
   ```
   {
     videoId: "dQw4w9WgXcQ",
     title: "வீடியோவின் தலைப்பு",
     date: "22 ஜூலை 2026"
   },
   ```
5. Save பண்ணி, GitHub-ல replace பண்ணுங்க — app உடனே update ஆகிடும்

இது manual தான், ஆனா **எப்போவும் வேலை செய்யும்** (எந்த proxy/internet service மேலயும் depend ஆகாது). ஒரு புது video போட்ட ஒவ்வொரு தடவையும் இந்த ஒரு entry மட்டும் சேர்த்தா போதும்.

- **எழுத்து / ஆடியோ கதைகள் tab** — இதே மாதிரி `TEXT_STORIES` array-ல் manual-ஆ சேர்க்கலாம் (கீழே details).
- **நாள்காட்டி tab**-ல இப்போ 2 வகையான நாட்கள் இருக்கு:
  1. **முக்கிய பண்டிகைகள்** (பொங்கல், தீபாவளி, நவராத்திரி, சிவராத்திரி, கார்த்திகை தீபம் etc.) — இவை already research பண்ணி `FESTIVALS` object-ல hardcode பண்ணிருக்கேன்.
  2. **மாதாந்திர நாட்கள்** (பௌர்ணமி, அமாவாசை, பிரதோஷம், ஏகாதசி, சஷ்டி) — இவை ஒவ்வொரு மாதமும் தானாகவே கணக்கிடப்படும் (சந்திரனின் நகர்வு அடிப்படையில்). இது ஒரு தோராயமான கணக்கீடு (±1 நாள் மாறுபடலாம்) — முக்கியமான விரதம்/பூஜைக்கு முன் உங்க ஊர் பஞ்சாங்கத்துடன் ஒத்துப் பார்த்துக்கோங்க.
  - இன்னும் dates சேர்க்கணும்னா (உதா: உங்க கோவில் சிறப்பு திருவிழா), `index.html`-ல `FESTIVALS` object-ல புது entry சேர்க்கலாம்.

### எழுத்து / ஆடியோ கதைகள் — Video இல்லாம directly சேர்க்க

இப்போ app-ல ஒரு புது tab இருக்கு: **"எழுத்து / ஆடியோ கதைகள்"**. இதுல் video தேவையில்லாம, நீங்க directly text கதை (audio-உம் சேர்த்து வேணும்னா) போடலாம்.

**எப்படி ஒரு புது கதை சேர்க்கறது:**
1. `index.html` file-ஐ notepad அல்லது எந்த text editor-லயும் திறங்க.
2. அதுல் `TEXT_STORIES` எனும் JavaScript array-ஐ தேடுங்க (Ctrl+F).
3. கீழே கொடுத்த மாதிரி ஒரு entry சேருங்க:
   ```
   {
     title: "கதையின் பெயர்",
     date: "22 ஜூலை 2026",
     text: "இங்கே முழு கதையையும் தமிழில் எழுதுங்க...",
     audio: "https://example.com/story-audio.mp3"
   },
   ```
4. `audio` வேணாம்னா அந்த line-ஐ delete பண்ணிடுங்க — text மட்டும் காட்டும்.
5. Audio file-ஐ free-ஆ host பண்ண, Google Drive-ல upload பண்ணி "Anyone with link" share பண்ணி, அந்த link-ஐ `https://drive.google.com/uc?export=view&id=YOUR_FILE_ID` format-ல மாற்றி போடலாம். அல்லது SoundCloud/Anchor.fm-ல upload பண்ணி direct mp3 link வாங்கலாம்.
6. File-ஐ save பண்ணி, மறுபடியும் GitHub/Netlify-ல upload பண்ணுங்க (இது already host பண்ணிருந்தா, அதே place-ல replace பண்ணா போதும் — app உடனே update ஆகிடும்).

> Note: ஒவ்வொரு புது கதைக்கும் நீங்க file-ஐ edit பண்ணி re-upload பண்ணனும் (Google Sheet மாதிரி எந்த website-லயும் இருந்து auto-fetch பண்ண வேணும்னா, அது இன்னும் ஒரு step — வேணும்னா சொல்லுங்க, அதுக்கு வேற setup பண்ணி தர்றேன்).

- Play Store-ல upload பண்ணனும்னா மட்டும் Google $25 (one-time, lifetime) கேட்கும். நேரடியா APK-ஆ share பண்றதுக்கு எந்த cost இல்ல.

எதாவது doubt இருந்தா அல்லது இன்னும் features (comments section, story categories, search, dark/light theme, Google Sheet-மூலம் auto-update) வேணும்னா திரும்ப கேளுங்க!
