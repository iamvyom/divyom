// ===================================
// WEDDING INVITATION - DIVYA & VYOM
// Interactive Features & Animations
// ===================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    initStartExperience();
    initScrollAnimations();
    initCalendarDownload();
    initSmoothScroll();
});

// ===================================
// START EXPERIENCE (CLICK ME BUTTON)
// ===================================

function initStartExperience() {
    const startOverlay = document.getElementById('startOverlay');
    const startButton = document.getElementById('startButton');
    const foreverMessage = document.getElementById('foreverMessage');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');

    if (!startButton || !bgMusic) return;

    // Set up music
    bgMusic.volume = 0.3;
    bgMusic.muted = false;

    // When user clicks "Click Me" button
    startButton.addEventListener('click', function() {
        // Start the music
        bgMusic.play().then(() => {
            console.log('✓ Music started!');
        }).catch((error) => {
            console.log('Music play error:', error);
        });

        // Hide the start overlay
        startOverlay.classList.add('hidden');

        // Show the "Forever Begins" message
        setTimeout(() => {
            foreverMessage.style.display = 'flex';

            // Hide the message after 4 seconds and show the invitation
            setTimeout(() => {
                foreverMessage.style.display = 'none';
                // Show the music toggle button for later control
                musicToggle.style.display = 'flex';
            }, 4000);
        }, 500);
    });

    // Music toggle functionality (for later control)
    initMusicToggle();
}

// ===================================
// MUSIC TOGGLE (TOP RIGHT BUTTON)
// ===================================

function initMusicToggle() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');

    if (!musicToggle || !bgMusic) return;

    musicToggle.addEventListener('click', function(e) {
        e.stopPropagation();

        if (bgMusic.paused) {
            // Play music
            bgMusic.play().then(() => {
                musicToggle.classList.remove('muted');
            });
        } else {
            // Pause music
            bgMusic.pause();
            musicToggle.classList.add('muted');
        }
    });

    // Update button state based on audio state
    bgMusic.addEventListener('play', function() {
        musicToggle.classList.remove('muted');
    });

    bgMusic.addEventListener('pause', function() {
        musicToggle.classList.add('muted');
    });
}

// Fade volume helper function
function fadeVolume(audio, startVol, endVol, duration, callback) {
    const steps = 20;
    const stepTime = duration / steps;
    const volumeStep = (endVol - startVol) / steps;
    let currentStep = 0;

    audio.volume = startVol;

    const fadeInterval = setInterval(() => {
        currentStep++;
        audio.volume = Math.max(0, Math.min(1, startVol + (volumeStep * currentStep)));

        if (currentStep >= steps) {
            clearInterval(fadeInterval);
            audio.volume = endVol;
            if (callback) callback();
        }
    }, stepTime);
}

// ===================================
// SCROLL ANIMATIONS
// ===================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in-scroll class
    const animatedElements = document.querySelectorAll('.fade-in-scroll');
    animatedElements.forEach(el => observer.observe(el));
}

// ===================================
// PDF DOWNLOAD
// ===================================

function initCalendarDownload() {
    const downloadButton = document.getElementById('downloadPDF');
    if (!downloadButton) return;

    downloadButton.addEventListener('click', function() {
        generatePDF();
    });
}

function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set colors
    const burgundy = [128, 0, 32];
    const roseGold = [183, 110, 121];
    const gold = [212, 175, 55];
    const charcoal = [44, 44, 44];
    const lightGray = [107, 107, 107];

    // Add decorative border
    doc.setDrawColor(...roseGold);
    doc.setLineWidth(1.5);
    doc.rect(10, 10, 190, 277);

    doc.setLineWidth(0.5);
    doc.rect(13, 13, 184, 271);

    // Ornamental top design
    doc.setFontSize(16);
    doc.setTextColor(...gold);
    doc.text('*', 105, 25, { align: 'center' });

    // Title
    doc.setFontSize(32);
    doc.setTextColor(...burgundy);
    doc.setFont('helvetica', 'bold');
    doc.text('Divya & Vyom', 105, 38, { align: 'center' });

    // Subtitle
    doc.setFontSize(12);
    doc.setTextColor(...roseGold);
    doc.setFont('helvetica', 'italic');
    doc.text('request the pleasure of your company', 105, 48, { align: 'center' });

    // Decorative line
    doc.setDrawColor(...gold);
    doc.setLineWidth(0.8);
    doc.line(50, 55, 160, 55);

    // Small ornament on line
    doc.setFontSize(10);
    doc.setTextColor(...gold);
    doc.text('*', 105, 56.5, { align: 'center' });

    let yPos = 70;

    // Events data
    const events = [
        {
            name: 'Mehendi & Ladies Sangeet',
            date: '02 December 2026',
            time: '7:00 PM onwards',
            venue: 'Groom\'s Residence',
            mapUrl: 'https://maps.app.goo.gl/SBqxN5LwQN7Aw73U9'
        },
        {
            name: 'Haldi Ceremony',
            date: '03 December 2026',
            time: '11:00 AM onwards',
            venue: 'Groom\'s Residence',
            mapUrl: 'https://maps.app.goo.gl/SBqxN5LwQN7Aw73U9'
        },
        {
            name: 'Wedding Ceremony',
            date: '03 December 2026',
            time: '8:00 PM onwards',
            venue: 'Virasat The Hotel by Triveni Grand',
            mapUrl: 'https://maps.app.goo.gl/UJqbqB1jCZ6QDHg57',
            isMain: true
        },
        {
            name: 'Reception',
            date: '05 December 2026',
            time: '7:00 PM onwards',
            venue: 'Willow Wind Wedding Venue Lawn',
            mapUrl: 'https://maps.app.goo.gl/g3Ly8mXvgYLdkzoc6'
        }
    ];

    // Add each event
    events.forEach((event, index) => {
        // Event box background (subtle) for main event
        if (event.isMain) {
            doc.setFillColor(250, 245, 240);
            doc.rect(18, yPos - 5, 174, 38, 'F');
        }

        // Event name
        doc.setFontSize(14);
        doc.setTextColor(...burgundy);
        doc.setFont('helvetica', 'bold');
        doc.text(event.name, 105, yPos, { align: 'center' });

        // Event details with text labels instead of emojis
        doc.setFontSize(10);
        doc.setTextColor(...charcoal);
        doc.setFont('helvetica', 'normal');

        doc.text('Date:', 25, yPos + 8);
        doc.text(event.date, 42, yPos + 8);

        doc.text('Time:', 25, yPos + 15);
        doc.text(event.time, 42, yPos + 15);

        doc.text('Venue:', 25, yPos + 22);
        doc.setFont('helvetica', 'italic');
        doc.text(event.venue, 42, yPos + 22, { maxWidth: 145 });

        // Map link
        doc.setTextColor(...roseGold);
        doc.setFont('helvetica', 'normal');
        doc.textWithLink('View Location', 42, yPos + 29, { url: event.mapUrl });

        // Baraat info after Wedding
        if (event.isMain) {
            doc.setFontSize(9);
            doc.setTextColor(...lightGray);
            doc.setFont('helvetica', 'italic');
            doc.text('The Baraat will start from', 42, yPos + 35);
            doc.setTextColor(...roseGold);
            doc.textWithLink('Hotel Kalevam', 85, yPos + 35, { url: 'https://maps.app.goo.gl/pYv4E5acdpbmrbwJ7' });
            doc.setTextColor(...lightGray);
            doc.text('at 7:00 PM', 110, yPos + 35);
        }

        yPos += event.isMain ? 50 : 42;

        // Divider line between events
        if (index < events.length - 1) {
            doc.setDrawColor(...gold);
            doc.setLineWidth(0.3);
            doc.line(30, yPos - 5, 180, yPos - 5);
        }
    });

    // Bottom ornament
    yPos = 268;
    doc.setFontSize(16);
    doc.setTextColor(...gold);
    doc.text('*', 105, yPos, { align: 'center' });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(...charcoal);
    doc.setFont('helvetica', 'italic');
    doc.text('We look forward to celebrating with you', 105, 278, { align: 'center' });

    // Save the PDF
    doc.save('Divya-Vyom-Wedding-Invitation.pdf');

    // Visual feedback
    const button = document.getElementById('downloadPDF');
    const originalHTML = button.innerHTML;
    button.innerHTML = '<span>✓ Downloaded!</span>';
    button.style.opacity = '0.8';

    setTimeout(() => {
        button.innerHTML = originalHTML;
        button.style.opacity = '1';
    }, 2000);
}

// ===================================
// SMOOTH SCROLL
// ===================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===================================
// PARALLAX EFFECT ON SCROLL (Optional Enhancement)
// ===================================

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');

    if (heroImage && scrolled < window.innerHeight) {
        heroImage.style.transform = `translate(-50%, calc(-50% + ${scrolled * 0.5}px))`;
    }
});

// ===================================
// HELPER: Add more events dynamically (for your use later)
// ===================================

/**
 * To add more events later, you can use this function in the console or integrate it:
 *
 * addEvent({
 *     icon: '🎨',
 *     name: 'Mehendi Ceremony',
 *     date: '01 December 2026',
 *     time: '6:00 PM onwards',
 *     venue: 'Venue Name',
 *     mapUrl: 'https://maps.google.com/...'
 * });
 */

function addEvent(eventData) {
    const additionalEvents = document.getElementById('additionalEvents');
    if (!additionalEvents) return;

    additionalEvents.style.display = 'block';

    const eventCard = document.createElement('div');
    eventCard.className = 'event-card fade-in-scroll';
    eventCard.innerHTML = `
        <div class="event-icon">${eventData.icon || '🎉'}</div>
        <h3 class="event-name">${eventData.name}</h3>
        <div class="event-details">
            <div class="detail-item">
                <span class="detail-icon">📅</span>
                <span class="detail-text">${eventData.date}</span>
            </div>
            <div class="detail-item">
                <span class="detail-icon">🕐</span>
                <span class="detail-text">${eventData.time}</span>
            </div>
            <div class="detail-item">
                <span class="detail-icon">📍</span>
                <span class="detail-text">${eventData.venue}</span>
            </div>
        </div>
        <a href="${eventData.mapUrl}" target="_blank" class="map-button">
            <span>View on Google Maps</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
        </a>
    `;

    additionalEvents.appendChild(eventCard);

    // Re-initialize scroll animations for the new element
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(eventCard);
}

// Log helpful message
console.log('%c💒 Divya & Vyom Wedding Invitation', 'font-size: 20px; font-weight: bold; color: #B76E79;');
console.log('%cTo add more events, edit index.html or use the addEvent() function', 'color: #6B6B6B;');
