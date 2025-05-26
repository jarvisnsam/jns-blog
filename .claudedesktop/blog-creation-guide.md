# Blog Post Creation Guide

## Quick Start: Creating a New Blog Post

### 1. Copy the Template
Start with `templates/page.html` and save it as `pages/your-post-name.html`

### 2. Update Key Elements

#### Title Section
```html
<title>Your Awesome Blog Post Title - AI KnowledgeBase</title>
```

#### Header Content
```html
<h1 class="text-[var(--text-color)] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-4" style="font-family: Newsreader, serif;">
    Your Awesome Blog Post Title
</h1>
<p class="text-[var(--text-muted-color)] text-xl mb-6">
    A compelling subtitle that summarizes the key value proposition
</p>
```

#### Publication Date
```html
<time datetime="2025-05-26">May 26, 2025</time>
```

### 3. Hero Image Section
Replace the placeholder with:
```html
<figure class="my-8">
    <img src="../img/your-hero-image.png" alt="Descriptive alt text" 
         class="w-full h-auto rounded-lg shadow-md"/>
    <figcaption class="text-center text-sm text-[var(--text-muted-color)] mt-2">
        Caption explaining the image context
    </figcaption>
</figure>
```

### 4. Content Structure Examples

#### Introduction Paragraph
```html
<p>Start with a hook that captures attention. Pose a question, share a surprising fact, or paint a picture of the problem you're solving. This paragraph should make readers want to continue.</p>
```

#### Section with Heading
```html
<h2>Understanding the Core Concepts</h2>
<p>Break down complex ideas into digestible sections. Each H2 should cover a major topic area.</p>
```

#### Highlighted Information Box
```html
<div class="highlight-box">
    <h3>Key Takeaway:</h3>
    <ul>
        <li><strong>Point 1:</strong> Important insight with explanation</li>
        <li><strong>Point 2:</strong> Another crucial detail</li>
        <li><strong>Point 3:</strong> Final key point</li>
    </ul>
</div>
```

#### Code Example
```html
<pre class="prose"><code class="language-javascript">
// Example: AI Agent Communication
class AIAgent {
    constructor(name, capabilities) {
        this.name = name;
        this.capabilities = capabilities;
    }
    
    async communicate(message, targetAgent) {
        // Implementation details
        return await targetAgent.receive(message);
    }
}
</code></pre>
```

#### Process Flow List
```html
<div class="flow-list">
    <h3>Implementation Steps:</h3>
    <ol>
        <li>Set up the development environment</li>
        <li>Install necessary dependencies</li>
        <li>Configure the AI agent parameters</li>
        <li>Test the communication protocol</li>
        <li>Deploy to production</li>
    </ol>
</div>
```

#### Comparison or Feature List
```html
<div class="highlight-box">
    <h3>Traditional Web vs Agentic Web:</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
            <h4 class="font-semibold mb-2">Traditional Web</h4>
            <ul class="text-sm">
                <li>User-initiated interactions</li>
                <li>Static content delivery</li>
                <li>Manual navigation</li>
            </ul>
        </div>
        <div>
            <h4 class="font-semibold mb-2">Agentic Web</h4>
            <ul class="text-sm">
                <li>AI-driven interactions</li>
                <li>Dynamic content generation</li>
                <li>Intelligent routing</li>
            </ul>
        </div>
    </div>
</div>
```

### 5. Update Navigation Links

#### Previous/Next Posts
```html
<!-- Previous Post -->
<a class="block p-6 bg-[var(--card-bg-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[var(--border-color)]" 
   href="previous-post.html">
    <div class="flex items-center text-sm text-[var(--text-muted-color)] mb-2">
        <svg class="mr-1" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
            <line x1="19" x2="5" y1="12" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Previous Post</span>
    </div>
    <h4 class="text-[var(--text-color)] text-lg font-semibold" style="font-family: Newsreader, serif;">
        Previous Post Title
    </h4>
</a>

<!-- Next Post -->
<a class="block p-6 bg-[var(--card-bg-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[var(--border-color)]" 
   href="next-post.html">
    <div class="flex items-center justify-end text-sm text-[var(--text-muted-color)] mb-2">
        <span>Next Post</span>
        <svg class="ml-1" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
            <line x1="5" x2="19" y1="12" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
    </div>
    <h4 class="text-[var(--text-color)] text-lg font-semibold text-right" style="font-family: Newsreader, serif;">
        Next Post Title
    </h4>
</a>
```

### 6. Update index.html

Add your new post to the `blogPosts` array:

```javascript
{
    filename: 'your-post-name.html',
    id: 'post-your-unique-id',
    fallback: {
        title: 'Your Awesome Blog Post Title',
        description: 'A compelling description that captures the essence of your post in under 150 characters.',
        category: 'AI Technology', // or 'Protocol Analysis', 'Future Trends', etc.
        gradient: 'from-cyan-500 via-blue-600 to-purple-700',
        icon: `<path d="M12 2L2 7V12C2 16.5 4.23 20.68 7.62 23.15L12 26L16.38 23.15C19.77 20.68 22 16.5 22 12V7L12 2Z"/>`
    }
}
```

## Hero Image Prompt Templates

### For Technical Architecture Posts
```
Create a modern, professional hero image for a blog post about [SPECIFIC ARCHITECTURE].
Visual Style: Clean, technical blueprint aesthetic with futuristic elements
Color Palette: Deep blues (#1e40af), teals (#0891b2), with bright accent colors (#fbbf24) on a dark gradient background (#0f172a to #1e293b)
Key Elements: Interconnected nodes representing system components, flowing data streams, subtle grid overlay, geometric shapes
Composition: Asymmetric balance with main elements positioned using rule of thirds
Mood: Professional, innovative, and sophisticated
Aspect Ratio: 16:10
Include subtle glow effects and depth through layering. The image should suggest complexity while maintaining visual clarity.
```

### For AI/ML Concept Posts
```
Create a modern, professional hero image for a blog post about [AI/ML CONCEPT].
Visual Style: Abstract, neural network-inspired with organic flowing elements
Color Palette: Purple gradients (#7c3aed to #a855f7), electric blues (#3b82f6), with neon accents (#10b981) on a dark background
Key Elements: Abstract neural pathways, synaptic connections, particle effects, data visualization elements
Composition: Central focal point with radiating connections, creating depth through size variation
Mood: Cutting-edge, intelligent, and dynamic
Aspect Ratio: 16:10
The image should convey intelligence and learning through visual metaphors without being too literal.
```

### For Protocol/Standards Posts
```
Create a modern, professional hero image for a blog post about [PROTOCOL/STANDARD NAME].
Visual Style: Minimalist, geometric with clean lines and shapes
Color Palette: Monochromatic with a single accent color - grays (#374151 to #6b7280) with bright accent (#ef4444 or #3b82f6)
Key Elements: Interlocking geometric shapes, connection points, protocol layers visualization, subtle patterns
Composition: Structured grid with deliberate alignment, negative space for breathing room
Mood: Authoritative, precise, and trustworthy
Aspect Ratio: 16:10
Focus on clarity and structure to represent standardization and interoperability.
```

## Common SVG Icons for Categories

### AI/ML Category
```svg
<path d="M12 2L13.09 8.26L19 7L15.45 11.82L21 16L14.91 15.74L13 22L10.91 15.74L5 16L10.55 11.82L5 7L11.09 8.26L12 2Z"/>
```

### Architecture Category
```svg
<path d="M3 13H11L14 10L17 13H21V21H3V13ZM5 15V19H9V15H5ZM11 15V19H13V15H11ZM15 15V19H19V15H15Z"/>
```

### Protocol Category
```svg
<path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9Z"/>
```

### Future Trends Category
```svg
<path d="M12 2L2 19H22L12 2ZM12 6L18.53 17H5.47L12 6ZM11 10V14H13V10H11ZM11 15V17H13V15H11Z"/>
```

## Testing Your Blog Post

1. **Local Testing**
   - Open the HTML file directly in your browser
   - Check all links work correctly
   - Verify images load properly
   - Test theme switching
   - Check mobile responsiveness

2. **Content Review**
   - Proofread for typos and grammar
   - Verify technical accuracy
   - Ensure consistent formatting
   - Check code examples run correctly

3. **Final Checks**
   - Hero image is optimized (under 500KB)
   - Alt text for all images
   - Share buttons have correct content
   - Navigation links updated
   - index.html entry added

## Git Workflow

```bash
# Add your new files
git add pages/your-post-name.html
git add img/your-hero-image.png
git add index.html

# Commit with descriptive message
git commit -m "Add blog post: Your Awesome Blog Post Title"

# Push to GitHub
git push origin main
```

Your post will be live at: `https://[your-username].github.io/aikb/pages/your-post-name.html`