# 🎨 Website Configuration Guide

### 🔧 Configuration File Location

```
your-website/
├── config.json          ← Edit this file to customize your website
├── index.html
├── assets/
└── logo.jpg
```

### ⚙️ Available Settings

#### 🏢 Site Information
```json
{
  "siteName": "موقعك",                    // Website name
  "logo": "/logo.jpg",                   // Logo image path
}
```

#### 🧭 Navigation Menu
```json
{
  "navItems": [
    { "id": "home", "label": "الرئيسية" },
    { "id": "about", "label": "من نحن" },
    { "id": "menu", "label": "المنيو" },
    { "id": "instagram", "label": "إنستجرام" },
    { "id": "location", "label": "تواصل معنا" }
  ]
}
```

#### 🎯 SEO Settings
```json
{
  "seoDescription": "موقع رائع بتصميم جذاب ومحتوى متكامل",
  "seoKeywords": "موقع, تصميم, محتوى, مشروع, احترافية"
}
```

#### 🦸 Hero Section
```json
{
  "heroTitle": "موقعك",
  "heroSubtitle": "كل  فيه قابل للتعديل على ذوقك",
  "heroTagline": "Everything can be customized to suit your preferences",
  "floatingIcons": ["☕", "🥐", "🍰", "🧁", "🍪", "🥖", "🫖", "🍵"]
}
```

#### 📖 About Section
```json
{
  "aboutTitle": "عن موقعك",
  "aboutText": "موقع رائع بلا شك، يتميز بتصميم جذاب ومحتوى متكامل."
}
```

#### 🍽️ Menu Section
```json
{
  "menuTitle": "المنيو",
  "menuSubtitle": "أدرج قائمة منتجاتك بسهوله",
  "googleSheetUrl": "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pub?output=csv"
}
```

**How to set up Google Sheets menu:**
1. Create a Google Sheet with columns: Name, Description, Image, Category, Price
2. Add your menu items
3. Publish to web as CSV
4. Copy the published URL
5. See **[MENU_SETUP_GUIDE.md](MENU_SETUP_GUIDE.md)** for detailed instructions

#### 📱 Social Feed Section
```json
{
  "socialFeedTitle": "تابعنا على وسائل التواصل",
  "socialFeedWidgetId": "85b131a9-ce84-486b-a2e7-0aa2a783bc30"
}
```

**Alternative (for backward compatibility):**
```json
{
  "instagramTitle": "تابعنا على إنستجرام", 
  "instagramWidgetId": "85b131a9-ce84-486b-a2e7-0aa2a783bc30"
}
```

**How to get your Widget ID:**
1. Create account at https://elfsight.com/
2. Create Social Feed widget (supports Instagram, Facebook, TikTok, etc.)
3. Connect your social media accounts
4. Customize the design
5. Copy the Widget ID (not the full embed code)
6. See **[ELFSIGHT_SETUP_GUIDE.md](ELFSIGHT_SETUP_GUIDE.md)** for detailed instructions

#### 📍 Location Section
```json
{
  "locationTitle": "موقعنا",
  "locationSubtitle": "زرنا واستمتع بتجربة فريدة",
  "address": "ولاية إزكي، سلطنة عمان",
  "workingHours": "يومياً من الساعة 8:00 صباحاً وحتى الساعة 11:00 مساءً.",
  "phone": "+968 XXXX XXXX",
  "mapUrl": "https://www.google.com/maps/embed?pb=YOUR_MAP_EMBED_URL"
}
```

#### 🔗 Social Media Links
```json
{
  "instagramUrl": "https://www.instagram.com/your_account/",
  "tiktokUrl": "https://www.tiktok.com/@your_account",
  "facebookUrl": "https://www.facebook.com/your_account",
  "twitterUrl": "https://twitter.com/your_account",
  "youtubeUrl": "https://www.youtube.com/@your_account",
  "whatsappNumber": "+968XXXXXXXX"
}
```

#### 🎨 Colors & Fonts
```json
{
  "primaryFont": "'Tajawal', 'Arial', sans-serif",
  "secondaryFont": "'Poppins', 'Tajawal', sans-serif",
  "colors": {
    "cream": "#f5f1e8",
    "beige": "#e8dcc8",
    "brown": "#8b6f47",
    "darkBrown": "#6b5439",
    "burgundy": "#7d3c3c",
    "darkBurgundy": "#5c2626",
    "slate": "#7a8b99",
    "lightGrey": "#f9f7f4"
  }
}
```

### 🚀 How to Apply Changes

1. **Edit the config.json file** with your preferred text editor
2. **Save the file**
3. **Refresh your website** - changes will appear immediately!

### 🔄 Backup Your Configuration

Always keep a backup copy of your `config.json` file before making changes.

### ⚠️ Important Notes

- Make sure your JSON syntax is correct (use online JSON validators if needed)
- Keep the structure intact - only change the values, not the keys
- If the website doesn't load, check your `config.json` for syntax errors
- The website will use fallback values if the config file has errors

### 📚 Additional Setup Guides

- **[MENU_SETUP_GUIDE.md](MENU_SETUP_GUIDE.md)** - Complete Google Sheets menu setup with image hosting
- **[ELFSIGHT_SETUP_GUIDE.md](ELFSIGHT_SETUP_GUIDE.md)** - Detailed Instagram widget setup and troubleshooting
- **[CUSTOMER_EXAMPLE.md](CUSTOMER_EXAMPLE.md)** - Step-by-step customization examples

### 🔗 Quick Links

- **Google Sheets**: https://sheets.google.com/
- **Elfsight Instagram Widget**: https://elfsight.com/instagram-feed-instashow/
- **ImgBB (Free Image Hosting)**: https://imgbb.com/
- **JSON Validator**: https://jsonlint.com/