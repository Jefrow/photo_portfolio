# Photo Portfolio

A static photography portfolio website built with HTML, CSS, and vanilla JavaScript.
[See project demo here](https://photo-portfolio-one.vercel.app/)

## Pages

- **Work** (`index.html`) — Two image grid collections showcasing landscape, event, portrait, and wedding photography
- **Blog** (`blog.html`) — Blog listing page with links to individual posts
- **Blog Posts** (`blog_pages/`) — Four individual blog post pages
- **Contact** (`contact.html`) — About section, contact info, and social media links

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- [Poppins](https://fonts.google.com/specimen/Poppins) via Google Fonts
- [Font Awesome](https://fontawesome.com/) for icons

## Project Structure

```
photo_portfolio/
├── assets/             # All image assets
├── blog_pages/         # Individual blog post HTML files
├── styles/
│   ├── styles.css      # Main styles
│   └── responsive.css  # Responsive/mobile styles
├── index.html          # Home / Work page
├── blog.html           # Blog listing page
├── contact.html        # Contact page
└── index.js            # Mobile nav toggle
```

## Running Locally

No build step required. Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
```

## License

MIT
