// ===================================
// PAGE LOADER
// ===================================
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    
    // Add a minimum display time to show the loader
    setTimeout(() => {
        loader.classList.add('hidden');
        
        // Remove from DOM after transition
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 800); // Minimum 800ms display time
});

// ===================================
// MOBILE MENU TOGGLE
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});

// ===================================
// STICKY HEADER ON SCROLL
// ===================================
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = '';
    }
});

// ===================================
// ACTIVE SECTION HIGHLIGHT IN NAV
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    function highlightActiveSection() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Call once on load
});

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===================================
// INTERSECTION OBSERVER FOR SCROLL REVEALS
// ===================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Optional: unobserve after revealing to improve performance
            // observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe all elements with scroll-reveal class
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => {
        observer.observe(el);
    });
});

// ===================================
// PARALLAX EFFECT FOR BACKGROUNDS - Removed
// ===================================
/* Parallax effect removed from hero section */
/*
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const backgrounds = document.querySelectorAll('.animated-background, .animated-background-subtle');
    
    backgrounds.forEach(bg => {
        const speed = 0.5;
        bg.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
*/

// ===================================
// TYPING EFFECT (Optional Enhancement)
// ===================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect on hero title
// document.addEventListener('DOMContentLoaded', () => {
//     const heroTitle = document.querySelector('.hero-title');
//     if (heroTitle) {
//         const originalText = heroTitle.textContent;
//         typeWriter(heroTitle, originalText, 50);
//     }
// });

// ===================================
// ANIMATED COUNTER (For stats if needed)
// ===================================
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    
    window.requestAnimationFrame(step);
}

// Example usage (uncomment if needed):
// const counters = document.querySelectorAll('.counter');
// counters.forEach(counter => {
//     const target = parseInt(counter.getAttribute('data-target'));
//     animateCounter(counter, 0, target, 2000);
// });

// ===================================
// LAZY LOADING IMAGES
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// ===================================
// SCROLL TO TOP BUTTON (Optional)
// ===================================
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: linear-gradient(to right, #4f46e5, #06b6d4);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s, transform 0.3s;
        z-index: 1000;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    `;
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.transform = 'scale(1)';
        } else {
            button.style.opacity = '0';
            button.style.transform = 'scale(0.5)';
        }
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(button);
}

// Uncomment to enable scroll to top button
// createScrollToTopButton();

// ===================================
// ACTIVE SECTION HIGHLIGHT (Optional)
// ===================================
function highlightActiveSection() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Uncomment if you add a navigation menu
// highlightActiveSection();

// ===================================
// PERFORMANCE: REDUCE MOTION FOR ACCESSIBILITY
// ===================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none';
        el.style.transition = 'none';
    });
}

// ===================================
// CONSOLE MESSAGE (Optional)
// ===================================
console.log('%c👋 Hello Developer!', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cWelcome to my portfolio built with vanilla HTML, CSS, and JavaScript!', 'font-size: 14px; color: #22d3ee;');
console.log('%cNo frameworks, just pure web technologies! 🚀', 'font-size: 14px; color: #4ade80;');

// ===================================
// RESUME DOWNLOAD TRACKING
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    const downloadBtn = document.getElementById('downloadResumeBtn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const resumePath = this.getAttribute('href');
            const fileName = 'Arpa_Nihan_Resume.pdf';
            
            // 1. Open PDF in new tab (for viewing)
            window.open(resumePath, '_blank');
            
            // 2. Trigger download after a short delay
            setTimeout(() => {
                const downloadLink = document.createElement('a');
                downloadLink.href = resumePath;
                downloadLink.download = fileName;
                document.body.appendChild(downloadLink);
                downloadLink.click();
                document.body.removeChild(downloadLink);
            }, 500);
            
            // 3. Track the download
            trackResumeDownload();
            
            return false;
        });
    }
});

function trackResumeDownload() {
    // Get current download count from localStorage
    let downloadCount = parseInt(localStorage.getItem('resumeDownloadCount') || '0');
    downloadCount++;
    localStorage.setItem('resumeDownloadCount', downloadCount);
    
    // Log download event
    const timestamp = new Date().toISOString();
    console.log(`%c📥 Resume Downloaded!`, 'font-size: 16px; color: #4ade80; font-weight: bold;');
    console.log(`Total Downloads: ${downloadCount}`);
    console.log(`Timestamp: ${timestamp}`);
    
    // Store download history
    let downloadHistory = JSON.parse(localStorage.getItem('downloadHistory') || '[]');
    downloadHistory.push({
        timestamp: timestamp,
        count: downloadCount
    });
    localStorage.setItem('downloadHistory', JSON.stringify(downloadHistory));
    
    // Optional: Send to analytics (Google Analytics, if integrated)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'resume_download', {
            'event_category': 'engagement',
            'event_label': 'Resume Download',
            'value': downloadCount
        });
    }
    
    // Optional: Send to custom backend endpoint for tracking
    // Uncomment and update URL when you have a backend
    /*
    fetch('/api/track-download', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            timestamp: timestamp,
            userAgent: navigator.userAgent
        })
    }).catch(err => console.log('Tracking error:', err));
    */
}

// Function to view download statistics (call this in console: getDownloadStats())
window.getDownloadStats = function() {
    const count = localStorage.getItem('resumeDownloadCount') || '0';
    const history = JSON.parse(localStorage.getItem('downloadHistory') || '[]');
    
    console.log(`%c📊 Resume Download Statistics`, 'font-size: 18px; color: #6366f1; font-weight: bold;');
    console.log(`Total Downloads: ${count}`);
    console.log(`Download History:`, history);
    
    return {
        totalDownloads: parseInt(count),
        history: history
    };
};

console.log('%c💡 Tip: Type getDownloadStats() in console to view download statistics', 'font-size: 12px; color: #a78bfa;');
