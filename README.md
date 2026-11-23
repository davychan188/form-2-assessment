# Form 2 Assessment

現場 Form 2 樹木評估記錄（離線、手機優先）。

使用：[https://davychan188.github.io/form-2-assessment/](https://davychan188.github.io/form-2-assessment/)

本專案基於 [Hugoleung04/form-2-assessment](https://github.com/Hugoleung04/form-2-assessment)，在 `davychan188` 帳號下獨立維護。

## What it records

Each **tree inspection**
- Tree ID / tag, species, site, inspector, date, notes
- Optional GPS
- At least 1 tree photo

Each **drilling**
- Height above ground (typed; m / cm / mm)
- Direction from the built-in compass (or typed 0–360°)
- 2 photos (drill position + resistograph printout / screen)
- Optional notes (sound wood, decay, depth)

Direction is stored as a magnetic heading. The app also shows it as **entry face → needle toward**, e.g. `N → S`.

## How to use the compass

1. Open a drilling record on the phone.
2. Tap **Enable compass** (required on iPhone).
3. Hold the phone flat, like a handheld compass, away from the steel resistograph body.
4. Stand at the drill point and point the top of the phone in the **same direction the needle travels into the tree**.
5. Tap **Capture compass direction**.

If the compass is blocked or inaccurate, type the bearing instead.

## How to run on a phone

Camera and compass only work in a **secure context** (HTTPS or `localhost`).

### Option A — open from a simple local server (same Wi‑Fi)

On a computer in this folder:

```bash
python3 serve.py
```

Then on the phone, open the printed URL (example: `http://192.168.x.x:8080`).

### Option B — GitHub Pages or any static host

This repo is published at the URL above. You can also upload the folder to Netlify, Cloudflare Pages, or any HTTPS static host. Open the site on the phone and use **Add to Home Screen**.

### iPhone / iPad notes

- Safari: Enable compass when prompted.
- Add to Home Screen for full-screen use.
- Photos stay on the device (IndexedDB). They are not uploaded anywhere.

### Android notes

- Chrome: Add to Home Screen.
- Allow camera / location if you use GPS.

## Photos

Tree photos are shown in a portrait (3:4) frame, matching the Word report. Landscape images are fitted into a portrait canvas when imported (content stays upright, with padding). Tap a photo to draw arrows, circles, or dashed lines; these marks are included in Word and HTML exports.

## Export

- **Export report** — single HTML file with photos embedded (open and print to PDF).
- **Export Word** — DOCX report.
- **Backup JSON** — full data + photos as data URLs.

Records stay on the phone until you delete them.

## Files

- `index.html` — app shell
- `styles.css` — field UI
- `app.js` — storage, compass, photos, export
- `sw.js` — offline cache
- `manifest.json` — installable PWA
