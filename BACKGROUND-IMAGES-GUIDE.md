# Wedding Invitation - Background Images Guide

## ✅ What Changed

The event cards now use **themed background images** instead of emoji icons for a more elegant, personalized look.

### Event Card Structure:
```
┌─────────────────────────────────┐
│  [Background Image]             │
│  ┌─────────────────────────┐   │
│  │ Semi-transparent overlay│   │
│  │                          │   │
│  │ Event Name               │   │
│  │ Date, Time, Venue        │   │
│  │ [View on Map Button]     │   │
│  └─────────────────────────┘   │
└─────────────────────────────────┘
```

Each card has:
- A full-cover background image (themed for that event)
- A semi-transparent colored overlay (maintains readability)
- All event details displayed over the overlay

## 🎨 Color Themes Applied:

1. **Mehendi & Ladies Sangeet** - Pink/Rose tinted overlay
2. **Haldi Ceremony** - Yellow/Golden tinted overlay
3. **Wedding Ceremony** - Rose gold tinted overlay (highlighted)
4. **Reception** - Champagne/Gold tinted overlay

## 📸 Adding Your Images

### Step 1: Get Your Images
You need 4 images (one for each event). Here are suggestions:

**Image Sources:**
- Your own photos from similar events
- Free stock photos (Unsplash, Pexels, Pixabay)
- AI-generated images (Bing Image Creator, DALL-E)
- Purchase from stock sites (Shutterstock, Adobe Stock)

**Recommended Image Themes:**

| Event | Image Theme Ideas |
|-------|------------------|
| **Mehendi** | Henna patterns, mehendi designs, hands with mehendi, floral rangoli, traditional decorations |
| **Haldi** | Turmeric paste, yellow flowers (marigolds), traditional haldi setup, yellow drapes |
| **Wedding** | Wedding mandap, rings, traditional decorations, red/gold fabrics, pheras setup |
| **Reception** | Elegant venue, floral decorations, reception stage, champagne/golden decor |

### Step 2: Prepare Your Images
1. **Resize**: 800x600 pixels or larger (landscape orientation recommended)
2. **Compress**: Keep under 500KB per image for fast loading
   - Use tools like: TinyPNG.com, Squoosh.app, or Photoshop
3. **Format**: JPG (recommended) or PNG
4. **Quality**: High quality but web-optimized

### Step 3: Name Your Images Exactly
```
mehendi.jpg     (or .png)
haldi.jpg       (or .png)
wedding.jpg     (or .png)
reception.jpg   (or .png)
```

**Case-sensitive! Use lowercase names exactly as shown.**

### Step 4: Add to Project
1. Place all 4 images in: `assets/events/` folder
2. Refresh your browser (http://localhost:8000)
3. The images will automatically appear as backgrounds

## 🔧 Adjusting the Overlays

If your images make text hard to read, you can adjust the overlay transparency in [styles.css](../../styles.css):

Find these sections (around line 390-425):
```css
.event-mehendi .event-bg-overlay {
    background: linear-gradient(135deg, rgba(255, 182, 193, 0.85) 0%, rgba(255, 240, 245, 0.90) 100%);
}
```

**To make text more readable:**
- Increase the last number in `rgba(R, G, B, 0.85)` closer to 1.0
- Example: Change `0.85` to `0.92` for a more opaque overlay

**To show more of the background image:**
- Decrease the last number closer to 0.7
- Example: Change `0.85` to `0.75`

## 🎯 Current Setup

Right now, the page works with just the colored overlays (no images added yet). It looks elegant but will be even better once you add themed background images!

## 📝 Quick Reference

### File Locations:
```
wedding_invite/
├── assets/
│   ├── couple-photo.png          ✅ (Already added)
│   ├── music.mp3                 ⏳ (To be added)
│   └── events/
│       ├── README.md             ✅ (Guide)
│       ├── mehendi.jpg           ⏳ (Add this)
│       ├── haldi.jpg             ⏳ (Add this)
│       ├── wedding.jpg           ⏳ (Add this)
│       └── reception.jpg         ⏳ (Add this)
```

### CSS Classes Used:
- `.event-mehendi` - Mehendi & Ladies Sangeet card
- `.event-haldi` - Haldi Ceremony card
- `.event-wedding` - Wedding Ceremony card (main event)
- `.event-reception` - Reception card

## 🔍 Testing

After adding images:
1. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
2. Check all 4 cards have images
3. Verify text is readable over images
4. Test on mobile view (responsive)
5. Check hover effects still work

## 💡 Tips

- **Use subtle images**: Busy patterns can make text hard to read
- **Test readability**: View on both desktop and mobile
- **Color coordination**: Images should complement the rose gold theme
- **Consistency**: All 4 images should have similar style/quality
- **Backup**: Keep original high-res versions before compressing

---

**Need help finding images?** Check [assets/events/README.md](assets/events/README.md) for detailed suggestions and links!
