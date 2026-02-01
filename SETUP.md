# تعليمات الإعداد السريع

## خطوات الإعداد

### 1. نسخ الصور
**مهم جداً:** يجب نسخ جميع الصور من مجلد `img` الأصلي إلى `furniture-portfolio/public/img`

```bash
# من المجلد الرئيسي
xcopy "img\*" "furniture-portfolio\public\img\" /E /I /Y
```

أو يدوياً:
- افتح مجلد `img` من المجلد الرئيسي
- انسخ جميع الملفات والمجلدات
- الصقها في `furniture-portfolio/public/img`

### 2. تثبيت المكتبات
```bash
cd furniture-portfolio
npm install
```

### 3. تشغيل المشروع
```bash
npm start
```

سيتم فتح المتصفح تلقائياً على `http://localhost:3000`

## المميزات المكتملة

✅ Hero Slider رئيسي مع 3 شرائح  
✅ Section Slider قابل لإعادة الاستخدام  
✅ Image Modal للصور  
✅ Navbar متجاوب  
✅ Footer كامل  
✅ جميع الأقسام (Featured, Antiques, Collections)  
✅ قسم من نحن  
✅ قسم اتصل بنا مع نموذج  
✅ تصميم responsive  
✅ أنيميشن سلس  

## البنية النهائية

```
furniture-portfolio/
├── public/
│   ├── img/          # الصور (يجب نسخها)
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── HeroSlider/
│   │   ├── SectionSlider/
│   │   ├── ImageModal/
│   │   ├── Sections/
│   │   │   ├── FeaturedFurniture.js
│   │   │   ├── AntiquesCollection.js
│   │   │   ├── LivingCollection.js
│   │   │   ├── DiningCollection.js
│   │   │   ├── BedroomCollection.js
│   │   │   ├── AboutSection.js
│   │   │   └── ContactSection.js
│   │   └── Footer/
│   ├── context/
│   │   └── ModalContext.js
│   ├── data/
│   │   └── products.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── .gitignore
```

## التخصيص

### تغيير الألوان
عدّل في `src/index.css`:
```css
:root {
  --color-primary: #8B7355;
  --color-accent: #D4AF37;
  /* ... */
}
```

### إضافة/تعديل المنتجات
عدّل في `src/data/products.js`

### تغيير النصوص
عدّل في ملفات المكونات في `src/components/Sections/`

## المشاكل الشائعة

**الصور لا تظهر:**
- تأكد من نسخ جميع الصور إلى `public/img`
- تحقق من مسارات الصور في `src/data/products.js`

**المشروع لا يعمل:**
- تأكد من تثبيت المكتبات: `npm install`
- تأكد من وجود Node.js 14+

## الدعم

للمساعدة، راجع `README.md`

