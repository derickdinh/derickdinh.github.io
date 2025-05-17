const heroData = {
    title: "Elevate Your Fitness<br>Launch Coming Soon!",
    subtitle: "Be the first to experience personalized workouts, real-time tracking, and a supportive community. Join the waitlist now!",
    integrations: []
};

const features = [
    { icon: `<img src="icons/dumbbell.png" alt="Group 71 Icon" class="h-14 mx-auto">`, title: "Workouts", desc: "Effortlessly track your workouts, logging every set, and review your progress.", href: "#workout-showcase" },
    { icon: `<img src="icons/Nutrition.png" alt="Nutrition Icon" class="h-14 mx-auto">`, title: "Nutrition", desc: "Easily log your meals, tracking your nutrition and feel better than ever.", href: "#nutrition-showcase" },
    { icon: `<img src="icons/social 2.png" alt="Social Icon" class="h-14 mx-auto">`, title: "Social", desc: "Follow and compete with your friends and other athletes", href: "#social-showcase" }
];

const stats = [
    { value: "500K+", desc: "Waitlist Sign-Ups" },
    { svg: `<svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`, desc: "Syncs with your favorite fitness tools" },
    { title: "Your Fitness Revolution", desc: "Strength, endurance, and transformation—all in one app.", chart: true }
];

const proSteps = [
    { step: "1", desc: "Join Elevate PRO to access exclusive features designed to supercharge your fitness journey." },
    { step: "2", desc: "Unlock premium tools like advanced analytics, AI coaching, and community leaderboards." },
    { step: "3", desc: "Get personalized expert guidance to optimize your workouts and nutrition plans." }
];

const missionStats = [
    { value: "80%", desc: "Users See Results" },
    { value: "1M+", desc: "Workouts Logged" },
    { value: "50K+", desc: "Community Members" }
];

const ctaData = {
    title: "Have Questions? Reach Out!",
    subtitle: "Contact our team for inquiries about Elevate, beta testing, or partnership opportunities."
};

function populateHero() {
    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const heroIntegrations = document.getElementById('hero-integrations');
    if (heroTitle) heroTitle.innerHTML = heroData.title;
    if (heroSubtitle) heroSubtitle.textContent = heroData.subtitle;
    if (heroIntegrations) heroIntegrations.innerHTML = heroData.integrations.map(item => `<span class="bg-gray-100 px-3 py-1 rounded-full">${item}</span>`).join('');
}

function populateFeatures() {
    const container = document.getElementById('features-container');
    if (container) {
        container.innerHTML = features.map(feature => `
            <div class="feature-card p-8 custom-shadow text-center hover:scale-105 transition-transform duration-300 ${feature.href ? 'cursor-pointer' : ''}" onclick="${feature.href ? `scrollToSection('${feature.href}')` : ''}">
                <div class="text-blue-600 mb-6">${feature.icon}</div>
                <h3 class="text-2xl font-semibold mb-4 text-gray-900">${feature.title}</h3>
                <p class="text-gray-600">${feature.desc}</p>
            </div>
        `).join('');
    }
}

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function populateProSteps() {
    const container = document.getElementById('pro-steps');
    if (container) {
        container.innerHTML = proSteps.map(step => `
            <div class="p-8 text-center">
                <p class="text-3xl font-semibold text-blue-200 mb-4">${step.step}</p>
                <p class="text-gray-100">${step.desc}</p>
            </div>
        `).join('');
    }
}

function populateMissionStats() {
    const container = document.getElementById('mission-stats');
    if (container) {
        container.innerHTML = missionStats.map(stat => `
            <div class="p-6">
                <h3 class="text-5xl font-bold text-blue-600 mb-4">${stat.value}</h3>
                <p class="text-gray-600">${stat.desc}</p>
            </div>
        `).join('');
    }
}

function populateCTA() {
    const title = document.getElementById('cta-title');
    const subtitle = document.getElementById('cta-subtitle');
    if (title) title.innerHTML = ctaData.title;
    if (subtitle) subtitle.textContent = ctaData.subtitle;
}

function populateFooter() {
    const container = document.getElementById('footer-links');
    if (container) {
        container.innerHTML = ['Home', 'Features', 'Elevate PRO', 'Contact Us'].map((text, i) => {
            const href = i === 0 ? 'index.html' : i === 1 ? 'features.html' : i === 2 ? 'elevate-pro.html' : 'support.html';
            return `<a href="${href}" class="hover:text-white transition-colors">${text}</a>`;
        }).join('');
    }
}

function openPopup(element, title, description, imageSrc, features) {
    const overlay = document.getElementById('popup-overlay');
    const popupContent = document.querySelector('.popup-content');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupFeatures = document.getElementById('popup-features');

    if (overlay && popupContent && popupImage && popupTitle && popupDescription && popupFeatures) {
        popupImage.src = imageSrc;
        
        if (title === 'Track your Progress') {
            popupImage.style.filter = 'brightness(100%)';
        } else {
            popupImage.style.filter = 'none';
        }

        popupTitle.textContent = title;
        popupDescription.textContent = description;

        popupFeatures.innerHTML = features.map(feature => {
            const lines = feature.text.split(' – ');
            const heading = lines[0];
            const rest = lines.length > 1 ? ' – ' + lines.slice(1).join(' – ') : '';
            return `
                <li class="popup-feature">
                    <img src="${feature.image}" alt="Feature Icon" class="popup-feature-icon">
                    <span><strong>${heading}</strong>${rest}</span>
                </li>
            `;
        }).join('');

        document.body.classList.add('no-scroll');

        overlay.style.display = 'flex';
        requestAnimationFrame(() => {
            overlay.classList.add('visible');
            popupContent.classList.add('appear');
        });

        overlay.onclick = (e) => {
            if (e.target === overlay) {
                closePopup();
            }
        };

        popupContent.addEventListener('animationend', () => {
            popupContent.classList.remove('appear');
        
        }, { once: true });
    }
}

function closePopup() {
    const overlay = document.getElementById('popup-overlay');
    if (overlay) {
        overlay.classList.remove('visible');
        overlay.addEventListener('transitionend', () => {
            overlay.style.display = 'none';
            document.body.classList.remove('no-scroll');
            overlay.onclick = null;
        }, { once: true });
    }
}

async function loadIncludes() {
    const elements = document.querySelectorAll('[include-html]');
    for (const elem of elements) {
        const file = elem.getAttribute('include-html');
        try {
            const response = await fetch(file);
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            const html = await response.text();
            elem.outerHTML = html;
            console.log(`Loaded ${file} successfully`);
        } catch (error) {
            console.error(error);
            elem.innerHTML = `<p>Error loading ${file}</p>`;
        }
    }
}

function calculateRectanglePosition(link) {
    const rectangleWidth = 50;
    const offsetAdjustment = (link.offsetWidth - rectangleWidth) / 2;
    const position = link.offsetLeft + offsetAdjustment - 30; // Shift left by 5px
    console.log(`Calculated position for link '${link.textContent}': ${position}px, link width: ${link.offsetWidth}px`);
    return position;
}

function setActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    const highlightRectangle = document.getElementById('highlight-rectangle');

    if (!navLinks.length || !highlightRectangle) {
        console.warn('Navigation elements not found. Links:', navLinks.length, 'Rectangle:', !!highlightRectangle);
        return;
    }

    const currentPath = window.location.pathname.replace(/\/+$/, '').toLowerCase();
    const currentPage = (currentPath === '' || currentPath === '/' || currentPath.endsWith('index.html')) ? 'index.html' : currentPath.split('/').pop();

    let activeLink = null;
    navLinks.forEach(link => {
        let href = link.getAttribute('href').toLowerCase().replace(/\/+$/, '');
        href = (href === '' || href === '/' || href === 'index.html') ? 'index.html' : href;
        link.classList.remove('active');
        if (href === currentPage) {
            link.classList.add('active');
            activeLink = link;
        }
    });

    if (!activeLink) {
        console.warn('No active link found, defaulting to first link');
        activeLink = navLinks[0];
        activeLink.classList.add('active');
    }

    const endPos = calculateRectanglePosition(activeLink);
    // Check for stored position from previous navigation
    const storedPos = sessionStorage.getItem('highlightRectanglePos');
    if (storedPos && currentPage === sessionStorage.getItem('targetPage')) {
        console.log(`Restoring stored position: ${storedPos}px for page: ${currentPage}`);
        highlightRectangle.style.left = `${storedPos}px`;
        sessionStorage.removeItem('highlightRectanglePos');
        sessionStorage.removeItem('targetPage');
    } else {
        console.log(`Setting highlight rectangle to ${endPos}px for page: ${currentPage} (no stored position)`);
        highlightRectangle.style.left = `${endPos}px`;
    }
    highlightRectangle.style.display = 'block';
}

function handleNavClick(link) {
    const navLinks = document.querySelectorAll('.nav-link');
    const highlightRectangle = document.getElementById('highlight-rectangle');
    const currentPath = window.location.pathname.replace(/\/+$/, '').toLowerCase();
    const currentPage = (currentPath === '' || currentPath === '/' || currentPath.endsWith('index.html')) ? 'index.html' : currentPath.split('/').pop();
    let newPage = link.getAttribute('href').toLowerCase().replace(/\/+$/, '');
    newPage = (newPage === '' || newPage === '/' || newPage === 'index.html') ? 'index.html' : newPage;

    if (newPage === currentPage) {
        console.log(`Already on page: ${newPage}`);
        return;
    }

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    if (highlightRectangle) {
        const endPos = calculateRectanglePosition(link);
        console.log(`Triggering transition to ${endPos}px for page: ${newPage}`);
        highlightRectangle.style.left = `${endPos}px`;
        // Store the position and target page for the new page
        sessionStorage.setItem('highlightRectanglePos', endPos);
        sessionStorage.setItem('targetPage', newPage);
        setTimeout(() => {
            console.log(`Navigating to: ${newPage} after 150ms delay`);
            window.location.href = newPage;
        }, 150); // Delay for animation
    } else {
        console.log(`Navigating to: ${newPage} (no rectangle found)`);
        window.location.href = newPage;
    }
}

function setupNavListeners() {
    const navMenu = document.getElementById('nav-menu');
    if (!navMenu) {
        console.warn('Nav menu not found');
        return;
    }

    navMenu.addEventListener('click', (e) => {
        const link = e.target.closest('.nav-link');
        if (link) {
            e.preventDefault();
            console.log(`Nav link clicked: ${link.textContent}`);
            handleNavClick(link);
        }
    });
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('header');
    if (!mobileMenu || !header) {
        console.warn('Mobile menu or header not found');
        return;
    }

    const isHidden = mobileMenu.classList.contains('hidden');
    
    if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.style.opacity = '1';
        mobileMenu.style.transform = 'scaleY(1)';
        mobileMenu.classList.remove('menu-close');
        mobileMenu.classList.add('menu-open');
        header.classList.remove('rounded-b-3xl');
        header.classList.add('rounded-b-none');
        console.log('Mobile menu opened');
    } else {
        mobileMenu.classList.remove('menu-open');
        mobileMenu.classList.add('menu-close');
        header.classList.add('rounded-b-3xl');
        header.classList.remove('rounded-b-none');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('menu-close');
            mobileMenu.style.opacity = '0';
            mobileMenu.style.transform = 'scaleY(0)';
            console.log('Mobile menu closed');
        }, 400);
    }
}

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const header = document.getElementById('header');

    if (!mobileMenuBtn || !mobileMenu || !header) {
        console.warn('Mobile menu elements not found');
        return;
    }

    console.log('Setting up mobile menu listeners');

    mobileMenuBtn.onclick = (e) => {
        acknowledgeEvent(e);
        toggleMobileMenu();
    };

    mobileMenu.onclick = (e) => {
        const link = e.target.closest('.mobile-nav-link');
        if (link) {
            acknowledgeEvent(e);
            const href = link.getAttribute('href');
            mobileMenu.classList.remove('menu-open');
            mobileMenu.classList.add('menu-close');
            header.classList.add('rounded-b-3xl');
            header.classList.remove('rounded-b-none');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('menu-close');
                mobileMenu.style.opacity = '0';
                mobileMenu.style.transform = 'scaleY(0)';
                window.location.href = href;
                console.log(`Navigating to ${href}`);
            }, 400);
        }
    };

    function setMobileActiveNavLink() {
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        const currentPath = window.location.pathname.replace(/\/+$/, '').toLowerCase();
        const currentPage = (currentPath === '' || currentPath === '/' || currentPath.endsWith('index.html')) ? 'index.html' : currentPath.split('/').pop();

        mobileNavLinks.forEach(link => {
            let href = link.getAttribute('href').toLowerCase().replace(/\/+$/, '');
            href = (href === '' || href === '/' || href === 'index.html') ? 'index.html' : href;
            link.classList.remove('active');
            if (href === currentPage) {
                link.classList.add('active');
            }
        });
    }

    setMobileActiveNavLink();
    window.addEventListener('popstate', setMobileActiveNavLink);
}

document.addEventListener('DOMContentLoaded', () => {
    loadIncludes().then(() => {
        console.log('Includes loaded, setting up navigation');
        populateHero();
        populateFeatures();
        populateProSteps();
        populateMissionStats();
        populateCTA();
        populateFooter();
        setupNavListeners();
        setActiveNavLink();
        setupMobileMenu();

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                acknowledgeEvent(e);
                scrollToSection(this.getAttribute('href'));
            });
        });

        window.addEventListener('popstate', () => {
            console.log('Popstate: Re-setting navigation');
            setActiveNavLink();
            setupMobileMenu();
        });
    });
});

function acknowledgeEvent(e) {
    e.preventDefault();
    e.stopPropagation();
}
