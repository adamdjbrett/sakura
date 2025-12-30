# Sakura Blog

A beautiful, minimal blog powered by Eleventy 3.1.2 and Sakura CSS.

## Features

- ✨ Clean, minimal design with Sakura CSS
- 📝 Blog with Atom feed
- 🔄 Pagination (10 posts per page)
- 📱 Responsive design
- 🚀 Fast static site generation with Eleventy
- 📊 Sitemap and robots.txt support
- 🏷️ About and Contact pages

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm start
```

This will start the development server at `http://localhost:8080`

### Build

```bash
npm run build
```

This generates the static site in the `_site/` directory.

## Project Structure

```
sakura/
├── blog/                 # Blog posts
├── pages/               # About and Contact pages
├── _includes/           # Template files
├── _data/              # Site metadata
├── css/                # Stylesheets (Sakura CSS)
├── feed/               # Feed templates
├── eleventy.config.js  # Eleventy configuration
└── package.json        # Dependencies
```

## Adding Posts

Create a new file in the `blog/` directory with this format:

```markdown
---
title: Post Title
description: Short description for listings
date: 2024-01-15
layout: post.njk
---

Your post content here...
```

**Important**: Use the date format `YYYY-MM-DD` to avoid Nunjucks date errors.

## Customization

- Edit `_data/metadata.json` to update site title, author, and URL
- Edit `css/sakura.css` to customize colors and styling
- Update `_includes/base.njk` to modify the header and footer

## Features

### Feeds

- Atom feed available at `/feed/feed.xml`
- Subscribe to updates with your favorite reader

### Pagination

- Blog index paginated with 10 posts per page
- Located at `/blog/`, `/blog/page-2/`, etc.

### SEO

- Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Humans.txt at `/humans.txt`

## Deployment

You can deploy to:
- **Netlify**: Connect your GitHub repo, no configuration needed
- **Vercel**: Similar to Netlify, zero config
- **GitHub Pages**: Set build command to `npm run build`
- **Any static host**: Upload contents of `_site/` directory

## License

MIT
