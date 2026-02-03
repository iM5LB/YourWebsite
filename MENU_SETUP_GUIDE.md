## 🍽️ Google Sheets Menu Setup

Your customers can manage their menu using **Google Sheets** - no coding required!

---

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

**Your Menu is ready! 🎉**
