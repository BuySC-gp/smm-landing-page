document.addEventListener('DOMContentLoaded', function() {
  // === INJECTION CSS DEPTH & ELEVATION + FIXES ESPACES ===
  const elevationStyles = document.createElement('style');
  elevationStyles.textContent = `
    /* === FIXES ESPACES BLANCS === */
    body {
      margin: 0 !important;
      padding: 0 !important;
    }
    
    main {
      margin-top: 0 !important;
      padding-top: 0 !important;
    }
    
    nav, header, .component-navbar {
      margin-top: 0 !important;
    }
    
    .block-signin-text {
      padding-top: 80px !important;
      padding-bottom: 60px !important;
      margin-top: 0 !important;
    }
    
    /* Logos carousel sans gap énorme */
    div[style*="background:#F8F9FF;padding:48px 0"] {
      padding: 48px 0 !important;
      margin-top: 0 !important;
    }
    
    /* Services section */
    div[style*="padding: 100px 0"] {
      padding: 80px 0 !important;
    }
    
    /* === DESIGN SYSTEM V2: DEPTH & ELEVATION === */
    :root {
      --shadow-low: 0 2px 8px rgba(0, 102, 255, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04);
      --shadow-mid: 0 4px 16px rgba(0, 102, 255, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06);
      --shadow-high: 0 12px 32px rgba(0, 102, 255, 0.15), 0 4px 12px rgba(0, 0, 0, 0.08);
      --shadow-hover: 0 20px 48px rgba(0, 102, 255, 0.2), 0 8px 16px rgba(0, 0, 0, 0.1);
    }
    
    .service-card {
      box-shadow: var(--shadow-low) !important;
      backdrop-filter: blur(16px) !important;
      border: 1px solid rgba(0, 102, 255, 0.08) !important;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    
    .service-card:hover {
      box-shadow: var(--shadow-hover) !important;
      transform: translateY(-12px) scale(1.02) !important;
      border-color: rgba(0, 102, 255, 0.2) !important;
    }
    
    div[style*="backdrop-filter: blur(10px)"] {
      box-shadow: var(--shadow-low) !important;
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    
    div[style*="backdrop-filter: blur(10px)"]:hover {
      box-shadow: var(--shadow-mid) !important;
      transform: translateY(-8px) !important;
      border-color: rgba(0, 102, 255, 0.15) !important;
    }
    
    .faq-item {
      box-shadow: var(--shadow-low) !important;
      backdrop-filter: blur(12px) !important;
      transition: all 0.3s ease !important;
    }
    
    .faq-item:hover {
      box-shadow: var(--shadow-mid) !important;
      transform: translateX(4px) !important;
    }
    
    .faq-item.active {
      box-shadow: var(--shadow-mid) !important;
      border-color: #0066FF !important;
    }
    
    button, a[href*="signup"], .service-cta, .nav-btn {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    
    button:hover, .service-cta:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 8px 24px rgba(0, 102, 255, 0.3) !important;
    }
    
    .nav-btn {
      box-shadow: var(--shadow-mid) !important;
      backdrop-filter: blur(12px) !important;
    }
    
    .nav-btn:hover {
      box-shadow: var(--shadow-high) !important;
      transform: scale(1.1) !important;
    }
    
    .service-card, .faq-item, .nav-btn, button {
      transform: translateZ(0);
      will-change: transform, box-shadow;
    }
    
    @media (max-width: 768px) {
      .service-card:hover {
        transform: translateY(-8px) scale(1.01) !important;
      }
      
      .block-signin-text {
        padding-top: 60px !important;
        padding-bottom: 40px !important;
      }
    }
  `;
  document.head.appendChild(elevationStyles);
  const logo = document.querySelector('.component-navbar-brand');
  if (logo) logo.textContent = 'GENUINE PROMOTION';
  
  const heroForm = document.querySelector('.block-signin-text .component_card');
  if (heroForm && heroForm.parentElement) {
    const heroContainer = heroForm.parentElement;
    const ctaHTML = `
      <div style="text-align: left; max-width: 400px;">
        <a href="/signup" class="btn btn-big-primary" style="display: inline-block; text-decoration: none; width: 100%; text-align: center; padding: 16px 32px; font-size: 18px; font-weight: 700; background: var(--primary-blue); color: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,71,171,0.3);">Create Free Account →</a>
        <div style="margin-top: 24px; display: flex; flex-direction: column; gap: 12px;">
          <span style="font-size: 14px; color: #666;">✓ <strong style="color: var(--primary-blue);">500K+</strong> orders processed</span>
          <span style="font-size: 14px; color: #666;">✓ <strong style="color: var(--primary-blue);">2,500+</strong> active users</span>
          <span style="font-size: 14px; color: #666;">✓ <strong style="color: var(--primary-blue);">15+</strong> platforms</span>
        </div>
        <p style="margin-top: 20px; text-align: center; font-size: 14px; color: #666;">Already a member? <a href="/signin" style="color: var(--primary-blue); font-weight: 600; text-decoration: none;">Sign in →</a></p>
      </div>
    `;
    heroContainer.insertAdjacentHTML('beforeend', ctaHTML);
    heroForm.style.display = 'none';
  }
});

window.addEventListener('load',function(){
const logos=[
['#000','M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z'],
['#E4405F','M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z'],
['#FF0000','M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z'],
['#1DB954','M17.9,10.9C14.7,9 9.35,8.8 6.3,9.75C5.8,9.9 5.3,9.6 5.15,9.15C5,8.65 5.3,8.15 5.75,8C9.3,6.95 15.15,7.15 18.85,9.35C19.3,9.6 19.45,10.2 19.2,10.65C18.95,11 18.35,11.15 17.9,10.9M17.8,13.7C17.55,14.05 17.1,14.2 16.75,13.95C14.05,12.3 9.95,11.8 6.8,12.8C6.4,12.9 5.95,12.7 5.85,12.3C5.75,11.9 5.95,11.45 6.35,11.35C10,10.25 14.5,10.8 17.6,12.7C17.9,12.85 18.05,13.35 17.8,13.7M16.6,16.45C16.4,16.75 16.05,16.85 15.75,16.65C13.4,15.2 10.45,14.9 6.95,15.7C6.6,15.8 6.3,15.55 6.2,15.25C6.1,14.9 6.35,14.6 6.65,14.5C10.45,13.65 13.75,14 16.35,15.6C16.7,15.75 16.75,16.15 16.6,16.45M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'],
['#1DA1F2','M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.70,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z'],
['#9146FF','M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z'],
['#5865F2','M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z'],
['#0077B5','M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z'],
['#0088CC','M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z'],
['#FF6900','M21.93,12.7H21.87C21.88,12.47 21.9,12.24 21.9,12C21.9,11.76 21.88,11.53 21.87,11.3H21.93C22.46,8.84 22.05,6.72 20.86,5.36C19.68,4 17.78,3.43 15.34,3.69C13.85,1.95 12.07,1 10,1C7.93,1 6.15,1.95 4.66,3.69C2.22,3.43 0.32,4 -0.86,5.36C-2.05,6.72 -2.46,8.84 -1.93,11.3H-1.87C-1.88,11.53 -1.9,11.76 -1.9,12C-1.9,12.24 -1.88,12.47 -1.87,12.7H-1.93C-2.46,15.16 -2.05,17.28 -0.86,18.64C0.32,20 2.22,20.57 4.66,20.31C6.15,22.05 7.93,23 10,23C12.07,23 13.85,22.05 15.34,20.31C17.78,20.57 19.68,20 20.86,18.64C22.05,17.28 22.46,15.16 21.93,12.7M20.27,17.5C19.5,18.45 18.09,18.85 16.15,18.66C15.57,17.67 14.84,16.74 14,15.92L14.25,14.77C15.52,15.97 16.62,17.31 17.38,18.71C18.64,18.63 19.38,18.28 19.72,17.71C20.27,16.84 20.08,15.42 19.25,13.64C18.33,11.66 16.76,9.76 14.79,8.23L14,8.77L13.21,8.23C11.24,9.76 9.67,11.66 8.75,13.64C7.92,15.42 7.73,16.84 8.28,17.71C8.66,18.32 9.46,18.7 10.8,18.69C10.82,18.89 10.86,19.08 10.9,19.27C9.12,19.39 7.86,19.09 7.04,18.31C6,17.31 5.65,15.59 6.05,13.39C5.59,11.45 5.76,9.9 6.55,8.88C7.35,7.88 8.76,7.42 10.66,7.59C10.94,7.3 11.22,7 11.5,6.74C9.87,6.43 8.64,6.57 7.89,7.15C7,7.85 6.58,9.05 6.62,10.75L6.46,10.92C4.9,10.64 3.85,10.85 3.3,11.59C2.77,12.3 2.76,13.44 3.23,14.94C4.17,18.03 6.13,20.42 8.91,21.53C11.68,22.64 14.88,22.32 17.5,20.67C19.54,19.38 20.86,17.5 21.28,15.09C21.31,14.95 21.32,14.82 21.34,14.68C21.23,15.71 20.88,16.67 20.27,17.5Z']
];
const h='<div style="background:#F8F9FF;padding:48px 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;overflow:hidden"><div style="max-width:1200px;margin:0 auto;padding:0 20px"><p style="text-align:center;color:#666;font-size:14px;margin-bottom:24px;font-weight:500">Trusted by 2,500+ creators, agencies, and resellers</p><div style="display:flex;align-items:center;gap:60px;animation:scroll 60s linear infinite"><style>@keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}</style><div style="display:flex;gap:60px;flex-shrink:0" id="logosContainer"></div><div style="display:flex;gap:60px;flex-shrink:0" aria-hidden="true" id="logosContainer2"></div></div></div></div>';
const m=document.querySelector('main')||document.body;
m.insertAdjacentHTML('beforeend',h);
const c1=document.getElementById('logosContainer');
const c2=document.getElementById('logosContainer2');
logos.forEach(([color,path])=>{
const svg=`<svg style="width:32px;height:32px" viewBox="0 0 24 24" fill="${color}"><path d="${path}"/></svg>`;
c1.insertAdjacentHTML('beforeend',svg);
c2.insertAdjacentHTML('beforeend',svg);
});
});

window.addEventListener('load', function() {
  const mainContent = document.querySelector('main') || document.body;
  const footer = document.querySelector('footer');
  
  const allSectionsHTML = `
    <!-- SERVICES CAROUSEL - PREMIUM VERSION -->
<div style="background: linear-gradient(180deg, #FFFFFF 0%, #F8F9FF 100%); padding: 100px 0; overflow: hidden; position: relative;">
  <!-- Decorative elements -->
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden;">
    <div style="position: absolute; top: 20%; right: 10%; width: 400px; height: 400px; background: radial-gradient(circle, rgba(0,102,255,0.08) 0%, transparent 70%); border-radius: 50%; filter: blur(80px);"></div>
    <div style="position: absolute; bottom: 10%; left: 5%; width: 500px; height: 500px; background: radial-gradient(circle, rgba(0,166,126,0.06) 0%, transparent 70%); border-radius: 50%; filter: blur(100px);"></div>
  </div>
  
  <div style="max-width: 1400px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 1;">
    <div style="text-align: center; margin-bottom: 70px;">
      <div style="display: inline-block; padding: 8px 20px; background: linear-gradient(135deg, rgba(0,102,255,0.1), rgba(0,166,126,0.1)); border-radius: 50px; margin-bottom: 20px;">
        <span style="font-size: 14px; font-weight: 600; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">PREMIUM SERVICES</span>
      </div>
      <h2 style="font-size: 48px; font-weight: 700; margin-bottom: 16px; color: #1a1a1a; line-height: 1.2;">Our <span style="background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Top Selling</span> Services</h2>
      <p style="font-size: 18px; color: #666; max-width: 600px; margin: 0 auto;">High-quality, instant delivery services trusted by thousands of creators worldwide</p>
    </div>
    
    <style>
      .services-wrapper { position: relative; }
      .services-scroll { display: flex; gap: 28px; overflow-x: auto; scroll-behavior: smooth; scrollbar-width: none; -ms-overflow-style: none; padding: 10px 0 30px; }
      .services-scroll::-webkit-scrollbar { display: none; }
      
      .service-card {
        min-width: 360px;
        flex-shrink: 0;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.9);
        border-radius: 24px;
        padding: 0;
        overflow: hidden;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
        position: relative;
      }
      
      .service-card:hover {
        transform: translateY(-12px);
        box-shadow: 0 20px 60px rgba(0, 71, 171, 0.18);
        border-color: rgba(0, 102, 255, 0.4);
      }
      
      .service-header {
        padding: 40px 32px 24px;
        position: relative;
        overflow: hidden;
      }
      
      .service-header::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.05;
        background: linear-gradient(135deg, var(--card-color-1), var(--card-color-2));
        transition: opacity 0.4s;
      }
      
      .service-card:hover .service-header::before {
        opacity: 0.1;
      }
      
      .service-icon {
        width: 80px;
        height: 80px;
        margin-bottom: 24px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, var(--card-color-1), var(--card-color-2));
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        position: relative;
        z-index: 1;
        transition: all 0.4s;
      }
      
      .service-card:hover .service-icon {
        transform: scale(1.08) rotate(5deg);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
      }
      
      .badge {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 6px 14px;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        z-index: 2;
      }
      
      .service-title {
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 16px;
        color: #1a1a1a;
        position: relative;
        z-index: 1;
      }
      
      .service-body {
        padding: 0 32px 32px;
      }
      
      .service-features {
        list-style: none;
        padding: 0;
        margin: 0 0 28px;
      }
      
      .service-features li {
        padding: 12px 0;
        color: #666;
        font-size: 15px;
        display: flex;
        align-items: center;
        gap: 12px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      }
      
      .service-features li:last-child {
        border-bottom: none;
      }
      
      .service-features li::before {
        content: '✓';
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, var(--card-color-1), var(--card-color-2));
        color: white;
        border-radius: 50%;
        font-size: 11px;
        font-weight: 700;
        flex-shrink: 0;
      }
      
      .service-price {
        margin-bottom: 24px;
        padding: 20px;
        background: linear-gradient(135deg, rgba(0, 102, 255, 0.05), rgba(0, 166, 126, 0.05));
        border-radius: 16px;
        text-align: center;
      }
      
      .service-price-label {
        font-size: 13px;
        color: #999;
        margin-bottom: 6px;
        font-weight: 500;
      }
      
      .service-price-value {
        font-size: 32px;
        font-weight: 700;
        background: linear-gradient(135deg, #0066FF, #00A67E);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      .service-cta {
        display: block;
        width: 100%;
        padding: 16px;
        background: linear-gradient(135deg, #0066FF, #0052CC);
        color: white;
        text-align: center;
        border-radius: 12px;
        text-decoration: none;
        font-weight: 700;
        font-size: 15px;
        transition: all 0.3s;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(0, 102, 255, 0.25);
      }
      
      .service-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 102, 255, 0.35);
      }
      
      .nav-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 56px;
        height: 56px;
        background: white;
        border: 1px solid #e5e5e5;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s;
        z-index: 10;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      }
      
      .nav-btn:hover {
        background: #0066FF;
        border-color: #0066FF;
        box-shadow: 0 8px 28px rgba(0, 102, 255, 0.3);
      }
      
      .nav-btn:hover svg {
        fill: white;
      }
      
      .nav-btn-left { left: -28px; }
      .nav-btn-right { right: -28px; }
      
      @media (max-width: 1024px) {
        .service-card { min-width: 340px; }
        .nav-btn { display: none; }
      }
      
      @media (max-width: 768px) {
        .service-card { min-width: 300px; }
      }
    </style>
    
    <div class="services-wrapper">
      <button class="nav-btn nav-btn-left" onclick="document.getElementById('servicesScroll').scrollBy({left:-400,behavior:'smooth'})">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#1a1a1a"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
      </button>
      
      <div class="services-scroll" id="servicesScroll">
        <!-- TikTok -->
        <div class="service-card" style="--card-color-1: #00f2fe; --card-color-2: #4facfe;">
          <div class="service-header">
            <span class="badge" style="color: #00f2fe;">⚡ POPULAR</span>
            <div class="service-icon">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </div>
            <h3 class="service-title">TikTok</h3>
          </div>
          <div class="service-body">
            <ul class="service-features">
              <li>Real Followers</li>
              <li>Organic Likes</li>
              <li>Video Views</li>
              <li>Comments & Shares</li>
            </ul>
            <div class="service-price">
              <div class="service-price-label">Starting from</div>
              <div class="service-price-value">$0.25<span style="font-size: 18px; opacity: 0.7;">/1K</span></div>
            </div>
            <a href="/services" class="service-cta">Explore Services →</a>
          </div>
        </div>
        
        <!-- Instagram -->
        <div class="service-card" style="--card-color-1: #f09433; --card-color-2: #e6683c;">
          <div class="service-header">
            <span class="badge" style="color: #f09433;">🔥 HOT</span>
            <div class="service-icon">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="white">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
              </svg>
            </div>
            <h3 class="service-title">Instagram</h3>
          </div>
          <div class="service-body">
            <ul class="service-features">
              <li>Quality Followers</li>
              <li>Story Views</li>
              <li>Post Likes</li>
              <li>Reel Engagement</li>
            </ul>
            <div class="service-price">
              <div class="service-price-label">Starting from</div>
              <div class="service-price-value">$0.50<span style="font-size: 18px; opacity: 0.7;">/1K</span></div>
            </div>
            <a href="/services" class="service-cta">Explore Services →</a>
          </div>
        </div>
        
        <!-- YouTube -->
        <div class="service-card" style="--card-color-1: #ff0844; --card-color-2: #ff5858;">
          <div class="service-header">
            <span class="badge" style="color: #ff0844;">✓ VERIFIED</span>
            <div class="service-icon">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="white">
                <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"/>
              </svg>
            </div>
            <h3 class="service-title">YouTube</h3>
          </div>
          <div class="service-body">
            <ul class="service-features">
              <li>Real Video Views</li>
              <li>Channel Subscribers</li>
              <li>Watch Time Hours</li>
              <li>Engagement Boost</li>
            </ul>
            <div class="service-price">
              <div class="service-price-label">Starting from</div>
              <div class="service-price-value">$15.00<span style="font-size: 18px; opacity: 0.7;">/1K</span></div>
            </div>
            <a href="/services" class="service-cta">Explore Services →</a>
          </div>
        </div>
        
        <!-- Spotify -->
        <div class="service-card" style="--card-color-1: #1db954; --card-color-2: #1ed760;">
          <div class="service-header">
            <span class="badge" style="color: #1db954;">🎵 TRENDING</span>
            <div class="service-icon">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="white">
                <path d="M17.9,10.9C14.7,9 9.35,8.8 6.3,9.75C5.8,9.9 5.3,9.6 5.15,9.15C5,8.65 5.3,8.15 5.75,8C9.3,6.95 15.15,7.15 18.85,9.35C19.3,9.6 19.45,10.2 19.2,10.65C18.95,11 18.35,11.15 17.9,10.9M17.8,13.7C17.55,14.05 17.1,14.2 16.75,13.95C14.05,12.3 9.95,11.8 6.8,12.8C6.4,12.9 5.95,12.7 5.85,12.3C5.75,11.9 5.95,11.45 6.35,11.35C10,10.25 14.5,10.8 17.6,12.7C17.9,12.85 18.05,13.35 17.8,13.7M16.6,16.45C16.4,16.75 16.05,16.85 15.75,16.65C13.4,15.2 10.45,14.9 6.95,15.7C6.6,15.8 6.3,15.55 6.2,15.25C6.1,14.9 6.35,14.6 6.65,14.5C10.45,13.65 13.75,14 16.35,15.6C16.7,15.75 16.75,16.15 16.6,16.45M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
              </svg>
            </div>
            <h3 class="service-title">Spotify</h3>
          </div>
          <div class="service-body">
            <ul class="service-features">
              <li>Playlist Followers</li>
              <li>Monthly Listeners</li>
              <li>Track Streams</li>
              <li>Algorithm Boost</li>
            </ul>
            <div class="service-price">
              <div class="service-price-label">Starting from</div>
              <div class="service-price-value">$1.20<span style="font-size: 18px; opacity: 0.7;">/1K</span></div>
            </div>
            <a href="/services" class="service-cta">Explore Services →</a>
          </div>
        </div>
        
        <!-- Facebook -->
        <div class="service-card" style="--card-color-1: #667eea; --card-color-2: #764ba2;">
          <div class="service-header">
            <span class="badge" style="color: #667eea;">⭐ TRUSTED</span>
            <div class="service-icon">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="white">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
              </svg>
            </div>
            <h3 class="service-title">Facebook</h3>
          </div>
          <div class="service-body">
            <ul class="service-features">
              <li>Page Likes</li>
              <li>Post Engagement</li>
              <li>Video Views</li>
              <li>Group Members</li>
            </ul>
            <div class="service-price">
              <div class="service-price-label">Starting from</div>
              <div class="service-price-value">$0.75<span style="font-size: 18px; opacity: 0.7;">/1K</span></div>
            </div>
            <a href="/services" class="service-cta">Explore Services →</a>
          </div>
        </div>
        
        <!-- Twitter/X -->
        <div class="service-card" style="--card-color-1: #1DA1F2; --card-color-2: #0d8bd9;">
          <div class="service-header">
            <span class="badge" style="color: #1DA1F2;">⚡ FAST</span>
            <div class="service-icon">
              <svg width="44" height="44" viewBox="0 0 24 24" fill="white">
                <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.70,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/>
              </svg>
            </div>
            <h3 class="service-title">Twitter/X</h3>
          </div>
          <div class="service-body">
            <ul class="service-features">
              <li>Real Followers</li>
              <li>Tweet Likes</li>
              <li>Retweets</li>
              <li>Profile Views</li>
            </ul>
            <div class="service-price">
              <div class="service-price-label">Starting from</div>
              <div class="service-price-value">$0.80<span style="font-size: 18px; opacity: 0.7;">/1K</span></div>
            </div>
            <a href="/services" class="service-cta">Explore Services →</a>
          </div>
        </div>
      </div>
      
      <button class="nav-btn nav-btn-right" onclick="document.getElementById('servicesScroll').scrollBy({left:400,behavior:'smooth'})">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#1a1a1a"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
      </button>
    </div>
  </div>
</div>

      <!-- WHY GENUINE PROMOTION - PREMIUM OPTIMIZED -->
    <div style="background: linear-gradient(180deg, #FFFFFF 0%, #F8F9FF 100%); padding: 100px 20px; position: relative;">
      <div style="max-width: 1400px; margin: 0 auto;">
        
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 70px;">
          <div style="display: inline-block; padding: 8px 20px; background: linear-gradient(135deg, rgba(0,102,255,0.1), rgba(0,166,126,0.1)); border-radius: 50px; margin-bottom: 20px; border: 1px solid rgba(0,102,255,0.15);">
            <span style="font-size: 13px; font-weight: 600; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-transform: uppercase; letter-spacing: 0.05em;">Why Choose Us</span>
          </div>
          <h2 style="font-size: 48px; font-weight: 700; margin-bottom: 20px; color: #1a1a1a; line-height: 1.2;">Why <span style="background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Genuine Promotion</span> Leads the Industry</h2>
          <p style="font-size: 18px; color: #666; max-width: 600px; margin: 0 auto; line-height: 1.6;">Trusted by 2,500+ agencies and creators worldwide</p>
        </div>
        
        <!-- Grid 3 colonnes -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-bottom: 60px;">
          
          <!-- Card 1 -->
          <div style="background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); border: 1px solid rgba(0,102,255,0.1); border-radius: 20px; padding: 40px; transition: all 0.3s ease;">
            <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #0066FF, #00A67E); border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 8px 24px rgba(0,102,255,0.2);">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            </div>
            <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px; line-height: 1.3;">Instant Order Processing</h3>
            <p style="font-size: 15px; color: #666; line-height: 1.7; margin-bottom: 20px;">Orders start within 60 seconds. Our infrastructure processes 12,000+ concurrent orders without delays.</p>
            <div style="display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: linear-gradient(135deg, rgba(0,102,255,0.05), rgba(0,166,126,0.05)); border-radius: 10px; border: 1px solid rgba(0,102,255,0.1);">
              <span style="font-size: 20px; font-weight: 700; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">99.8%</span>
              <span style="font-size: 13px; color: #666; font-weight: 500;">Uptime guarantee</span>
            </div>
          </div>
          
          <!-- Card 2 -->
          <div style="background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); border: 1px solid rgba(0,102,255,0.1); border-radius: 20px; padding: 40px; transition: all 0.3s ease;">
            <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #0066FF, #00A67E); border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 8px 24px rgba(0,102,255,0.2);">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
            </div>
            <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px; line-height: 1.3;">Enterprise-Grade API</h3>
            <p style="font-size: 15px; color: #666; line-height: 1.7; margin-bottom: 20px;">Battle-tested infrastructure handling 5M+ API calls monthly with sub-200ms response times.</p>
            <div style="display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: linear-gradient(135deg, rgba(0,102,255,0.05), rgba(0,166,126,0.05)); border-radius: 10px; border: 1px solid rgba(0,102,255,0.1);">
              <span style="font-size: 20px; font-weight: 700; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">165ms</span>
              <span style="font-size: 13px; color: #666; font-weight: 500;">Avg response time</span>
            </div>
          </div>
          
          <!-- Card 3 -->
          <div style="background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); border: 1px solid rgba(0,102,255,0.1); border-radius: 20px; padding: 40px; transition: all 0.3s ease;">
            <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #0066FF, #00A67E); border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 8px 24px rgba(0,102,255,0.2);">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
            </div>
            <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px; line-height: 1.3;">Smart Volume Pricing</h3>
            <p style="font-size: 15px; color: #666; line-height: 1.7; margin-bottom: 20px;">No hidden fees. Transparent tiered pricing with automatic discounts up to 50% as you scale.</p>
            <div style="display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: linear-gradient(135deg, rgba(0,102,255,0.05), rgba(0,166,126,0.05)); border-radius: 10px; border: 1px solid rgba(0,102,255,0.1);">
              <span style="font-size: 20px; font-weight: 700; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">$0</span>
              <span style="font-size: 13px; color: #666; font-weight: 500;">Setup or monthly fees</span>
            </div>
          </div>
          
          <!-- Card 4 -->
          <div style="background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); border: 1px solid rgba(0,102,255,0.1); border-radius: 20px; padding: 40px; transition: all 0.3s ease;">
            <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #0066FF, #00A67E); border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 8px 24px rgba(0,102,255,0.2);">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
            </div>
            <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px; line-height: 1.3;">24/7 Priority Support</h3>
            <p style="font-size: 15px; color: #666; line-height: 1.7; margin-bottom: 20px;">Dedicated success team responds in under 2 minutes. Real humans, not bots.</p>
            <div style="display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: linear-gradient(135deg, rgba(0,102,255,0.05), rgba(0,166,126,0.05)); border-radius: 10px; border: 1px solid rgba(0,102,255,0.1);">
              <span style="font-size: 20px; font-weight: 700; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">98%</span>
              <span style="font-size: 13px; color: #666; font-weight: 500;">Customer satisfaction</span>
            </div>
          </div>
          
          <!-- Card 5 -->
          <div style="background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); border: 1px solid rgba(0,102,255,0.1); border-radius: 20px; padding: 40px; transition: all 0.3s ease;">
            <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #0066FF, #00A67E); border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 8px 24px rgba(0,102,255,0.2);">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </div>
            <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px; line-height: 1.3;">Bank-Level Security</h3>
            <p style="font-size: 15px; color: #666; line-height: 1.7; margin-bottom: 20px;">SSL encrypted, GDPR compliant, never ask for passwords. Your data is protected by enterprise-grade security.</p>
            <div style="display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: linear-gradient(135deg, rgba(0,102,255,0.05), rgba(0,166,126,0.05)); border-radius: 10px; border: 1px solid rgba(0,102,255,0.1);">
              <span style="font-size: 20px; font-weight: 700; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">256-bit</span>
              <span style="font-size: 13px; color: #666; font-weight: 500;">SSL encryption</span>
            </div>
          </div>
          
          <!-- Card 6 -->
          <div style="background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); border: 1px solid rgba(0,102,255,0.1); border-radius: 20px; padding: 40px; transition: all 0.3s ease;">
            <div style="width: 72px; height: 72px; background: linear-gradient(135deg, #0066FF, #00A67E); border-radius: 18px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; box-shadow: 0 8px 24px rgba(0,102,255,0.2);">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
            </div>
            <h3 style="font-size: 22px; font-weight: 700; color: #1a1a1a; margin-bottom: 12px; line-height: 1.3;">Real-Time Analytics</h3>
            <p style="font-size: 15px; color: #666; line-height: 1.7; margin-bottom: 20px;">Track every order with live dashboards. Detailed reports, performance insights, and ROI tracking built-in.</p>
            <div style="display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: linear-gradient(135deg, rgba(0,102,255,0.05), rgba(0,166,126,0.05)); border-radius: 10px; border: 1px solid rgba(0,102,255,0.1);">
              <span style="font-size: 20px; font-weight: 700; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Live</span>
              <span style="font-size: 13px; color: #666; font-weight: 500;">Order tracking</span>
            </div>
          </div>
        </div>
        
        <!-- Trust Bar Stats -->
        <div style="background: linear-gradient(135deg, rgba(0,102,255,0.05), rgba(0,166,126,0.05)); border-radius: 20px; padding: 48px; border: 1px solid rgba(0,102,255,0.12); text-align: center;">
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 48px; max-width: 1000px; margin: 0 auto;">
            <div>
              <div style="font-size: 40px; font-weight: 700; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 8px;">8.7M+</div>
              <div style="font-size: 14px; color: #666; font-weight: 500;">Orders Delivered</div>
            </div>
            <div>
              <div style="font-size: 40px; font-weight: 700; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 8px;">2,500+</div>
              <div style="font-size: 14px; color: #666; font-weight: 500;">Active Users</div>
            </div>
            <div>
              <div style="font-size: 40px; font-weight: 700; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 8px;">15+</div>
              <div style="font-size: 14px; color: #666; font-weight: 500;">Platforms Supported</div>
            </div>
            <div>
              <div style="font-size: 40px; font-weight: 700; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 8px;">4.9/5</div>
              <div style="font-size: 14px; color: #666; font-weight: 500;">Customer Rating</div>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"],
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      </style>
    </div>

    <!-- FAQ - 4 questions + button -->
    <div style="background: #FFF; padding: 80px 20px;">
      <div style="max-width: 900px; margin: 0 auto;">
        <h2 style="text-align: center; font-size: 42px; margin-bottom: 16px; font-weight: 600;">Frequently Asked <span style="color: #0066FF;">Questions</span></h2>
        <p style="text-align: center; color: #666; margin-bottom: 60px;">Everything you need to know about our services</p>
        <style>
          .faq-item { background: white; border-radius: 12px; margin-bottom: 16px; border: 1px solid #e5e5e5; overflow: hidden; transition: all 0.3s; }
          .faq-item:hover { border-color: #0066FF; }
          .faq-q { padding: 24px; cursor: pointer; font-weight: 600; display: flex; justify-content: space-between; align-items: center; }
          .faq-a { max-height: 0; overflow: hidden; transition: max-height 0.3s ease, padding 0.3s ease; padding: 0 24px; color: #666; }
          .faq-item.active .faq-a { max-height: 300px; padding: 0 24px 24px; }
          .faq-toggle { font-size: 24px; color: #0066FF; transition: transform 0.3s; }
          .faq-item.active .faq-toggle { transform: rotate(45deg); }
        </style>
        <div class="faq-item"><div class="faq-q" onclick="this.parentElement.classList.toggle('active')">How quickly will my order start?<span class="faq-toggle">+</span></div><div class="faq-a">Most orders start within 60 seconds after payment confirmation. Some services may take up to 24 hours depending on availability and complexity.</div></div>
        <div class="faq-item"><div class="faq-q" onclick="this.parentElement.classList.toggle('active')">What payment methods do you accept?<span class="faq-toggle">+</span></div><div class="faq-a">We accept all major credit cards, PayPal, cryptocurrency (BTC, ETH, USDT), and bank transfers for bulk orders. All payments are processed securely.</div></div>
        <div class="faq-item"><div class="faq-q" onclick="this.parentElement.classList.toggle('active')">Do you offer refunds or refills?<span class="faq-toggle">+</span></div><div class="faq-a">Yes! We offer automatic refills for 30 days on most services. If there's a drop in delivery, we'll refill it for free. Refunds are available for undelivered orders.</div></div>
        <div class="faq-item"><div class="faq-q" onclick="this.parentElement.classList.toggle('active')">Is my account safe when using your services?<span class="faq-toggle">+</span></div><div class="faq-a">Absolutely. We use 100% safe methods that comply with platform guidelines. We never ask for your password, and all services are delivered through organic-looking accounts.</div></div>
        <div style="text-align: center; margin-top: 40px;"><a href="/faq" style="display: inline-block; padding: 16px 32px; background: #0066FF; color: white; border-radius: 12px; text-decoration: none; font-weight: 700; transition: all 0.3s;">View Full FAQ →</a></div>
      </div>
    </div>

    <!-- NEWSLETTER OPTIMIZED -->
    <div style="background: #FFFFFF; padding: 80px 20px; position: relative; overflow: hidden; border-top: 1px solid #e5e5e5;">
      <div style="max-width: 1200px; margin: 0 auto; display: flex; align-items: center; gap: 60px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 300px;">
          <h2 style="color: #1a1a1a; font-size: 42px; font-weight: 700; margin-bottom: 16px;">Get Exclusive Deals & Updates</h2>
          <p style="color: #666; font-size: 18px; line-height: 1.7; margin-bottom: 32px;">Subscribe to our newsletter for special discounts, new services, and industry insights delivered to your inbox.</p>
          <form style="display: flex; gap: 12px; max-width: 500px; flex-wrap: wrap;" onsubmit="event.preventDefault(); alert('Thank you for subscribing!');">
            <input type="email" placeholder="Enter your email" required style="flex: 1; min-width: 250px; padding: 16px 24px; border: 2px solid #e5e5e5; border-radius: 12px; background: #F8F9FF; color: #1a1a1a; font-size: 16px;" />
            <button type="submit" style="padding: 16px 32px; background: #0066FF; color: white; border: none; border-radius: 12px; font-weight: 700; cursor: pointer; transition: all 0.3s; box-shadow: 0 4px 12px rgba(0,102,255,0.3);">Subscribe</button>
          </form>
        </div>
        <div style="flex: 1; text-align: center;">
  <svg style="width: 120px; height: 120px; opacity: 0.6;" viewBox="0 0 24 24" fill="#0066FF">
    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
  </svg>
</div>
      </div>
    </div>

    <!-- FOOTER MEGA -->
<div style="background: #F8F9FF; padding: 80px 20px 40px; color: #1a1a1a; border-top: 1px solid #e5e5e5;">
  <div style="max-width: 1400px; margin: 0 auto;">
    <!-- Top Section: Logo + Colonnes de liens -->
    <div style="display: grid; grid-template-columns: 1.5fr repeat(4, 1fr); gap: 60px; margin-bottom: 60px;">
      
      <!-- Colonne 1: Branding -->
      <div>
        <div style="font-size: 24px; font-weight: 700; margin-bottom: 16px; background: linear-gradient(135deg, #0047AB, #0066FF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">GENUINE PROMOTION</div>
        <p style="font-size: 14px; line-height: 1.7; color: #666; max-width: 320px; margin-bottom: 24px;">Your trusted partner for premium social media marketing services across all major platforms.</p>
        
        <div style="font-size: 14px; color: #666; margin-bottom: 20px;">
          <div style="margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="#0066FF"><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/></svg>
            <span>support@genuinepromotion.com</span>
          </div>
          <div style="display: flex; align-items: center; gap: 8px;">
            <svg style="width: 16px; height: 16px;" viewBox="0 0 24 24" fill="#0066FF"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/></svg>
            <span>24/7 Live Chat Support</span>
          </div>
        </div>
        
        <!-- Social Icons -->
        <div style="display: flex; gap: 12px; margin-top: 24px;">
          <a href="#" style="width: 40px; height: 40px; background: #FFFFFF; border: 1px solid #e5e5e5; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: all 0.3s;">
            <svg style="width: 18px; height: 18px;" viewBox="0 0 24 24" fill="#0066FF"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
          </a>
          <a href="#" style="width: 40px; height: 40px; background: #FFFFFF; border: 1px solid #e5e5e5; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: all 0.3s;">
            <svg style="width: 18px; height: 18px;" viewBox="0 0 24 24" fill="#0066FF"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.70,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/></svg>
          </a>
          <a href="#" style="width: 40px; height: 40px; background: #FFFFFF; border: 1px solid #e5e5e5; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: all 0.3s;">
            <svg style="width: 18px; height: 18px;" viewBox="0 0 24 24" fill="#0066FF"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/></svg>
          </a>
          <a href="#" style="width: 40px; height: 40px; background: #FFFFFF; border: 1px solid #e5e5e5; border-radius: 8px; display: flex; align-items: center; justify-content: center; text-decoration: none; transition: all 0.3s;">
            <svg style="width: 18px; height: 18px;" viewBox="0 0 24 24" fill="#0066FF"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/></svg>
          </a>
        </div>
      </div>
      
      <!-- Colonne 2: Services -->
      <div>
        <h3 style="font-size: 14px; font-weight: 700; margin-bottom: 20px; text-transform: uppercase; color: #1a1a1a; letter-spacing: 0.05em;">Services</h3>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 14px;">
          <a href="/services" style="color: #666; text-decoration: none; transition: all 0.2s;">TikTok Services</a>
          <a href="/services" style="color: #666; text-decoration: none; transition: all 0.2s;">Instagram Services</a>
          <a href="/services" style="color: #666; text-decoration: none; transition: all 0.2s;">YouTube Services</a>
          <a href="/services" style="color: #666; text-decoration: none; transition: all 0.2s;">Spotify Services</a>
          <a href="/services" style="color: #666; text-decoration: none; transition: all 0.2s;">Facebook Services</a>
          <a href="/services" style="color: #666; text-decoration: none; transition: all 0.2s;">Twitter Services</a>
          <a href="/services" style="color: #666; text-decoration: none; transition: all 0.2s;">Twitch Services</a>
          <a href="/services" style="color: #666; text-decoration: none; transition: all 0.2s;">Discord Services</a>
        </div>
      </div>
      
      <!-- Colonne 3: Company -->
      <div>
        <h3 style="font-size: 14px; font-weight: 700; margin-bottom: 20px; text-transform: uppercase; color: #1a1a1a; letter-spacing: 0.05em;">Company</h3>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 14px;">
          <a href="/about" style="color: #666; text-decoration: none; transition: all 0.2s;">About Us</a>
          <a href="/pricing" style="color: #666; text-decoration: none; transition: all 0.2s;">Pricing</a>
          <a href="/our-story" style="color: #666; text-decoration: none; transition: all 0.2s;">Our Story</a>
          <a href="/mission" style="color: #666; text-decoration: none; transition: all 0.2s;">Our Mission</a>
          <a href="/how-it-works" style="color: #666; text-decoration: none; transition: all 0.2s;">How It Works</a>
          <a href="/case-studies" style="color: #666; text-decoration: none; transition: all 0.2s;">Case Studies</a>
          <a href="/blog" style="color: #666; text-decoration: none; transition: all 0.2s;">Blog</a>
          <a href="/careers" style="color: #666; text-decoration: none; transition: all 0.2s;">Careers</a>
        </div>
      </div>
      
      <!-- Colonne 4: Support -->
      <div>
        <h3 style="font-size: 14px; font-weight: 700; margin-bottom: 20px; text-transform: uppercase; color: #1a1a1a; letter-spacing: 0.05em;">Support</h3>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 14px;">
          <a href="/faq" style="color: #666; text-decoration: none; transition: all 0.2s;">FAQ</a>
          <a href="/help" style="color: #666; text-decoration: none; transition: all 0.2s;">Help Center</a>
          <a href="/contact" style="color: #666; text-decoration: none; transition: all 0.2s;">Contact Us</a>
          <a href="/api" style="color: #666; text-decoration: none; transition: all 0.2s;">API Documentation</a>
          <a href="/status" style="color: #666; text-decoration: none; transition: all 0.2s;">System Status</a>
          <a href="/guides" style="color: #666; text-decoration: none; transition: all 0.2s;">Guides & Tutorials</a>
          <a href="/press" style="color: #666; text-decoration: none; transition: all 0.2s;">Press Kit</a>
          <a href="/affiliates" style="color: #666; text-decoration: none; transition: all 0.2s;">Affiliate Program</a>
        </div>
      </div>
      
      <!-- Colonne 5: Legal -->
      <div>
        <h3 style="font-size: 14px; font-weight: 700; margin-bottom: 20px; text-transform: uppercase; color: #1a1a1a; letter-spacing: 0.05em;">Legal</h3>
        <div style="display: flex; flex-direction: column; gap: 10px; font-size: 14px;">
          <a href="/terms" style="color: #666; text-decoration: none; transition: all 0.2s;">Terms of Service</a>
          <a href="/privacy" style="color: #666; text-decoration: none; transition: all 0.2s;">Privacy Policy</a>
          <a href="/refund" style="color: #666; text-decoration: none; transition: all 0.2s;">Refund Policy</a>
          <a href="/cookie" style="color: #666; text-decoration: none; transition: all 0.2s;">Cookie Policy</a>
          <a href="/dmca" style="color: #666; text-decoration: none; transition: all 0.2s;">DMCA</a>
          <a href="/aup" style="color: #666; text-decoration: none; transition: all 0.2s;">Acceptable Use Policy</a>
          <a href="/disclaimer" style="color: #666; text-decoration: none; transition: all 0.2s;">Disclaimer</a>
          <a href="/license" style="color: #666; text-decoration: none; transition: all 0.2s;">License</a>
        </div>
      </div>
    </div>
    
    <!-- Bottom Section: Copyright + Payment Methods -->
    <div style="border-top: 1px solid #e5e5e5; padding-top: 32px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
      <div style="font-size: 14px; color: #666;">
        © 2025 Genuine Promotion. All rights reserved.
      </div>
      <div style="display: flex; align-items: center; gap: 16px;">
        <span style="font-size: 13px; color: #666;">We Accept:</span>
        <div style="display: flex; gap: 8px;">
          <div style="padding: 6px 12px; background: white; border: 1px solid #e5e5e5; border-radius: 6px; font-size: 12px; font-weight: 600; color: #666;">VISA</div>
          <div style="padding: 6px 12px; background: white; border: 1px solid #e5e5e5; border-radius: 6px; font-size: 12px; font-weight: 600; color: #666;">MASTERCARD</div>
          <div style="padding: 6px 12px; background: white; border: 1px solid #e5e5e5; border-radius: 6px; font-size: 12px; font-weight: 600; color: #666;">PAYPAL</div>
          <div style="padding: 6px 12px; background: white; border: 1px solid #e5e5e5; border-radius: 6px; font-size: 12px; font-weight: 600; color: #666;">CRYPTO</div>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    /* Footer hover effects */
    div[style*="background: #F8F9FF"] a:hover { color: #0066FF !important; transform: translateX(4px); }
    div[style*="background: #F8F9FF"] a[style*="width: 40px"]:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,102,255,0.2); border-color: #0066FF; }
    
    /* Responsive Footer */
    @media (max-width: 1200px) {
      div[style*="grid-template-columns: 1.5fr"] { grid-template-columns: repeat(3, 1fr) !important; }
    }
    @media (max-width: 768px) {
      div[style*="grid-template-columns: 1.5fr"] { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
      div[style*="padding: 80px 20px 40px"] { padding: 60px 20px 30px !important; }
    }
    @media (max-width: 480px) {
      div[style*="grid-template-columns: 1.5fr"] { grid-template-columns: 1fr !important; }
    }
  </style>
</div>
  `;
  
  if (footer) {
    footer.insertAdjacentHTML('beforebegin', allSectionsHTML);
  } else {
    mainContent.insertAdjacentHTML('beforeend', allSectionsHTML);
  }
  
  console.log('✅ ALL sections loaded');
});
