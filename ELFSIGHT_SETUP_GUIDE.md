# 📱 Elfsight Social Feed Widget Setup Guide

## 🎯 What is Elfsight Social Feed?

Elfsight Social Feed displays posts from multiple social media platforms on your website. It supports Instagram, Facebook, TikTok, YouTube, Twitter, and more in one unified widget.

---

## 🚀 Step-by-Step Setup

### Step 1: Create Elfsight Account

1. **Go to**: https://elfsight.com/
2. **Click "Sign Up"**
4. **Enter email and create password**
5. **Verify your email**

### Step 2: Create Social Feed Widget

1. **Log in to Elfsight dashboard**
2. **Click "+ Add Widget"**
3. **Select "Social Feed"**
4. **Click "Create Widget"**

### Step 3: Add your social Sources

1. **Click "Add Source"**
2. **Enter your "account name"**
3. **Click Add then done**
4. **Save**

### Step 4: Freely Customize your Widget

#### Layout Options
- **Grid Layout**: Classic grid view (recommended)
- **Slider Layout**: Horizontal scrolling
- **Masonry Layout**: Pinterest-style layout

#### Content Settings
- **Number of posts**: 6-12 recommended
- **Show captions**: Yes (recommended)
- **Show likes/comments**: Yes
- **Show platform icons**: Yes
- **Show date**: Yes
- **Header**: Show profile info and follow buttons

#### Styling
- **Background color**: Match your website
- **Text color**: Ensure good contrast
- **Border radius**: 0px (square) or 8px (rounded)
- **Spacing**: 10-20px recommended

### Step 5: Get Widget ID

1. **Click "Publish"**
2. **Copy the Widget ID**:
   ```
   85b131a9-ce84-486b-a2e7-0aa2a783bc30
   ```
3. **Don't copy the full embed code** - just the ID!

### Step 6: Add to Website

1. **Open `config.json` file**
2. **Find the social feed section**:
   ```json
   {
     "socialFeedTitle": "Follow Our Social Media",
     "socialFeedWidgetId": "YOUR_WIDGET_ID_HERE"
   }
   ```
3. **Save and refresh website**
---
**Your Social Feed widget is ready! 🎉**