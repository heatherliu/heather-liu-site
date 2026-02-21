# Heather Liu — Personal Website

## Quick Start
1. Open the project folder in VS Code
2. Install the "Live Server" extension (if you don't have it)
3. Right-click `index.html` → "Open with Live Server"
4. The site will open in your browser with hot-reload

## Structure
```
heather-liu-site/
├── index.html              ← Homepage
├── css/
│   └── style.css           ← All styles (design tokens at the top)
├── js/
│   └── main.js             ← Navigation, animations, filters, form
├── images/
│   ├── favicon.svg         ← Browser tab icon
│   └── (add your photos here)
├── pages/
│   ├── about.html          ← About page with bio & timeline
│   ├── portfolio.html      ← Portfolio with filterable projects
│   ├── speaking.html       ← Speaking topics & community work
│   └── contact.html        ← Contact form & info
└── README.md
```

## Customization Guide

### Adding Your Photos
1. Place your headshot in `images/` (e.g., `images/heather-headshot.jpg`)
2. In `index.html` and `pages/about.html`, replace the placeholder div with:
   ```html
   <img src="images/heather-headshot.jpg" alt="Heather Liu" class="hero-photo">
   ```

### Changing Colors
Edit the CSS variables at the top of `css/style.css`:
- `--color-accent`: Main accent color (currently terracotta-rose #c4756e)
- `--color-ink`: Primary text color
- `--color-surface`: Background color

### Making the Contact Form Work
The form is a placeholder. To make it functional:
- **Formspree**: Change the form action to `https://formspree.io/f/YOUR_ID`
- **Netlify Forms**: Add `netlify` attribute to the form tag
- **Custom backend**: Update the submit handler in `js/main.js`

### Updating Content
- All content is in plain HTML — edit directly in VS Code
- Email addresses: Search for `hello@heatherliu.com` and replace with your real email
- LinkedIn URL: Search for `linkedin.com/in/heatherliu` and update

### Deploying
This is a static site — deploy anywhere:
- **Netlify**: Drag & drop the folder
- **Vercel**: Connect your repo
- **GitHub Pages**: Push to a repo and enable Pages
- **Custom domain**: Point your domain's DNS to your host

## Design Notes
- **Fonts**: Playfair Display (headings), Inter (body), JetBrains Mono (accents)
- **Palette**: Warm neutrals with terracotta-rose accent — chic but approachable
- **Responsive**: Fully mobile-friendly with a hamburger menu
- **Animations**: Scroll-triggered fade-in animations for a polished feel
