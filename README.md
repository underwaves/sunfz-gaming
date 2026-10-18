# 🎮 SUNFZ Gaming Lounge (เว็บที่ 4)

เว็บไซต์เฉพาะทางสำหรับบริการ **รับเล่นเกม, ฟาร์มเควสต์, ลงดันเจี้ยน, เก็บเสาเทพ และดูแลไอดีเกม**

## 📁 โครงสร้างโปรเจกต์
```
sunfz-gaming/
├── public/images/           # ใบเรตราคาเกม Genshin Impact, ปั๊มเต๋า และป้ายเครดิตเกม
├── src/
│   ├── config/ecosystem.js  # ลิงก์เชื่อมโยงทั้ง 5 เว็บไซต์ในเครือ SUNFZENITH
│   ├── data/games.js        # ข้อมูลบริการเกม, ใบเรตราคา และมาตรฐานความปลอดภัย
│   ├── styles/main.css      # โทนสี Cyber Gaming Dark & Light Mode
│   └── main.js              # ระบบแสดงใบเรตราคาพร้อม Lightbox ขยายภาพ
├── index.html
├── vite.config.js
└── package.json
```

## 🚀 คำสั่งรันโปรเจกต์
```bash
npm install
npm run dev      # รันที่ http://localhost:5176
npm run build    # สร้างไฟล์ Production ในโฟลเดอร์ dist/
```
