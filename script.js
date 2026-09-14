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
// CALENDAR DOWNLOAD (.ics file)
// ===================================

function initCalendarDownload() {
    const saveButton = document.getElementById('saveCalendar');
    if (!saveButton) return;

    saveButton.addEventListener('click', function() {
        generateICSFile();
    });
}

function generateICSFile() {
    // Wedding event details
    const events = [
        {
            title: 'Mehendi & Ladies Sangeet - Divya & Vyom',
            location: 'Groom\'s Residence',
            description: 'Mehendi and Ladies Sangeet Ceremony',
            startDate: '20261202T190000', // 02 December 2026, 7:00 PM
            endDate: '20261202T220000',   // Estimated end time: 10:00 PM
            url: 'https://maps.app.goo.gl/SBqxN5LwQN7Aw73U9'
        },
        {
            title: 'Haldi Ceremony - Divya & Vyom',
            location: 'Groom\'s Residence',
            description: 'Haldi Ceremony',
            startDate: '20261203T110000', // 03 December 2026, 11:00 AM
            endDate: '20261203T130000',   // Estimated end time: 1:00 PM
            url: 'https://maps.app.goo.gl/SBqxN5LwQN7Aw73U9'
        },
        {
            title: 'Wedding Ceremony - Divya & Vyom',
            location: 'Virasat The Hotel by Triveni Grand',
            description: 'Wedding Ceremony of Divya and Vyom',
            startDate: '20261203T200000', // 03 December 2026, 8:00 PM
            endDate: '20261203T230000',   // Estimated end time: 11:00 PM
            url: 'https://maps.app.goo.gl/UJqbqB1jCZ6QDHg57'
        },
        {
            title: 'Reception - Divya & Vyom',
            location: 'Willow Wind Wedding Venue Lawn',
            description: 'Wedding Reception',
            startDate: '20261205T190000', // 05 December 2026, 7:00 PM
            endDate: '20261205T220000',   // Estimated end time: 10:00 PM
            url: 'https://maps.app.goo.gl/g3Ly8mXvgYLdkzoc6'
        }
    ];

    let icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Divya & Vyom Wedding//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'X-WR-CALNAME:Divya & Vyom Wedding',
        'X-WR-TIMEZONE:Asia/Kolkata'
    ];

    events.forEach((event, index) => {
        icsContent.push('BEGIN:VEVENT');
        icsContent.push(`UID:${Date.now()}-${index}@wedding-invitation`);
        icsContent.push(`DTSTAMP:${getCurrentTimestamp()}`);
        icsContent.push(`DTSTART:${event.startDate}`);
        icsContent.push(`DTEND:${event.endDate}`);
        icsContent.push(`SUMMARY:${event.title}`);
        icsContent.push(`DESCRIPTION:${event.description}`);
        icsContent.push(`LOCATION:${event.location}`);
        if (event.url) {
            icsContent.push(`URL:${event.url}`);
        }
        icsContent.push('STATUS:CONFIRMED');
        icsContent.push('SEQUENCE:0');
        // Add reminder: 1 day before
        icsContent.push('BEGIN:VALARM');
        icsContent.push('TRIGGER:-P1D');
        icsContent.push('ACTION:DISPLAY');
        icsContent.push(`DESCRIPTION:Reminder: ${event.title} tomorrow`);
        icsContent.push('END:VALARM');
        icsContent.push('END:VEVENT');
    });

    icsContent.push('END:VCALENDAR');

    // Create and download the .ics file
    const icsFile = icsContent.join('\r\n');
    const blob = new Blob([icsFile], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Divya-Vyom-Wedding.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Visual feedback
    const originalText = saveButton.innerHTML;
    saveButton.innerHTML = '<span>✓ Saved to Calendar!</span>';
    saveButton.style.background = '#4CAF50';

    setTimeout(() => {
        saveButton.innerHTML = originalText;
        saveButton.style.background = '';
    }, 2000);
}

function getCurrentTimestamp() {
    const now = new Date();
    return now.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
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
