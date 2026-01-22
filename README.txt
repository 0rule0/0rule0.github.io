# Communicativ — MindAR (A1‑b) volledige versie

Dit pakket bevat de complete MindAR‑image‑tracking webapp (zonder WebXR/USDZ) en de geprinte target‑poster.

## Inhoud
- `/index.html`, `/app.js`, `/styles.css` — de webapp
- `/img/panel-with-logo.png` — texture van het virtuele scherm
- `/img/target-poster-A1b.png` — target‑afbeelding voor MindAR
- `/print/target-poster-A1b_A4_300dpi.pdf` — A4 print (≈ 0,297 m breed)
- `/targets/targets.mind` — **placeholder**; compiler‑output hier plaatsen

## Snel starten
1. Print de poster uit `/print/target-poster-A1b_A4_300dpi.pdf`.
2. Ga naar de **MindAR Image Compiler** (webtool), upload `/img/target-poster-A1b.png` en download `targets.mind`.
3. Plaats dat bestand in `/targets/targets.mind` (overschrijf de placeholder).
4. Host de map via **HTTPS** (vereist voor cameratoegang). Open `index.html` op iPhone/Android/laptop.
5. Richt de camera op de geprinte poster en kies je formaat. Het 16:9 scherm is 1:1.

## Schaalcontrole
- A4 breedte = **0,297 m** → in `index.html` staat `physicalWidth: 0.297`.
- Print je op andere maat? Zet `physicalWidth` naar de werkelijke **breedte in meters**.

## Formule (16:9)
- d(inch) → `d_m = inch × 0.0254`
- `s = d_m / √337`
- `W = 16s`, `H = 9s` (meters)

## Tips
- Voldoende licht, matte print.
- Zorg dat ~60% van de poster in beeld is voor snelle lock.

