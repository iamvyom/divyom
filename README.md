# 💒 Vyom & Divya Wedding Invitation

A beautiful, responsive wedding invitation webpage with cinematic animations and music.

## 🎨 Features

- ✨ Responsive design (works on mobile, tablet, and desktop)
- 🎵 Background music with play/pause control
- 🎬 Cinematic animations (Ken Burns effect, parallax scrolling, fade-ins)
- 📅 Save to Calendar functionality (.ics file download)
- 🗺️ Google Maps integration for venue
- 💝 Rose Gold & Burgundy elegant color scheme
- 📱 Mobile-optimized layout

## 📂 Project Structure

```
wedding_invite/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Interactive features & animations
├── assets/
│   ├── couple-photo.png    # Your couple photo
│   └── music.mp3           # Background music (to be added)
└── README.md           # This file
```

## 🚀 Quick Start

1. **View locally**: Simply open `index.html` in your web browser
2. **Deploy to GitHub Pages**: 
   - Create a new repository on GitHub
   - Push this folder to the repository
   - Go to Settings > Pages
   - Select main branch and save
   - Your site will be live at: `https://[username].github.io/[repo-name]`

## 🎵 Adding Music

1. Add your music file (MP3 format, 30 seconds recommended) to the `assets/` folder
2. Name it `music.mp3` or update the HTML reference
3. Open `index.html` and uncomment line 22:
   ```html
   <source src="assets/music.mp3" type="audio/mpeg">
   ```

The music will:
- Auto-play on page load (with fade-in)
- Loop every 30 seconds
- Be controllable via the floating music button (top-right)

## ➕ Adding More Events

To add additional events (Mehendi, Sangeet, Reception, etc.):

1. Open `index.html`
2. Find the section marked `<!-- Additional Events Section -->`
3. Uncomment and duplicate the event card template
4. Update the details:
   - Event icon (emoji)
   - Event name
   - Date, time, venue
   - Google Maps URL

**Example:**
```html
<div class="event-card fade-in-scroll">
    <div class="event-icon">🎨</div>
    <h3 class="event-name">Mehendi Ceremony</h3>
    <div class="event-details">
        <div class="detail-item">
            <span class="detail-icon">📅</span>
            <span class="detail-text">01 December 2026</span>
        </div>
        <div class="detail-item">
            <span class="detail-icon">🕐</span>
            <span class="detail-text">5:00 PM onwards</span>
        </div>
        <div class="detail-item">
            <span class="detail-icon">📍</span>
            <span class="detail-text">Your Venue Name</span>
        </div>
    </div>
    <a href="YOUR_GOOGLE_MAPS_URL" target="_blank" class="map-button">
        <span>View on Google Maps</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
    </a>
</div>
```

5. Change the `style="display: none;"` to `style="display: block;"` on line 97 of `index.html`

## 📅 Calendar Feature

The "Save to Calendar" button generates a `.ics` file that works with:
- Apple Calendar
- Google Calendar
- Outlook
- Any calendar app that supports .ics files

To add more events to the calendar:
1. Open `script.js`
2. Find the `generateICSFile()` function
3. Add more events to the `events` array (template provided in comments)

## 🎨 Customization

### Change Colors:
Edit the `:root` variables in `styles.css`:
```css
--rose-gold: #B76E79;
--burgundy: #800020;
--gold: #D4AF37;
```

### Change Fonts:
Update the Google Fonts link in `index.html` and the `--font-*` variables in `styles.css`

### Adjust Photo:
- Replace `assets/couple-photo.png` with your photo
- For best results, use high-resolution images (1920x1080 or larger)
- The photo will automatically adjust and apply cinematic effects

## 📱 Browser Compatibility

- ✅ Chrome, Edge, Safari, Firefox (latest versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ Music autoplay may be restricted by browser policies (user will need to interact with page)

## 💡 Tips

- Keep music file size under 2MB for fast loading
- Use compressed images (JPEG at 80-90% quality)
- Test on multiple devices before sharing
- For GitHub Pages, the site may take a few minutes to deploy

## 🎊 Current Event Details

**Wedding Ceremony**
- Date: 03 December 2026
- Time: 8:00 PM onwards
- Venue: Virasat The Hotel by Triveni Grand
- [View Location](https://maps.app.goo.gl/UJqbqB1jCZ6QDHg57)

---

Made with ❤️ for Vyom & Divya's Special Day
