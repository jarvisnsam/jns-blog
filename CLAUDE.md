# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a static AI KnowledgeBase website built with vanilla HTML, CSS, and JavaScript. The site uses a dual-template architecture where content exists in both markdown (`md/`) and HTML (`pages/`) formats.

### Key Components

- **Main Landing Page**: `index.html` - Dynamic homepage with JavaScript-powered blog post loading
- **Blog Posts**: Individual HTML files in `pages/` directory with corresponding markdown source in `md/`
- **Templates**: Reusable page templates in `templates/` directory
- **Assets**: Images stored in `img/` directory

### Content Management System

The site uses a JavaScript-based content management approach:

1. **Blog Post Metadata**: Defined in `index.html` as a JavaScript configuration object
2. **Dynamic Content Loading**: Blog posts are fetched and parsed at runtime to extract metadata and hero images
3. **Hero Image Extraction**: Automatically extracts featured images from blog post HTML using multiple fallback selectors
4. **Navigation Sync**: Sidebar navigation is dynamically populated from the same blog post configuration

### Styling System

- **CSS Framework**: TailwindCSS loaded via CDN
- **Theme System**: Light/dark theme toggle with CSS custom properties
- **Typography**: Newsreader serif font for headings, Noto Sans for body text
- **Responsive Design**: Mobile-first approach with responsive grid layouts

### JavaScript Architecture

The main JavaScript functionality is embedded in `index.html` and handles:

- **Theme Management**: Persistent theme switching with localStorage
- **Content Extraction**: HTML parsing to extract post metadata and hero images
- **Caching**: Browser-based caching for parsed content (24-hour duration)
- **Dynamic Rendering**: Template-based HTML generation for cards and navigation

## File Structure Patterns

- `index.html` - Main homepage with embedded JavaScript logic
- `pages/*.html` - Individual blog post pages following the template pattern
- `templates/page.html` - Base template for new blog posts
- `md/*.md` - Markdown source content for blog posts
- `img/` - Static assets (SVGs, PNGs)

## Development Workflow

When adding new blog posts:

1. Create the HTML file in `pages/` using `templates/page.html` as base
2. Add corresponding markdown in `md/` directory
3. Update the `blogPosts` configuration array in `index.html`
4. Add any hero images to `img/` directory

The hero image extraction system will automatically:
- Look for images in the blog post HTML
- Handle relative path resolution (`../img/` → `img/`)
- Fall back to gradient backgrounds if no images found
- Cache extracted metadata for performance

## No Build Process

This is a static site with no build tools, package managers, or deployment scripts. All dependencies are loaded via CDN. Simply open `index.html` in a browser or serve the directory with any static file server.