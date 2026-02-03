# 📋 Menu & Instagram Setup Guide

## 🍽️ Google Sheets Menu Setup

Your customers can manage their menu using **Google Sheets** - no coding required!

---

## 🚀 Google Sheets Menu Setup

### Step 1: Create Google Sheet

1. Go to **https://sheets.google.com**
2. Click **+ Blank** to create new sheet
3. Name it: **"My Restaurant Menu"**

### Step 2: Set Up Columns

In the first row, add these exact column names:

| Name | Description | Image | Category | Price |
|------|-------------|-------|----------|-------|

**Column Explanations:**
- **Name**: اسم الطبق/المشروب (e.g., "كابتشينو", "برجر لحم")
- **Description**: الوصف (e.g., "قهوة بالحليب المخفوق")
- **Image**: رابط الصورة (image URL)
- **Category**: الفئة (e.g., "قهوة ساخنة", "وجبات رئيسية", "حلويات")
- **Price**: السعر (e.g., "2.500", "15.000")

### Step 3: Add Menu Items

Example rows:
```
كابتشينو | قهوة إيطالية مع رغوة حليب مثالية | https://i.imgur.com/coffee.jpg | قهوة ساخنة | 2.500
برجر لحم | برجر لحم طازج مع الخضار | https://i.imgur.com/burger.jpg | وجبات رئيسية | 15.000
تشيز كيك | حلى التشيز كيك الكلاسيكي | https://i.imgur.com/cake.jpg | حلويات | 8.000
```

### Step 4: Publish the Sheet

1. Click **File** → **Share** → **Publish to web**
2. Choose **Entire Document**
3. Format: **Comma-separated values (.csv)**
4. Click **Publish**
5. Copy the URL

### Step 5: Add URL to Config

1. Open your website's **`config.json`** file
2. Find the `googleSheetUrl` setting:
```json
{
  "googleSheetUrl": "YOUR_GOOGLE_SHEET_URL_HERE"
}
```
3. Replace with your published URL:
```json
{
  "googleSheetUrl": "https://docs.google.com/spreadsheets/d/e/YOUR_SHEET_ID/pub?output=csv"
}
```
4. Save the file and refresh your website

---

## 📸 Image Upload Options

### Option 1: ImgBB (Free & Easy)

1. Go to **https://imgbb.com/**
2. Click **Start uploading**
3. Upload your food/drink photo
4. Copy the **Direct link**
5. Paste in Google Sheet **Image** column

### Option 2: Cloudinary (Professional)

1. Go to **https://cloudinary.com/users/register/free**
2. Create free account
3. Upload images in **Media Library**
4. Copy image URL
5. Paste in Google Sheet

### Option 3: Google Drive

1. Upload image to Google Drive
2. Right-click → **Get link**
3. Change to **Anyone with the link**
4. Modify URL format:
```
Original: https://drive.google.com/file/d/FILE_ID/view
Modified: https://drive.google.com/uc?export=view&id=FILE_ID
```

---

## 📱 Social Feed Widget Setup (Elfsight)

### Step 1: Create Elfsight Account

1. Go to **https://elfsight.com/**
2. Click **Sign Up** (free account available)
3. Verify your email

### Step 2: Create Social Feed Widget

1. In Elfsight dashboard, click **+ Add Widget**
2. Choose **Social Feed**
3. Click **Create Widget**

### Step 3: Connect Social Media Accounts

**You can connect multiple platforms:**
- **Instagram**: Connect your Instagram account
- **Facebook**: Connect your Facebook page  
- **TikTok**: Connect your TikTok account
- **YouTube**: Connect your YouTube channel
- **Twitter/X**: Connect your Twitter account

1. Click **Connect [Platform] Account**
2. Log in to your social media account
3. Authorize Elfsight to access your posts
4. Repeat for each platform you want to include

### Step 4: Customize Widget

**Layout Options:**
- **Grid Layout**: Classic grid view
- **Slider Layout**: Horizontal scrolling
- **Masonry Layout**: Pinterest-style layout

**Display Settings:**
- **Number of posts**: 6-12 recommended
- **Show captions**: Yes/No
- **Show likes/comments**: Yes/No
- **Header**: Show/hide profile info

**Styling:**
- **Background color**: Match your website
- **Text color**: Readable contrast
- **Border radius**: Match your design
- **Spacing**: Adjust gaps between posts

### Step 5: Get Widget Code

1. Click **Publish** when satisfied with design
2. Copy the **Widget ID** (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)
3. **Don't copy the full embed code** - just the ID!

### Step 6: Add to Your Website

1. Open your website's **`config.json`** file
2. Find the Instagram settings:
```json
{
  "instagramTitle": "تابعنا على إنستجرام",
  "instagramWidgetId": "YOUR_WIDGET_ID_HERE"
}
```
3. Replace with your widget ID:
```json
{
  "instagramTitle": "تابعنا على إنستجرام",
  "instagramWidgetId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```
4. Save and refresh your website

### Step 7: Test the Widget

1. Refresh your website
2. Scroll to the Instagram section
3. Your posts should load automatically
4. Test on mobile devices too

---

## 🔧 Troubleshooting

### Menu Not Loading?
- ✅ Check Google Sheet is **published to web**
- ✅ Verify URL format is correct
- ✅ Ensure column names match exactly
- ✅ Check for special characters in data

### Social Feed Widget Not Showing?
- ✅ Verify Widget ID is correct (no extra characters)
- ✅ Check social media accounts are public
- ✅ Ensure Elfsight account is active
- ✅ Try refreshing the page
- ✅ Check all connected platforms have recent posts

### Images Not Displaying?
- ✅ Use direct image URLs (ending in .jpg, .png, etc.)
- ✅ Ensure images are publicly accessible
- ✅ Test image URLs in browser first
- ✅ Use HTTPS URLs when possible

---

## 💡 Pro Tips

### For Menu:
- **Keep descriptions short** (1-2 lines max)
- **Use high-quality images** (minimum 400x400px)
- **Consistent pricing format** (e.g., always "2.500" not "2.5")
- **Group similar items** in same category
- **Update regularly** to keep content fresh

### For Instagram:
- **Post regularly** for fresh content
- **Use relevant hashtags** to increase visibility
- **High-quality photos** work best
- **Engage with followers** to boost interaction
- **Stories highlight** important content

---

**Need help? Contact support! 📞**
