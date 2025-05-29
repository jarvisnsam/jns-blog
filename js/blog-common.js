// Blog Common JavaScript - Shared header, footer, and functionality
(function() {
    'use strict';

    // Common header HTML template
    const headerHTML = `
    <!-- Header -->
    <div class="navbar-area" id="navbar">
      <div class="container">
        <nav class="navbar">
            <a class="navbar-brand" href="https://www.jarvisnsam.com/">
              <img src="/img/jns_logo.png" alt="Jarvis and Sam" />
              <h2 class="gradient-text">JARVIS AND SAM</h2>
            </a>
          
          <!-- Desktop Navigation -->
          <ul class="navbar-nav">
            <li><a href="https://www.jarvisnsam.com/" class="nav-link">Home</a></li>
            <li><a href="https://www.jarvisnsam.com/#about" class="nav-link">About</a></li>
            <li><a href="https://www.jarvisnsam.com/#products" class="nav-link">Products</a></li>
            <li><a href="https://www.jarvisnsam.com/lab" class="nav-link">Lab</a></li>
            <li><a href="https://www.jarvisnsam.com/#customers" class="nav-link">Customers</a></li>
            <li><a href="/" class="nav-link active">Blog</a></li>
            <li><a href="https://www.jarvisnsam.com/#contact" class="nav-link">Contact Us</a></li>
            <li>
              <button class="theme-toggle-button p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" id="theme-toggle" aria-label="Toggle theme">
                <svg class="h-5 w-5" fill="none" id="theme-toggle-light-icon" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg>
                <svg class="h-5 w-5 hidden" fill="none" id="theme-toggle-dark-icon" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                </svg>
              </button>
            </li>
          </ul>
          
          <!-- Mobile Menu Toggle -->
          <button class="navbar-toggler" type="button" id="mobile-menu-toggle">
            <span class="burger-menu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </nav>
      </div>
    </div>
    
    <!-- Mobile Offcanvas Menu -->
    <div class="offcanvas" id="navbarOffcanvas">
      <div class="offcanvas-header">
        <h5 class="text-lg font-semibold">Menu</h5>
        <button type="button" class="offcanvas-close" id="offcanvas-close">&times;</button>
      </div>
      <div class="offcanvas-body">
        <ul class="mobile-nav">
          <li><a href="https://www.jarvisnsam.com/" class="nav-link">Home</a></li>
          <li><a href="https://www.jarvisnsam.com/#about" class="nav-link">About</a></li>
          <li><a href="https://www.jarvisnsam.com/#products" class="nav-link">Products</a></li>
          <li><a href="https://www.jarvisnsam.com/lab" class="nav-link">Lab</a></li>
          <li><a href="https://www.jarvisnsam.com/#customers" class="nav-link">Customers</a></li>
          <li><a href="/" class="nav-link active">Blog</a></li>
          <li><a href="https://www.jarvisnsam.com/#contact" class="nav-link">Contact Us</a></li>
        </ul>
        
        <!-- Theme Toggle in Mobile Menu -->
        <div class="mt-6">
          <button class="theme-toggle-button w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium leading-normal hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors" id="mobile-theme-toggle">
            <svg class="h-5 w-5" fill="none" id="mobile-theme-toggle-light-icon" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
            <svg class="h-5 w-5 hidden" fill="none" id="mobile-theme-toggle-dark-icon" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
            <span id="mobile-theme-toggle-text">Light Mode</span>
          </button>
        </div>
      </div>
    </div>`;

    // Common footer HTML template
    const footerHTML = `
    <!-- Footer -->
    <div class="footer-area">
      <div class="footer-widget-info">
        <div class="container">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="footer-widget">
              <h4>Company</h4>
              <div class="footer-logo mb-3">
                <img 
                  src="/img/jns_logo.png" 
                  alt="Jarvis and Sam" 
                  style="max-width: 60px; max-height: 60px; object-fit: contain;"
                />
              </div>
              <ul>
                <li>Jarvis and Sam specializes in AI technologies that automate processes, analyze data, and optimize workflows for businesses.</li>
              </ul>
            </div>
            <div class="footer-widget">
              <h4>Sitemap</h4>
              <ul>
                <li><a href="https://www.jarvisnsam.com/#hero">Home</a></li>
                <li><a href="https://www.jarvisnsam.com/#about">About</a></li>
                <li><a href="https://www.jarvisnsam.com/#products">Products</a></li>
                <li><a href="https://www.jarvisnsam.com/#customers">Customers</a></li>
                <li><a href="https://www.jarvisnsam.com/#contact">Contact Us</a></li>
                <li><a href="https://www.jarvisnsam.com/sitemap.xml" target="_blank" rel="noopener noreferrer">Sitemap</a></li>
              </ul>
            </div>
            <div class="footer-widget">
              <h4>Products</h4>
              <ul>
                <li><a href="https://www.jarvisnsam.com/#smartgent-detail">Smartgent</a></li>
                <li><a href="https://www.jarvisnsam.com/#voicebot">Voicebot</a></li>
                <li><a href="https://www.jarvisnsam.com/#agentel-agency">Agentel Agency</a></li>
                <li><a href="https://www.jarvisnsam.com/#custom-solutions">Custom Solutions</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copy-right-area">
        <div class="container">
          <div class="text-center">
            <p>© 2025 Jarvis and Sam. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>`;

    // Back to top button HTML
    const backToTopHTML = `
    <button id="back-to-top" class="back-to-top" aria-label="Back to top">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>`;

    // Generate breadcrumb HTML based on current page
    function generateBreadcrumb() {
        const path = window.location.pathname;
        const isHomePage = path === '/' || path === '/index.html';
        
        if (isHomePage) {
            return ''; // No breadcrumb on homepage
        }
        
        // Extract page title from document
        let pageTitle = document.title.replace(' - Jarvis and Sam Blog', '').replace(' - AI KnowledgeBase', '');
        
        return `
        <nav class="breadcrumb-nav bg-[var(--card-bg-color)] border-b border-[var(--border-color)]">
            <div class="container py-3">
                <ol class="flex items-center space-x-2 text-sm">
                    <li>
                        <a href="https://www.jarvisnsam.com/" class="text-[var(--text-muted-color)] hover:text-[var(--primary-color)] transition-colors">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                            </svg>
                        </a>
                    </li>
                    <li class="text-[var(--text-muted-color)]">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </li>
                    <li>
                        <a href="../" class="text-[var(--text-muted-color)] hover:text-[var(--primary-color)] transition-colors">Blog</a>
                    </li>
                </ol>
            </div>
        </nav>`;
    }

    // Theme toggle functionality
    function initializeThemeToggle() {
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
        const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
        
        // Mobile theme toggle elements
        const mobileThemeToggleBtn = document.getElementById('mobile-theme-toggle');
        const mobileThemeToggleDarkIcon = document.getElementById('mobile-theme-toggle-dark-icon');
        const mobileThemeToggleLightIcon = document.getElementById('mobile-theme-toggle-light-icon');
        const mobileThemeToggleText = document.getElementById('mobile-theme-toggle-text');
        
        // Check for saved theme preference
        if (localStorage.getItem('color-theme') === 'dark' || 
            (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            themeToggleLightIcon.classList.add('hidden');
            themeToggleDarkIcon.classList.remove('hidden');
            if (mobileThemeToggleLightIcon) {
                mobileThemeToggleLightIcon.classList.add('hidden');
                mobileThemeToggleDarkIcon.classList.remove('hidden');
                mobileThemeToggleText.textContent = 'Dark Mode';
            }
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
            themeToggleDarkIcon.classList.add('hidden');
            themeToggleLightIcon.classList.remove('hidden');
            if (mobileThemeToggleDarkIcon) {
                mobileThemeToggleDarkIcon.classList.add('hidden');
                mobileThemeToggleLightIcon.classList.remove('hidden');
                mobileThemeToggleText.textContent = 'Light Mode';
            }
        }
        
        function toggleTheme() {
            themeToggleDarkIcon.classList.toggle('hidden');
            themeToggleLightIcon.classList.toggle('hidden');
            if (mobileThemeToggleDarkIcon) {
                mobileThemeToggleDarkIcon.classList.toggle('hidden');
                mobileThemeToggleLightIcon.classList.toggle('hidden');
            }
            
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.body.classList.add('dark-theme');
                    document.body.classList.remove('light-theme');
                    if (mobileThemeToggleText) mobileThemeToggleText.textContent = 'Dark Mode';
                    localStorage.setItem('color-theme', 'dark');
                } else {
                    document.body.classList.add('light-theme');
                    document.body.classList.remove('dark-theme');
                    if (mobileThemeToggleText) mobileThemeToggleText.textContent = 'Light Mode';
                    localStorage.setItem('color-theme', 'light');
                }
            } else {
                if (document.body.classList.contains('dark-theme')) {
                    document.body.classList.remove('dark-theme');
                    document.body.classList.add('light-theme');
                    if (mobileThemeToggleText) mobileThemeToggleText.textContent = 'Light Mode';
                    localStorage.setItem('color-theme', 'light');
                } else {
                    document.body.classList.remove('light-theme');
                    document.body.classList.add('dark-theme');
                    if (mobileThemeToggleText) mobileThemeToggleText.textContent = 'Dark Mode';
                    localStorage.setItem('color-theme', 'dark');
                }
            }
        }
        
        themeToggleBtn.addEventListener('click', toggleTheme);
        if (mobileThemeToggleBtn) {
            mobileThemeToggleBtn.addEventListener('click', toggleTheme);
        }
    }

    // Mobile menu functionality
    function initializeMobileMenu() {
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const offcanvas = document.getElementById('navbarOffcanvas');
        const offcanvasClose = document.getElementById('offcanvas-close');
        
        function openOffcanvas() {
            offcanvas.classList.add('show');
            document.body.classList.add('offcanvas-open');
            
            // Add backdrop
            const backdrop = document.createElement('div');
            backdrop.className = 'offcanvas-backdrop fade show';
            document.body.appendChild(backdrop);
            
            // Add click event to backdrop to close offcanvas
            backdrop.addEventListener('click', closeOffcanvas);
        }
        
        function closeOffcanvas() {
            offcanvas.classList.remove('show');
            document.body.classList.remove('offcanvas-open');
            
            // Remove backdrop
            const backdrop = document.querySelector('.offcanvas-backdrop');
            if (backdrop) {
                backdrop.remove();
            }
        }
        
        mobileMenuToggle.addEventListener('click', function() {
            if (offcanvas.classList.contains('show')) {
                closeOffcanvas();
            } else {
                openOffcanvas();
            }
        });
        
        offcanvasClose.addEventListener('click', closeOffcanvas);
    }

    // Sticky header functionality
    function initializeStickyHeader() {
        const navbar = document.getElementById('navbar');
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 120) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Back to top functionality
    function initializeBackToTop() {
        const backToTopBtn = document.getElementById('back-to-top');
        
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });
        
        // Scroll to top when clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Initialize all components
    function initializeBlogCommon() {
        // Insert header if placeholder exists
        const headerPlaceholder = document.getElementById('blog-header');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = headerHTML;
            
            // Insert breadcrumb after header (only on non-homepage)
            const breadcrumbHTML = generateBreadcrumb();
            if (breadcrumbHTML) {
                headerPlaceholder.insertAdjacentHTML('afterend', breadcrumbHTML);
            }
        }
        
        // Insert footer if placeholder exists
        const footerPlaceholder = document.getElementById('blog-footer');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = footerHTML;
        }
        
        // Insert back to top button
        document.body.insertAdjacentHTML('beforeend', backToTopHTML);
        
        // Initialize all functionality
        initializeThemeToggle();
        initializeMobileMenu();
        initializeStickyHeader();
        initializeBackToTop();
    }

    // Generate dynamic post navigation
    async function generatePostNavigation() {
        try {
            // Fetch sitemap to get all posts
            const response = await fetch('/sitemap.xml');
            const text = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/xml');
            
            // Get all page URLs from sitemap
            const urls = Array.from(doc.querySelectorAll('url'))
                .map(url => url.querySelector('loc')?.textContent)
                .filter(url => url && url.includes('/pages/'))
                .map(url => {
                    const filename = url.split('/pages/')[1];
                    return {
                        url: `/pages/${filename}`,
                        filename: filename,
                        title: decodeURIComponent(filename).replace('.html', '').replace(/-/g, ' ')
                    };
                });
            
            // Get current page
            const currentPath = window.location.pathname;
            const currentIndex = urls.findIndex(post => currentPath.includes(post.filename));
            
            if (currentIndex === -1) return; // Not a blog post page
            
            // Get previous and next posts
            const prevPost = currentIndex > 0 ? urls[currentIndex - 1] : null;
            const nextPost = currentIndex < urls.length - 1 ? urls[currentIndex + 1] : null;
            
            // Find the navigation container
            const navContainer = document.querySelector('.max-w-4xl.mx-auto.mt-12 .grid');
            if (!navContainer) return;
            
            // Generate navigation HTML
            let navHTML = '';
            
            if (prevPost) {
                navHTML += `
                    <a class="block p-6 bg-[var(--card-bg-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[var(--border-color)]" href="${prevPost.url}">
                        <div class="flex items-center text-sm text-[var(--text-muted-color)] mb-2">
                            <svg class="mr-1" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                <line x1="19" x2="5" y1="12" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                            <span>Previous Post</span>
                        </div>
                        <h4 class="text-[var(--text-color)] text-lg font-semibold" style="font-family: Newsreader, serif;">${prevPost.title}</h4>
                    </a>
                `;
            } else {
                navHTML += `
                    <a class="block p-6 bg-[var(--card-bg-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[var(--border-color)]" href="/index.html">
                        <div class="flex items-center text-sm text-[var(--text-muted-color)] mb-2">
                            <svg class="mr-1" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                <line x1="19" x2="5" y1="12" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                            <span>Back to Home</span>
                        </div>
                        <h4 class="text-[var(--text-color)] text-lg font-semibold" style="font-family: Newsreader, serif;">AI Knowledge Base</h4>
                    </a>
                `;
            }
            
            if (nextPost) {
                navHTML += `
                    <a class="block p-6 bg-[var(--card-bg-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[var(--border-color)]" href="${nextPost.url}">
                        <div class="flex items-center justify-end text-sm text-[var(--text-muted-color)] mb-2">
                            <span>Next Post</span>
                            <svg class="ml-1" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                <line x1="5" x2="19" y1="12" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                        <h4 class="text-[var(--text-color)] text-lg font-semibold text-right" style="font-family: Newsreader, serif;">${nextPost.title}</h4>
                    </a>
                `;
            } else {
                navHTML += `
                    <a class="block p-6 bg-[var(--card-bg-color)] rounded-lg shadow-md hover:shadow-lg transition-shadow border border-[var(--border-color)]" href="/index.html">
                        <div class="flex items-center justify-end text-sm text-[var(--text-muted-color)] mb-2">
                            <span>Back to Blog</span>
                            <svg class="ml-1" fill="none" height="16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
                                <line x1="5" x2="19" y1="12" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                        <h4 class="text-[var(--text-color)] text-lg font-semibold text-right" style="font-family: Newsreader, serif;">All Posts</h4>
                    </a>
                `;
            }
            
            // Update navigation
            navContainer.innerHTML = navHTML;
            
        } catch (error) {
            console.error('Error generating post navigation:', error);
        }
    }

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initializeBlogCommon();
            // Generate dynamic navigation for blog posts
            if (window.location.pathname.includes('/pages/')) {
                generatePostNavigation();
            }
        });
    } else {
        initializeBlogCommon();
        // Generate dynamic navigation for blog posts
        if (window.location.pathname.includes('/pages/')) {
            generatePostNavigation();
        }
    }
})();
