# Quick Reference - AI KnowledgeBase Blog

## File Locations
- **Blog Posts**: `/pages/[post-name].html`
- **Images**: `/img/[image-name].[ext]`
- **Template**: `/templates/page.html`
- **Homepage Config**: `/index.html` (blogPosts array)

## Image Path in HTML
```html
<img src="../img/filename.png" alt="Description"/>
```

## Add New Post to index.html
```javascript
{
    filename: 'post-name.html',
    id: 'post-unique-id',
    fallback: {
        title: 'Post Title Here',
        description: 'Description under 150 chars',
        category: 'Category Name',
        gradient: 'from-color1-500 via-color2-600 to-color3-700',
        icon: `<path d="SVG path data"/>`
    }
}
```

## Hero Image Specs
- **Aspect Ratio**: 16:10 (recommended)
- **Format**: PNG or JPG for photos, SVG for diagrams
- **Size**: Optimize to under 500KB
- **Location**: Must be in `/img/` folder

## Common HTML Snippets

### Hero Image with Caption
```html
<figure class="my-8">
    <img src="../img/hero.png" alt="Alt text" class="w-full h-auto rounded-lg shadow-md"/>
    <figcaption class="text-center text-sm text-[var(--text-muted-color)] mt-2">Caption</figcaption>
</figure>
```

### Highlight Box
```html
<div class="highlight-box">
    <h3>Title:</h3>
    <p>Important content here</p>
</div>
```

### Code Block
```html
<pre class="prose"><code class="language-javascript">
// Code here
</code></pre>
```

### Process List
```html
<div class="flow-list">
    <h3>Steps:</h3>
    <ol>
        <li>Step 1</li>
        <li>Step 2</li>
    </ol>
</div>
```

## Gradient Color Combinations
- Blue to Purple: `from-blue-500 via-purple-600 to-pink-500`
- Cyan to Teal: `from-cyan-500 via-blue-600 to-purple-700`
- Orange to Pink: `from-orange-500 via-pink-500 to-purple-600`
- Green to Blue: `from-green-500 via-teal-600 to-blue-700`
- Red to Orange: `from-red-500 via-orange-600 to-yellow-500`

## Category Icons (SVG Paths)
- **AI/ML**: `<path d="M12 2L13.09 8.26L19 7L15.45 11.82L21 16L14.91 15.74L13 22L10.91 15.74L5 16L10.55 11.82L5 7L11.09 8.26L12 2Z"/>`
- **Architecture**: `<path d="M3 13H11L14 10L17 13H21V21H3V13ZM5 15V19H9V15H5ZM11 15V19H13V15H11ZM15 15V19H19V15H15Z"/>`
- **Protocol**: `<path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9Z"/>`
- **Trends**: `<path d="M12 2L2 19H22L12 2ZM12 6L18.53 17H5.47L12 6ZM11 10V14H13V10H11ZM11 15V17H13V15H11Z"/>`

## Blog Post Workflow Checklist
- [ ] Copy template from `/templates/page.html`
- [ ] Update title, content, and metadata
- [ ] Add hero image to `/img/` folder
- [ ] Update previous/next navigation links
- [ ] Add entry to `blogPosts` array in `index.html`
- [ ] Test locally in browser
- [ ] Commit and push to GitHub

## Git Commands
```bash
git add pages/new-post.html img/hero-image.png index.html
git commit -m "Add blog post: [Title]"
git push origin main
```

## Image Optimization Tips
1. Use online tools like TinyPNG for compression
2. Resize images to max 1920px width
3. Use JPG for photos, PNG for graphics with transparency
4. Consider SVG for diagrams and icons
5. Aim for under 500KB per image

## Testing Points
- Theme toggle (light/dark)
- Mobile responsiveness
- All links working
- Images loading
- Share buttons functional
- Navigation between posts

## Common Issues & Solutions
- **Images not showing**: Check path is `../img/` not `/img/` or `img/`
- **Post not appearing**: Ensure added to `blogPosts` array in `index.html`
- **Theme issues**: Clear localStorage and refresh
- **Mobile layout broken**: Check for missing responsive classes

## Hero Image Prompt Quick Template
```
Create a modern hero image for "[TOPIC]" blog post. 
Style: [modern/abstract/technical]
Colors: [color palette]
Elements: [key visuals]
Mood: [professional/innovative/educational]
Aspect: 16:10
```