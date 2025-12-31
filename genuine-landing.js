// =============================================================================
// NEW ORDER PAGE - LAYOUT 50/50 (VERSION CORRIGÉE)
// =============================================================================
(function() {
setTimeout(() => {
const searchInput = document.querySelector('input[placeholder*="Search"]');
const form = searchInput?.closest('form');
if (form && !form.dataset.fixed) {
form.dataset.fixed = 'true';
console.log('🎯 [NEW ORDER] Layout 50/50 activé');

// === 1. CACHER LA DESCRIPTION NATIVE ===
const nativeDescription = form.querySelector('.form-group:has(#service_description)') ||
form.querySelector('[id*="description"]')?.closest('.form-group');
if (nativeDescription) {
nativeDescription.style.display = 'none';
console.log('✅ Native description hidden');
}

// === 2. TROUVER LE VRAI ROW PARENT ===
const colDiv = form.closest('.col-lg-8, [class*="col-"]');
const rowDiv = document.querySelector('.row.new-order-form') || colDiv?.parentElement;
if (!rowDiv) {
console.error('❌ Row not found');
return;
}
console.log('✅ Row found:', rowDiv);

// === 3. TRANSFORMER LE ROW EN FLEX 50/50 ===
rowDiv.style.cssText = `
display: flex !important;
flex-wrap: nowrap !important;
gap: 24px !important;
width: 100% !important;
max-width: 100% !important;
padding: 24px !important;
box-sizing: border-box !important;
`;

// === 4. COLUMN GAUCHE = 50% ===
if (colDiv) {
colDiv.style.cssText = `
flex: 0 0 50% !important;
max-width: 50% !important;
width: 50% !important;
padding: 0 !important;
`;
}

// === 5. STYLE DU FORM ===
form.style.cssText = `
width: 100% !important;
background: white !important;
border-radius: 12px !important;
padding: 32px !important;
box-shadow: 0 4px 20px rgba(0,0,0,0.06) !important;
border: 1px solid #e5e7eb !important;
box-sizing: border-box !important;
`;

// === 6. CRÉER PANEL DROIT (FIX: suppression du doublon) ===
let rightPanel = document.getElementById('order-info-panel');
if (!rightPanel) {
rightPanel = document.createElement('div');
rightPanel.id = 'order-info-panel';
rowDiv.appendChild(rightPanel);
console.log('✅ Right panel created and appended');
}

rightPanel.style.cssText = `
flex: 0 0 calc(50% - 24px) !important;
max-width: calc(50% - 24px) !important;
width: calc(50% - 24px) !important;
background: white !important;
border-radius: 12px !important;
box-shadow: 0 4px 20px rgba(0,0,0,0.06) !important;
border: 1px solid #e5e7eb !important;
overflow: hidden !important;
display: flex !important;
flex-direction: column !important;
box-sizing: border-box !important;
`;

rightPanel.innerHTML = `
<!-- Header Badge GP CLEAN -->
<div style="background: linear-gradient(135deg, #f8f9ff, #ffffff); padding: 16px 20px; border-bottom: 1px solid #e5e7eb; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
<div style="display: flex; align-items: center; gap: 12px; flex: 1; min-width: 250px;">
<!-- Logo GP Clean -->
<div style="width: 44px; height: 44px; background: linear-gradient(135deg, #0047AB, #0066FF); border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 4px 12px rgba(0,71,171,0.2);">
<span style="font-size: 18px; font-weight: 900; color: white; letter-spacing: -1px; font-family: system-ui, -apple-system, sans-serif;">GP</span>
</div>
<div style="flex: 1; min-width: 0;">
<div style="font-size: 15px; font-weight: 700; color: #1f2937; margin-bottom: 3px;">Genuine Promotion</div>
<div style="font-size: 11px; color: #6b7280; line-height: 1.3;">Premium SMM Services • 24/7 Support</div>
</div>
</div>
<button onclick="window.open('https://genuinepromotion.com/faq', '_blank')" style="padding: 9px 14px; background: linear-gradient(135deg, #0047AB, #0066FF); color: white; border: none; border-radius: 7px; font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s; flex-shrink: 0; box-shadow: 0 2px 6px rgba(0,71,171,0.2); display: flex; align-items: center; gap: 6px;">
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="12" r="10"/>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
<line x1="12" y1="17" x2="12.01" y2="17"/>
</svg>
FAQ
</button>
</div>

<!-- Tabs Navigation -->
<div style="display: flex; border-bottom: 1px solid #e5e7eb; background: #f9fafb;">
<button class="info-tab active" data-tab="service-info" style="flex: 1; padding: 12px 16px; background: none; border: none; font-size: 13px; font-weight: 600; color: #6b7280; cursor: pointer; position: relative; transition: all 0.2s;">
<span style="display: flex; align-items: center; justify-content: center; gap: 6px;">
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
Service Info
</span>
</button>
<button class="info-tab" data-tab="read-before" style="flex: 1; padding: 12px 16px; background: none; border: none; font-size: 13px; font-weight: 600; color: #6b7280; cursor: pointer; position: relative; transition: all 0.2s;">
<span style="display: flex; align-items: center; justify-content: center; gap: 6px;">
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
Read Before
</span>
</button>
<button class="info-tab" data-tab="service-updates" style="flex: 1; padding: 12px 16px; background: none; border: none; font-size: 13px; font-weight: 600; color: #6b7280; cursor: pointer; position: relative; transition: all 0.2s;">
<span style="display: flex; align-items: center; justify-content: center; gap: 6px;">
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
Updates
</span>
</button>
</div>

<!-- Tab Content -->
<div id="tab-content" style="padding: 24px; overflow-y: auto; flex: 1;">

<!-- SERVICE INFO TAB -->
<div class="tab-panel active" data-panel="service-info">
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 24px;">
<div style="text-align: center; padding: 20px; background: linear-gradient(135deg, rgba(0,166,126,0.05), rgba(0,166,126,0.1)); border-radius: 10px; border: 1px solid rgba(0,166,126,0.2);">
<div style="width: 40px; height: 40px; background: linear-gradient(135deg, #00A67E, #00D97E); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
</div>
<div style="font-size: 11px; color: #00A67E; font-weight: 600; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Guarantee</div>
<div id="guarantee-value" style="font-size: 16px; font-weight: 700; color: #1f2937;">-</div>
</div>
<div style="text-align: center; padding: 20px; background: linear-gradient(135deg, rgba(0,102,255,0.05), rgba(0,102,255,0.1)); border-radius: 10px; border: 1px solid rgba(0,102,255,0.2);">
<div style="width: 40px; height: 40px; background: linear-gradient(135deg, #0066FF, #0052CC); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 10px;">
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
</div>
<div style="font-size: 11px; color: #0066FF; font-weight: 600; margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">Speed</div>
<div id="speed-value" style="font-size: 16px; font-weight: 700; color: #1f2937;">Loading...</div>
</div>
</div>

<div id="dynamic-description" style="background: #f9fafb; padding: 20px; border-radius: 10px; border: 1px solid #e5e7eb;">
<h4 style="font-size: 14px; font-weight: 700; color: #1f2937; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
<span style="font-size: 18px;">📄</span> Description
</h4>
<div id="description-content" style="font-size: 13px; color: #6b7280; line-height: 1.7;">
<p style="color: #9ca3af; font-style: italic;">Select a service to view its description...</p>
</div>
</div>
</div>

<!-- READ BEFORE ORDER TAB -->
<div class="tab-panel" data-panel="read-before" style="display: none;">
<h3 style="font-size: 20px; font-weight: 700; color: #1f2937; margin-bottom: 20px; display: flex; align-items: center; gap: 10px;">
<span style="font-size: 24px;">📚</span> How Things Work
</h3>
<div style="background: #f9fafb; padding: 20px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #e5e7eb;">
<p style="font-size: 13px; color: #6b7280; line-height: 1.7; margin-bottom: 14px;">Order status meanings:</p>
<ul style="list-style: none; padding: 0; margin: 0;">
<li style="padding: 6px 0; font-size: 13px; color: #6b7280; display: flex; align-items: flex-start; gap: 8px;">
<span style="width: 5px; height: 5px; background: #FFC107; border-radius: 50%; margin-top: 6px; flex-shrink: 0;"></span>
<span><strong>Pending:</strong> Order received, will start soon.</span>
</li>
<li style="padding: 6px 0; font-size: 13px; color: #6b7280; display: flex; align-items: flex-start; gap: 8px;">
<span style="width: 5px; height: 5px; background: #0066FF; border-radius: 50%; margin-top: 6px; flex-shrink: 0;"></span>
<span><strong>In Progress:</strong> Delivery ongoing.</span>
</li>
<li style="padding: 6px 0; font-size: 13px; color: #6b7280; display: flex; align-items: flex-start; gap: 8px;">
<span style="width: 5px; height: 5px; background: #00A67E; border-radius: 50%; margin-top: 6px; flex-shrink: 0;"></span>
<span><strong>Completed:</strong> Fully delivered.</span>
</li>
</ul>
</div>
</div>

<!-- SERVICE UPDATES TAB -->
<div class="tab-panel" data-panel="service-updates" style="display: none;">
<div style="text-align: center; padding: 50px 20px;">
<h3 style="font-size: 18px; font-weight: 700; color: #1f2937; margin-bottom: 10px;">No Updates</h3>
<p style="font-size: 13px; color: #6b7280;">Service updates will appear here.</p>
</div>
</div>
</div>
`;

// === 7. FONCTION UPDATE DESCRIPTION ===
function updateServiceDescription() {
    console.log('🔍 [UPDATE] Description function called');

    const descriptionPanel = 
        document.querySelector('#service_description .panel-description') ||
        document.querySelector('.panel-description') ||
        document.querySelector('#service_description');

    const descriptionContent = document.getElementById('description-content');
    const speedValue = document.getElementById('speed-value');
    const guaranteeValue = document.getElementById('guarantee-value');

    console.log('📋 Description panel:', descriptionPanel);
    console.log('🎯 Target container:', descriptionContent);

    if (!descriptionContent) {
        console.error('❌ #description-content NOT FOUND');
        return;
    }

    if (descriptionPanel) {
        let descText = descriptionPanel.textContent || descriptionPanel.innerText || '';
        descText = descText.trim();

        console.log('📝 Text length:', descText.length);
        console.log('📝 Text preview:', descText.substring(0, 200));

        if (descText && descText.length > 5) {
            const formattedDesc = descText
                .split('\n')
                .map(line => {
                    line = line.trim();
                    if (!line) return '';
                    if (line.match(/^(Speed|Refill|Guarantee|Start Time|🌴|🌎|⌚|🔼|🚑|⚠|🍺|🟢|🔴)/i)) {
                        return `<p style="margin-bottom: 10px; line-height: 1.6;"><strong>${line}</strong></p>`;
                    }
                    return `<p style="margin-bottom: 8px; line-height: 1.6;">${line}</p>`;
                })
                .filter(Boolean)
                .join('');

            descriptionContent.innerHTML = formattedDesc || descText.replace(/\n/g, '<br>');
            console.log('✅ Description updated!');

            // === EXTRACTION SPEED (Start Time + Speed) ===
            const startTimeMatch = descText.match(/Start Time[:\s\-]+([^\n]+)/i);
            const speedMatch = descText.match(/Speed[:\s\-]+([^\n]+)/i);

            if (speedValue) {
                let speedText = '';
                
                if (startTimeMatch && speedMatch) {
                    // Les deux présents : "1-24h | 100K Daily"
                    speedText = `${startTimeMatch[1].trim()} | ${speedMatch[1].trim()}`;
                } else if (speedMatch) {
                    // Seulement Speed
                    speedText = speedMatch[1].trim();
                } else if (startTimeMatch) {
                    // Seulement Start Time
                    speedText = `Start: ${startTimeMatch[1].trim()}`;
                } else {
                    speedText = 'N/A';
                }
                
                speedValue.textContent = speedText;
                console.log('⚡ Speed extracted:', speedText);
            }

            // === EXTRACTION GUARANTEE (Refill) ===
            const refillMatch = descText.match(/Refill[:\s\-]+([^\n]+)/i);

            if (guaranteeValue) {
                if (refillMatch) {
                    guaranteeValue.textContent = refillMatch[1].trim();
                    console.log('🛡️ Guarantee extracted:', refillMatch[1].trim());
                } else {
                    // Chercher aussi "Guarantee:" au cas où
                    const guaranteeMatch = descText.match(/Guarantee[:\s\-]+([^\n]+)/i);
                    guaranteeValue.textContent = guaranteeMatch ? guaranteeMatch[1].trim() : 'No guarantee';
                    console.log('🛡️ Guarantee fallback:', guaranteeValue.textContent);
                }
            }

        } else {
            console.warn('⚠️ Description empty or too short');
            descriptionContent.innerHTML = '<p style="color: #9ca3af; font-style: italic;">Select a service...</p>';
            if (speedValue) speedValue.textContent = 'N/A';
            if (guaranteeValue) guaranteeValue.textContent = '-';
        }
    } else {
        console.error('❌ Description panel NOT FOUND');
        descriptionContent.innerHTML = '<p style="color: #ff6b6b;">Description not available</p>';
        if (speedValue) speedValue.textContent = 'N/A';
        if (guaranteeValue) guaranteeValue.textContent = '-';
    }
}

// === 8. LISTENERS ===
const serviceSelect = form.querySelector('select[name*="service"], #service, select');
if (serviceSelect) {
console.log('✅ Service select found');
serviceSelect.addEventListener('change', () => {
console.log('🔄 Service changed!');
setTimeout(updateServiceDescription, 600);
setTimeout(updateServiceDescription, 1500);
});
} else {
console.error('❌ Service select NOT FOUND');
}

// MutationObserver
const serviceDescDiv = document.getElementById('service_description');
if (serviceDescDiv) {
const observer = new MutationObserver(() => {
console.log('🔍 Mutation detected');
updateServiceDescription();
});
observer.observe(serviceDescDiv, {
childList: true,
subtree: true,
characterData: true
});
console.log('✅ MutationObserver active');
}

// Initial calls
setTimeout(updateServiceDescription, 1000);
setTimeout(updateServiceDescription, 2500);

// === 9. TABS SYSTEM ===
setTimeout(() => {
const tabs = document.querySelectorAll('.info-tab');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
tab.addEventListener('click', function() {
tabs.forEach(t => {
t.style.color = '#6b7280';
t.style.background = 'none';
t.style.borderBottom = 'none';
});

this.style.color = '#00A67E';
this.style.background = 'white';
this.style.borderBottom = '2px solid #00A67E';

panels.forEach(p => p.style.display = 'none');
const target = document.querySelector(`[data-panel="${this.dataset.tab}"]`);
if (target) target.style.display = 'block';
});
});

if (tabs[0]) {
tabs[0].style.color = '#00A67E';
tabs[0].style.background = 'white';
tabs[0].style.borderBottom = '2px solid #00A67E';
}
}, 200);

// === 10. FORM STYLING ===
const inputs = form.querySelectorAll('input, select, textarea');
inputs.forEach(input => {
input.style.cssText = `
width: 100% !important;
padding: 10px 12px !important;
border: 1px solid #e5e7eb !important;
border-radius: 6px !important;
font-size: 13px !important;
transition: all 0.2s !important;
`;
});

const submitBtn = form.querySelector('button[type="submit"]');
if (submitBtn) {
submitBtn.style.cssText = `
width: 100% !important;
padding: 12px !important;
background: linear-gradient(135deg, #00A67E, #00D97E) !important;
color: white !important;
border: none !important;
border-radius: 8px !important;
font-weight: 700 !important;
cursor: pointer !important;
`;
}

// === 11. RESPONSIVE ===
const mediaQuery = window.matchMedia('(max-width: 1100px)');
function handleResponsive(e) {
if (e.matches) {
rowDiv.style.flexDirection = 'column';
if (colDiv) colDiv.style.maxWidth = '100%';
rightPanel.style.maxWidth = '100%';
} else {
rowDiv.style.flexDirection = 'row';
}
}
handleResponsive(mediaQuery);
mediaQuery.addEventListener('change', handleResponsive);

console.log('✅ [NEW ORDER] Setup complete');
}
}, 300);
})();

// =============================================================================
// LANDING PAGE (APRES - SÉPARE)
// =============================================================================
(function() {
  // TON CODE LANDING ORIGINAL COMPLET (avec syntaxe corrigée)
  const hasSignup = document.querySelector('.block-signin-text .component_card');
  const hasSidebar = document.querySelector('.sidebar');
  const hasLogout = document.querySelector('a[href*="logout"]');

  if (!hasSignup || hasSidebar || hasLogout) {
    console.log('[GENUINE] Panel detected - skipping');
    return;
  }

  console.log('[GENUINE] Landing page detected - loading');
  
  // =============================================================================
  // 3. TON CODE V1 ORIGINAL (COLLÉ ICI EXACTEMENT)
  // =============================================================================
  document.addEventListener('DOMContentLoaded', function() {
  
  // === INJECTION CSS DEPTH & ELEVATION ===
  const elevationStyles = document.createElement('style');
  elevationStyles.textContent = `
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
    }

    /* === STATS MARQUEE DIAGONAL === */
.stats-marquee-wrapper {
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%) rotate(-2deg);
  overflow: hidden;
  margin: 80px 0;
  box-shadow: 0 8px 32px rgba(0, 102, 255, 0.15);
}


.stats-marquee {
  background: linear-gradient(135deg, #0066FF 0%, #0052CC 50%, #00A67E 100%);
  padding: 24px 0;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.stats-marquee-track {
  display: inline-flex;
  animation: marqueeScroll 30s linear infinite;
  will-change: transform;
}

.stats-marquee:hover .stats-marquee-track {
  animation-play-state: paused;
}

.stats-marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 0 40px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  letter-spacing: 0.02em;
}

.stats-marquee-icon {
  font-size: 24px;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@media (max-width: 768px) {
  .stats-marquee-wrapper {
    margin: 40px 0;
  }
  
  .stats-marquee-item {
    font-size: 14px;
    padding: 0 24px;
  }
  
  .stats-marquee-track {
    animation-duration: 20s;
  }
}

    /* === HOW IT WORKS TIMELINE === */
.how-it-works-section {
  padding: 70px 20px;
  background: linear-gradient(135deg, #FFFFFF 0%, #F8F9FF 100%);
  position: relative;
  overflow: hidden;
}

.how-it-works-section::before {
  content: '';
  position: absolute;
  top: -100px;
  right: -100px;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(0, 102, 255, 0.06), transparent 70%);
  border-radius: 50%;
  filter: blur(80px);
}

.how-it-works-container {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.how-it-works-header {
  text-align: center;
  margin-bottom: 50px;
}

.how-it-works-title {
  font-size: 40px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.how-it-works-subtitle {
  font-size: 17px;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.how-tabs {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}

.how-tab {
  padding: 12px 28px;
  background: white;
  border: 1.5px solid #e5e5e5;
  border-radius: 50px;
  color: #666;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.how-tab:hover {
  background: #f8f9ff;
  border-color: rgba(0, 102, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.1);
}

.how-tab.active {
  background: linear-gradient(135deg, #0066FF, #00A67E);
  border-color: transparent;
  color: white;
  box-shadow: 0 6px 20px rgba(0, 102, 255, 0.3);
}

.how-content {
  display: none;
  animation: fadeSlideIn 0.4s ease-out;
}

.how-content.active {
  display: block;
}

@keyframes fadeSlideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.how-timeline {
  position: relative;
  padding-left: 70px;
}

.how-timeline::before {
  content: '';
  position: absolute;
  left: 23px;
  top: 20px;
  bottom: 20px;
  width: 2px;
  background: linear-gradient(180deg, #0066FF, #00A67E);
  opacity: 0.2;
}

.how-step {
  position: relative;
  margin-bottom: 32px;
  animation: fadeUp 0.5s ease-out backwards;
}

.how-step:nth-child(1) { animation-delay: 0.1s; }
.how-step:nth-child(2) { animation-delay: 0.2s; }
.how-step:nth-child(3) { animation-delay: 0.3s; }
.how-step:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.how-step-number {
  position: absolute;
  left: -70px;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #0066FF, #00A67E);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 800;
  color: white;
  box-shadow: 0 6px 20px rgba(0, 102, 255, 0.3);
  z-index: 1;
}

.how-step-card {
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 16px;
  padding: 24px 28px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
}

.how-step-card:hover {
  border-color: rgba(0, 102, 255, 0.3);
  transform: translateX(8px);
  box-shadow: 0 8px 32px rgba(0, 102, 255, 0.15);
}

.how-step-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.how-step-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #0066FF, #00A67E);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.2);
}

.how-step-icon svg {
  color: white;
}

.how-step-description {
  font-size: 15px;
  line-height: 1.6;
  color: #666;
}

@media (max-width: 768px) {
  .how-it-works-section {
    padding: 50px 20px;
  }
  
  .how-it-works-title {
    font-size: 28px;
  }
  
  .how-it-works-subtitle {
    font-size: 15px;
  }
  
  .how-timeline {
    padding-left: 55px;
  }
  
  .how-step-number {
    left: -55px;
    width: 40px;
    height: 40px;
    font-size: 18px;
  }
  
  .how-timeline::before {
    left: 15px;
  }
  
  .how-step-card {
    padding: 18px 20px;
  }
  
  .how-step-title {
    font-size: 17px;
  }
  
  .how-step-description {
    font-size: 14px;
  }
}

    /* === HERO PREMIUM SPLIT VERSION === */
    .hero-premium {
      background: linear-gradient(135deg, #0A0E27 0%, #1a1f3a 50%, #0f1629 100%);
      padding: 120px 20px 100px;
      position: relative;
      overflow: hidden;
    }
    
    .hero-premium::before {
      content: '';
      position: absolute;
      top: -200px;
      right: -100px;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(0, 102, 255, 0.15), transparent 60%);
      border-radius: 50%;
      animation: float 20s ease-in-out infinite;
      filter: blur(60px);
    }
    
    .hero-premium::after {
      content: '';
      position: absolute;
      bottom: -150px;
      left: -150px;
      width: 500px;
      height: 500px;
      background: radial-gradient(circle, rgba(0, 166, 126, 0.12), transparent 60%);
      border-radius: 50%;
      animation: float 25s ease-in-out infinite reverse;
      filter: blur(80px);
    }
    
    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(30px, -30px) scale(1.1); }
    }
    
    .hero-content {
      max-width: 1400px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr;
      gap: 80px;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    
    .hero-left {
      animation: slideInLeft 1s ease-out;
    }
    
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 20px;
      background: rgba(0, 102, 255, 0.1);
      border: 1px solid rgba(0, 102, 255, 0.3);
      border-radius: 50px;
      backdrop-filter: blur(10px);
      margin-bottom: 24px;
      animation: glow 2s ease-in-out infinite;
    }
    
    @keyframes glow {
      0%, 100% { box-shadow: 0 0 20px rgba(0, 102, 255, 0.3); }
      50% { box-shadow: 0 0 30px rgba(0, 102, 255, 0.5); }
    }
    
    .hero-badge-dot {
      width: 8px;
      height: 8px;
      background: #00FF88;
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(1.2); }
    }
    
    .hero-badge-text {
      font-size: 13px;
      font-weight: 600;
      color: #00FF88;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    
    .hero-title {
      font-size: 56px;
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 24px;
      color: white;
      letter-spacing: -0.02em;
    }
    
    .hero-title-gradient {
      background: linear-gradient(135deg, #0066FF 0%, #00A67E 50%, #00FFAA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmer 3s ease-in-out infinite;
      background-size: 200% auto;
    }
    
    @keyframes shimmer {
      0%, 100% { background-position: 0% center; }
      50% { background-position: 100% center; }
    }
    
    .hero-subtitle {
      font-size: 18px;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.7);
      margin-bottom: 40px;
      max-width: 560px;
    }
    
    .hero-cta-group {
      display: flex;
      gap: 16px;
      margin-bottom: 48px;
      flex-wrap: wrap;
    }
    
    .hero-cta-primary {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 18px 40px;
      background: linear-gradient(135deg, #0066FF, #0052CC);
      color: white;
      font-size: 18px;
      font-weight: 700;
      border-radius: 12px;
      text-decoration: none;
      border: none;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 8px 32px rgba(0, 102, 255, 0.4);
      position: relative;
      overflow: hidden;
    }
    
    .hero-cta-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }
    
    .hero-cta-primary:hover::before {
      left: 100%;
    }
    
    .hero-cta-primary:hover {
      transform: translateY(-2px) !important;
      box-shadow: 0 12px 40px rgba(0, 102, 255, 0.6) !important;
    }
    
    .hero-cta-secondary {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      padding: 18px 32px;
      background: rgba(255, 255, 255, 0.05);
      color: white;
      font-size: 16px;
      font-weight: 600;
      border-radius: 12px;
      text-decoration: none;
      border: 1px solid rgba(255, 255, 255, 0.1);
      cursor: pointer;
      transition: all 0.3s;
      backdrop-filter: blur(10px);
    }
    
    .hero-cta-secondary:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }
    
    .hero-stats {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
      padding: 32px;
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 16px;
    }
    
    .hero-stat {
      text-align: center;
    }
    
    .hero-stat-value {
      font-size: 36px;
      font-weight: 800;
      background: linear-gradient(135deg, #00FFAA, #0066FF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 4px;
      display: block;
    }
    
    .hero-stat-label {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.6);
      font-weight: 500;
    }
    
    
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    .hero-dashboard-preview {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.1);
      transition: transform 0.5s;
      background: #fff;
    }
    
    .hero-dashboard-preview:hover {
      transform: translateY(-10px) rotateY(2deg);
    }
    
    .hero-dashboard-preview img {
      width: 100%;
      height: auto;
      display: block;
    }
    
    
    @keyframes floatBadge {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    
    
    .hero-badge-icon {
      font-size: 28px;
      margin-bottom: 8px;
      display: block;
    }
    
    .hero-badge-value {
      font-size: 24px;
      font-weight: 800;
      color: #0066FF;
      display: block;
      margin-bottom: 4px;
    }
    
    .hero-badge-label {
      font-size: 11px;
      color: #666;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-weight: 600;
    }
    
    @media (max-width: 1200px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: 60px;
      }
      
      .hero-title {
        font-size: 48px;
      }
      
      
    }
    
    @media (max-width: 768px) {
      .hero-premium {
        padding: 80px 20px 60px;
      }
      
      .hero-title {
        font-size: 36px;
      }
      
      .hero-cta-group {
        flex-direction: column;
      }
      
      .hero-stats {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      
    }
    
    /* === AJOUT 1: STYLE FORMULAIRE LOGIN === */
.block-signin-text .component_card {
  padding: 32px !important;
  border-radius: 16px !important;
  box-shadow: 0 12px 48px rgba(0, 102, 255, 0.15) !important;
  border: 2px solid #0066FF !important;
  max-width: 480px !important;
  margin: 40px auto !important;
  background: white !important;
}

.block-signin-text .component_card > div {
  margin-bottom: 20px !important;
  position: relative !important;
}

.block-signin-text .component_card label {
  font-size: 14px !important;
  font-weight: 600 !important;
  color: #333 !important;
  margin-bottom: 8px !important;
  display: block !important;
}

.block-signin-text .component_card input[type="text"],
.block-signin-text .component_card input[type="password"] {
  width: 100% !important;
  padding: 14px 16px !important;
  border: 1.5px solid #e5e5e5 !important;
  border-radius: 10px !important;
  font-size: 15px !important;
  box-sizing: border-box !important;
}

.block-signin-text .component_card input:focus {
  border-color: #0066FF !important;
  outline: none !important;
  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1) !important;
}

.block-signin-text .component_card a[href*="forgot"],
.block-signin-text .component_card a[href*="password"] {
  position: absolute !important;
  right: 0 !important;
  top: 0 !important;
  font-size: 13px !important;
  color: #0066FF !important;
  text-decoration: none !important;
  font-weight: 600 !important;
  z-index: 10 !important;
}

.block-signin-text .component_card button[type="submit"] {
  width: 100% !important;
  background: linear-gradient(135deg, #0066FF, #0052CC) !important;
  padding: 16px !important;
  border-radius: 10px !important;
  font-weight: 700 !important;
  font-size: 16px !important;
  color: white !important;
  border: none !important;
}
  `;
  document.head.appendChild(elevationStyles);

  // === LOGO ===
  const logo = document.querySelector('.component-navbar-brand');
  if (logo) logo.textContent = 'GENUINE PROMOTION';
  
  // === HERO SECTION SPLIT VERSION ===
  const heroForm = document.querySelector('.block-signin-text .component_card');
  if (heroForm && heroForm.parentElement) {
    const heroContainer = heroForm.parentElement;
    const nativeImage = document.querySelector('.block-signin-text img');
    const imageUrl = nativeImage ? nativeImage.src : '';
    
    const heroHTML = `
  <section class="hero-premium" style="background: linear-gradient(135deg, #FFFFFF 0%, #F8F9FF 100%); padding: 60px 20px; position: relative;">
    <div class="hero-content" style="max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 60px; align-items: center;">
      <div class="hero-left">
        <div style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; background: linear-gradient(135deg, rgba(0, 102, 255, 0.08), rgba(0, 166, 126, 0.08)); border: 1px solid rgba(0, 102, 255, 0.15); border-radius: 50px; margin-bottom: 20px;">
          <span style="width: 6px; height: 6px; background: #00FF88; border-radius: 50%;"></span>
          <span style="font-size: 11px; font-weight: 700; color: #0066FF; text-transform: uppercase; letter-spacing: 0.05em;">🚀 Trusted by 2,500+ Agencies</span>
        </div>
        <h1 style="font-size: 52px; font-weight: 800; line-height: 1.1; margin-bottom: 20px; color: #1a1a1a; letter-spacing: -0.02em;">
          Scale Your SMM<br>Business <span style="background: linear-gradient(135deg, #0066FF 0%, #00A67E 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Like a Pro</span>
        </h1>
        <p style="font-size: 17px; line-height: 1.6; color: #666; margin-bottom: 32px; max-width: 540px;">
          5,000+ premium services • 15+ platforms • Enterprise API • 99.8% uptime • Instant delivery
        </p>
        <div style="display: flex; gap: 12px; margin-bottom: 40px; flex-wrap: wrap;">
          <a href="/signup" style="display: inline-flex; align-items: center; gap: 10px; padding: 16px 36px; background: linear-gradient(135deg, #0066FF, #0052CC); color: white; font-size: 17px; font-weight: 700; border-radius: 12px; text-decoration: none; box-shadow: 0 6px 24px rgba(0, 102, 255, 0.3); transition: all 0.3s;">
            Create Free Account
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <button id="toggleLoginBtn" style="display: inline-flex; align-items: center; gap: 10px; padding: 16px 28px; background: white; color: #0066FF; font-size: 15px; font-weight: 600; border-radius: 12px; border: 1.5px solid #e5e5e5; cursor: pointer;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/></svg>
            Sign In
          </button>
          <a href="/api" style="display: inline-flex; align-items: center; gap: 10px; padding: 16px 28px; background: white; color: #0066FF; font-size: 15px; font-weight: 600; border-radius: 12px; text-decoration: none; border: 1.5px solid #e5e5e5; transition: all 0.3s;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
            View API
          </a>
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 24px; background: white; border: 1px solid #e5e5e5; border-radius: 16px; box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);">
          <div style="text-align: center;">
            <div style="font-size: 28px; font-weight: 800; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 4px;">500K+</div>
            <div style="font-size: 12px; color: #999; font-weight: 500;">Orders</div>
          </div>
          <div style="text-align: center; border-left: 1px solid #f0f0f0; border-right: 1px solid #f0f0f0;">
            <div style="font-size: 28px; font-weight: 800; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 4px;">2,500+</div>
            <div style="font-size: 12px; color: #999; font-weight: 500;">Users</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 28px; font-weight: 800; background: linear-gradient(135deg, #0066FF, #00A67E); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 4px;">99.8%</div>
            <div style="font-size: 12px; color: #999; font-weight: 500;">Uptime</div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
`;
    
    heroContainer.insertAdjacentHTML('beforeend', heroHTML);
    heroForm.style.display = 'none';
    
    // AJOUT 2: Bouton toggle login
    const toggleBtn = document.getElementById('toggleLoginBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        if (heroForm.style.display === 'none') {
          heroForm.style.display = 'block';
          heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
          toggleBtn.textContent = '✕ Hide';
        } else {
          heroForm.style.display = 'none';
          toggleBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"/></svg> Sign In';
        }
      });
    }
    
// AJOUT 3: Déplace "Forgot password?" et change "Remember me"
setTimeout(() => {
  const forgotLink = document.querySelector('.block-signin-text a[href*="resetpassword"], .block-signin-text a[href*="forgot"]');
  const passwordLabel = Array.from(document.querySelectorAll('.block-signin-text label')).find(label => 
    label.textContent.trim().toLowerCase() === 'password'
  );
  
  if (forgotLink && passwordLabel) {
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'display: flex !important; justify-content: space-between !important; align-items: baseline !important; margin-bottom: 6px !important;'; // ← baseline au lieu de center
    
    passwordLabel.parentElement.insertBefore(wrapper, passwordLabel);
    
    wrapper.appendChild(passwordLabel);
    wrapper.appendChild(forgotLink);
    
    passwordLabel.style.margin = '0';
    forgotLink.style.cssText = 'font-size: 12px !important; color: #0066FF !important; text-decoration: none !important; font-weight: 500 !important; position: static !important; white-space: nowrap !important;'; // ← Plus petit + nowrap
  }
  
  const labels = document.querySelectorAll('.block-signin-text label');
  labels.forEach(label => {
    if (label.textContent.toLowerCase().includes('remember')) {
      label.textContent = 'Stay signed in';
    }
  });
}, 800);
  }
}); 

window.addEventListener('load', function() {
  const logos = [
    ['#000', 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z'], // TikTok
    ['#E4405F', 'M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z'], // Instagram
    ['#FF0000', 'M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z'], // YouTube
    ['#1DB954', 'M17.9,10.9C14.7,9 9.35,8.8 6.3,9.75C5.8,9.9 5.3,9.6 5.15,9.15C5,8.65 5.3,8.15 5.75,8C9.3,6.95 15.15,7.15 18.85,9.35C19.3,9.6 19.45,10.2 19.2,10.65C18.95,11 18.35,11.15 17.9,10.9M17.8,13.7C17.55,14.05 17.1,14.2 16.75,13.95C14.05,12.3 9.95,11.8 6.8,12.8C6.4,12.9 5.95,12.7 5.85,12.3C5.75,11.9 5.95,11.45 6.35,11.35C10,10.25 14.5,10.8 17.6,12.7C17.9,12.85 18.05,13.35 17.8,13.7M16.6,16.45C16.4,16.75 16.05,16.85 15.75,16.65C13.4,15.2 10.45,14.9 6.95,15.7C6.6,15.8 6.3,15.55 6.2,15.25C6.1,14.9 6.35,14.6 6.65,14.5C10.45,13.65 13.75,14 16.35,15.6C16.7,15.75 16.75,16.15 16.6,16.45M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z'], // Spotify
    ['#1877F2', 'M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z'], // Facebook
    ['#1DA1F2', 'M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.70,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z'], // Twitter
    ['#9146FF', 'M11.64 5.93h1.43v4.28h-1.43m3.93-4.28H17v4.28h-1.43M7 2L3.43 5.57v12.86h4.28V22l3.58-3.57h2.85L20.57 12V2m-1.43 9.29l-2.85 2.85h-2.86l-2.5 2.5v-2.5H7.71V3.43h11.43Z'], // Twitch
    ['#5865F2', 'M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z'], // Discord
    ['#0077B5', 'M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z'], // LinkedIn
    ['#0088CC', 'M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z'], // Telegram
    ['#E60023', 'M9.04,21.54C10,21.83 10.97,22 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12C2,16.25 4.67,19.9 8.44,21.34C8.35,20.56 8.26,19.27 8.44,18.38L9.59,13.44C9.59,13.44 9.3,12.86 9.3,11.94C9.3,10.56 10.16,9.53 11.14,9.53C12,9.53 12.4,10.16 12.4,10.97C12.4,11.83 11.83,13.06 11.54,14.24C11.37,15.22 12.06,16.08 13.04,16.08C14.8,16.08 16.22,14.18 16.22,11.5C16.22,9.1 14.5,7.46 12.03,7.46C9.21,7.46 7.55,9.56 7.55,11.77C7.55,12.63 7.83,13.5 8.29,14.07C8.38,14.13 8.38,14.21 8.35,14.36L8.06,15.45C8.06,15.62 7.95,15.68 7.78,15.56C6.5,15 5.76,13.18 5.76,11.71C5.76,8.55 8,5.68 12.32,5.68C15.76,5.68 18.44,8.15 18.44,11.43C18.44,14.87 16.31,17.63 13.26,17.63C12.29,17.63 11.34,17.11 11,16.5L10.33,18.87C10.1,19.73 9.47,20.88 9.04,21.57V21.54Z'], // Pinterest
    ['#FF4500', 'M14.5 15.41C14.58 15.5 14.58 15.69 14.5 15.8C13.77 16.5 12.41 16.56 12 16.56C11.61 16.56 10.25 16.5 9.54 15.8C9.44 15.69 9.44 15.5 9.54 15.41C9.65 15.31 9.82 15.31 9.92 15.41C10.38 15.87 11.33 16 12 16C12.69 16 13.66 15.87 14.1 15.41C14.21 15.31 14.38 15.31 14.5 15.41M10.75 13.04C10.75 12.47 10.28 12 9.71 12C9.14 12 8.67 12.47 8.67 13.04C8.67 13.61 9.14 14.09 9.71 14.09C10.28 14.09 10.75 13.61 10.75 13.04M14.29 12C13.72 12 13.25 12.5 13.25 13.05C13.25 13.62 13.72 14.09 14.29 14.09C14.86 14.09 15.33 13.61 15.33 13.04C15.33 12.47 14.86 12 14.29 12M22 12C22 17.5 17.5 22 12 22S2 17.5 2 12C2 6.5 6.5 2 12 2S22 6.5 22 12M18.67 12C18.67 11.19 18 10.54 17.22 10.54C16.82 10.54 16.46 10.7 16.2 10.95C15.2 10.23 13.83 9.77 12.3 9.71L12.97 6.58L15.14 7.05C15.16 7.6 15.62 8.04 16.18 8.04C16.75 8.04 17.22 7.57 17.22 7C17.22 6.43 16.75 5.96 16.18 5.96C15.77 5.96 15.41 6.2 15.25 6.55L12.82 6.03C12.75 6 12.68 6.03 12.63 6.07C12.57 6.11 12.54 6.17 12.53 6.24L11.79 9.72C10.24 9.77 8.84 10.23 7.82 10.96C7.56 10.71 7.2 10.56 6.81 10.56C6 10.56 5.35 11.21 5.35 12C5.35 12.61 5.71 13.11 6.21 13.34C6.19 13.5 6.18 13.62 6.18 13.78C6.18 16 8.79 17.85 12 17.85C15.23 17.85 17.85 16.03 17.85 13.78C17.85 13.64 17.84 13.5 17.81 13.34C18.31 13.11 18.67 12.6 18.67 12Z'], // Reddit
    ['#FFFC00', 'M12.206,2.003h0a10.511,10.511,0,0,1,7.42,3.074,10.5,10.5,0,0,1,0,14.846,10.511,10.511,0,0,1-7.42,3.074h0a10.511,10.511,0,0,1-7.42-3.074,10.5,10.5,0,0,1,0-14.846A10.511,10.511,0,0,1,12.206,2.003M8.5,9.5A1.5,1.5,0,1,0,10,11,1.5,1.5,0,0,0,8.5,9.5m7,0A1.5,1.5,0,1,0,17,11,1.5,1.5,0,0,0,15.5,9.5M6.93,14.77c.11-.08.46-.32,1.44.07A5.24,5.24,0,0,0,12,16a5.24,5.24,0,0,0,3.63-1.16c.98-.39,1.33-.15,1.44-.07.52.38.21,1.17-.07,1.57A6.78,6.78,0,0,1,12,18.5a6.78,6.78,0,0,1-5-.16C6.72,15.94,6.41,15.15,6.93,14.77Z'], // Snapchat
    ['#FF6900', 'M21.93,12.7H21.87C21.88,12.47 21.9,12.24 21.9,12C21.9,11.76 21.88,11.53 21.87,11.3H21.93C22.46,8.84 22.05,6.72 20.86,5.36C19.68,4 17.78,3.43 15.34,3.69C13.85,1.95 12.07,1 10,1C7.93,1 6.15,1.95 4.66,3.69C2.22,3.43 0.32,4 -0.86,5.36C-2.05,6.72 -2.46,8.84 -1.93,11.3H-1.87C-1.88,11.53 -1.9,11.76 -1.9,12C-1.9,12.24 -1.88,12.47 -1.87,12.7H-1.93C-2.46,15.16 -2.05,17.28 -0.86,18.64C0.32,20 2.22,20.57 4.66,20.31C6.15,22.05 7.93,23 10,23C12.07,23 13.85,22.05 15.34,20.31C17.78,20.57 19.68,20 20.86,18.64C22.05,17.28 22.46,15.16 21.93,12.7M20.27,17.5C19.5,18.45 18.09,18.85 16.15,18.66C15.57,17.67 14.84,16.74 14,15.92L14.25,14.77C15.52,15.97 16.62,17.31 17.38,18.71C18.64,18.63 19.38,18.28 19.72,17.71C20.27,16.84 20.08,15.42 19.25,13.64C18.33,11.66 16.76,9.76 14.79,8.23L14,8.77L13.21,8.23C11.24,9.76 9.67,11.66 8.75,13.64C7.92,15.42 7.73,16.84 8.28,17.71C8.66,18.32 9.46,18.7 10.8,18.69C10.82,18.89 10.86,19.08 10.9,19.27C9.12,19.39 7.86,19.09 7.04,18.31C6,17.31 5.65,15.59 6.05,13.39C5.59,11.45 5.76,9.9 6.55,8.88C7.35,7.88 8.76,7.42 10.66,7.59C10.94,7.3 11.22,7 11.5,6.74C9.87,6.43 8.64,6.57 7.89,7.15C7,7.85 6.58,9.05 6.62,10.75L6.46,10.92C4.9,10.64 3.85,10.85 3.3,11.59C2.77,12.3 2.76,13.44 3.23,14.94C4.17,18.03 6.13,20.42 8.91,21.53C11.68,22.64 14.88,22.32 17.5,20.67C19.54,19.38 20.86,17.5 21.28,15.09C21.31,14.95 21.32,14.82 21.34,14.68C21.23,15.71 20.88,16.67 20.27,17.5Z'] // Threads
  ];

  const trustedHTML = `
    <div style="
      background: linear-gradient(135deg, #F8F9FF 0%, #FFFFFF 50%, #F0F4FF 100%);
      padding: 32px 0;
      margin: 0;
      border-top: 1px solid rgba(0, 102, 255, 0.08);
      border-bottom: 1px solid rgba(0, 102, 255, 0.08);
      position: relative;
      overflow: hidden;
    ">
      <!-- Decorative blur circles -->
      <div style="
        position: absolute;
        top: -50px;
        left: 10%;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(0, 102, 255, 0.06), transparent 70%);
        border-radius: 50%;
        filter: blur(40px);
        pointer-events: none;
      "></div>
      <div style="
        position: absolute;
        bottom: -50px;
        right: 10%;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(0, 166, 126, 0.06), transparent 70%);
        border-radius: 50%;
        filter: blur(40px);
        pointer-events: none;
      "></div>
      
      <div style="max-width: 1400px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 1;">
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="
            display: inline-block;
            padding: 6px 16px;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(0, 102, 255, 0.15);
            border-radius: 50px;
            margin-bottom: 8px;
          ">
            <span style="
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              background: linear-gradient(135deg, #0066FF, #00A67E);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            ">TRUSTED BY INDUSTRY LEADERS</span>
          </div>
          <p style="
            color: #666;
            font-size: 15px;
            margin: 0;
            font-weight: 500;
          ">Powering growth on <strong style="color: #0066FF;">15+ platforms</strong> for <strong style="color: #00A67E;">2,500+ agencies</strong> worldwide</p>
        </div>
        
        <div style="overflow: hidden; position: relative;">
          <!-- Gradient masks -->
          <div style="
            position: absolute;
            top: 0;
            left: 0;
            width: 120px;
            height: 100%;
            background: linear-gradient(90deg, #F8F9FF 0%, transparent 100%);
            z-index: 2;
            pointer-events: none;
          "></div>
          <div style="
            position: absolute;
            top: 0;
            right: 0;
            width: 120px;
            height: 100%;
            background: linear-gradient(270deg, #F8F9FF 0%, transparent 100%);
            z-index: 2;
            pointer-events: none;
          "></div>
          
          <div style="
            display: flex;
            align-items: center;
            gap: 48px;
            animation: scroll 80s linear infinite;
            will-change: transform;
          ">
            <style>
              @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            </style>
            <div style="display: flex; gap: 48px; flex-shrink: 0;" id="logosContainer"></div>
            <div style="display: flex; gap: 48px; flex-shrink: 0;" aria-hidden="true" id="logosContainer2"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  const mainContent = document.querySelector('main') || document.body;
  mainContent.insertAdjacentHTML('beforeend', trustedHTML);

  const container1 = document.getElementById('logosContainer');
  const container2 = document.getElementById('logosContainer2');

  logos.forEach(([color, path]) => {
    const logoHTML = `
      <div style="
        width: 48px;
        height: 48px;
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(0, 0, 0, 0.06);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
      " onmouseover="this.style.transform='translateY(-4px) scale(1.1)'; this.style.boxShadow='0 8px 24px rgba(0, 102, 255, 0.15)'; this.style.borderColor='rgba(0, 102, 255, 0.3)';" onmouseout="this.style.transform=''; this.style.boxShadow='0 2px 8px rgba(0, 0, 0, 0.04)'; this.style.borderColor='rgba(0, 0, 0, 0.06)';">
        <svg style="width: 28px; height: 28px; opacity: 0.85;" viewBox="0 0 24 24" fill="${color}">
          <path d="${path}"/>
        </svg>
      </div>
    `;
    container1.insertAdjacentHTML('beforeend', logoHTML);
    container2.insertAdjacentHTML('beforeend', logoHTML);

  });
   // === STATS MARQUEE DIAGONAL ===
  setTimeout(() => {
    const servicesSection = Array.from(document.querySelectorAll('div')).find(div => 
      div.textContent.includes('Top Selling') || div.textContent.includes('Premium Services')
    );
    
    if (servicesSection) {
      servicesSection.insertAdjacentHTML('afterend', `
        <div class="stats-marquee-wrapper">
          <div class="stats-marquee">
            <div class="stats-marquee-track">
              <span class="stats-marquee-item">
                <span class="stats-marquee-icon">⚡</span> 24/7 Live Support
              </span>
              <span class="stats-marquee-item">
                <span class="stats-marquee-icon">★</span> 5,247 Premium Services
              </span>
              <span class="stats-marquee-item">
                <span class="stats-marquee-icon">⚡</span> &lt;200ms API Response
              </span>
              <span class="stats-marquee-item">
                <span class="stats-marquee-icon">★</span> 500K+ Orders Delivered
              </span>
              <span class="stats-marquee-item">
                <span class="stats-marquee-icon">⚡</span> 99.8% Uptime Guarantee
              </span>
              <span class="stats-marquee-item">
                <span class="stats-marquee-icon">★</span> Enterprise-Grade Security
              </span>
              
              <span class="stats-marquee-item">
                <span class="stats-marquee-icon">⚡</span> 24/7 Live Support
              </span>
              <span class="stats-marquee-item">
                <span class="stats-marquee-icon">★</span> 5,247 Premium Services
              </span>
              <span class="stats-marquee-item">
                <span class="stats-marquee-icon">⚡</span> &lt;200ms API Response
              </span>
              <span class="stats-marquee-item">
                <span class="stats-marquee-icon">★</span> 500K+ Orders Delivered
              </span>
              <span class="stats-marquee-item">
                <span class="stats-marquee-icon">⚡</span> 99.8% Uptime Guarantee
              </span>
              <span class="stats-marquee-item">
                <span class="stats-marquee-icon">★</span> Enterprise-Grade Security
              </span>
            </div>
          </div>
        </div>
      `);
    }
  }, 500);

  // === HOW IT WORKS TIMELINE ===
setTimeout(() => {
  const statsMarquee = document.querySelector('.stats-marquee-wrapper');
  
  if (statsMarquee) {
    statsMarquee.insertAdjacentHTML('afterend', `
      <section class="how-it-works-section">
        <div class="how-it-works-container">
          <div class="how-it-works-header">
            <h2 class="how-it-works-title">How It Works</h2>
            <p class="how-it-works-subtitle">Choose your path and follow simple steps to start growing your social media presence</p>
          </div>
          
          <div class="how-tabs">
            <button class="how-tab active" data-tab="getting-started">Getting Started</button>
            <button class="how-tab" data-tab="api-integration">API Integration</button>
            <button class="how-tab" data-tab="pricing-guide">Pricing Guide</button>
          </div>
          
          <div class="how-content active" data-content="getting-started">
            <div class="how-timeline">
              <div class="how-step">
                <div class="how-step-number">1</div>
                <div class="how-step-card">
                  <div class="how-step-title">
                    <div class="how-step-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    Create Account
                  </div>
                  <div class="how-step-description">Register in 30 seconds with email verification. No credit card required to start exploring our services.</div>
                </div>
              </div>
              
              <div class="how-step">
                <div class="how-step-number">2</div>
                <div class="how-step-card">
                  <div class="how-step-title">
                    <div class="how-step-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                        <line x1="1" y1="10" x2="23" y2="10"/>
                      </svg>
                    </div>
                    Add Funds
                  </div>
                  <div class="how-step-description">Multiple payment methods accepted: Credit Card, Crypto, PayPal. Secure transactions with instant balance updates.</div>
                </div>
              </div>
              
              <div class="how-step">
                <div class="how-step-number">3</div>
                <div class="how-step-card">
                  <div class="how-step-title">
                    <div class="how-step-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    </div>
                    Select Service
                  </div>
                  <div class="how-step-description">Browse 5,000+ services across 15 platforms. Filter by category, quality tier, and delivery speed to find your perfect match.</div>
                </div>
              </div>
              
              <div class="how-step">
                <div class="how-step-number">4</div>
                <div class="how-step-card">
                  <div class="how-step-title">
                    <div class="how-step-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 3v18h18"/>
                        <path d="M18 17V9"/>
                        <path d="M13 17V5"/>
                        <path d="M8 17v-3"/>
                      </svg>
                    </div>
                    Track Results
                  </div>
                  <div class="how-step-description">Real-time dashboard with live progress tracking. Get instant notifications and analytics for every order.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="how-content" data-content="api-integration">
            <div class="how-timeline">
              <div class="how-step">
                <div class="how-step-number">1</div>
                <div class="how-step-card">
                  <div class="how-step-title">
                    <div class="how-step-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                    Get API Key
                  </div>
                  <div class="how-step-description">Generate your unique API key from dashboard settings. Secure authentication with token-based access control.</div>
                </div>
              </div>
              
              <div class="how-step">
                <div class="how-step-number">2</div>
                <div class="how-step-card">
                  <div class="how-step-title">
                    <div class="how-step-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                      </svg>
                    </div>
                    Read Documentation
                  </div>
                  <div class="how-step-description">Comprehensive API docs with endpoints, parameters, and code examples. Rate limits: 1000 requests/hour included.</div>
                </div>
              </div>
              
              <div class="how-step">
                <div class="how-step-number">3</div>
                <div class="how-step-card">
                  <div class="how-step-title">
                    <div class="how-step-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="16 18 22 12 16 6"/>
                        <polyline points="8 6 2 12 8 18"/>
                      </svg>
                    </div>
                    Test Sandbox
                  </div>
                  <div class="how-step-description">Free testing environment with demo data. Validate integration before going live without spending credits.</div>
                </div>
              </div>
              
              <div class="how-step">
                <div class="how-step-number">4</div>
                <div class="how-step-card">
                  <div class="how-step-title">
                    <div class="how-step-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    Go Production
                  </div>
                  <div class="how-step-description">Deploy in minutes with 99.8% uptime guarantee. Enterprise-grade infrastructure handles millions of requests daily.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="how-content" data-content="pricing-guide">
            <div class="how-timeline">
              <div class="how-step">
                <div class="how-step-number">1</div>
                <div class="how-step-card">
                  <div class="how-step-title">
                    <div class="how-step-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                      </svg>
                    </div>
                    Quality Tiers
                  </div>
                  <div class="how-step-description">Premium vs Standard services clearly explained. Higher quality = real accounts, better retention, safer delivery methods.</div>
                </div>
              </div>
              
              <div class="how-step">
                <div class="how-step-number">2</div>
                <div class="how-step-card">
                  <div class="how-step-title">
                    <div class="how-step-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                        <polyline points="17 6 23 6 23 12"/>
                      </svg>
                    </div>
                    Volume Discounts
                  </div>
                  <div class="how-step-description">Bulk orders unlock better rates automatically. Save up to 30% on large packages with our tiered pricing system.</div>
                </div>
              </div>
              
              <div class="how-step">
                <div class="how-step-number">3</div>
                <div class="how-step-card">
                  <div class="how-step-title">
                    <div class="how-step-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    </div>
                    No Hidden Fees
                  </div>
                  <div class="how-step-description">Transparent pricing, what you see is what you get. No surprise charges, processing fees, or minimum deposits required.</div>
                </div>
              </div>
              
              <div class="how-step">
                <div class="how-step-number">4</div>
                <div class="how-step-card">
                  <div class="how-step-title">
                    <div class="how-step-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                    </div>
                    Flexible Budget
                  </div>
                  <div class="how-step-description">Start from just $1 and scale to enterprise. Pay-as-you-go model with no subscription fees or contracts.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `);
    
    // Tab switching logic
    const tabs = document.querySelectorAll('.how-tab');
    const contents = document.querySelectorAll('.how-content');
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;
        
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        document.querySelector(`[data-content="${targetTab}"]`).classList.add('active');
      });
    });
  }
}, 600);
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
        background: linear-gradient(135deg, #0066FF, #0052CC) !important;
        color: #FFFFFF !important;
        text-align: center;
        border-radius: 12px;
        text-decoration: none;
        font-weight: 700 !important;
        font-size: 16px !important;
        transition: all 0.3s;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 16px rgba(0, 102, 255, 0.25);
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
      }
      
      .service-cta:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0, 102, 255, 0.35);
        color: #FFFFFF !important;
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
        <div class="service-card" style="--card-color-1: #000000; --card-color-2: #EE1D52;">
          <div class="service-header">
            <span class="badge" style="color: #000000;">⚡ POPULAR</span>
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
              <div class="service-price-value">$0.25<span style="font-size: 18px; opacity: 1; font-weight: 600; color: #000000">/1000</span></div>
            </div>
            <a href="/services" class="service-cta">Explore Services →</a>
          </div>
        </div>
        
        <!-- Instagram -->
        <div class="service-card" style="--card-color-1: #F58529; --card-color-2: #DD2A7B;">
          <div class="service-header">
            <span class="badge" style="color: #E4405F;">🔥 HOT</span>
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
              <div class="service-price-value">$0.50<span style="font-size: 18px; opacity: 1; font-weight: 600; color: #E4405F">/1000</span></div>
            </div>
            <a href="/services" class="service-cta">Explore Services →</a>
          </div>
        </div>
        
        <!-- YouTube -->
        <div class="service-card" style="--card-color-1: #FF0000; --card-color-2: #CC0000;">
          <div class="service-header">
            <span class="badge" style="color: #FF0000;">✓ VERIFIED</span>
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
              <div class="service-price-value">$15.00<span style="font-size: 18px; opacity: 1; font-weight: 600; color: #FF0000">/1000</span></div>
            </div>
            <a href="/services" class="service-cta">Explore Services →</a>
          </div>
        </div>
        
        <!-- Spotify -->
        <div class="service-card" style="--card-color-1: #1DB954; --card-color-2: #1ED760;">
          <div class="service-header">
            <span class="badge" style="color: #1DB954;">🎵 TRENDING</span>
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
              <div class="service-price-value">$1.20<span style="font-size: 18px; opacity: 1; font-weight: 600; color: #1DB954">/1000</span></div>
            </div>
            <a href="/services" class="service-cta">Explore Services →</a>
          </div>
        </div>
        
        <!-- Facebook -->
        <div class="service-card" style="--card-color-1: #1877F2; --card-color-2: #0D65D9;">
          <div class="service-header">
            <span class="badge" style="color: #1877F2;">⭐ TRUSTED</span>
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
              <div class="service-price-value">$0.75<span style="font-size: 18px; opacity: 1; font-weight: 600; color: #1877F2">/1000</span></div>
            </div>
            <a href="/services" class="service-cta">Explore Services →</a>
          </div>
        </div>
        
        <!-- Twitter/X -->
        <div class="service-card" style="--card-color-1: #1DA1F2; --card-color-2: #0C85D0;">
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
              <div class="service-price-value">$0.80<span style="font-size: 18px; opacity: 1; font-weight: 600; color: #1DA1F2">/1000</span></div>
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

// =============================================================================
// 3. MOBILE RESPONSIVE FIX
// =============================================================================

setTimeout(() => {
  const mobileFix = document.createElement('style');
  mobileFix.textContent = `
    /* ================================================================== */
    /* MOBILE RESPONSIVE FIX - Hero Section */
    /* ================================================================== */

    @media (max-width: 1200px) {
      .hero-content {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }

      .hero-title {
        font-size: 42px !important;
      }

      .hero-dashboard-preview {
        max-width: 600px !important;
        margin: 0 auto !important;
      }


    }

    @media (max-width: 768px) {
      /* Hero Section */
      .hero-premium {
        padding: 60px 16px 50px !important;
      }

      .hero-badge {
        font-size: 11px !important;
        padding: 6px 16px !important;
        margin-bottom: 20px !important;
      }

      .hero-title {
        font-size: 32px !important;
        line-height: 1.15 !important;
        margin-bottom: 20px !important;
      }

      .hero-subtitle {
        font-size: 16px !important;
        line-height: 1.5 !important;
        margin-bottom: 28px !important;
      }

      .hero-cta-group {
        flex-direction: column !important;
        gap: 12px !important;
        margin-bottom: 32px !important;
      }

      .hero-cta-primary,
      .hero-cta-secondary {
        width: 100% !important;
        justify-content: center !important;
        padding: 16px 28px !important;
        font-size: 16px !important;
      }

      .hero-stats {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
        padding: 24px 20px !important;
      }

      .hero-stat-value {
        font-size: 32px !important;
      }

      .hero-stat-label {
        font-size: 13px !important;
      }

      .hero-dashboard-preview {
        border-radius: 12px !important;
        max-width: 100% !important;
      }

      /* Cacher floating badges sur mobile */

      /* Trust Bar */
      .stats-marquee-wrapper {
        margin: 40px 0 !important;
      }

      .stats-marquee-item {
        font-size: 13px !important;
        padding: 0 20px !important;
      }

      /* Timeline */
      .how-it-works-section {
        padding: 50px 16px !important;
      }

      .how-it-works-title {
        font-size: 28px !important;
      }

      .how-it-works-subtitle {
        font-size: 15px !important;
      }

      .how-tabs {
        gap: 8px !important;
        margin-bottom: 32px !important;
      }

      .how-tab {
        padding: 10px 20px !important;
        font-size: 14px !important;
      }

      .how-timeline {
        padding-left: 50px !important;
      }

      .how-timeline::before {
        left: 14px !important;
      }

      .how-step-number {
        left: -50px !important;
        width: 36px !important;
        height: 36px !important;
        font-size: 16px !important;
      }

      .how-step-card {
        padding: 16px 18px !important;
      }

      .how-step-title {
        font-size: 16px !important;
      }

      .how-step-icon {
        width: 36px !important;
        height: 36px !important;
      }

      .how-step-description {
        font-size: 14px !important;
        line-height: 1.5 !important;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 28px !important;
      }

      .hero-subtitle {
        font-size: 15px !important;
      }

      .hero-cta-primary,
      .hero-cta-secondary {
        font-size: 15px !important;
        padding: 14px 24px !important;
      }

      .hero-stats {
        padding: 20px 16px !important;
      }

      .stats-marquee-item {
        font-size: 12px !important;
        padding: 0 16px !important;
      }

      .how-timeline {
        padding-left: 45px !important;
      }

      .how-step-number {
        left: -45px !important;
        width: 32px !important;
        height: 32px !important;
        font-size: 14px !important;
      }
    }
  `;

  document.head.appendChild(mobileFix);
  console.log('[GENUINE] ✅ Mobile fix applied');
}, 600);

 <script>
document.addEventListener("DOMContentLoaded", function() {
    var balanceBtn = document.querySelector("#block_1 .component_private_navbar .component-navbar-balance-item__navbar-private");
    if (balanceBtn) {
        balanceBtn.addEventListener("click", function() {
            window.location.href = "https://genuinepromotion.com/addfunds";
        });
    }
});
</script>
})(); // End IIFE wrapper
