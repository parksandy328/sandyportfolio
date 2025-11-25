# Sandy Park — Portfolio

This is a lightweight portfolio website scaffold built for Sandy Park (AI researcher & college student).

Features:
- Pink & white "princess" style inspired by Canva designs
- Sections: Hero, About, Projects, Research, Contact
- Responsive layout and simple, easy-to-edit files

Files you care about:
- `index.html` — main page
- `styles.css` — theme and layout
- `script.js` — small interactivity (contact, smooth scroll)

Run locally

Open the `index.html` file directly in your browser, or serve it with a simple HTTP server:

```bash
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Customize

- Replace the placeholder email `your.email@example.com` in `index.html` and `script.js`.
- Add your photo or logo: place assets in a new `assets/` folder and update the `<svg>` or `<img>` in `index.html`.
- Replace project cards with your project summaries, links, and repository URLs.
- Update the CV link to point to your `assets/CV.pdf` or an external URL.

Deploy

- For a simple, free deploy: push this repo to GitHub and enable GitHub Pages from the `main` branch (or use `gh-pages`).
- You can also drag-and-drop `index.html` into Netlify or Vercel for a quick deployment.

Next steps I can help with:
- Add a contact form backend (Netlify Functions / Formspree / simple server)
- Replace placeholder SVG with your profile image and optimize responsive crops
- Generate social preview image and meta tags for sharing

Tell me which assets (photo, CV, project links) you want included and I will add them and polish the design.
