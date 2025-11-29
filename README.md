# Unbundl — Responsive Landing Page (Assessment)

This repository contains a pixel-faithful, responsive landing page built from a Figma design using **HTML, CSS and Vanilla JavaScript**.

## What I built
- 6 sections implemented: **Hero, Features, About, Testimonials, Pricing, Footer**
- Mobile-first responsive layout
- Mobile hamburger menu and smooth-scroll interactivity
- Semantic HTML and accessible controls

## How to use
1. Download or clone the repo.
2. Open `index.html` in a browser.
3. To serve locally (recommended):
```bash
# one-time: serve via python
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages
1. Create a new repository on GitHub (suggested name: `unbundl-landing-page`).
2. Push all files to the `main` branch.
3. In GitHub -> Settings -> Pages -> Source: `main` branch / root.
4. Save. Site will be live at `https://<your-username>.github.io/unbundl-landing-page/`

## Deploy to Netlify / Vercel
- Drag-and-drop the project folder in Netlify, or connect the GitHub repo in Netlify/Vercel for automatic CI/CD.

## Suggested repo structure
```
unbundl-landing-page/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── placeholder.svg
└── README.md
```

## What you should replace
- Export the real images from the Figma file and replace `images/placeholder.svg`.
- Tune typography and exact spacings to match the Figma spec pixel-perfect.

## License
MIT
