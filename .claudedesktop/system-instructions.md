# AI KnowledgeBase Blog - System Instructions

## Project Overview
You are working on a static AI KnowledgeBase blog that is published via GitHub Pages. The blog focuses on AI technologies, agent architectures, protocols, and the future of the internet. All content is created as static HTML files with no build process.

## Core Responsibilities

### 1. Blog Post Creation
When creating a new blog post:
- Start with `templates/page.html` as the base
- Maintain the existing design system and navigation structure
- Write engaging, educational content for technical audiences
- Include visual elements (hero images, diagrams) to enhance understanding

### 2. File Structure Rules
```
/aikb/
├── pages/          # All blog post HTML files go here
├── img/            # All images (hero images, diagrams, illustrations)
├── md/             # Markdown versions of blog posts
├── templates/      # page.html template
└── index.html      # Homepage with blog post configuration
```

### 3. Image Handling
- **Location**: All images MUST be stored in the `img/` folder
- **Paths in HTML**: Use `../img/filename.ext` for image references
- **Hero Images**: Prefer 16:10 aspect ratio for optimal display
- **Formats**: Use SVG for diagrams, PNG/JPG for photos

### 4. Blog Post Workflow

#### Step 1: Create the HTML file
```html
<!-- Copy from templates/page.html and modify -->
<title>Your Blog Post Title</title>
<!-- Update all content sections -->
```

#### Step 2: Add Hero Image
```html
<figure class="my-8">
    <img src="../img/your-hero-image.png" alt="Descriptive alt text" 
         class="w-full h-auto rounded-lg shadow-md"/>
    <figcaption class="text-center text-sm text-[var(--text-muted-color)] mt-2">
        Caption describing the image
    </figcaption>
</figure>
```

#### Step 3: Update index.html
Add entry to the `blogPosts` array:
```javascript
{
    filename: 'your-post-name.html',
    id: 'post-unique-id',
    fallback: {
        title: 'Your Post Title',
        description: 'Brief description (max 150 chars)',
        category: 'AI Technology',
        gradient: 'from-blue-500 via-purple-600 to-pink-500',
        icon: `<path d="SVG path data"/>`
    }
}
```

## Content Guidelines

### Writing Style
- **Tone**: Professional yet approachable, educational but not condescending
- **Audience**: Developers, tech enthusiasts, AI practitioners
- **Structure**: Clear headings, short paragraphs, visual breaks
- **Examples**: Include practical examples and real-world applications

### Post Structure
1. **Engaging Introduction**: Hook the reader with a compelling opening
2. **Clear Sections**: Use H2 and H3 tags for organization
3. **Visual Elements**: Include diagrams, code snippets, or illustrations
4. **Practical Examples**: Show real-world applications
5. **Actionable Conclusion**: End with next steps or key takeaways

### Technical Content
- Explain complex concepts with analogies
- Include code examples with proper syntax highlighting
- Link to external resources for deeper dives
- Use diagrams to visualize architectures or flows

## Image Prompt Generation

When generating prompts for hero images, follow this format:

```
Create a modern, professional hero image for a blog post about [TOPIC].

Visual Style: [modern/futuristic/abstract/minimalist]
Color Palette: [specific colors that match the blog's aesthetic]
Key Elements: [main visual elements to include]
Composition: [layout and arrangement]
Mood: [professional/innovative/technical/approachable]
Aspect Ratio: 16:10 (landscape orientation)

The image should convey [main message/feeling] and work well as a blog header with text overlay capability.
```

### Example Hero Image Prompt:
"Create a modern, professional hero image for a blog post about AI agent communication protocols. Visual Style: Futuristic and technical with clean lines. Color Palette: Deep blues (#1e3a8a), electric purples (#7c3aed), and cyan accents (#06b6d4) on a dark background. Key Elements: Abstract network nodes connected by glowing data streams, representing AI agents communicating. Include subtle circuit board patterns in the background. Composition: Dynamic diagonal flow from bottom-left to top-right, with the main focal point slightly off-center. Mood: Innovative and cutting-edge while remaining professional. Aspect Ratio: 16:10. The image should convey the interconnected nature of AI systems and work well as a blog header."

## Common Patterns

### Adding a Highlighted Box
```html
<div class="highlight-box">
    <h3>Key Insight:</h3>
    <p>Important information that should stand out from regular text.</p>
</div>
```

### Adding a Code Block
```html
<pre class="prose"><code class="language-javascript">
// Your code example here
const example = "Hello, AI World!";
</code></pre>
```

### Adding a List with Background
```html
<div class="flow-list">
    <h3>Process Steps:</h3>
    <ol>
        <li>First step in the process</li>
        <li>Second step with more detail</li>
        <li>Final step and outcome</li>
    </ol>
</div>
```

## SEO Considerations
- Use descriptive, keyword-rich titles
- Keep titles under 60 characters when possible
- Write compelling descriptions (max 150 characters)
- Use semantic HTML for better structure
- Include alt text for all images

## Testing Checklist
Before pushing to GitHub:
- [ ] Hero image displays correctly
- [ ] All internal links work (navigation, previous/next)
- [ ] Theme toggle functions properly
- [ ] Share buttons have correct content
- [ ] Mobile responsive design works
- [ ] index.html updated with new post entry
- [ ] Images are optimized for web (compressed)

## Remember
- This is a static site - no server-side processing
- All paths are relative for GitHub Pages compatibility
- The site uses dynamic JavaScript to load blog post metadata
- Hero images are automatically extracted from the first image in the post
- Maintain consistency with existing posts' style and structure