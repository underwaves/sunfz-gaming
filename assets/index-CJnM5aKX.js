(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={brandName:`SUNFZENITH`,currentSiteId:`gaming`,contact:{facebookUrl:`https://www.facebook.com/profile.php?id=61595346770633&locale=th_TH`,email:`woranatxawq@gmail.com`},sites:[{id:`portal`,name:`รวมผลงานหลัก (Hub)`,shortName:`🌟 รวมผลงาน`,desc:`พอร์ตโฟลิโอหลักและศูนย์รวมทุกบริการ`,localUrl:`http://localhost:5177`,prodUrl:`https://underwaves.github.io/sunfz-portal/`},{id:`credits`,name:`เว็บเก็บเครดิต & รีวิว`,shortName:`🛡️ เช็กเครดิตร้าน`,desc:`สมุดรวมเครดิต สลิปโอนเงิน และรีวิวลูกค้าจริง 100%`,localUrl:`http://localhost:3000/credits`,prodUrl:`https://sunfz-credits.onrender.com/credits`,isTrustBadge:!0},{id:`creative-docs`,name:`งานกราฟิก/เอกสาร/การบ้าน/โปสเตอร์`,shortName:`🎨 กราฟิก & เอกสาร`,desc:`รับทำสไลด์ รายงาน E-Book การบ้าน และโปสเตอร์`,localUrl:`http://localhost:5174`,prodUrl:`https://underwaves.github.io/sunfz-creative/`},{id:`webdev`,name:`รับทำเว็บ & Web App`,shortName:`💻 รับทำเว็บ/แอป`,desc:`รับทำ Landing Page เว็บหน้าร้าน ระบบหลังบ้าน และ AI`,localUrl:`http://localhost:5175`,prodUrl:`https://underwaves.github.io/sunfz-webdev/`},{id:`gaming`,name:`รับเล่นเกม & ฟาร์มเควสต์`,shortName:`🎮 รับเล่นเกม`,desc:`รับฟาร์มเควสต์ ลงดัน เก็บเสาเทพ และดูแลไอดีเกม`,localUrl:`http://localhost:5176`,prodUrl:`https://underwaves.github.io/sunfz-gaming/`}]},t=[{id:`gm-genshin-explore`,badge:`⚔️ Genshin Impact & Open World`,title:`สำรวจแมพ / อัพเสาเทพ / ปลดเสาเทเลพอร์ต`,priceText:`เริ่มต้น 10 – 150 ฿`,desc:`บริการเปิดแผนที่ ปลดเสาเทเลพอร์ต เก็บ Oculus อัพเสาเทพ และทำเปอร์เซ็นต์สำรวจแมพครบทุกเมือง`,features:[`ปลดล็อกเสาเทเลพอร์ต & เสาเทพเจ็ดดาว (คิดเป็นจุดหรือเหมาเมือง)`,`เก็บ Anemoculus / Geoculus / Electroculus / Dendroculus / Hydroculus`,`ไล่เก็บกล่องสมบัติและทำสำรวจแมพ 80% – 100%`,`เล่นมือแท้ 100% ไม่ใช้โปรหรือสคริปต์ใด ๆ`]},{id:`gm-genshin-daily`,badge:`🔥 Genshin Impact & Honkai: Star Rail`,title:`ดูแลไอดีรายวัน / ลงดันเจี้ยน / ตีบอสสัปดาห์`,priceText:`เริ่มต้น 15 ฿ / วัน`,desc:`ไม่มีเวลาเข้าเกม เรซิ่นล้น เควสต์ดอง ให้เราช่วยดูแลไอดีรายวัน รายสัปดาห์ หรือรายเดือน`,features:[`ทำเควสต์ประจำวัน (Daily Commissions) + ผลาญเรซิ่น/พลังงานจนหมด`,`ลงดันเจี้ยนฟาร์มอาร์ติแฟก / วัสดุเลื่อนขั้น / วัสดุพรสวรรค์`,`ตีบอสรายสัปดาห์ & บอสแมพฟาร์มของปั้นตัวละคร`,`ส่งภาพสกรีนช็อตสรุปผลก่อนและหลังเข้าไอดีทุกครั้ง`]},{id:`gm-quest-coop`,badge:`🎯 All Games • Quest & Buddy`,title:`เคลียร์เควสต์เนื้อเรื่อง / กิจกรรมจำกัดเวลา / เล่นเป็นเพื่อน`,priceText:`ประเมินตามเควสต์`,desc:`รับเก็บกิจกรรมประจำแพตช์ไม่ให้พลาดเพชรฟรี เคลียร์เควสต์โลก เควสต์เทพเจ้า และบริการ Co-op`,features:[`เคลียร์กิจกรรมจำกัดเวลาประจำแพตช์ เก็บเพชรและของรางวัลครบ`,`ดำเนินเควสต์เทพเจ้า / เควสต์ระดับตำนาน / เควสต์โลก`,`บริการเล่นเป็นเพื่อน (Gaming Buddy / Co-op) ช่วยลงดันเจี้ยน`,`ตกลงเวลาเข้า-ออกไอดีชัดเจน ไม่รบกวนเวลาลูกค้าเล่นเอง`]}],n=[{category:`📅 แพ็กเกจดูแลไอดี (Daily Care)`,items:[{name:`ดูแลไอดีรายวัน (เควสต์รายวัน + ผลาญเรซิ่น)`,price:`15 ฿ / วัน`},{name:`ดูแลไอดีรายสัปดาห์ (7 วัน + บอสสัปดาห์ + กิจกรรมย่อย)`,price:`90 ฿ / สัปดาห์`},{name:`ดูแลไอดีรายเดือน (30 วัน ครบจบพร้อมอัปเดตทุกวัน)`,price:`350 ฿ / เดือน`}]},{category:`🗺️ สำรวจแมพ & ลงดันเจี้ยน (Exploration & Boss)`,items:[{name:`ลงดันเจี้ยนอาร์ติแฟก / วัสดุ / ตีบอสแมพ`,price:`เริ่มต้น 5 – 10 ฿ / รอบ`},{name:`ตีบอสรายสัปดาห์ (Weekly Boss)`,price:`10 ฿ / ตัว`},{name:`ปลดเสาเทเลพอร์ต / เก็บเสาเทพ Oculus`,price:`ประเมินตามจำนวนลูก/เมือง`}]},{category:`✨ เควสต์ & กิจกรรม (Quests & Events)`,items:[{name:`เควสต์โลก / เควสต์เนื้อเรื่อง / เควสต์เทพเจ้า`,price:`เริ่มต้น 40 – 150 ฿ (ตามความยาว)`},{name:`กิจกรรมจำกัดเวลาประจำแพตช์ (Event)`,price:`เริ่มต้น 50 – 200 ฿`},{name:`เล่นเป็นเพื่อน / ช่วยแบกดันเจี้ยน (Co-op)`,price:`เริ่มต้น 40 ฿ / ชั่วโมง`}]}],r=[{icon:`🛡️`,title:`เล่นมือแท้ 100% (No Third-Party Tools)`,desc:`ไม่ใช้โปร ไม่ใช้สคริปต์ หรือโปรแกรมโกงใด ๆ ทั้งสิ้น ไอดีปลอดภัยไร้ความเสี่ยงโดนแบน`},{icon:`🔒`,title:`รักษาความลับข้อมูลลูกค้า`,desc:`ไม่เปิดเผย UID หรือข้อมูลรหัสผ่านของลูกค้า และล็อกเอาต์ทันทีเมื่อส่งมอบงานเสร็จ`},{icon:`📸`,title:`อัปเดตสถานะพร้อมรูปภาพ`,desc:`แจ้งเตือนก่อนเข้าไอดี อัปเดตความคืบหน้า และส่งภาพสรุปผลหลังจบงานทุกออเดอร์`}];function i(){let t=document.getElementById(`ecosystem-bar`);if(!t)return;let n=window.location.hostname===`localhost`||window.location.hostname===`127.0.0.1`,r=e.sites.map(t=>`<a href="${n?t.localUrl:t.prodUrl}" class="${[`eco-link`,t.id===e.currentSiteId?`active`:``,t.isTrustBadge?`trust-pill`:``].filter(Boolean).join(` `)}" title="${t.desc}">${t.shortName}</a>`).join(``);t.innerHTML=`
    <div class="eco-bar">
      <div class="container eco-bar-inner">
        <span>เครือข่ายบริการ <strong>${e.brandName}</strong>:</span>
        <div class="eco-links">${r}</div>
      </div>
    </div>
  `}function a(){let n=document.getElementById(`services-grid`);n&&(n.innerHTML=t.map(t=>`
    <article class="card">
      <span class="card-badge">${t.badge}</span>
      <h3>${t.title}</h3>
      <div style="margin: 0.5rem 0; font-weight: 700; color: var(--primary); font-size: 1.2rem;">${t.priceText}</div>
      <p style="font-size: 0.9rem; color: var(--text-muted);">${t.desc}</p>
      <ul class="feature-list">
        ${t.features.map(e=>`<li>${e}</li>`).join(``)}
      </ul>
      <a href="${e.contact.facebookUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="width: 100%; justify-content: center; margin-top: 0.75rem;">
        จองคิวหมวดนี้
      </a>
    </article>
  `).join(``))}function o(){let e=document.getElementById(`ratecards-grid`);e&&(e.innerHTML=n.map(e=>`
    <article class="card">
      <h3 style="font-size: 1.15rem; margin-bottom: 1rem; color: var(--primary);">${e.category}</h3>
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${e.items.map(e=>`
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; padding-bottom: 0.65rem; border-bottom: 1px dashed var(--border);">
            <span style="font-size: 0.92rem;">${e.name}</span>
            <strong style="color: #34D399; white-space: nowrap; font-size: 0.95rem;">${e.price}</strong>
          </div>
        `).join(``)}
      </div>
    </article>
  `).join(``))}function s(){let e=document.getElementById(`safety-grid`);e&&(e.innerHTML=r.map(e=>`
    <div class="card" style="text-align: center;">
      <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">${e.icon}</div>
      <h3 style="font-size: 1.1rem; margin-bottom: 0.4rem;">${e.title}</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted);">${e.desc}</p>
    </div>
  `).join(``))}function c(){let e=document.getElementById(`theme-toggle`);e&&e.addEventListener(`click`,()=>{let e=(document.documentElement.getAttribute(`data-theme`)||`dark`)===`dark`?`light`:`dark`;document.documentElement.setAttribute(`data-theme`,e),localStorage.setItem(`sunfz_gaming_theme`,e)})}document.addEventListener(`DOMContentLoaded`,()=>{i(),a(),o(),s(),c()});