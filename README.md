# JNS Blog - Jarvis and Sam AI Knowledge Base

This is the official blog for Jarvis and Sam, hosted on GitHub Pages at https://blog.jarvisnsam.com/

## Recent Updates (May 27, 2025)

### Major Architecture Overhaul
- **NEW**: Reduced max-width from 1200px to 1024px for better readability
- **NEW**: Implemented automatic post discovery from sitemap.xml
- **NEW**: Added RSS feed generation alongside sitemap
- **NEW**: Enhanced post cards with publication dates and tags
- **NEW**: Removed manual post configuration array in favor of auto-discovery

### Enhanced Metadata System
- Added support for article tags in blog posts
- Tags are extracted from multiple sources (meta tags, keywords, .tag elements)
- Visual tag badges on index page post cards
- Tags included in RSS feed categories

### Automated Feed Generation
- Renamed GitHub Action from `generate-sitemap.yml` to `generate-feeds.yml`
- Now generates both `sitemap.xml` and `feed.xml` automatically
- RSS feed includes post excerpts, tags, and proper formatting
- Auto-discovery link for RSS readers in HTML head

### Improved Post Discovery
- Index page now fetches posts directly from sitemap.xml
- No manual configuration needed - just add HTML files to pages folder
- Automatic metadata extraction from post HTML
- Fallback mechanisms for local development

### Visual Enhancements
- Post cards now display publication dates with calendar icon
- Tag badges with hover effects
- Improved loading states with shimmer animations
- Better responsive layout for metadata display

### Previous Updates

#### Modular Architecture Implementation
- Implemented modular header and footer system
- Created `js/blog-common.js` for shared functionality (header, footer, theme toggle, mobile menu)
- Created `css/blog-common.css` for shared styles
- All pages now use dynamic header/footer loading via JavaScript
- Centralized theme toggle and navigation logic

#### Mobile Responsiveness
- Fully responsive design matching the main JNS website
- Off-canvas mobile menu for screens < 768px
- Sticky header on scroll
- Touch-friendly navigation

#### Google Tag Manager Integration
- Added GTM tracking code to all pages
- Proper dataLayer initialization
- Supports analytics and conversion tracking

## How to Create a New Blog Post

### Step 1: Create the Blog Post HTML File
1. **Use the template**: Copy `templates/page.html` as your starting point
2. **Save in pages folder**: Place your new file in the `pages/` directory with a descriptive filename (e.g., `my-new-post.html`)
3. **Update the content**:
   - Change the `<title>` tag
   - Update the `<h1>` title in the article
   - Add your content in the article body
   - Set the publication date in the `<time datetime="YYYY-MM-DDTHH:MM:SS+08:00">` element

### Step 2: Add Metadata and Tags
Add these meta tags in the `<head>` section:
```html
<!-- Primary Meta Tags -->
<meta name="description" content="Your post description here" />
<meta name="keywords" content="keyword1, keyword2, keyword3" />
<meta name="author" content="Author Name" />

<!-- Article Tags (for categorization) -->
<meta name="article:tag" content="AI Agents" />
<meta name="article:tag" content="Future Trends" />
<meta name="article:tag" content="Your Category" />

<!-- Open Graph Meta Tags -->
<meta property="og:title" content="Your Post Title" />
<meta property="og:description" content="Your post description" />
<meta property="og:image" content="https://jarvisnsam.com/jns-blog/img/your-image.png" />
```

### Step 3: Add Images (if needed)
1. **Upload images** to the `img/` directory
2. **Reference in your post** using absolute paths: `/img/your-image.png`
3. **Add feature image** right after the title in your post:
   ```html
   <figure class="mb-6">
       <img src="/img/your-image.png" alt="Description" class="w-full rounded-lg shadow-md"/>
       <figcaption class="text-center text-sm text-[var(--text-muted-color)] mt-2">Image caption</figcaption>
   </figure>
   ```
4. Here is a prompt template for generate a consistent image style for the hero image for each blog

```

Create a futuristic, cyber-tech style blog hero image with the following characteristics:

1. **Visual Theme:**
   - Neon glow outline of abstract human or AI agents
   - Circuit-board or dataflow background
   - Holographic UI elements like data nodes, API icons, charts, or document flows
   - Clear visualization of information transfer, agentic processing, or automation

2. **Color Palette:**
   - Dark navy or black background
   - Neon blue (#00D4FF), electric purple (#8B5CF6) as primary accents
   - Subtle gradients, glows, and depth

3. **Styling:**
   - Clean vector-style art with glowing effects
   - Circuit lines, binary code, hex grids
   - Holographic overlays and data packet visuals
   - Slight 3D or lighting depth for modern finish

4. **Mood & Purpose:**
   - Enterprise-grade and technical
   - Represents automation, AI workflow, and data transformation
   - Designed for blog content focused on intelligent systems or architecture

5. **Aspect Ratio & Size:**
   - **Landscape orientation**
   - **1920x1080 resolution**
   - Designed to fit modern blog banners and social previews

6. **Composition Notes:**
   - Left: a business entity (symbolic human figure, briefcase icon, chart)
   - Middle: AI agents or workflow nodes actively transforming data
   - Right: finished digital output (website, product, delivery, or dashboard)
   - Optional: Add a clock or text showing “6 hours” to indicate speed
   
```

### Step 4: Follow the Blog Structure
Ensure your blog post follows this structure:
```html
<header class="blog-post-header">
    <h1>Your Title</h1>
    
    <!-- Feature Image (immediately after title) -->
    <figure class="mb-6">
        <img src="/img/your-image.png" alt="Description" class="w-full rounded-lg shadow-md"/>
    </figure>
    
    <!-- Metadata (author, date, tags) -->
    <div class="blog-post-meta">
        <div class="author-date">
            <span>By Author Name • <time datetime="2025-05-27">May 27, 2025</time></span>
        </div>
        <div class="post-tags">
            <a href="/?tag=Your Tag" class="tag clickable-tag">Your Tag</a>
        </div>
    </div>
</header>
```

### Step 5: Git Push to Publish
**IMPORTANT**: The sitemap.xml and RSS feed (feed.xml) are only updated after you push to GitHub!

1. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Add new blog post: Your Post Title"
   ```

2. **Push to GitHub**:
   ```bash
   git push origin main
   ```

3. **Automatic processing**: 
   - GitHub Action will automatically scan the `pages/` folder
   - Updates `sitemap.xml` with your new post
   - Updates `feed.xml` (RSS feed) with your new post
   - Your post will appear on the homepage within minutes
   - Your post will be live at: `https://blog.jarvisnsam.com/pages/your-filename.html`

### Important Notes:
- **Local testing**: Your post won't appear on the index page locally until after git push
- **Sitemap dependency**: The homepage discovers posts from sitemap.xml, which is only updated via GitHub Action
- **RSS feed**: Subscribers will automatically receive your new post after the git push
- **No manual configuration**: Just add the HTML file and push - everything else is automatic!

## File Structure

```
jns-blog/
├── .github/
│   └── workflows/
│       └── generate-feeds.yml     # Automatic sitemap & RSS generation
├── css/
│   └── blog-common.css            # Shared styles (max-width: 1024px)
├── js/
│   └── blog-common.js             # Shared JavaScript (header, footer, theme)
├── img/
│   ├── jns_logo.png               # JNS company logo
│   ├── tvsa.png                   # Traditional vs Agentic diagram
│   ├── parellel_internet.svg      # Parallel Internet architecture
│   ├── agentic_protocol.png       # Agentic protocol diagram
│   └── ...                        # Other blog post images
├── pages/
│   ├── parellel_internet.html     # Parallel Internet article (with tags)
│   ├── agentic protocol future trend.html  # Agentic Protocol article (with tags)
│   └── ...                        # Future blog posts
├── templates/
│   └── page.html                  # Template for new blog posts
├── index.html                     # Homepage with auto-discovery
├── sitemap.xml                    # Auto-generated sitemap
├── feed.xml                       # Auto-generated RSS feed
├── .nojekyll                      # Disable Jekyll processing
└── README.md                      # This file
```

## Features

- **Auto-Discovery**: Posts automatically discovered from pages folder
- **Zero Configuration**: No manual post array needed
- **RSS Feed**: Auto-generated feed.xml for RSS readers
- **Tags System**: Support for post categorization with visual badges
- **Date Display**: Publication dates shown on post cards
- **Modular Architecture**: Shared header/footer components across all pages
- **Theme Toggle**: Light/dark mode with persistence
- **Mobile Responsive**: Optimized for all screen sizes (max-width: 1024px)
- **SEO Friendly**: Automatic sitemap and RSS generation
- **Fast Loading**: Static HTML with TailwindCSS CDN
- **Easy Navigation**: Links to main JNS website sections
- **Google Tag Manager**: Analytics and conversion tracking ready

## Technical Architecture

### Auto-Discovery System
The blog uses sitemap.xml as the source of truth for post discovery:

1. **Post Creation**: Simply add HTML files to the `pages/` folder
2. **GitHub Action**: Automatically scans and generates sitemap.xml + feed.xml
3. **Index Page**: Fetches sitemap.xml and extracts post metadata
4. **Zero Config**: No manual post arrays or configuration needed

### Metadata Extraction
Posts are parsed to extract:
- Title (from `<title>` or `<h1>` tags)
- Description (from meta description or first paragraph)
- Publication date (from `<time>` or meta tags)
- Tags (from `article:tag` meta tags or `.tag` elements)
- Hero images (from first image in article)

### Modular Components
- Each page includes placeholders: `<div id="blog-header"></div>` and `<div id="blog-footer"></div>`
- The `blog-common.js` file dynamically loads the header and footer HTML
- All shared functionality (theme toggle, mobile menu) is centralized
- Shared styles are in `blog-common.css` with 1024px max-width

### Performance Optimizations
- 24-hour cache for post metadata
- Parallel fetching of post information
- Fallback mechanisms for failed fetches
- Loading states with shimmer animations

### Note on Local Testing
When testing locally with `file://` protocol, you may see CORS errors. This is normal and won't affect the live site. To test locally without issues, use a local web server.

## Maintenance

- Sitemap and RSS feed are automatically updated via GitHub Actions
- Theme preference is stored in localStorage
- All external links open in the same tab for seamless navigation
- Blog post metadata is extracted dynamically from page content
- Tags are automatically parsed from multiple sources
- No manual configuration needed for new posts

## Contact

For questions or issues, please contact the JNS team through the main website at https://www.jarvisnsam.com/#contact
