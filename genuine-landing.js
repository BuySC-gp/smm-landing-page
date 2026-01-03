// NEW ORDER PAGE - LAYOUT 50/50 (VERSION CORRIGÉE)
(function () {
  setTimeout(() => {
    // === DÉTECTION PAGE NEW ORDER (FIX APPARITION SUR AUTRES PAGES) ===
    const isNewOrderPage = document.querySelector('#block_206') ||
      document.querySelector('.new_order_block') ||
      document.querySelector('.row.new-order-form');

    if (!isNewOrderPage) {
      console.log('ℹ️ [NEW ORDER] Not on New Order page - skipping');
      return; // ← On sort du module
    }
    console.log('✅ [NEW ORDER] Detected - Layout 50/50 activating');

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

      // === DÉTECTION MOBILE ===
      const isMobile = window.innerWidth <= 768;
      console.log('📱 Mobile detected:', isMobile);

      // === 3. TRANSFORMER LE ROW - RESPONSIVE ===
      if (isMobile) {
        // MOBILE: Layout vertical empilé
        rowDiv.style.cssText = `
display: flex !important;
flex-direction: column !important;
gap: 16px !important;
width: 100% !important;
max-width: 100% !important;
padding: 16px !important;
box-sizing: border-box !important;
`;
      } else {
        // DESKTOP: Layout 50/50
        rowDiv.style.cssText = `
display: flex !important;
flex-wrap: nowrap !important;
gap: 24px !important;
width: 100% !important;
max-width: 100% !important;
padding: 24px !important;
box-sizing: border-box !important;
`;
      }

      // === 4. COLUMN GAUCHE - RESPONSIVE ===
      if (colDiv) {
        if (isMobile) {
          colDiv.style.cssText = `
flex: none !important;
max-width: 100% !important;
width: 100% !important;
padding: 0 !important;
order: 0 !important;
`;
        } else {
          colDiv.style.cssText = `
flex: 0 0 50% !important;
max-width: 50% !important;
width: 50% !important;
padding: 0 !important;
`;
        }
      }

      // === 5. STYLE DU FORM ===
      form.style.cssText = `
width: 100% !important;
background: white !important;
border-radius: 12px !important;
padding: ${isMobile ? '16px' : '32px'} !important;
box-shadow: 0 4px 20px rgba(0,0,0,0.06) !important;
border: 1px solid #e5e7eb !important;
box-sizing: border-box !important;
`;

      // === 6. CRÉER PANEL DROIT - RESPONSIVE ===
      let rightPanel = document.getElementById('order-info-panel');
      if (!rightPanel) {
        rightPanel = document.createElement('div');
        rightPanel.id = 'order-info-panel';

        // Sur mobile: insérer APRÈS colDiv (pour que le formulaire soit en premier)
        // Sur desktop: simplement ajouter à la fin
        if (isMobile && colDiv && colDiv.nextSibling) {
          rowDiv.insertBefore(rightPanel, colDiv.nextSibling);
        } else if (isMobile && colDiv) {
          rowDiv.appendChild(rightPanel);
        } else {
          rowDiv.appendChild(rightPanel);
        }
        console.log('✅ Right panel created and inserted');
      }

      if (isMobile) {
        // Mobile: Full width, formulaire EN PREMIER (order: 0), info panel EN SECOND (order: 1)
        if (colDiv) {
          colDiv.style.cssText = `
flex: none !important;
max-width: 100% !important;
width: 100% !important;
padding: 0 !important;
margin: 0 8px !important;
order: 0 !important;
background: transparent !important;
border: none !important;
box-shadow: none !important;
`;
        }

        rightPanel.style.cssText = `
flex: none !important;
max-width: 100% !important;
width: 100% !important;
background: white !important;
border-radius: 12px !important;
box-shadow: 0 4px 20px rgba(0,0,0,0.06) !important;
border: 1px solid #e5e7eb !important;
overflow: hidden !important;
display: flex !important;
flex-direction: column !important;
box-sizing: border-box !important;
order: 1 !important;
margin-top: 16px !important;
margin-left: 8px !important;
margin-right: 8px !important;
`;
      } else {
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
      }

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
          tab.addEventListener('click', function () {
            tabs.forEach(t => {
              t.style.color = '#6b7280';
              t.style.background = 'none';
              t.style.borderBottom = 'none';
            });

            this.style.color = '#0066FF';
            this.style.background = 'white';
            this.style.borderBottom = '2px solid #0066FF';

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

      // === 10. FORM STYLING CORRIGÉ (FIX SEARCH PADDING) ===
      const inputs = form.querySelectorAll('input, select, textarea');
      inputs.forEach(input => {
        // On vérifie si c'est le champ recherche
        const isSearch = input.getAttribute('placeholder')?.toLowerCase().includes('search') ||
          input.id?.includes('search') ||
          input.name?.includes('search');
        input.style.cssText = `
        width: 100% !important;
        padding: 10px 12px !important;
        ${isSearch ? 'padding-left: 40px !important;' : ''} /* <--- LE FIX EST ICI */
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
background: linear-gradient(135deg, #0047AB, #0066FF) !important;
box-shadow: 0 4px 12px rgba(0, 71, 171, 0.3) !important; /* Ombre bleue assortie */
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

  /* MODULE: QUICK CATEGORY SELECTORS — VERSION DYNAMIQUE */
  (function () {
    // === DÉTECTION PAGE NEW ORDER ===
    const isNewOrderPage = document.querySelector('#block_206') ||
      document.querySelector('.new_order_block') ||
      document.querySelector('.row.new-order-form');

    if (!isNewOrderPage) {
      console.log('ℹ️ [QUICK SELECTORS] Not on New Order page - skipping');
      return;
    }
    console.log('✅ [QUICK SELECTORS] Detected - Building dynamic buttons');

    // === CONFIGURATION DES ICÔNES SVG PAR PLATEFORME ===
    const platformIcons = {
      'instagram': { color: '#E4405F', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/></svg>' },
      'tiktok': { color: '#000000', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>' },
      'youtube': { color: '#FF0000', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>' },
      'spotify': { color: '#1DB954', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.717.476-1.076.236-2.948-1.8-6.661-2.209-11.033-1.211-.428.093-.826-.165-.92-.583-.094-.419.165-.826.583-.92 4.795-1.096 8.956-.633 12.21 1.341.359.24.476.717.236 1.076zm1.534-3.414c-.302.494-.969.643-1.462.34-3.7-2.274-9.339-2.933-13.712-1.603-.541.164-1.121-.137-1.285-.678-.163-.54.137-1.121.678-1.285 4.966-1.511 11.235-.749 15.441 1.836.494.302.643.97.34 1.462zm.126-3.551c-4.437-2.634-11.751-2.876-15.996-1.587-.621.196-1.29-.153-1.487-.775-.196-.621.153-1.29.775-1.488 4.881-1.481 12.969-1.206 18.045 1.808.56.332.744 1.066.413 1.625-.332.559-1.066.744-1.625.413z"/></svg>' },
      'telegram': { color: '#0088CC', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>' },
      'twitter': { color: '#1DA1F2', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>' },
      'facebook': { color: '#1877F2', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>' },
      'twitch': { color: '#9146FF', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>' },
      'discord': { color: '#5865F2', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg>' },
      'linkedin': { color: '#0A66C2', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>' },
      'soundcloud': { color: '#FF5500', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.054-.048-.1-.084-.1zm-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c.014.057.045.094.09.094s.089-.037.099-.094l.194-1.308-.194-1.332c-.01-.057-.044-.094-.09-.094z"/></svg>' },
      'favorite': { color: '#f59e0b', icon: '⭐' },
      'default': { color: '#6b7280', icon: '📱' }
    };

    // === FONCTION: Récupérer l'icône pour une catégorie ===
    function getIconForCategory(categoryName) {
      const name = categoryName.toLowerCase();
      for (const [platform, data] of Object.entries(platformIcons)) {
        if (name.includes(platform)) {
          return data;
        }
      }
      return platformIcons.default;
    }

    // === FONCTION: Extraire les catégories depuis le <select> natif + icônes du Select2 ===
    function extractCategoriesFromSelect() {
      const select = document.querySelector('select[name*="category"], #category');
      if (!select) return [];

      // Map des icônes par INDEX (plus fiable que par texte)
      const iconByIndex = {};

      // Chercher les options Select2 déjà rendues
      const select2Options = document.querySelectorAll('.select2-results__option');
      select2Options.forEach((opt, idx) => {
        const iconContainer = opt.querySelector('.select2-selection__icon');
        if (iconContainer) {
          // Extraire l'icône (img ou span avec classe fa)
          const imgEl = iconContainer.querySelector('img');
          const faEl = iconContainer.querySelector('[class*="fa-"]');

          if (imgEl) {
            iconByIndex[idx] = imgEl.outerHTML;
          } else if (faEl) {
            iconByIndex[idx] = faEl.outerHTML;
          }
        }
      });

      console.log('🔍 [QUICK SELECTORS] Icons extracted:', Object.keys(iconByIndex).length);

      const categories = [];
      for (let i = 0; i < select.options.length; i++) {
        const option = select.options[i];
        const text = option.text.trim();
        if (text) {
          let iconHtml = null;
          let iconColor = '#6b7280';

          // CAS SPÉCIAL: Forcer icône étoile pour "Favorites" (index 0)
          if (i === 0 && text.toLowerCase().includes('favorite')) {
            iconHtml = '⭐';
            iconColor = '#f59e0b';
          }
          // Sinon: chercher par index dans le map Select2
          else if (iconByIndex[i]) {
            iconHtml = iconByIndex[i];
          }

          // Fallback: utiliser nos icônes par défaut
          if (!iconHtml) {
            const fallbackData = getIconForCategory(text);
            iconHtml = fallbackData.icon;
            iconColor = fallbackData.color;
          }

          categories.push({
            name: text,
            index: i,
            color: iconColor,
            icon: iconHtml
          });
        }
      }
      return categories;
    }

    // === FONCTION: Création d'un bouton ===
    function createButton(category, isFirst = false) {
      const btn = document.createElement('button');
      btn.className = 'quick-selector-btn';
      btn.dataset.index = category.index;
      btn.style.cssText = `
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 20px;
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 600;
        color: #4b5563;
        cursor: pointer;
        white-space: nowrap;
        transition: all 0.2s ease;
        box-shadow: 0 2px 6px rgba(0,0,0,0.03);
      `;

      // Icône - contraindre la taille des images
      const iconSpan = document.createElement('span');
      iconSpan.innerHTML = category.icon;
      iconSpan.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        min-width: 20px;
        max-width: 20px;
        overflow: hidden;
        flex-shrink: 0;
        color: ${category.color};
        ${category.icon.startsWith('<') ? '' : 'font-size: 16px;'}
      `;

      // Appliquer les styles aux images et SVG enfants
      const imgChild = iconSpan.querySelector('img');
      const svgChild = iconSpan.querySelector('svg');
      const faChild = iconSpan.querySelector('[class*="fa-"]');

      if (imgChild) {
        imgChild.style.cssText = 'width: 20px; height: 20px; object-fit: contain; border-radius: 4px;';
      }
      if (svgChild) {
        svgChild.style.cssText = 'width: 20px; height: 20px;';
      }
      if (faChild) {
        faChild.style.cssText = 'font-size: 16px;';
      }

      btn.appendChild(iconSpan);

      // Label (renommer "Favorite services" en "⭐ Favorites")
      let displayName = category.name;
      if (category.name.toLowerCase().includes('favorite')) {
        displayName = 'Favorites';
      }
      btn.appendChild(document.createTextNode(displayName));

      // Hover effects
      btn.onmouseenter = () => {
        btn.style.borderColor = category.color;
        btn.style.color = '#1f2937';
        btn.style.transform = 'translateY(-2px)';
        btn.style.boxShadow = '0 6px 12px rgba(0,0,0,0.08)';
      };
      btn.onmouseleave = () => {
        btn.style.borderColor = '#e5e7eb';
        btn.style.color = '#4b5563';
        btn.style.transform = 'translateY(0)';
        btn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)';
      };

      // Click action
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        this.style.transform = 'scale(0.95)';
        setTimeout(() => this.style.transform = 'translateY(-2px)', 150);

        const select = document.querySelector('select[name*="category"], #category');
        if (select) {
          select.selectedIndex = parseInt(this.dataset.index);
          select.dispatchEvent(new Event('change', { bubbles: true }));
          console.log(`✅ Quick Selector: Switched to "${category.name}" (index ${category.index})`);
        }
      });

      return btn;
    }

    // === INJECTION PRINCIPALE ===
    function injectQuickSelectors() {
      // Éviter doublons
      if (document.getElementById('quick-selectors-bar')) return;

      const rowDiv = document.querySelector('.row.new-order-form') ||
        document.querySelector('form')?.closest('.row');
      if (!rowDiv) return;

      // Ouvrir le Select2 pour extraire les icônes (mousedown fonctionne, pas click)
      const select2Selection = document.querySelector('.select2-container .select2-selection');
      if (select2Selection && !document.querySelector('.select2-results__option')) {
        // Simuler mousedown pour ouvrir le dropdown
        select2Selection.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

        // Attendre que les options soient rendues, puis extraire et refermer
        setTimeout(() => {
          const categories = extractCategoriesFromSelect();

          // Refermer le dropdown
          document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));

          if (categories.length === 0) {
            console.warn('⚠️ [QUICK SELECTORS] No categories found');
            return;
          }

          buildQuickSelectorsBar(rowDiv, categories);
        }, 300);
        return;
      }

      // Si le dropdown est déjà ouvert ou pas de Select2
      const categories = extractCategoriesFromSelect();
      if (categories.length === 0) {
        console.warn('⚠️ [QUICK SELECTORS] No categories found in select');
        return;
      }

      buildQuickSelectorsBar(rowDiv, categories);
    }

    // Fonction séparée pour construire la barre
    function buildQuickSelectorsBar(rowDiv, categories) {
      // Éviter doublons
      if (document.getElementById('quick-selectors-bar')) return;

      // Créer le wrapper
      const wrapper = document.createElement('div');
      wrapper.id = 'quick-selectors-bar';
      wrapper.style.cssText = `
        display: flex;
        gap: 10px;
        overflow-x: auto;
        padding: 4px 10px 16px 10px;
        margin-bottom: 24px;
        width: 100%;
        scrollbar-width: none;
        -ms-overflow-style: none;
      `;

      // Masquer la scrollbar
      const style = document.createElement('style');
      style.textContent = `#quick-selectors-bar::-webkit-scrollbar { display: none; }`;
      document.head.appendChild(style);

      // Créer les boutons dynamiquement
      categories.forEach((cat, idx) => {
        const btn = createButton(cat, idx === 0);
        wrapper.appendChild(btn);
      });

      // Insérer avant le formulaire
      if (rowDiv.parentNode) {
        rowDiv.parentNode.insertBefore(wrapper, rowDiv);
        console.log(`✅ [QUICK SELECTORS] Dynamic bar injected with ${categories.length} categories`);
      }
    }

    // Lancer après délai
    setTimeout(injectQuickSelectors, 600);
    setTimeout(injectQuickSelectors, 1500); // 2ème passe
  })();
})();

// =============================================================================
// FOOTER GLOBAL — TOUTES LES PAGES (PANEL + LANDING)
// =============================================================================
(function () {
  'use strict';

  // Éviter double injection
  if (document.getElementById('gp-footer-global')) {
    console.log('[GP] Footer déjà présent');
    return;
  }

  console.log('[GP] 🎯 Initialisation footer global...');

  // Détecter le contexte
  const hasSidebar = document.querySelector('.sidebar, .component_private_sidebar, .component-sidebar-wrapper');
  const hasSignup = document.querySelector('.block-signin-text .component_card');

  // Fonction d'injection du footer
  function injectFooter() {
    // Ajouter classes contextuelles
    if (hasSidebar) {
      document.body.classList.add('gp-has-sidebar');
    }
    if (hasSignup && !hasSidebar) {
      document.body.classList.add('gp-is-landing');
    }

    const footerHTML = `
    <!-- FOOTER MEGA -->
<div id="gp-footer-global" style="background: #F8F9FF; padding: 80px 20px 40px; color: #1a1a1a; border-top: 1px solid #e5e5e5; margin-top: 80px; clear: both;">
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
    #gp-footer-global a:hover { 
      color: #0066FF !important; 
      transform: translateX(4px); 
    }
    #gp-footer-global a[style*="width: 40px"]:hover { 
      transform: translateY(-2px); 
      box-shadow: 0 4px 12px rgba(0,102,255,0.2); 
      border-color: #0066FF; 
    }
    
    /* ADAPTATION SIDEBAR — CSS UNIQUEMENT */
    body.gp-has-sidebar #gp-footer-global {
      margin-left: 260px !important;
      width: calc(100% - 260px) !important;
      box-sizing: border-box !important;
    }
    
    /* Landing page : pleine largeur */
    body.gp-is-landing #gp-footer-global {
      margin-left: 0 !important;
      width: 100% !important;
    }
    
    /* Responsive Footer */
    @media (max-width: 1200px) {
      #gp-footer-global > div > div:first-of-type { 
        grid-template-columns: repeat(3, 1fr) !important; 
      }
    }
    
    @media (max-width: 768px) {
      /* Sur mobile, footer pleine largeur même avec sidebar */
      body.gp-has-sidebar #gp-footer-global {
        margin-left: 0 !important;
        width: 100% !important;
      }
      
      #gp-footer-global > div > div:first-of-type { 
        grid-template-columns: repeat(2, 1fr) !important; 
        gap: 40px !important; 
      }
      #gp-footer-global { 
        padding: 60px 20px 30px !important; 
      }
    }
    
    @media (max-width: 480px) {
      #gp-footer-global > div > div:first-of-type { 
        grid-template-columns: 1fr !important; 
      }
    }
  </style>
</div>
`;

    // INJECTION
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    console.log('✅ [GP] Footer global injecté (contexte: ' + (hasSidebar ? 'PANEL avec sidebar' : hasSignup ? 'LANDING' : 'AUTRE') + ')');
  }

  // LOGIQUE D'INJECTION CONDITIONNELLE
  if (hasSignup && !hasSidebar) {
    // === LANDING PAGE : attendre que les sections soient chargées ===
    console.log('[GP] Landing détectée → délai d\'injection footer...');
    setTimeout(injectFooter, 2000); // Attendre 2 secondes pour laisser le landing se charger
  } else {
    // === PANEL OU AUTRES PAGES : injection immédiate ===
    injectFooter();
  }

})();

// =============================================================================
// LANDING PAGE (APRES - SÉPARE)
// =============================================================================
(function () {
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
  document.addEventListener('DOMContentLoaded', function () {

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

      // AJOUT 2: Bouton toggle login - ouvre uniquement le popup
      const toggleBtn = document.getElementById('toggleLoginBtn');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          heroForm.style.display = 'block';
          heroForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
          // Le bouton de fermeture (croix) dans le popup gère la fermeture
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

  window.addEventListener('load', function () {
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

  window.addEventListener('load', function () {
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
    `;  // ← Fin de allSectionsHTML

    if (footer) {
      footer.insertAdjacentHTML('beforebegin', allSectionsHTML);
    } else {
      mainContent.insertAdjacentHTML('beforeend', allSectionsHTML);
    }

    console.log('✅ ALL sections loaded');
  }); // ← Fin de DOMContentLoaded

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

})(); // End IIFE wrapper

// =============================================================================
// MODULE 4: SERVICES PAGE — PREMIER V2 (ROYAL EDITION)
// =============================================================================
(function () {
  'use strict';

  // Configuration
  const CONFIG = {
    pageSize: 60, // Services per page
    containerId: 'gp-services-v2-container',
    styleId: 'gp-services-v2-css',
    selectors: {
      block: '#block_39',
      table: '#service-table-39',
      tableRows: '#service-table-39 tbody tr',
      nativeSearchRow: '#block_39 .row',
      // Selectors to force full width
      layoutContainers: '.wrapper-content, .wrapper-content__body, .container-fluid, .container'
    }
  };

  /**
   * Services Application Class
   */
  class ServicesApp {
    constructor() {
      this.state = {
        allServices: [],
        filteredServices: [],
        categories: [],
        currentCategory: 'All',
        currentPage: 1,
        searchTerm: '',
        totalServices: 0,
        platformCounts: {},
        categoryServiceCount: {},
        categoryIcons: {}
      };
      this.dom = {
        block: null,
        table: null,
        container: null,
        hero: null,
        toolbar: null,
        filters: null,
        grid: null,
        pagination: null
      };
    }

    init() {
      this.dom.block = document.querySelector(CONFIG.selectors.block);
      this.dom.table = document.querySelector(CONFIG.selectors.table);

      if (!this.dom.block || !this.dom.table) {
        setTimeout(() => this.init(), 1000);
        return;
      }

      if (this.dom.block.dataset.servicesV2 === 'true') {
        return;
      }

      this.dom.block.dataset.servicesV2 = 'true';

      this.forceFullWidth(); // Force full width via JS
      this.injectStyles();
      this.extractData();
      this.buildStructure();
      this.applyFilters();

      console.log('✅ [SERVICES V2] Royal Blue Edition Loaded.');
    }

    // Force full width by applying inline styles directly (bypasses CSS specificity issues)
    forceFullWidth() {
      // Cibler le wrapper principal qui contient la sidebar
      const wrapper = document.querySelector('.wrapper-sidebar-navbar');
      const wrapperContent = document.querySelector('.wrapper-content');
      const wrapperContentBody = document.querySelector('.wrapper-content__body');

      // Force les styles via setAttribute - AJOUTER overflow-x: hidden pour empêcher le débordement
      if (wrapper) {
        wrapper.setAttribute('style', 'width: 100vw !important; max-width: 100vw !important; overflow: visible !important;');
      }

      if (wrapperContent) {
        wrapperContent.setAttribute('style', 'width: 100% !important; max-width: 100% !important; flex: 1 1 auto !important; flex-grow: 1 !important; overflow: visible !important;');
      }

      if (wrapperContentBody) {
        wrapperContentBody.setAttribute('style', 'width: 100% !important; max-width: 100% !important; flex: 1 1 auto !important; overflow: visible !important;');
      }

      if (this.dom.block) {
        this.dom.block.setAttribute('style', 'width: 100% !important; max-width: 100% !important; overflow: visible !important;');
      }

      console.log('🔧 [SERVICES V2] forceFullWidth applied with overflow-x: hidden');
    }

    injectStyles() {
      if (document.getElementById(CONFIG.styleId)) return;

      const styles = `
                /* --- RESET & LAYOUT FIXES --- */
                .gp-hidden { display: none !important; }
                
                /* FORCE FULL WIDTH: Override parent containers */
                .wrapper-content,
                .wrapper-content__body {
                    width: 100% !important;
                    max-width: 100% !important;
                    flex: 1 1 100% !important;
                }
                
                /* FORCE FULL WIDTH: Override Bootstrap/Theme constraints for this block */
                #block_39 {
                    width: 100% !important;
                    max-width: 100% !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    flex: 0 0 100% !important;
                }
                
                /* Target parent containers if they are constraining width */
                #block_39 .container, 
                #block_39 .container-fluid {
                    max-width: none !important;
                    width: 100% !important;
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                }

                #gp-services-v2-container {
                    width: 100%;
                    max-width: 100%;
                    padding: 20px; /* Safe padding for content */
                    box-sizing: border-box;
                }

                /* --- HERO BANNER (ROYAL BLUE THEME) --- */
                .gp-hero-banner {
                    /* Authentic Royal Blue Gradient - Professional & Clean */
                    background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%);
                    border-radius: 12px;
                    padding: 40px;
                    margin-bottom: 32px;
                    position: relative;
                    overflow: hidden;
                    color: white;
                    box-shadow: 0 10px 30px rgba(30, 58, 138, 0.2);
                }
                
                /* Subtle abstract background pattern - High End feel */
                .gp-hero-bg {
                    position: absolute;
                    top: 0; right: 0; bottom: 0; left: 0;
                    background-image: 
                        radial-gradient(circle at 100% 0%, rgba(255,255,255,0.1) 0%, transparent 25%),
                        radial-gradient(circle at 0% 100%, rgba(255,255,255,0.05) 0%, transparent 30%);
                    pointer-events: none;
                }
                
                .gp-hero-content { position: relative; z-index: 1; }
                
                .gp-hero-title {
                    font-size: 38px;
                    font-weight: 800;
                    margin-bottom: 12px;
                    color: white;
                    letter-spacing: -0.5px;
                }
                .gp-hero-subtitle {
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 16px;
                    max-width: 700px;
                    margin-bottom: 32px;
                    line-height: 1.5;
                    font-weight: 400;
                }
                
                .gp-stats-row {
                    display: flex;
                    gap: 40px;
                    border-top: 1px solid rgba(255,255,255,0.1);
                    padding-top: 24px;
                }
                
                .gp-stat-item { display: flex; flex-direction: column; }
                .gp-stat-value { 
                    font-size: 28px; 
                    font-weight: 700; 
                    color: white; 
                    line-height: 1.1; 
                }
                .gp-stat-label { 
                    font-size: 11px; 
                    color: rgba(255,255,255,0.7); 
                    text-transform: uppercase; 
                    font-weight: 600; 
                    margin-top: 6px;
                    letter-spacing: 0.5px;
                }

                /* --- TOOLBAR --- */
                .gp-toolbar {
                    background: white;
                    padding: 8px;
                    border-radius: 12px;
                    border: 1px solid #e2e8f0;
                    margin-bottom: 24px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
                }
                
                .gp-search-container {
                    position: relative;
                    margin-bottom: 8px;
                    padding: 4px;
                }
                .gp-search-input {
                    width: 100%;
                    padding: 12px 16px 12px 44px;
                    border-radius: 8px;
                    border: 1px solid #e2e8f0;
                    background: #f8fafc;
                    font-size: 14px;
                    transition: all 0.2s;
                    color: #1e293b;
                }
                .gp-search-input:focus {
                    outline: none;
                    background: white;
                    border-color: #2563eb;
                    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
                }
                .gp-search-icon {
                    position: absolute;
                    left: 18px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #94a3b8;
                    pointer-events: none;
                }

                /* --- FILTERS --- */
                .gp-filters-scroll {
                    display: flex;
                    gap: 8px;
                    overflow-x: auto;
                    padding: 8px;
                    scrollbar-width: none;
                }
                .gp-filters-scroll::-webkit-scrollbar { display: none; }
                
                .gp-filter-btn {
                    padding: 8px 16px;
                    border-radius: 8px;
                    background: white;
                    border: 1px solid #e2e8f0;
                    color: #64748b;
                    font-weight: 600;
                    font-size: 13px;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: all 0.2s;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .gp-filter-btn img, .gp-filter-btn i {
                    width: 16px; height: 16px; object-fit: contain; font-style: normal;
                }
                
                .gp-filter-btn:hover { 
                    background: #f8fafc;
                    color: #1e293b;
                    border-color: #cbd5e1;
                }
                
                .gp-filter-btn.active {
                    background: #1e40af; /* Darker blue for active state */
                    border-color: #1e40af;
                    color: white;
                }
                .gp-filter-btn.active .gp-filter-count {
                    background: rgba(255,255,255,0.2);
                    color: white;
                }
                
                .gp-filter-count {
                    background: #f1f5f9;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 10px;
                    color: #64748b;
                    font-weight: 700;
                }

                /* --- GRID --- */
                .gp-services-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 20px;
                    margin-bottom: 40px;
                }

                .gp-card {
                    background: white;
                    border: 1px solid #e2e8f0;
                    border-radius: 12px;
                    padding: 20px;
                    position: relative;
                    transition: transform 0.2s, box-shadow 0.2s;
                    display: flex; flex-direction: column;
                }
                .gp-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px -5px rgba(0,0,0,0.05);
                    border-color: #93c5fd; /* Soft blue border on hover */
                }
                
                .gp-card-header { margin-bottom: 16px; }
                
                .gp-card-category {
                    display: inline-flex; align-items: center; gap: 6px;
                    font-size: 11px; font-weight: 700; color: #64748b;
                    text-transform: uppercase; margin-bottom: 8px;
                    padding: 4px 8px; background: #f1f5f9; border-radius: 6px;
                }
                .gp-card-category img, .gp-card-category i { width: 14px; height: 14px; object-fit: contain; font-style: normal; }

                .gp-card-badges {
                    position: absolute; top: 20px; right: 20px;
                    display: flex; gap: 6px;
                }
                .gp-badge {
                    font-size: 9px; font-weight: 800; padding: 3px 8px;
                    border-radius: 4px; text-transform: uppercase; letter-spacing: 0.5px;
                }
                .gp-badge-id { background: transparent; border: 1px solid #e2e8f0; color: #94a3b8; }
                .gp-badge-hot { background: #fee2e2; color: #dc2626; border: 1px solid #fecaca; }
                .gp-badge-best { background: #fef3c7; color: #d97706; border: 1px solid #fde68a; }
                
                .gp-card-title {
                    font-size: 15px; font-weight: 700; color: #1e293b;
                    line-height: 1.4; margin: 0;
                    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
                    height: 42px;
                }

                .gp-card-meta {
                    display: grid; grid-template-columns: 1fr 1fr; gap: 0;
                    background: #f8fafc; border-radius: 8px; 
                    margin-bottom: 16px; overflow: hidden;
                    border: 1px solid #f1f5f9;
                }
                .gp-meta-col { 
                    display: flex; flex-direction: column; padding: 10px 12px;
                }
                .gp-meta-col:first-child { border-right: 1px solid #e2e8f0; }
                
                .gp-meta-lbl { font-size: 9px; color: #94a3b8; font-weight: 700; text-transform: uppercase; margin-bottom: 2px; }
                .gp-meta-val { font-size: 13px; font-weight: 700; color: #334155; }
                .gp-price { color: #2563eb; }

                .gp-btn-view {
                    margin-top: auto;
                    width: 100%; padding: 10px;
                    background: white; 
                    border: 1px solid #cbd5e1;
                    border-radius: 8px; 
                    color: #334155; 
                    font-weight: 600; font-size: 13px;
                    cursor: pointer; transition: all 0.2s;
                    display: flex; justify-content: center; align-items: center; gap: 6px;
                }
                .gp-btn-view:hover {
                    background: #1e40af;
                    border-color: #1e40af;
                    color: white;
                }

                .gp-pagination { display: flex; justify-content: center; gap: 6px; margin-top: 32px; }
                .gp-page-btn {
                    width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;
                    border-radius: 8px; border: 1px solid #e2e8f0; background: white;
                    color: #64748b; font-weight: 600; font-size: 13px; cursor: pointer;
                    transition: all 0.2s;
                }
                .gp-page-btn.active { background: #1e3a8a; color: white; border-color: #1e3a8a; }
                .gp-page-btn:hover:not(:disabled) { border-color: #94a3b8; color: #1e293b; }
                .gp-page-btn:disabled { opacity: 0.5; }

                @media (max-width: 768px) {
                    .gp-services-grid { grid-template-columns: 1fr; }
                    .gp-hero-banner { padding: 32px 24px; }
                    .gp-hero-title { font-size: 32px; }
                    .gp-stats-row { flex-wrap: wrap; gap: 20px; }
                }
            `;
      const styleEl = document.createElement('style');
      styleEl.id = CONFIG.styleId;
      styleEl.textContent = styles;
      document.head.appendChild(styleEl);
    }

    extractData() {
      const rows = Array.from(document.querySelectorAll(CONFIG.selectors.tableRows));
      let currentCategory = "Other";

      this.state.allServices = rows.reduce((acc, row) => {
        // Category Row
        if (row.classList.contains('services-list-category-title') || row.querySelector('strong')) {
          const text = row.textContent.trim();
          if (text.length > 2) {
            currentCategory = text.replace(/[\n\r\t]/g, '').trim();
            const iconEl = row.querySelector('img, i, svg');
            if (iconEl && !this.state.categoryIcons[currentCategory]) {
              this.state.categoryIcons[currentCategory] = iconEl.outerHTML;
            }

            if (!this.state.categories.includes(currentCategory)) {
              this.state.categories.push(currentCategory);
              this.state.platformCounts[currentCategory] = 0;
              this.state.categoryServiceCount[currentCategory] = 0;
            }
          }
          return acc;
        }

        // Service Row
        const serviceId = row.dataset.filterTableServiceId ||
          row.querySelector('td[data-label="ID"]')?.textContent.trim() ||
          null;
        const rateCell = row.querySelector('[data-label="Rate per 1000"]');

        if (serviceId || rateCell) {
          const buyBtn = row.querySelector('.btn-primary, .btn-action, button, a[href*="order"]');
          const nameCell = row.querySelector('[data-label="Service"]');
          const name = nameCell ? nameCell.textContent.trim() : 'Unknown Service';
          const min = row.querySelector('[data-label="Min order"]')?.textContent.trim() || '0';
          const max = row.querySelector('[data-label="Max order"]')?.textContent.trim() || '∞';
          const rate = rateCell ? rateCell.textContent.trim() : 'N/A';

          this.state.platformCounts[currentCategory]++;

          const catIndex = this.state.categoryServiceCount[currentCategory] || 0;
          let badge = null;
          if (catIndex === 0) badge = { text: 'POPULAR', class: 'gp-badge-hot' };
          // else if (catIndex === 1) badge = { text: 'BEST', class: 'gp-badge-best' };

          this.state.categoryServiceCount[currentCategory] = catIndex + 1;

          acc.push({
            id: serviceId || 'N/A',
            name: name,
            category: currentCategory,
            rate: rate,
            min: min,
            max: max,
            badge: badge,
            originalRow: row,
            nativeBtn: buyBtn
          });
        }
        return acc;
      }, []);

      this.state.totalServices = this.state.allServices.length;
    }

    buildStructure() {
      // HIDE Native Search
      const nativeRow = document.querySelector(CONFIG.selectors.nativeSearchRow);
      if (nativeRow) {
        nativeRow.classList.add('gp-hidden');

        const nativeFilterItems = nativeRow.querySelectorAll('.dropdown-item, .btn-group button, option, li');
        nativeFilterItems.forEach(item => {
          const txt = item.textContent.trim();
          const icon = item.querySelector('img, i, svg');
          if (txt && icon) {
            const matchedCat = this.state.categories.find(c => c.toLowerCase().includes(txt.toLowerCase()) || txt.toLowerCase().includes(c.toLowerCase()));
            if (matchedCat && !this.state.categoryIcons[matchedCat]) {
              this.state.categoryIcons[matchedCat] = icon.outerHTML;
            }
          }
        });
      }

      const tableWrapper = this.dom.table.closest('.table-responsive, .table-wr');
      if (tableWrapper) tableWrapper.classList.add('gp-hidden');

      // --- CONTAINER ---
      this.dom.container = document.createElement('div');
      this.dom.container.id = CONFIG.containerId;

      // Hero
      this.dom.hero = document.createElement('div');
      this.dom.hero.className = 'gp-hero-banner';
      this.renderHero();

      // Toolbar
      this.dom.toolbar = document.createElement('div');
      this.dom.toolbar.className = 'gp-toolbar';

      const searchContainer = document.createElement('div');
      searchContainer.className = 'gp-search-container';
      searchContainer.innerHTML = `
                <div class="gp-search-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
            `;
      const searchInput = document.createElement('input');
      searchInput.type = 'text';
      searchInput.className = 'gp-search-input';
      searchInput.placeholder = 'Search for services...';
      searchInput.addEventListener('input', (e) => {
        this.state.searchTerm = e.target.value.toLowerCase();
        this.state.currentPage = 1;
        this.applyFilters();
      });
      searchContainer.appendChild(searchInput);

      this.dom.filters = document.createElement('div');
      this.dom.filters.className = 'gp-filters-scroll';

      this.dom.toolbar.appendChild(searchContainer);
      this.dom.toolbar.appendChild(this.dom.filters);

      // Grid
      this.dom.grid = document.createElement('div');
      this.dom.grid.className = 'gp-services-grid';

      // Pagination
      this.dom.pagination = document.createElement('div');
      this.dom.pagination.className = 'gp-pagination';

      this.dom.container.appendChild(this.dom.hero);
      this.dom.container.appendChild(this.dom.toolbar);
      this.dom.container.appendChild(this.dom.grid);
      this.dom.container.appendChild(this.dom.pagination);

      if (this.dom.block.firstChild) {
        this.dom.block.insertBefore(this.dom.container, this.dom.block.firstChild);
      } else {
        this.dom.block.appendChild(this.dom.container);
      }
    }

    renderHero() {
      this.dom.hero.innerHTML = `
                <div class="gp-hero-bg"></div>
                <div class="gp-hero-content">
                    <h1 class="gp-hero-title">Services Catalog</h1>
                    <p class="gp-hero-subtitle">Premium quality services ready to boost your presence instantly.</p>
                    
                    <div class="gp-stats-row">
                        <div class="gp-stat-item">
                            <span class="gp-stat-value">${this.state.totalServices}</span>
                            <span class="gp-stat-label">Services</span>
                        </div>
                        <div class="gp-stat-item">
                            <span class="gp-stat-value">${this.state.categories.length}</span>
                            <span class="gp-stat-label">Platforms</span>
                        </div>
                        <div class="gp-stat-item">
                            <span class="gp-stat-value">⚡</span>
                            <span class="gp-stat-label">Instant</span>
                        </div>
                    </div>
                </div>
            `;
    }

    renderFilters() {
      this.dom.filters.innerHTML = '';

      // All
      this.dom.filters.appendChild(this.createFilterBtn('All', this.state.totalServices));

      // Categories
      this.state.categories.forEach(cat => {
        const count = this.state.platformCounts[cat];
        if (count > 0) {
          this.dom.filters.appendChild(this.createFilterBtn(cat, count));
        }
      });
    }

    createFilterBtn(label, count) {
      const btn = document.createElement('button');
      btn.className = `gp-filter-btn ${this.state.currentCategory === label ? 'active' : ''}`;

      let iconHtml = this.state.categoryIcons[label] || this.getFallbackIcon(label);

      btn.innerHTML = `
                ${iconHtml}
                <span>${label}</span>
                <span class="gp-filter-count">${count}</span>
            `;
      btn.onclick = () => {
        this.state.currentCategory = label;
        this.state.currentPage = 1;
        this.applyFilters();
      };
      return btn;
    }

    getFallbackIcon(label) {
      const l = label.toLowerCase();
      if (l.includes('instagram')) return '<i>📷</i>';
      if (l.includes('tiktok')) return '<i>🎵</i>';
      if (l.includes('youtube')) return '<i>▶️</i>';
      if (l.includes('spotify')) return '<i>🎧</i>';
      if (l.includes('twitch')) return '<i>🎮</i>';
      if (l.includes('facebook')) return '<i>👥</i>';
      if (l.includes('twitter') || l.includes('x')) return '<i>🐦</i>';
      if (l.includes('telegram')) return '<i>✈️</i>';
      return '<i>📱</i>';
    }

    applyFilters() {
      const { currentCategory, searchTerm, allServices } = this.state;

      this.state.filteredServices = allServices.filter(svc => {
        const matchesCat = currentCategory === 'All' || svc.category === currentCategory;
        const matchesSearch = svc.name.toLowerCase().includes(searchTerm) ||
          svc.id.toString().includes(searchTerm);
        return matchesCat && matchesSearch;
      });

      this.renderFilters();

      const totalPages = Math.ceil(this.state.filteredServices.length / CONFIG.pageSize);
      if (this.state.currentPage > totalPages) this.state.currentPage = 1;

      const start = (this.state.currentPage - 1) * CONFIG.pageSize;
      const end = start + CONFIG.pageSize;

      this.renderGrid(this.state.filteredServices.slice(start, end));
      this.renderPagination(totalPages);
    }

    renderGrid(services) {
      this.dom.grid.innerHTML = '';
      if (services.length === 0) {
        this.dom.grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px; color:#94a3b8;">
                    <br><h3>No services found.</h3>
                </div>`;
        return;
      }

      services.forEach((svc, index) => {
        const card = document.createElement('div');
        card.className = 'gp-card';

        let iconHtml = this.state.categoryIcons[svc.category] || this.getFallbackIcon(svc.category);
        const badgeHtml = svc.badge ? `<span class="gp-badge ${svc.badge.class}">${svc.badge.text}</span>` : '';

        card.innerHTML = `
                    <div class="gp-card-header">
                        <div class="gp-card-category">${iconHtml} ${svc.category}</div>
                        <div class="gp-card-badges">
                            ${badgeHtml}
                            <span class="gp-badge gp-badge-id">ID: ${svc.id}</span>
                        </div>
                        <h3 class="gp-card-title">${svc.name}</h3>
                    </div>
                    <div class="gp-card-meta">
                        <div class="gp-meta-col">
                            <span class="gp-meta-lbl">Rate / 1k</span>
                            <span class="gp-meta-val gp-price">${svc.rate}</span>
                        </div>
                        <div class="gp-meta-col">
                            <span class="gp-meta-lbl">Min / Max</span>
                            <span class="gp-meta-val">${svc.min} - ${svc.max}</span>
                        </div>
                    </div>
                    <button class="gp-btn-view">
                        View Details
                        <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                `;

        card.querySelector('.gp-btn-view').onclick = (e) => {
          e.preventDefault();
          if (svc.nativeBtn) svc.nativeBtn.click();
        };

        this.dom.grid.appendChild(card);
      });
    }

    renderPagination(totalPages) {
      this.dom.pagination.innerHTML = '';
      if (totalPages <= 1) return;

      const addBtn = (p, lbl) => {
        const btn = document.createElement('button');
        btn.className = `gp-page-btn ${this.state.currentPage === p ? 'active' : ''}`;
        btn.textContent = lbl || p;

        btn.onclick = () => {
          this.state.currentPage = p;
          this.applyFilters();
          const yOffset = -50;
          const y = this.dom.container.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        };
        this.dom.pagination.appendChild(btn);
      };

      addBtn(Math.max(1, this.state.currentPage - 1), '←');

      if (totalPages > 5) {
        if (this.state.currentPage > 2) addBtn(1);
        if (this.state.currentPage > 3) {
          const s = document.createElement('span'); s.textContent = '...'; s.style.alignSelf = 'center';
          this.dom.pagination.appendChild(s);
        }
      }

      let start = Math.max(1, this.state.currentPage - 1);
      let end = Math.min(totalPages, this.state.currentPage + 1);
      for (let i = start; i <= end; i++) addBtn(i);

      if (totalPages > 5) {
        if (this.state.currentPage < totalPages - 2) {
          const s = document.createElement('span'); s.textContent = '...'; s.style.alignSelf = 'center';
          this.dom.pagination.appendChild(s);
        }
        if (this.state.currentPage < totalPages - 1) addBtn(totalPages);
      }

      addBtn(Math.min(totalPages, this.state.currentPage + 1), '→');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ServicesApp().init());
  } else {
    new ServicesApp().init();
  }
})();

// =============================================================================
// MODULE: POPUP SIGN IN - BOUTON FERMETURE
// =============================================================================
(function () {
  'use strict';

  function addCloseButton() {
    // Cibler le popup de connexion
    const popup = document.querySelector('.block-signin-text .component_card, .w-100.component_card');

    if (!popup || popup.dataset.closeBtn === 'true') return;
    popup.dataset.closeBtn = 'true';

    // Créer le bouton de fermeture
    const closeBtn = document.createElement('button');
    closeBtn.id = 'popup-close-btn';
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
      position: absolute !important;
      top: 12px !important;
      right: 12px !important;
      width: 32px !important;
      height: 32px !important;
      background: #f1f5f9 !important;
      border: none !important;
      border-radius: 8px !important;
      font-size: 16px !important;
      color: #64748b !important;
      cursor: pointer !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      transition: all 0.2s !important;
      z-index: 10000 !important;
    `;

    closeBtn.onmouseenter = () => {
      closeBtn.style.background = '#e2e8f0';
      closeBtn.style.color = '#1e293b';
    };
    closeBtn.onmouseleave = () => {
      closeBtn.style.background = '#f1f5f9';
      closeBtn.style.color = '#64748b';
    };

    closeBtn.onclick = () => {
      popup.style.display = 'none';
    };

    // S'assurer que le popup a position: relative pour le positionnement absolu du bouton
    popup.style.position = 'fixed';
    popup.insertBefore(closeBtn, popup.firstChild);

    console.log('✅ [POPUP] Close button added');
  }

  // Observer pour détecter quand le popup apparaît
  const observer = new MutationObserver(() => {
    addCloseButton();
  });

  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // Initial check
  setTimeout(addCloseButton, 1000);
  setTimeout(addCloseButton, 3000);

})();

// =============================================================================
// MODULE: ORDERS PAGE REDESIGN — PREMIUM EDITION
// =============================================================================
(function () {
  'use strict';

  // Détection page Orders
  const isOrdersPage = window.location.pathname.includes('/orders') ||
    document.querySelector('.orders-list, [class*="order-table"], table[id*="order"]');

  if (!isOrdersPage && !window.location.pathname.includes('/orders')) {
    return;
  }

  console.log('🎯 [ORDERS] Page detected - Loading Premium Redesign...');

  function initOrdersRedesign() {
    // Trouver le conteneur principal
    const mainContainer = document.querySelector('.wrapper-content__body, .main-content, main') ||
      document.querySelector('[class*="content"]');

    if (!mainContainer) {
      console.log('⏳ [ORDERS] Waiting for container...');
      setTimeout(initOrdersRedesign, 500);
      return;
    }

    // Éviter double injection
    if (document.getElementById('gp-orders-redesign')) {
      return;
    }

    // Marquer comme initialisé
    const marker = document.createElement('div');
    marker.id = 'gp-orders-redesign';
    marker.style.display = 'none';
    document.body.appendChild(marker);

    // === INJECTION CSS ===
    const styles = document.createElement('style');
    styles.id = 'gp-orders-styles';
    styles.textContent = `
      /* === ORDERS PAGE PREMIUM STYLES === */
      
      /* Hero Banner */
      .gp-orders-hero {
        background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%) !important;
        border-radius: 16px !important;
        padding: 32px 40px !important;
        margin-bottom: 24px !important;
        position: relative !important;
        overflow: hidden !important;
        color: white !important;
        box-shadow: 0 10px 40px rgba(30, 58, 138, 0.25) !important;
        width: 100% !important;
        max-width: 100% !important;
        display: block !important;
        flex: 0 0 100% !important;
        box-sizing: border-box !important;
      }
      
      .gp-orders-hero::before {
        content: '';
        position: absolute;
        top: -100px;
        right: -100px;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        pointer-events: none;
      }
      
      .gp-orders-hero-content {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 24px;
      }
      
      .gp-orders-hero-title {
        font-size: 32px;
        font-weight: 800;
        margin: 0 0 8px 0;
        letter-spacing: -0.5px;
      }
      
      .gp-orders-hero-subtitle {
        font-size: 15px;
        color: rgba(255,255,255,0.8);
        margin: 0;
      }
      
      .gp-orders-stats {
        display: flex;
        gap: 32px;
      }
      
      .gp-orders-stat {
        text-align: center;
        padding: 16px 24px;
        background: rgba(255,255,255,0.1);
        border-radius: 12px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.15);
      }
      
      .gp-orders-stat-value {
        font-size: 28px;
        font-weight: 800;
        display: block;
        line-height: 1;
      }
      
      .gp-orders-stat-label {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: rgba(255,255,255,0.7);
        margin-top: 6px;
        display: block;
      }
      
      /* Tabs Premium */
      .gp-orders-tabs {
        display: flex;
        gap: 8px;
        padding: 16px 20px;
        background: white;
        border-radius: 12px;
        margin-bottom: 16px;
        overflow-x: auto;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        border: 1px solid #e2e8f0;
      }
      
      .gp-orders-tabs::-webkit-scrollbar { display: none; }
      
      .gp-orders-tab {
        padding: 10px 20px;
        border-radius: 8px;
        border: 1px solid #e2e8f0;
        background: white;
        color: #64748b;
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .gp-orders-tab:hover {
        background: #f8fafc;
        border-color: #cbd5e1;
        color: #1e293b;
      }
      
      .gp-orders-tab.active {
        background: #1e40af;
        border-color: #1e40af;
        color: white;
      }
      
      .gp-orders-tab-badge {
        padding: 2px 8px;
        border-radius: 6px;
        font-size: 10px;
        font-weight: 700;
        background: #f1f5f9;
        color: #64748b;
      }
      
      .gp-orders-tab.active .gp-orders-tab-badge {
        background: rgba(255,255,255,0.2);
        color: white;
      }
      
      /* Status badges colors */
      .gp-status-all { background: #1e40af !important; }
      .gp-status-pending { background: #f59e0b !important; color: white !important; }
      .gp-status-inprogress { background: #3b82f6 !important; color: white !important; }
      .gp-status-completed { background: #10b981 !important; color: white !important; }
      .gp-status-partial { background: #f97316 !important; color: white !important; }
      .gp-status-processing { background: #8b5cf6 !important; color: white !important; }
      .gp-status-canceled { background: #ef4444 !important; color: white !important; }
      
      /* Search Bar */
      .gp-orders-toolbar {
        display: flex;
        gap: 12px;
        margin-bottom: 20px;
        flex-wrap: wrap;
      }
      
      .gp-orders-search {
        flex: 1;
        min-width: 250px;
        position: relative;
      }
      
      .gp-orders-search input {
        width: 100%;
        padding: 14px 16px 14px 48px;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        font-size: 14px;
        background: white;
        transition: all 0.2s;
      }
      
      .gp-orders-search input:focus {
        outline: none;
        border-color: #2563eb;
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
      }
      
      .gp-orders-search-icon {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        color: #94a3b8;
      }
      
      .gp-orders-filter-btn {
        padding: 14px 20px;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        background: white;
        color: #64748b;
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .gp-orders-filter-btn:hover {
        border-color: #2563eb;
        color: #2563eb;
      }
      
      .gp-orders-filter-btn.active {
        background: #2563eb;
        border-color: #2563eb;
        color: white;
      }
      
      /* Table Styles */
      .gp-orders-table-wrapper {
        background: white;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      }
      
      .gp-orders-table {
        width: 100%;
        border-collapse: collapse;
      }
      
      .gp-orders-table th {
        padding: 16px 20px;
        text-align: left;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #64748b;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
      }
      
      .gp-orders-table td {
        padding: 16px 20px;
        font-size: 13px;
        color: #334155;
        border-bottom: 1px solid #f1f5f9;
        vertical-align: middle;
      }
      
      .gp-orders-table tr:hover td {
        background: #f8fafc;
      }
      
      .gp-orders-table tr:last-child td {
        border-bottom: none;
      }
      
      /* Order ID Badge */
      .gp-order-id {
        font-weight: 700;
        color: #1e40af;
        font-size: 14px;
      }
      
      /* Date styling */
      .gp-order-date {
        color: #64748b;
        font-size: 12px;
      }
      
      /* Link styling */
      .gp-order-link {
        max-width: 250px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #2563eb;
        text-decoration: none;
        font-size: 12px;
      }
      
      .gp-order-link:hover {
        text-decoration: underline;
      }
      
      /* Status Badge */
      .gp-order-status {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.3px;
      }
      
      .gp-order-status-pending { background: #fef3c7; color: #d97706; }
      .gp-order-status-inprogress { background: #dbeafe; color: #2563eb; }
      .gp-order-status-completed { background: #d1fae5; color: #059669; }
      .gp-order-status-partial { background: #ffedd5; color: #ea580c; }
      .gp-order-status-processing { background: #ede9fe; color: #7c3aed; }
      .gp-order-status-canceled { background: #fee2e2; color: #dc2626; }
      
      /* Service name */
      .gp-order-service {
        font-weight: 600;
        color: #1e293b;
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      /* Actions */
      .gp-order-actions {
        display: flex;
        gap: 8px;
      }
      
      .gp-order-action-btn {
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        border: none;
      }
      
      .gp-order-action-refill {
        background: #dbeafe;
        color: #2563eb;
      }
      
      .gp-order-action-refill:hover {
        background: #2563eb;
        color: white;
      }
      
      .gp-order-action-cancel {
        background: #fee2e2;
        color: #dc2626;
      }
      
      .gp-order-action-cancel:hover {
        background: #dc2626;
        color: white;
      }
      
      /* Empty State */
      .gp-orders-empty {
        padding: 80px 40px;
        text-align: center;
        color: #94a3b8;
      }
      
      .gp-orders-empty svg {
        width: 64px;
        height: 64px;
        margin-bottom: 16px;
        opacity: 0.5;
      }
      
      .gp-orders-empty h3 {
        font-size: 18px;
        font-weight: 700;
        color: #64748b;
        margin-bottom: 8px;
      }
      
      /* Pagination */
      .gp-orders-pagination {
        display: flex;
        justify-content: center;
        gap: 6px;
        padding: 24px;
        background: #f8fafc;
        border-top: 1px solid #e2e8f0;
      }
      
      .gp-orders-page-btn {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        border: 1px solid #e2e8f0;
        background: white;
        color: #64748b;
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .gp-orders-page-btn:hover {
        border-color: #2563eb;
        color: #2563eb;
      }
      
      .gp-orders-page-btn.active {
        background: #1e40af;
        border-color: #1e40af;
        color: white;
      }
      
      /* === NATIVE TABS OVERRIDE FOR ORDERS === */
      /* Force horizontal layout for native tabs */
      .nav-tabs,
      ul.nav,
      .tabs {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: nowrap !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
        gap: 8px !important;
        padding: 12px 16px !important;
        background: white !important;
        border-radius: 12px !important;
        margin-bottom: 16px !important;
        border: 1px solid #e2e8f0 !important;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04) !important;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        list-style: none !important;
      }
      
      .nav-tabs::-webkit-scrollbar,
      ul.nav::-webkit-scrollbar {
        display: none;
      }
      
      .nav-tabs .nav-link,
      .nav-tabs .nav-item,
      ul.nav li {
        flex: 0 0 auto !important;
        width: auto !important;
        max-width: fit-content !important;
        list-style: none !important;
      }
      
      ul.nav li a,
      .nav-tabs .nav-link {
        flex: 0 0 auto !important;
        white-space: nowrap !important;
        padding: 10px 18px !important;
        border-radius: 8px !important;
        font-weight: 600 !important;
        font-size: 13px !important;
        text-decoration: none !important;
        border: 1px solid #e2e8f0 !important;
        background: white !important;
        color: #64748b !important;
        transition: all 0.2s !important;
        display: inline-block !important;
        width: auto !important;
      }
      
      .nav-tabs .nav-link:hover,
      ul.nav li a:hover {
        background: #f8fafc !important;
        border-color: #2563eb !important;
        color: #2563eb !important;
      }
      
      /* Active tab - BLUE for orders */
      .nav-tabs .nav-link.active,
      .nav-tabs .active .nav-link,
      ul.nav li.active a,
      ul.nav li a.active {
        background: #1e40af !important;
        border-color: #1e40af !important;
        color: white !important;
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        .gp-orders-hero {
          padding: 16px 20px;
          margin-bottom: 16px;
        }
        
        .gp-orders-hero-content {
          flex-direction: column;
          text-align: center;
          gap: 16px;
        }
        
        .gp-orders-hero-title {
          font-size: 22px;
        }
        
        .gp-orders-hero-title svg {
          width: 24px;
          height: 24px;
          margin-right: 8px;
        }
        
        .gp-orders-hero-subtitle {
          font-size: 13px;
        }
        
        .gp-orders-stats {
          width: 100%;
          justify-content: center;
          gap: 12px;
        }
        
        .gp-orders-stat {
          flex: 1;
          padding: 10px 12px;
          min-width: 70px;
        }
        
        .gp-orders-stat-value {
          font-size: 20px;
        }
        
        .gp-orders-stat-label {
          font-size: 9px;
        }
        
        /* TABS - FORCE HORIZONTAL SCROLL */
        .gp-orders-tabs {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          overflow-x: auto !important;
          overflow-y: hidden !important;
          padding: 12px;
          gap: 8px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        
        .gp-orders-tabs::-webkit-scrollbar {
          display: none;
        }
        
        .gp-orders-tab {
          flex: 0 0 auto !important;
          white-space: nowrap !important;
          padding: 8px 14px;
          font-size: 12px;
        }
        
        .gp-orders-table-wrapper {
          overflow-x: auto;
        }
        
        .gp-orders-table th,
        .gp-orders-table td {
          padding: 12px;
          font-size: 12px;
        }
      }
    `;
    document.head.appendChild(styles);

    // === AMÉLIORER LES TABS NATIFS ===
    enhanceNativeTabs();

    // === AMÉLIORER LA BARRE DE RECHERCHE ===
    enhanceSearchBar();

    // === AMÉLIORER LE TABLEAU ===
    enhanceTable();

    // === AJOUTER LE HERO HEADER ===
    addHeroHeader();

    console.log('✅ [ORDERS] Premium Redesign Applied!');
  }

  function enhanceNativeTabs() {
    const nativeTabs = document.querySelectorAll('.nav-tabs .nav-link, .tabs .tab, [class*="nav"] a, ul.nav li a');

    if (nativeTabs.length === 0) return;

    // Créer le conteneur de tabs amélioré
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'gp-orders-tabs';

    const statusColors = {
      'all': 'gp-status-all',
      'pending': 'gp-status-pending',
      'in progress': 'gp-status-inprogress',
      'inprogress': 'gp-status-inprogress',
      'completed': 'gp-status-completed',
      'partial': 'gp-status-partial',
      'processing': 'gp-status-processing',
      'canceled': 'gp-status-canceled',
      'cancelled': 'gp-status-canceled'
    };

    nativeTabs.forEach(tab => {
      const text = tab.textContent.trim().toLowerCase();
      const isActive = tab.classList.contains('active') || tab.parentElement?.classList.contains('active');

      const newTab = document.createElement('button');
      newTab.className = `gp-orders-tab ${isActive ? 'active' : ''} ${statusColors[text] || ''}`;
      newTab.innerHTML = `
        <span>${tab.textContent.trim()}</span>
      `;

      newTab.onclick = () => {
        tab.click();
        document.querySelectorAll('.gp-orders-tab').forEach(t => t.classList.remove('active'));
        newTab.classList.add('active');
      };

      tabsContainer.appendChild(newTab);
    });

    // Cacher les tabs natifs et insérer les nouveaux
    const nativeTabsParent = nativeTabs[0]?.closest('.nav-tabs, .tabs, ul.nav');
    if (nativeTabsParent) {
      nativeTabsParent.style.display = 'none';
      nativeTabsParent.parentElement.insertBefore(tabsContainer, nativeTabsParent);
    }
  }

  function enhanceSearchBar() {
    const nativeSearch = document.querySelector('input[type="search"], input[placeholder*="Search"], input[name*="search"]');

    if (!nativeSearch) return;

    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'gp-orders-toolbar';

    const searchContainer = document.createElement('div');
    searchContainer.className = 'gp-orders-search';
    searchContainer.innerHTML = `
      <div class="gp-orders-search-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    `;

    // Cloner l'input de recherche
    const newSearchInput = nativeSearch.cloneNode(true);
    newSearchInput.style.cssText = '';
    newSearchInput.placeholder = 'Search orders by ID, link, service...';
    searchContainer.appendChild(newSearchInput);

    // Sync avec l'original
    newSearchInput.addEventListener('input', (e) => {
      nativeSearch.value = e.target.value;
      nativeSearch.dispatchEvent(new Event('input', { bubbles: true }));
    });

    searchWrapper.appendChild(searchContainer);

    // Cacher la recherche native et insérer la nouvelle
    const nativeSearchParent = nativeSearch.closest('.form-group, .search-box, .input-group, div');
    if (nativeSearchParent) {
      nativeSearchParent.style.display = 'none';
      nativeSearchParent.parentElement.insertBefore(searchWrapper, nativeSearchParent);
    }
  }

  function enhanceTable() {
    const table = document.querySelector('table');
    if (!table) return;

    // Ajouter les classes premium
    table.classList.add('gp-orders-table');

    // Wrapper le tableau
    if (!table.parentElement.classList.contains('gp-orders-table-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'gp-orders-table-wrapper';
      table.parentElement.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }

    // Améliorer les cellules
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');

      cells.forEach((cell, index) => {
        const text = cell.textContent.trim().toLowerCase();

        // Status cell
        if (text === 'pending' || text === 'in progress' || text === 'completed' ||
          text === 'partial' || text === 'processing' || text === 'canceled' || text === 'cancelled') {
          const statusClass = text.replace(' ', '');
          cell.innerHTML = `<span class="gp-order-status gp-order-status-${statusClass}">${cell.textContent.trim()}</span>`;
        }

        // ID cell (usually first or second)
        if (index === 0 && !isNaN(parseInt(text))) {
          cell.innerHTML = `<span class="gp-order-id">#${text}</span>`;
        }

        // Link cell
        if (cell.querySelector('a') || text.startsWith('http')) {
          const link = cell.querySelector('a') || cell;
          if (link.tagName === 'A') {
            link.classList.add('gp-order-link');
          }
        }
      });
    });
  }

  function addHeroHeader() {
    // Éviter double injection
    if (document.querySelector('.gp-orders-hero')) return;

    // Trouver le meilleur conteneur - le bloc principal ou le wrapper content
    const tabsContainer = document.querySelector('.gp-orders-tabs');
    const nativeTabs = document.querySelector('.nav-tabs, ul.nav');
    const targetContainer = tabsContainer?.parentElement ||
      nativeTabs?.parentElement ||
      document.querySelector('.wrapper-content__body') ||
      document.querySelector('[id^="block_"]');

    if (!targetContainer) {
      console.log('⚠️ [ORDERS] Hero container not found');
      return;
    }

    // Compter les stats depuis le tableau (supposer que All est déjà sélectionné par défaut)
    const table = document.querySelector('table');
    const allRows = table ? table.querySelectorAll('tbody tr') : [];
    const totalOrders = allRows.length;

    // Compter les orders par statut en cherchant dans le texte de chaque ligne
    let completedCount = 0;
    let inProgressCount = 0;

    allRows.forEach(row => {
      const rowText = row.textContent?.toLowerCase() || '';
      if (rowText.includes('completed')) {
        completedCount++;
      }
      if (rowText.includes('processing') || rowText.includes('in progress') || rowText.includes('pending')) {
        inProgressCount++;
      }
    });

    injectOrdersHero(targetContainer, totalOrders, completedCount, inProgressCount);
  }

  function injectOrdersHero(targetContainer, totalOrders, completedCount, inProgressCount) {
    if (document.querySelector('.gp-orders-hero')) return;

    const hero = document.createElement('div');
    hero.className = 'gp-orders-hero';
    hero.style.cssText = 'width: 100% !important; margin-bottom: 24px !important;';
    hero.innerHTML = `
      <div class="gp-orders-hero-content">
        <div>
          <h1 class="gp-orders-hero-title">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 12px;">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
            My Orders
          </h1>
          <p class="gp-orders-hero-subtitle">Track and manage all your orders in one place</p>
        </div>
        <div class="gp-orders-stats">
          <div class="gp-orders-stat">
            <span class="gp-orders-stat-value">${totalOrders}</span>
            <span class="gp-orders-stat-label">Total Orders</span>
          </div>
          <div class="gp-orders-stat" style="background: rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.3);">
            <span class="gp-orders-stat-value" style="color: #10b981;">${completedCount}</span>
            <span class="gp-orders-stat-label">Completed</span>
          </div>
          <div class="gp-orders-stat" style="background: rgba(245, 158, 11, 0.15); border-color: rgba(245, 158, 11, 0.3);">
            <span class="gp-orders-stat-value" style="color: #f59e0b;">${inProgressCount}</span>
            <span class="gp-orders-stat-label">In Progress</span>
          </div>
        </div>
      </div>
    `;

    // Insérer au tout début du conteneur
    targetContainer.insertBefore(hero, targetContainer.firstChild);
    console.log('✅ [ORDERS] Hero inserted');
  }

  // Initialisation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initOrdersRedesign, 500));
  } else {
    setTimeout(initOrdersRedesign, 500);
  }

})();

// =============================================================================
// MODULE: SUBSCRIPTIONS PAGE REDESIGN — PREMIUM EDITION
// =============================================================================
(function () {
  'use strict';

  // Détection page Subscriptions
  const isSubscriptionsPage = window.location.pathname.includes('/subscriptions') ||
    document.querySelector('.subscriptions-list, [class*="subscription-table"], table[id*="subscription"]');

  if (!isSubscriptionsPage && !window.location.pathname.includes('/subscriptions')) {
    return;
  }

  console.log('🔔 [SUBSCRIPTIONS] Page detected - Loading Premium Redesign...');

  function initSubscriptionsRedesign() {
    // Trouver le conteneur principal
    const mainContainer = document.querySelector('.wrapper-content__body, .main-content, main') ||
      document.querySelector('[class*="content"]');

    if (!mainContainer) {
      console.log('⏳ [SUBSCRIPTIONS] Waiting for container...');
      setTimeout(initSubscriptionsRedesign, 500);
      return;
    }

    // Éviter double injection
    if (document.getElementById('gp-subscriptions-redesign')) {
      return;
    }

    // Marquer comme initialisé
    const marker = document.createElement('div');
    marker.id = 'gp-subscriptions-redesign';
    marker.style.display = 'none';
    document.body.appendChild(marker);

    // === INJECTION CSS ===
    const styles = document.createElement('style');
    styles.id = 'gp-subscriptions-styles';
    styles.textContent = `
      /* === SUBSCRIPTIONS PAGE PREMIUM STYLES === */
      
      /* Hero Banner - Purple gradient for subscriptions */
      .gp-subscriptions-hero {
        background: linear-gradient(135deg, #5b21b6 0%, #7c3aed 50%, #8b5cf6 100%) !important;
        border-radius: 16px !important;
        padding: 32px 40px !important;
        margin-bottom: 24px !important;
        position: relative !important;
        overflow: hidden !important;
        color: white !important;
        box-shadow: 0 10px 40px rgba(91, 33, 182, 0.25) !important;
        width: 100% !important;
        max-width: 100% !important;
        display: block !important;
        flex: 0 0 100% !important;
        box-sizing: border-box !important;
      }
      
      .gp-subscriptions-hero::before {
        content: '';
        position: absolute;
        top: -100px;
        right: -100px;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        pointer-events: none;
      }
      
      .gp-subscriptions-hero-content {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 24px;
      }
      
      .gp-subscriptions-hero-title {
        font-size: 32px;
        font-weight: 800;
        margin: 0 0 8px 0;
        letter-spacing: -0.5px;
      }
      
      .gp-subscriptions-hero-subtitle {
        font-size: 15px;
        color: rgba(255,255,255,0.8);
        margin: 0;
      }
      
      .gp-subscriptions-stats {
        display: flex;
        gap: 32px;
      }
      
      .gp-subscriptions-stat {
        text-align: center;
        padding: 16px 24px;
        background: rgba(255,255,255,0.1);
        border-radius: 12px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.15);
      }
      
      .gp-subscriptions-stat-value {
        font-size: 28px;
        font-weight: 800;
        display: block;
        line-height: 1;
      }
      
      .gp-subscriptions-stat-label {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: rgba(255,255,255,0.7);
        margin-top: 6px;
        display: block;
      }
      
      /* Tabs Premium */
      .gp-subscriptions-tabs {
        display: flex;
        gap: 8px;
        padding: 16px 20px;
        background: white;
        border-radius: 12px;
        margin-bottom: 16px;
        overflow-x: auto;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        border: 1px solid #e2e8f0;
      }
      
      .gp-subscriptions-tabs::-webkit-scrollbar { display: none; }
      
      .gp-subscriptions-tab {
        padding: 10px 20px;
        border-radius: 8px;
        border: 1px solid #e2e8f0;
        background: white;
        color: #64748b;
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.2s;
        white-space: nowrap;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .gp-subscriptions-tab:hover {
        background: #f8fafc;
        border-color: #cbd5e1;
        color: #1e293b;
      }
      
      .gp-subscriptions-tab.active {
        background: #7c3aed;
        border-color: #7c3aed;
        color: white;
      }
      
      /* Status badges colors for subscriptions */
      .gp-sub-status-all { background: #7c3aed !important; }
      .gp-sub-status-active { background: #10b981 !important; color: white !important; }
      .gp-sub-status-paused { background: #f59e0b !important; color: white !important; }
      .gp-sub-status-completed { background: #6b7280 !important; color: white !important; }
      .gp-sub-status-expired { background: #ef4444 !important; color: white !important; }
      .gp-sub-status-canceled { background: #dc2626 !important; color: white !important; }
      
      /* Search Bar */
      .gp-subscriptions-toolbar {
        display: flex;
        gap: 12px;
        margin-bottom: 20px;
        flex-wrap: wrap;
      }
      
      .gp-subscriptions-search {
        flex: 1;
        min-width: 250px;
        position: relative;
      }
      
      .gp-subscriptions-search input {
        width: 100%;
        padding: 14px 16px 14px 48px;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        font-size: 14px;
        background: white;
        transition: all 0.2s;
      }
      
      .gp-subscriptions-search input:focus {
        outline: none;
        border-color: #7c3aed;
        box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
      }
      
      .gp-subscriptions-search-icon {
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        color: #94a3b8;
      }
      
      /* Table Styles */
      .gp-subscriptions-table-wrapper {
        background: white;
        border-radius: 12px;
        border: 1px solid #e2e8f0;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      }
      
      .gp-subscriptions-table {
        width: 100%;
        border-collapse: collapse;
      }
      
      .gp-subscriptions-table th {
        padding: 16px 20px;
        text-align: left;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #64748b;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
      }
      
      .gp-subscriptions-table td {
        padding: 16px 20px;
        font-size: 13px;
        color: #334155;
        border-bottom: 1px solid #f1f5f9;
        vertical-align: middle;
      }
      
      .gp-subscriptions-table tr:hover td {
        background: #f8fafc;
      }
      
      .gp-subscriptions-table tr:last-child td {
        border-bottom: none;
      }
      
      /* Subscription ID Badge */
      .gp-sub-id {
        font-weight: 700;
        color: #7c3aed;
        font-size: 14px;
      }
      
      /* Status Badge */
      .gp-sub-status {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.3px;
      }
      
      .gp-sub-status-badge-active { background: #d1fae5; color: #059669; }
      .gp-sub-status-badge-paused { background: #fef3c7; color: #d97706; }
      .gp-sub-status-badge-completed { background: #f3f4f6; color: #6b7280; }
      .gp-sub-status-badge-expired { background: #fee2e2; color: #dc2626; }
      .gp-sub-status-badge-canceled { background: #fee2e2; color: #dc2626; }
      
      /* Cancel button */
      .gp-sub-cancel-btn {
        padding: 6px 14px;
        border-radius: 6px;
        font-size: 11px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        border: none;
        background: #fee2e2;
        color: #dc2626;
      }
      
      .gp-sub-cancel-btn:hover {
        background: #dc2626;
        color: white;
      }
      
      /* === NATIVE TABS OVERRIDE FOR SUBSCRIPTIONS === */
      /* Force horizontal layout for native tabs */
      .nav-tabs,
      ul.nav,
      .tabs {
        display: flex !important;
        flex-direction: row !important;
        flex-wrap: nowrap !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
        gap: 8px !important;
        padding: 12px 16px !important;
        background: white !important;
        border-radius: 12px !important;
        margin-bottom: 16px !important;
        border: 1px solid #e2e8f0 !important;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04) !important;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        list-style: none !important;
      }
      
      .nav-tabs::-webkit-scrollbar,
      ul.nav::-webkit-scrollbar {
        display: none;
      }
      
      .nav-tabs .nav-link,
      .nav-tabs .nav-item,
      ul.nav li {
        flex: 0 0 auto !important;
        width: auto !important;
        max-width: fit-content !important;
        list-style: none !important;
      }
      
      ul.nav li a,
      .nav-tabs .nav-link {
        flex: 0 0 auto !important;
        white-space: nowrap !important;
        padding: 10px 18px !important;
        border-radius: 8px !important;
        font-weight: 600 !important;
        font-size: 13px !important;
        text-decoration: none !important;
        border: 1px solid #e2e8f0 !important;
        background: white !important;
        color: #64748b !important;
        transition: all 0.2s !important;
        display: inline-block !important;
        width: auto !important;
      }
      
      .nav-tabs .nav-link:hover,
      ul.nav li a:hover {
        background: #f8fafc !important;
        border-color: #7c3aed !important;
        color: #7c3aed !important;
      }
      
      /* Active tab - PURPLE for subscriptions */
      .nav-tabs .nav-link.active,
      .nav-tabs .active .nav-link,
      ul.nav li.active a,
      ul.nav li a.active {
        background: #7c3aed !important;
        border-color: #7c3aed !important;
        color: white !important;
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        .gp-subscriptions-hero {
          padding: 16px 20px;
          margin-bottom: 16px;
        }
        
        .gp-subscriptions-hero-content {
          flex-direction: column;
          text-align: center;
          gap: 16px;
        }
        
        .gp-subscriptions-hero-title {
          font-size: 22px;
        }
        
        .gp-subscriptions-hero-title svg {
          width: 24px;
          height: 24px;
          margin-right: 8px;
        }
        
        .gp-subscriptions-hero-subtitle {
          font-size: 13px;
        }
        
        .gp-subscriptions-stats {
          width: 100%;
          justify-content: center;
          gap: 12px;
        }
        
        .gp-subscriptions-stat {
          flex: 1;
          padding: 10px 12px;
          min-width: 70px;
        }
        
        .gp-subscriptions-stat-value {
          font-size: 20px;
        }
        
        .gp-subscriptions-stat-label {
          font-size: 9px;
        }
        
        /* TABS - FORCE HORIZONTAL SCROLL */
        .gp-subscriptions-tabs {
          display: flex !important;
          flex-direction: row !important;
          flex-wrap: nowrap !important;
          overflow-x: auto !important;
          overflow-y: hidden !important;
          padding: 12px;
          gap: 8px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        
        .gp-subscriptions-tabs::-webkit-scrollbar {
          display: none;
        }
        
        .gp-subscriptions-tab {
          flex: 0 0 auto !important;
          white-space: nowrap !important;
          padding: 8px 14px;
          font-size: 12px;
        }
        
        .gp-subscriptions-table-wrapper {
          overflow-x: auto;
        }
        
        .gp-subscriptions-table th,
        .gp-subscriptions-table td {
          padding: 12px;
          font-size: 12px;
        }
      }
    `;
    document.head.appendChild(styles);

    // === AMÉLIORER LES TABS NATIFS ===
    enhanceNativeTabs();

    // === AMÉLIORER LA BARRE DE RECHERCHE ===
    enhanceSearchBar();

    // === AMÉLIORER LE TABLEAU ===
    enhanceTable();

    // === AJOUTER LE HERO HEADER ===
    addHeroHeader();

    console.log('✅ [SUBSCRIPTIONS] Premium Redesign Applied!');
  }

  function enhanceNativeTabs() {
    const nativeTabs = document.querySelectorAll('.nav-tabs .nav-link, .tabs .tab, [class*="nav"] a, ul.nav li a');

    if (nativeTabs.length === 0) return;

    // Créer le conteneur de tabs amélioré
    const tabsContainer = document.createElement('div');
    tabsContainer.className = 'gp-subscriptions-tabs';

    const statusColors = {
      'all': 'gp-sub-status-all',
      'active': 'gp-sub-status-active',
      'paused': 'gp-sub-status-paused',
      'completed': 'gp-sub-status-completed',
      'expired': 'gp-sub-status-expired',
      'canceled': 'gp-sub-status-canceled',
      'cancelled': 'gp-sub-status-canceled'
    };

    nativeTabs.forEach(tab => {
      const text = tab.textContent.trim().toLowerCase();
      const isActive = tab.classList.contains('active') || tab.parentElement?.classList.contains('active');

      const newTab = document.createElement('button');
      newTab.className = `gp-subscriptions-tab ${isActive ? 'active' : ''} ${statusColors[text] || ''}`;
      newTab.innerHTML = `
        <span>${tab.textContent.trim()}</span>
      `;

      newTab.onclick = () => {
        tab.click();
        document.querySelectorAll('.gp-subscriptions-tab').forEach(t => t.classList.remove('active'));
        newTab.classList.add('active');
      };

      tabsContainer.appendChild(newTab);
    });

    // Cacher les tabs natifs et insérer les nouveaux
    const nativeTabsParent = nativeTabs[0]?.closest('.nav-tabs, .tabs, ul.nav');
    if (nativeTabsParent) {
      nativeTabsParent.style.display = 'none';
      nativeTabsParent.parentElement.insertBefore(tabsContainer, nativeTabsParent);
    }
  }

  function enhanceSearchBar() {
    const nativeSearch = document.querySelector('input[type="search"], input[placeholder*="Search"], input[name*="search"]');

    if (!nativeSearch) return;

    const searchWrapper = document.createElement('div');
    searchWrapper.className = 'gp-subscriptions-toolbar';

    const searchContainer = document.createElement('div');
    searchContainer.className = 'gp-subscriptions-search';
    searchContainer.innerHTML = `
      <div class="gp-subscriptions-search-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    `;

    // Cloner l'input de recherche
    const newSearchInput = nativeSearch.cloneNode(true);
    newSearchInput.style.cssText = '';
    newSearchInput.placeholder = 'Search subscriptions by ID, username, service...';
    searchContainer.appendChild(newSearchInput);

    // Sync avec l'original
    newSearchInput.addEventListener('input', (e) => {
      nativeSearch.value = e.target.value;
      nativeSearch.dispatchEvent(new Event('input', { bubbles: true }));
    });

    searchWrapper.appendChild(searchContainer);

    // Cacher la recherche native et insérer la nouvelle
    const nativeSearchParent = nativeSearch.closest('.form-group, .search-box, .input-group, div');
    if (nativeSearchParent) {
      nativeSearchParent.style.display = 'none';
      nativeSearchParent.parentElement.insertBefore(searchWrapper, nativeSearchParent);
    }
  }

  function enhanceTable() {
    const table = document.querySelector('table');
    if (!table) return;

    // Ajouter les classes premium
    table.classList.add('gp-subscriptions-table');

    // Wrapper le tableau
    if (!table.parentElement.classList.contains('gp-subscriptions-table-wrapper')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'gp-subscriptions-table-wrapper';
      table.parentElement.insertBefore(wrapper, table);
      wrapper.appendChild(table);
    }

    // Améliorer les cellules
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');

      cells.forEach((cell, index) => {
        const text = cell.textContent.trim().toLowerCase();

        // Status cell
        if (text === 'active' || text === 'paused' || text === 'completed' ||
          text === 'expired' || text === 'canceled' || text === 'cancelled') {
          const statusClass = text.replace(' ', '');
          cell.innerHTML = `<span class="gp-sub-status gp-sub-status-badge-${statusClass}">${cell.textContent.trim()}</span>`;
        }

        // ID cell (usually first)
        if (index === 0 && !isNaN(parseInt(text))) {
          cell.innerHTML = `<span class="gp-sub-id">#${text}</span>`;
        }

        // Enhance Cancel buttons
        const cancelBtn = cell.querySelector('button, a');
        if (cancelBtn && cancelBtn.textContent.toLowerCase().includes('cancel')) {
          cancelBtn.classList.add('gp-sub-cancel-btn');
        }
      });
    });
  }

  function addHeroHeader() {
    // Éviter double injection
    if (document.querySelector('.gp-subscriptions-hero')) return;

    // Trouver le meilleur conteneur
    const tabsContainer = document.querySelector('.gp-subscriptions-tabs');
    const nativeTabs = document.querySelector('.nav-tabs, ul.nav');
    const targetContainer = tabsContainer?.parentElement ||
      nativeTabs?.parentElement ||
      document.querySelector('.wrapper-content__body') ||
      document.querySelector('[id^="block_"]');

    if (!targetContainer) {
      console.log('⚠️ [SUBSCRIPTIONS] Hero container not found');
      return;
    }

    // Compter les stats depuis le tableau (supposer que All est déjà sélectionné par défaut)
    const table = document.querySelector('table');
    const allRows = table ? table.querySelectorAll('tbody tr') : [];
    const totalSubscriptions = allRows.length;

    // Compter les subscriptions actives - chercher "Active" dans les cellules
    let activeCount = 0;

    allRows.forEach(row => {
      // Chercher le statut dans toute la ligne
      const rowText = row.textContent?.toLowerCase() || '';
      // Chercher "active" mais pas dans d'autres mots
      if (rowText.includes('active') && !rowText.includes('inactive')) {
        activeCount++;
      }
    });

    injectHero(targetContainer, totalSubscriptions, activeCount);
  }

  function injectHero(targetContainer, totalSubscriptions, activeCount) {
    if (document.querySelector('.gp-subscriptions-hero')) return;

    const hero = document.createElement('div');
    hero.className = 'gp-subscriptions-hero';
    hero.style.cssText = 'width: 100% !important; margin-bottom: 24px !important;';
    hero.innerHTML = `
      <div class="gp-subscriptions-hero-content">
        <div>
          <h1 class="gp-subscriptions-hero-title">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle; margin-right: 12px;">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
            My Subscriptions
          </h1>
          <p class="gp-subscriptions-hero-subtitle">Track and manage all your subscriptions in one place</p>
        </div>
        <div class="gp-subscriptions-stats">
          <div class="gp-subscriptions-stat">
            <span class="gp-subscriptions-stat-value">${totalSubscriptions}</span>
            <span class="gp-subscriptions-stat-label">Total Subscriptions</span>
          </div>
          <div class="gp-subscriptions-stat" style="background: rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.3);">
            <span class="gp-subscriptions-stat-value" style="color: #10b981;">${activeCount}</span>
            <span class="gp-subscriptions-stat-label">Active</span>
          </div>
        </div>
      </div>
    `;

    // Insérer au tout début du conteneur
    targetContainer.insertBefore(hero, targetContainer.firstChild);
    console.log('✅ [SUBSCRIPTIONS] Hero inserted');
  }

  // Initialisation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initSubscriptionsRedesign, 500));
  } else {
    setTimeout(initSubscriptionsRedesign, 500);
  }

})();

// =============================================================================
// MODULE: API PAGE REDESIGN — PREMIUM DEVELOPER EXPERIENCE
// =============================================================================
(function () {
  'use strict';

  // Détection page API - seulement via URL pour éviter faux positifs
  const isApiPage = window.location.pathname.endsWith('/api') ||
    window.location.pathname.includes('/api/');

  if (!isApiPage) {
    return;
  }

  console.log('🔌 [API] Page detected - Loading Premium Redesign...');

  function initApiRedesign() {
    // Éviter double injection
    if (document.getElementById('gp-api-redesign')) {
      return;
    }

    // Trouver le conteneur principal - être très spécifique
    const wrapperContent = document.querySelector('.wrapper-content, .wrapper-content__body');
    const mainContent = document.querySelector('.main-content, main[role="main"], .content-wrapper');
    const pageBlock = document.querySelector('[id^="block_"]');

    // Chercher le titre API dans le contenu principal (pas dans la navbar)
    const allH1H2 = document.querySelectorAll('h1, h2');
    let apiTitle = null;
    let targetContainer = null;

    allH1H2.forEach(heading => {
      if (heading.textContent.trim().toLowerCase() === 'api') {
        // Vérifier que ce n'est pas dans la navbar
        if (!heading.closest('nav, header, .navbar, .header')) {
          apiTitle = heading;
          targetContainer = heading.parentElement;
        }
      }
    });

    // Fallback au wrapper content
    if (!targetContainer) {
      targetContainer = wrapperContent || mainContent || pageBlock;
    }

    if (!targetContainer) {
      console.log('⏳ [API] Waiting for container...');
      setTimeout(initApiRedesign, 500);
      return;
    }

    // Marquer comme initialisé
    const marker = document.createElement('div');
    marker.id = 'gp-api-redesign';
    marker.style.display = 'none';
    document.body.appendChild(marker);

    // === INJECTION CSS ===
    injectStyles();

    // === ENHANCE PAGE ===
    addHeroHeader(apiTitle, targetContainer);
    enhanceTables();
    enhanceCodeBlocks();
    enhanceDropdowns();

    // === AI-FRIENDLY FEATURES ===
    addExportActionsBar();
    addAIUsageSection();
    relocatePHPExampleButton();
    addStructuredData();

    // === SETUP EVENT DELEGATION FOR COPY BUTTONS ===
    setupCopyButtons();

    console.log('✅ [API] Premium Redesign Applied!');
  }

  function injectStyles() {
    if (document.getElementById('gp-api-styles')) return;

    const styles = document.createElement('style');
    styles.id = 'gp-api-styles';
    styles.textContent = `
      /* === API PAGE PREMIUM STYLES === */
      
      /* Hero Banner - Cyan/Blue tech gradient */
      .gp-api-hero {
        background: linear-gradient(135deg, #0891b2 0%, #0ea5e9 50%, #2563eb 100%) !important;
        border-radius: 16px !important;
        padding: 32px 40px !important;
        margin-bottom: 24px !important;
        margin-top: 0 !important;
        position: relative !important;
        overflow: hidden !important;
        color: white !important;
        box-shadow: 0 10px 40px rgba(8, 145, 178, 0.25) !important;
      }
      
      .gp-api-hero::before {
        content: '';
        position: absolute;
        top: -100px;
        right: -100px;
        width: 300px;
        height: 300px;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        pointer-events: none;
      }
      
      .gp-api-hero-content {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 24px;
      }
      
      .gp-api-hero-title {
        font-size: 28px;
        font-weight: 800;
        margin: 0 0 8px 0;
        letter-spacing: -0.5px;
        display: flex;
        align-items: center;
        gap: 12px;
        color: white !important;
      }
      
      .gp-api-hero-subtitle {
        font-size: 14px;
        color: rgba(255,255,255,0.85);
        margin: 0;
      }
      
      .gp-api-hero-badges {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }
      
      .gp-api-badge {
        padding: 10px 20px;
        background: rgba(255,255,255,0.15);
        border-radius: 10px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
        font-weight: 600;
        font-size: 13px;
      }
      
      .gp-api-badge-label {
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        opacity: 0.8;
        display: block;
        margin-bottom: 2px;
      }
      
      /* Info Cards Row */
      .gp-api-info-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 16px;
        margin-bottom: 24px;
      }
      
      .gp-api-info-card {
        background: white;
        border-radius: 12px;
        padding: 20px;
        border: 1px solid #e2e8f0;
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
      }
      
      .gp-api-info-card-label {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #64748b;
        margin-bottom: 8px;
        font-weight: 600;
      }
      
      .gp-api-info-card-value {
        font-size: 14px;
        font-weight: 600;
        color: #1e293b;
        display: flex;
        align-items: center;
        gap: 8px;
        word-break: break-all;
      }
      
      .gp-api-copy-btn {
        padding: 6px 12px;
        background: #f1f5f9;
        border: 1px solid #e2e8f0;
        border-radius: 6px;
        cursor: pointer;
        font-size: 11px;
        font-weight: 600;
        color: #64748b;
        transition: all 0.2s;
        white-space: nowrap;
      }
      
      .gp-api-copy-btn:hover {
        background: #0ea5e9;
        border-color: #0ea5e9;
        color: white;
      }
      
      .gp-api-copy-btn.copied {
        background: #10b981 !important;
        border-color: #10b981 !important;
        color: white !important;
      }
      
      /* Enhanced Tables */
      .gp-api-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 16px;
        background: white;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid #e2e8f0;
      }
      
      .gp-api-table th {
        padding: 14px 16px;
        text-align: left;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #64748b;
        background: #f8fafc;
        border-bottom: 2px solid #e2e8f0;
      }
      
      .gp-api-table td {
        padding: 14px 16px;
        font-size: 13px;
        color: #334155;
        border-bottom: 1px solid #f1f5f9;
      }
      
      .gp-api-table tr:hover td {
        background: #f8fafc;
      }
      
      .gp-api-table tr:last-child td {
        border-bottom: none;
      }
      
      .gp-api-param {
        font-family: 'Monaco', 'Consolas', monospace;
        font-size: 13px;
        color: #0891b2;
        font-weight: 600;
        background: #f0fdfa;
        padding: 4px 8px;
        border-radius: 4px;
      }
      
      /* Code Blocks */
      .gp-api-code-block {
        background: #1e293b;
        border-radius: 12px;
        overflow: hidden;
        margin: 16px 0;
      }
      
      .gp-api-code-header {
        padding: 12px 16px;
        background: #0f172a;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #334155;
      }
      
      .gp-api-code-title {
        font-size: 12px;
        font-weight: 600;
        color: #94a3b8;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .gp-api-code-copy-btn {
        padding: 6px 12px;
        background: #334155;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 11px;
        font-weight: 600;
        color: #94a3b8;
        transition: all 0.2s;
      }
      
      .gp-api-code-copy-btn:hover {
        background: #0ea5e9;
        color: white;
      }
      
      .gp-api-code-copy-btn.copied {
        background: #10b981 !important;
        color: white !important;
      }
      
      .gp-api-code-content {
        padding: 20px;
        overflow-x: auto;
        background: #1e293b !important;
      }
      
      .gp-api-code-content pre {
        margin: 0;
        font-family: 'Monaco', 'Consolas', 'Courier New', monospace;
        font-size: 13px;
        line-height: 1.6;
        color: #e2e8f0;
        white-space: pre-wrap;
        word-break: break-all;
        background: transparent !important;
        border: none !important;
        padding: 0 !important;
      }
      
      /* Override container padding */
      [id^="block_api"],
      #block_api {
        padding-top: 16px !important;
        padding-bottom: 16px !important;
      }
      
      /* JSON Syntax Highlighting */
      .gp-api-code-content .json-key { color: #7dd3fc; }
      .gp-api-code-content .json-string { color: #86efac; }
      .gp-api-code-content .json-number { color: #fbbf24; }
      .gp-api-code-content .json-boolean { color: #c084fc; }
      .gp-api-code-content .json-null { color: #f87171; }
      
      /* Method Badges */
      .gp-api-method-post {
        display: inline-block;
        padding: 4px 10px;
        background: #dbeafe;
        color: #2563eb;
        font-size: 12px;
        font-weight: 700;
        border-radius: 6px;
        font-family: monospace;
      }
      
      /* Dropdown/Select Styles */
      .gp-api-select,
      select {
        padding: 12px 16px !important;
        border-radius: 10px !important;
        border: 1px solid #e2e8f0 !important;
        background: white !important;
        font-size: 14px !important;
        font-weight: 500 !important;
        color: #1e293b !important;
        cursor: pointer !important;
        transition: all 0.2s !important;
        appearance: none !important;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") !important;
        background-repeat: no-repeat !important;
        background-position: right 12px center !important;
        padding-right: 40px !important;
      }
      
      select:hover {
        border-color: #0ea5e9 !important;
      }
      
      select:focus {
        outline: none !important;
        border-color: #0ea5e9 !important;
        box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1) !important;
      }
      
      /* Section Headers */
      h2, h3, h4 {
        color: #1e293b;
        font-weight: 700;
        margin-top: 32px;
        margin-bottom: 16px;
      }
      
      /* === AI-FRIENDLY FEATURES === */
      
      /* Export Actions Bar */
      .gp-api-export-bar {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 24px;
        padding: 16px;
        background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
        border-radius: 12px;
        border: 1px solid #e2e8f0;
      }
      
      .gp-api-export-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 12px 20px;
        border: none;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .gp-api-export-btn.primary {
        background: linear-gradient(135deg, #0891b2 0%, #0ea5e9 100%);
        color: white;
      }
      
      .gp-api-export-btn.primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
      }
      
      .gp-api-export-btn.secondary {
        background: white;
        color: #334155;
        border: 1px solid #e2e8f0;
      }
      
      .gp-api-export-btn.secondary:hover {
        background: #f8fafc;
        border-color: #0ea5e9;
        color: #0ea5e9;
      }
      
      /* AI Usage Section */
      .gp-api-ai-section {
        background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%);
        border-radius: 16px;
        padding: 24px;
        margin: 0 0 24px 0;
        color: white;
      }
      
      .gp-api-ai-header {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 20px;
      }
      
      .gp-api-ai-icon {
        width: 48px;
        height: 48px;
        background: rgba(255,255,255,0.15);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
      }
      
      .gp-api-ai-title {
        font-size: 20px;
        font-weight: 700;
        margin: 0;
        color: white !important;
      }
      
      .gp-api-ai-subtitle {
        font-size: 13px;
        opacity: 0.8;
        margin: 4px 0 0 0;
      }
      
      .gp-api-ai-content {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 16px;
      }
      
      .gp-api-ai-card {
        background: rgba(255,255,255,0.1);
        border-radius: 12px;
        padding: 20px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.1);
      }
      
      .gp-api-ai-card-title {
        font-size: 14px;
        font-weight: 600;
        margin: 0 0 12px 0;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .gp-api-ai-card-content {
        font-size: 12px;
        line-height: 1.5;
        opacity: 0.9;
      }
      
      .gp-api-ai-card-content code {
        background: rgba(0,0,0,0.3);
        padding: 2px 6px;
        border-radius: 4px;
        font-family: monospace;
        font-size: 11px;
      }
      
      .gp-api-prompt-example {
        background: rgba(0,0,0,0.3);
        border-radius: 8px;
        padding: 12px;
        margin-top: 12px;
        font-family: monospace;
        font-size: 11px;
        line-height: 1.5;
        white-space: pre-wrap;
        border-left: 3px solid #a78bfa;
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        .gp-api-hero {
          padding: 20px;
        }
        
        .gp-api-hero-content {
          flex-direction: column;
          text-align: center;
        }
        
        .gp-api-hero-title {
          font-size: 22px;
          justify-content: center;
        }
        
        .gp-api-hero-badges {
          justify-content: center;
        }
        
        .gp-api-info-cards {
          grid-template-columns: 1fr;
        }
      }
    `;
    document.head.appendChild(styles);
  }

  function addHeroHeader(apiTitle, targetContainer) {
    // Éviter double injection
    if (document.querySelector('.gp-api-hero')) return;

    const apiUrl = extractApiUrl();

    const hero = document.createElement('div');
    hero.className = 'gp-api-hero';
    hero.innerHTML = `
      <div class="gp-api-hero-content">
        <div>
          <h1 class="gp-api-hero-title">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 17l6-6-6-6"/>
              <path d="M12 19h8"/>
            </svg>
            API Documentation
          </h1>
          <p class="gp-api-hero-subtitle">Integrate our services programmatically with our RESTful API</p>
        </div>
        <div class="gp-api-hero-badges">
          <div class="gp-api-badge">
            <span class="gp-api-badge-label">HTTP Method</span>
            POST
          </div>
          <div class="gp-api-badge">
            <span class="gp-api-badge-label">Response</span>
            JSON
          </div>
        </div>
      </div>
    `;

    // Insérer le hero
    if (apiTitle) {
      apiTitle.style.display = 'none';
      apiTitle.parentElement.insertBefore(hero, apiTitle);
    } else {
      targetContainer.insertBefore(hero, targetContainer.firstChild);
    }

    // Ajouter les info cards
    if (apiUrl) {
      addInfoCards(hero, apiUrl);
    }
  }

  function extractApiUrl() {
    const allText = document.body.innerText;
    const urlMatch = allText.match(/https?:\/\/[^\s]+\/api[^\s]*/i);
    return urlMatch ? urlMatch[0] : 'https://yourpanel.com/api/v2';
  }

  function addInfoCards(heroElement, apiUrl) {
    const infoCards = document.createElement('div');
    infoCards.className = 'gp-api-info-cards';
    infoCards.innerHTML = `
      <div class="gp-api-info-card">
        <div class="gp-api-info-card-label">API Endpoint</div>
        <div class="gp-api-info-card-value">
          <span id="api-url-text" style="flex: 1; overflow: hidden; text-overflow: ellipsis;">${apiUrl}</span>
          <button class="gp-api-copy-btn" data-copy="${apiUrl}">Copy</button>
        </div>
      </div>
      <div class="gp-api-info-card">
        <div class="gp-api-info-card-label">HTTP Method</div>
        <div class="gp-api-info-card-value">
          <span class="gp-api-method-post">POST</span>
        </div>
      </div>
      <div class="gp-api-info-card">
        <div class="gp-api-info-card-label">Response Format</div>
        <div class="gp-api-info-card-value">
          <span style="color: #0891b2; font-family: monospace; font-weight: 700;">JSON</span>
        </div>
      </div>
      <div class="gp-api-info-card">
        <div class="gp-api-info-card-label">Authentication</div>
        <div class="gp-api-info-card-value">
          <span>API Key required</span>
          <a href="/account" style="color: #0ea5e9; font-size: 12px; text-decoration: none; font-weight: 600;">Get Key →</a>
        </div>
      </div>
    `;
    heroElement.insertAdjacentElement('afterend', infoCards);
  }

  function enhanceTables() {
    const tables = document.querySelectorAll('table');

    tables.forEach(table => {
      if (table.classList.contains('gp-api-table')) return;

      table.classList.add('gp-api-table');

      const rows = table.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const firstCell = row.querySelector('td:first-child');
        if (firstCell) {
          const paramName = firstCell.textContent.trim();
          if (paramName && paramName !== 'Parameters') {
            firstCell.innerHTML = '<span class="gp-api-param">' + paramName + '</span>';
          }
        }
      });
    });
  }

  function enhanceCodeBlocks() {
    const preElements = document.querySelectorAll('pre, code');

    preElements.forEach(pre => {
      if (pre.closest('.gp-api-code-block')) return;

      const text = pre.textContent.trim();

      if (text.startsWith('[') || text.startsWith('{')) {
        const wrapper = document.createElement('div');
        wrapper.className = 'gp-api-code-block';

        let formattedCode = text;
        try {
          const parsed = JSON.parse(text);
          formattedCode = JSON.stringify(parsed, null, 2);
        } catch (e) {
          // Keep original
        }

        // Store code for copy button
        wrapper.dataset.code = formattedCode;

        // Escape HTML
        const escaped = formattedCode
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');

        // Syntax highlighting
        const highlighted = escaped
          .replace(/"([^"]+)":/g, '<span class="json-key">"$1"</span>:')
          .replace(/: "([^"]*)"/g, ': <span class="json-string">"$1"</span>')
          .replace(/: (\d+)/g, ': <span class="json-number">$1</span>')
          .replace(/: (true|false)/g, ': <span class="json-boolean">$1</span>')
          .replace(/: (null)/g, ': <span class="json-null">$1</span>');

        wrapper.innerHTML =
          '<div class="gp-api-code-header">' +
          '<span class="gp-api-code-title">Example Response</span>' +
          '<button class="gp-api-code-copy-btn">📋 Copy</button>' +
          '</div>' +
          '<div class="gp-api-code-content">' +
          '<pre>' + highlighted + '</pre>' +
          '</div>';

        pre.parentElement.replaceChild(wrapper, pre);
      }
    });
  }

  function enhanceDropdowns() {
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
      select.classList.add('gp-api-select');
    });
  }

  function setupCopyButtons() {
    document.addEventListener('click', function (e) {
      // Handle info card copy buttons
      if (e.target.classList.contains('gp-api-copy-btn')) {
        const textToCopy = e.target.dataset.copy;
        if (textToCopy) {
          navigator.clipboard.writeText(textToCopy).then(() => {
            e.target.textContent = 'Copied!';
            e.target.classList.add('copied');
            setTimeout(() => {
              e.target.textContent = 'Copy';
              e.target.classList.remove('copied');
            }, 2000);
          });
        }
      }

      // Handle code block copy buttons
      if (e.target.classList.contains('gp-api-code-copy-btn')) {
        const codeBlock = e.target.closest('.gp-api-code-block');
        if (codeBlock) {
          const code = codeBlock.dataset.code || codeBlock.querySelector('pre')?.textContent;
          if (code) {
            navigator.clipboard.writeText(code).then(() => {
              e.target.textContent = '✓ Copied';
              e.target.classList.add('copied');
              setTimeout(() => {
                e.target.textContent = '📋 Copy';
                e.target.classList.remove('copied');
              }, 2000);
            });
          }
        }
      }
    });
  }

  // === AI-FRIENDLY FEATURES ===

  function addExportActionsBar() {
    if (document.querySelector('.gp-api-export-bar')) return;

    const infoCards = document.querySelector('.gp-api-info-cards');
    if (!infoCards) return;

    const exportBar = document.createElement('div');
    exportBar.className = 'gp-api-export-bar';
    exportBar.innerHTML =
      '<button class="gp-api-export-btn primary" id="gp-export-markdown">' +
      '<span>📝</span> Download Markdown' +
      '</button>' +
      '<button class="gp-api-export-btn secondary" id="gp-export-json">' +
      '<span>📦</span> Export OpenAPI JSON' +
      '</button>' +
      '<button class="gp-api-export-btn secondary" id="gp-copy-for-ai">' +
      '<span>📋</span> Copy for AI' +
      '</button>';

    infoCards.insertAdjacentElement('afterend', exportBar);

    // Event handlers
    document.getElementById('gp-export-markdown').addEventListener('click', exportAsMarkdown);
    document.getElementById('gp-export-json').addEventListener('click', exportAsOpenAPI);
    document.getElementById('gp-copy-for-ai').addEventListener('click', copyForAI);
  }

  function exportAsMarkdown() {
    const apiUrl = extractApiUrl();
    const siteName = window.location.hostname;

    let markdown = '# ' + siteName + ' API Documentation\n\n';
    markdown += '## Overview\n\n';
    markdown += '- **API URL:** `' + apiUrl + '`\n';
    markdown += '- **HTTP Method:** POST\n';
    markdown += '- **Response Format:** JSON\n\n';

    // Get all tables and convert to markdown
    const tables = document.querySelectorAll('table');
    tables.forEach((table, idx) => {
      const headerText = table.previousElementSibling?.textContent || 'Endpoint ' + (idx + 1);
      markdown += '## ' + headerText.trim() + '\n\n';

      const headers = table.querySelectorAll('th');
      const rows = table.querySelectorAll('tbody tr');

      if (headers.length) {
        markdown += '| ' + Array.from(headers).map(h => h.textContent.trim()).join(' | ') + ' |\n';
        markdown += '| ' + Array.from(headers).map(() => '---').join(' | ') + ' |\n';
      }

      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        markdown += '| ' + Array.from(cells).map(c => c.textContent.trim()).join(' | ') + ' |\n';
      });

      markdown += '\n';
    });

    // Get code examples
    const codeBlocks = document.querySelectorAll('.gp-api-code-block');
    codeBlocks.forEach((block, idx) => {
      const code = block.dataset.code || block.querySelector('pre')?.textContent;
      if (code) {
        markdown += '### Example Response ' + (idx + 1) + '\n\n';
        markdown += '```json\n' + code + '\n```\n\n';
      }
    });

    // Download
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = siteName.replace(/\./g, '_') + '_api_documentation.md';
    a.click();
    URL.revokeObjectURL(url);
  }

  function exportAsOpenAPI() {
    const apiUrl = extractApiUrl();
    const siteName = window.location.hostname;

    const openApiSpec = {
      openapi: '3.0.0',
      info: {
        title: siteName + ' API',
        version: '2.0',
        description: 'SMM Panel API for programmatic service integration'
      },
      servers: [{ url: apiUrl }],
      paths: {
        '/': {
          post: {
            summary: 'Send API Request',
            requestBody: {
              required: true,
              content: {
                'application/x-www-form-urlencoded': {
                  schema: {
                    type: 'object',
                    properties: {
                      key: { type: 'string', description: 'Your API key' },
                      action: { type: 'string', description: 'Action to perform (services, add, status, etc.)' }
                    },
                    required: ['key', 'action']
                  }
                }
              }
            },
            responses: {
              '200': {
                description: 'Successful response',
                content: {
                  'application/json': {
                    schema: { type: 'object' }
                  }
                }
              }
            }
          }
        }
      }
    };

    const blob = new Blob([JSON.stringify(openApiSpec, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = siteName.replace(/\./g, '_') + '_openapi.json';
    a.click();
    URL.revokeObjectURL(url);
  }

  function copyForAI() {
    const apiUrl = extractApiUrl();
    const siteName = window.location.hostname;

    let prompt = 'I need help integrating with the ' + siteName + ' API.\n\n';
    prompt += 'API Details:\n';
    prompt += '- URL: ' + apiUrl + '\n';
    prompt += '- Method: POST\n';
    prompt += '- Format: JSON\n\n';
    prompt += 'Available Actions:\n';

    // Extract actions from section headers (h2, h3, h4)
    const headers = document.querySelectorAll('h2, h3, h4');
    const actionNames = [];

    headers.forEach(header => {
      const text = header.textContent.trim().toLowerCase();
      // Skip headers that are part of our injected content
      if (header.closest('.gp-api-hero') ||
        header.closest('.gp-api-ai-section') ||
        header.closest('.gp-api-code-block')) return;

      // Look for action-related headers
      if (text.includes('service') || text.includes('order') ||
        text.includes('status') || text.includes('balance') ||
        text.includes('refill') || text.includes('cancel') ||
        text.includes('add') || text.includes('list') ||
        text.includes('error') || text.includes('response')) {
        actionNames.push(header.textContent.trim());
      }
    });

    // Also try to find action values from tables
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      const rows = table.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 2) {
          const param = cells[0]?.textContent?.trim().toLowerCase();
          const value = cells[1]?.textContent?.trim();
          if (param === 'action' && value) {
            actionNames.push('action=' + value);
          }
        }
      });
    });

    // Remove duplicates and add to prompt
    const uniqueActions = [...new Set(actionNames)];
    if (uniqueActions.length > 0) {
      uniqueActions.forEach(action => {
        prompt += '- ' + action + '\n';
      });
    } else {
      // Fallback: common SMM panel actions
      prompt += '- services (get list of services)\n';
      prompt += '- add (create new order)\n';
      prompt += '- status (check order status)\n';
      prompt += '- balance (check account balance)\n';
    }

    prompt += '\nPlease help me write code to interact with this API.';

    navigator.clipboard.writeText(prompt).then(() => {
      const btn = document.getElementById('gp-copy-for-ai');
      btn.innerHTML = '<span>✓</span> Copied!';
      setTimeout(() => {
        btn.innerHTML = '<span>📋</span> Copy for AI';
      }, 2000);
    });
  }

  function addAIUsageSection() {
    if (document.querySelector('.gp-api-ai-section')) return;

    // Insert after export bar (which is after info cards)
    const exportBar = document.querySelector('.gp-api-export-bar');
    if (!exportBar) return;

    const aiSection = document.createElement('div');
    aiSection.className = 'gp-api-ai-section';
    aiSection.innerHTML =
      '<div class="gp-api-ai-header">' +
      '<div class="gp-api-ai-icon">🤖</div>' +
      '<div>' +
      '<h3 class="gp-api-ai-title">Use with AI Assistants</h3>' +
      '<p class="gp-api-ai-subtitle">Integrate this API using Claude, ChatGPT, or other AI tools</p>' +
      '</div>' +
      '</div>' +
      '<div class="gp-api-ai-content">' +
      '<div class="gp-api-ai-card">' +
      '<h4 class="gp-api-ai-card-title">💬 Example Prompt</h4>' +
      '<div class="gp-api-ai-card-content">' +
      'Use this prompt to get AI to help you integrate:' +
      '<div class="gp-api-prompt-example">' +
      '"Write a Python script that uses the ' + window.location.hostname + ' API to:\n' +
      '1. Get the list of available services\n' +
      '2. Place an order for Instagram followers\n' +
      '3. Check the order status"' +
      '</div>' +
      '</div>' +
      '</div>' +
      '<div class="gp-api-ai-card">' +
      '<h4 class="gp-api-ai-card-title">🔌 MCP Integration</h4>' +
      '<div class="gp-api-ai-card-content">' +
      'This API can be used with Model Context Protocol (MCP) servers. ' +
      'Download the OpenAPI spec and use tools like <code>openapi-mcp-server</code> ' +
      'to create an MCP server that AI assistants can use directly.' +
      '</div>' +
      '</div>' +
      '<div class="gp-api-ai-card">' +
      '<h4 class="gp-api-ai-card-title">⚡ Quick Tips</h4>' +
      '<div class="gp-api-ai-card-content">' +
      '• Always include your API key in requests<br>' +
      '• Use <code>action=services</code> to see available services<br>' +
      '• Check order status with <code>action=status</code><br>' +
      '• All responses are JSON formatted' +
      '</div>' +
      '</div>' +
      '</div>';

    exportBar.insertAdjacentElement('afterend', aiSection);
  }

  function relocatePHPExampleButton() {
    // Find the PHP example button - it's usually a link with "Example of PHP code" text
    const phpButton = Array.from(document.querySelectorAll('a.btn, a.btn-big-secondary, button'))
      .find(el => el.textContent.toLowerCase().includes('example of php') ||
        el.textContent.toLowerCase().includes('php code'));

    if (!phpButton) return;

    // Find the AI section to insert after it
    const aiSection = document.querySelector('.gp-api-ai-section');
    if (!aiSection) return;

    // Create a wrapper to style the button nicely
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'margin-bottom: 24px;';

    // Clone and style the button
    const clonedButton = phpButton.cloneNode(true);
    clonedButton.style.cssText = 'display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; background: linear-gradient(135deg, #0891b2 0%, #0ea5e9 100%); color: white; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px; border: none; cursor: pointer; transition: all 0.2s;';
    clonedButton.innerHTML = '📄 ' + clonedButton.textContent.trim();

    wrapper.appendChild(clonedButton);
    aiSection.insertAdjacentElement('afterend', wrapper);

    // Hide the original button
    phpButton.style.display = 'none';
  }

  function addStructuredData() {
    if (document.querySelector('script[data-gp-api-schema]')) return;

    const apiUrl = extractApiUrl();
    const siteName = window.location.hostname;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'WebAPI',
      name: siteName + ' SMM Panel API',
      description: 'RESTful API for SMM panel services integration',
      url: apiUrl,
      provider: {
        '@type': 'Organization',
        name: siteName
      },
      documentation: window.location.href,
      termsOfService: window.location.origin + '/terms'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-gp-api-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  // Initialisation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initApiRedesign, 500));
  } else {
    setTimeout(initApiRedesign, 500);
  }

})();

// =============================================================================
// MODULE: ACCOUNT & NOTIFICATIONS PAGE REDESIGN — TOP TIER EXPERIENCE
// =============================================================================
(function () {
  'use strict';

  // Détection page Account / Notifications
  const isAccountPage = window.location.pathname.includes('/account') ||
    window.location.pathname.includes('/profile') ||
    window.location.pathname.includes('/settings');

  if (!isAccountPage) return;

  console.log('👤 [Account] Initializing Premium Redesign...');

  function initAccountRedesign() {
    // Éviter double initialisation
    if (document.querySelector('#gp-account-redesign')) return;

    // Attendre que la page soit chargée
    const form = document.querySelector('form') || document.querySelector('input');

    if (!form) {
      console.log('⏳ [Account] Waiting for content...');
      setTimeout(initAccountRedesign, 500);
      return;
    }

    // Marquer comme initialisé
    const marker = document.createElement('div');
    marker.id = 'gp-account-redesign';
    marker.style.display = 'none';
    document.body.appendChild(marker);

    // === INJECTION CSS ===
    injectStyles();

    // === ENHANCE PAGE ===
    addHeroHeader();
    enhanceTabs();
    enhanceFormSections();

    console.log('✅ [Account] Premium Redesign Applied!');
  }

  function injectStyles() {
    if (document.getElementById('gp-account-styles')) return;

    const styles = document.createElement('style');
    styles.id = 'gp-account-styles';
    styles.textContent = `
      /* === ACCOUNT PAGE PREMIUM STYLES === */
      
      /* Hero Banner - Royal Blue gradient */
      .gp-account-hero {
        background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #3b82f6 100%) !important;
        border-radius: 20px !important;
        padding: 32px !important;
        margin-bottom: 28px !important;
        margin-top: 0 !important;
        position: relative !important;
        overflow: hidden !important;
        color: white !important;
        box-shadow: 0 15px 50px rgba(29, 78, 216, 0.3) !important;
      }
      
      .gp-account-hero::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -30%;
        width: 80%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);
        pointer-events: none;
      }
      
      .gp-account-hero-content {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        gap: 24px;
      }
      
      .gp-account-hero-avatar {
        width: 80px;
        height: 80px;
        background: linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 36px;
        border: 3px solid rgba(255,255,255,0.4);
        backdrop-filter: blur(10px);
      }
      
      .gp-account-hero-info {
        flex: 1;
      }
      
      .gp-account-hero-title {
        font-size: 28px;
        font-weight: 800;
        margin: 0;
        color: white !important;
      }
      
      .gp-account-hero-subtitle {
        font-size: 14px;
        opacity: 0.9;
        margin: 6px 0 0 0;
      }
      
      .gp-account-hero-email {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-top: 10px;
        padding: 8px 16px;
        background: rgba(255,255,255,0.15);
        border-radius: 20px;
        font-size: 13px;
        backdrop-filter: blur(10px);
      }
      
      /* Enhanced Tabs */
      .gp-account-tabs {
        display: flex;
        gap: 8px;
        margin-bottom: 24px;
        background: #f1f5f9;
        padding: 6px;
        border-radius: 14px;
        width: fit-content;
      }
      
      .gp-account-tabs .nav-link,
      .gp-account-tabs a {
        padding: 10px 24px !important;
        border-radius: 10px !important;
        font-weight: 600 !important;
        font-size: 14px !important;
        color: #64748b !important;
        text-decoration: none !important;
        transition: all 0.2s !important;
        border: none !important;
        background: transparent !important;
      }
      
      .gp-account-tabs .nav-link:hover,
      .gp-account-tabs a:hover {
        color: #1d4ed8 !important;
        background: rgba(29, 78, 216, 0.1) !important;
      }
      
      .gp-account-tabs .nav-link.active,
      .gp-account-tabs a.active,
      .gp-account-tabs .active .nav-link {
        background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%) !important;
        color: white !important;
        box-shadow: 0 4px 12px rgba(29, 78, 216, 0.3) !important;
      }
      
      /* Form Sections */
      .gp-account-section {
        background: white;
        border-radius: 16px;
        padding: 24px;
        margin-bottom: 20px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        border: 1px solid #e2e8f0;
        transition: all 0.2s;
      }
      
      .gp-account-section:hover {
        box-shadow: 0 8px 30px rgba(0,0,0,0.1);
      }
      
      .gp-account-section-header {
        font-size: 16px;
        font-weight: 700;
        color: #1e293b;
        margin: 0 0 16px 0;
        display: flex;
        align-items: center;
        gap: 10px;
        padding-bottom: 12px;
        border-bottom: 2px solid #f1f5f9;
      }
      
      .gp-account-section-header svg {
        width: 20px;
        height: 20px;
        color: #3b82f6;
      }
      
      /* Form Elements */
      .gp-account-section input[type="text"],
      .gp-account-section input[type="email"],
      .gp-account-section input[type="password"],
      .gp-account-section select,
      .gp-account-section textarea {
        width: 100%;
        padding: 14px 18px;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        font-size: 14px;
        transition: all 0.2s;
        background: #f8fafc;
        margin-bottom: 12px;
      }
      
      .gp-account-section input:focus,
      .gp-account-section select:focus,
      .gp-account-section textarea:focus {
        outline: none;
        border-color: #3b82f6;
        background: white;
        box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
      }
      
      .gp-account-section input[readonly] {
        background: #f1f5f9;
        color: #64748b;
        cursor: not-allowed;
      }
      
      .gp-account-section label {
        display: block;
        font-weight: 600;
        color: #334155;
        margin-bottom: 8px;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      /* Buttons */
      .gp-account-section button,
      .gp-account-section .btn {
        background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%) !important;
        border: none !important;
        padding: 12px 24px !important;
        border-radius: 10px !important;
        font-weight: 700 !important;
        font-size: 14px !important;
        color: white !important;
        cursor: pointer;
        transition: all 0.2s !important;
      }
      
      .gp-account-section button:hover,
      .gp-account-section .btn:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(29, 78, 216, 0.4) !important;
      }
      
      /* Input Group */
      .gp-account-input-group {
        display: flex;
        gap: 12px;
        align-items: flex-end;
        margin-bottom: 16px;
      }
      
      .gp-account-input-group > div {
        flex: 1;
      }
      
      .gp-account-input-group button {
        flex-shrink: 0;
      }
      
      /* 2FA Section */
      .gp-account-2fa {
        background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
        border: 1px solid #86efac;
        border-radius: 12px;
        padding: 20px;
        margin-top: 16px;
      }
      
      .gp-account-2fa-title {
        font-weight: 700;
        color: #166534;
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }
      
      .gp-account-2fa p {
        color: #15803d;
        font-size: 13px;
        margin: 0 0 12px 0;
        line-height: 1.5;
      }
      
      .gp-account-2fa button {
        background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%) !important;
      }
      
      .gp-account-2fa button:hover {
        box-shadow: 0 6px 20px rgba(22, 163, 74, 0.4) !important;
      }
      
      /* API Key Section */
      .gp-account-apikey {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 18px;
        background: #1e293b;
        border-radius: 10px;
        font-family: 'Monaco', 'Consolas', monospace;
        font-size: 13px;
        color: #10b981;
        margin-bottom: 12px;
      }
      
      .gp-account-apikey code {
        flex: 1;
        word-break: break-all;
      }
      
      .gp-account-apikey button {
        background: #3b82f6 !important;
        padding: 8px 16px !important;
        font-size: 12px !important;
      }
      
      /* Notifications Table */
      .gp-account-notif-table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
      }
      
      .gp-account-notif-table thead {
        background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
      }
      
      .gp-account-notif-table th {
        padding: 14px 16px;
        text-align: left;
        font-weight: 700;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: white;
      }
      
      .gp-account-notif-table th:first-child {
        border-radius: 10px 0 0 10px;
      }
      
      .gp-account-notif-table th:last-child {
        border-radius: 0 10px 10px 0;
      }
      
      .gp-account-notif-table td {
        padding: 16px;
        border-bottom: 1px solid #f1f5f9;
        font-size: 14px;
      }
      
      .gp-account-notif-table tr:hover td {
        background: #f8fafc;
      }
      
      /* Styled Checkboxes */
      .gp-account-notif-table input[type="checkbox"] {
        width: 20px;
        height: 20px;
        accent-color: #3b82f6;
        cursor: pointer;
      }
      
      /* Email Confirmation Alert */
      .gp-account-email-alert {
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        border: 1px solid #fcd34d;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 20px;
      }
      
      .gp-account-email-alert h4 {
        color: #92400e;
        font-weight: 700;
        margin: 0 0 8px 0;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .gp-account-email-alert p {
        color: #a16207;
        font-size: 13px;
        margin: 0 0 12px 0;
      }
      
      .gp-account-email-alert button {
        background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%) !important;
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        .gp-account-hero {
          padding: 24px;
        }
        
        .gp-account-hero-content {
          flex-direction: column;
          text-align: center;
        }
        
        .gp-account-hero-avatar {
          width: 64px;
          height: 64px;
          font-size: 28px;
        }
        
        .gp-account-hero-title {
          font-size: 22px;
        }
        
        .gp-account-tabs {
          width: 100%;
          justify-content: center;
        }
        
        .gp-account-input-group {
          flex-direction: column;
        }
        
        .gp-account-input-group button {
          width: 100%;
        }
      }
    `;
    document.head.appendChild(styles);
  }

  function addHeroHeader() {
    if (document.querySelector('.gp-account-hero')) return;

    // Get username and email from page
    const usernameInput = document.querySelector('input[name="username"], input[readonly]');
    const emailInput = document.querySelector('input[type="email"], input[name="email"]');

    const username = usernameInput?.value || 'User';
    const email = emailInput?.value || '';
    const initial = username.charAt(0).toUpperCase();

    // Find where to insert
    const mainContent = document.querySelector('.wrapper-content__body') ||
      document.querySelector('.main-content') ||
      document.querySelector('.content') ||
      document.querySelector('main');

    const tabs = document.querySelector('.nav-tabs, .nav, ul.nav');
    const insertPoint = tabs || (mainContent ? mainContent.firstElementChild : null);

    if (!insertPoint) return;

    const hero = document.createElement('div');
    hero.className = 'gp-account-hero';
    hero.innerHTML = `
      <div class="gp-account-hero-content">
        <div class="gp-account-hero-avatar">
          ${initial}
        </div>
        <div class="gp-account-hero-info">
          <h1 class="gp-account-hero-title">Account Settings</h1>
          <p class="gp-account-hero-subtitle">Manage your profile, security, and preferences</p>
          ${email ? `<div class="gp-account-hero-email">📧 ${email}</div>` : ''}
        </div>
      </div>
    `;

    insertPoint.parentElement.insertBefore(hero, insertPoint);
  }

  function enhanceTabs() {
    const tabs = document.querySelector('.nav-tabs, .nav, ul.nav');
    if (!tabs || tabs.classList.contains('gp-account-tabs')) return;

    tabs.classList.add('gp-account-tabs');
  }

  function enhanceFormSections() {
    // Find all form groups and wrap them in sections
    const formGroups = document.querySelectorAll('.form-group, .mb-3, form > div');

    // Style existing buttons
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(btn => {
      if (btn.closest('.gp-account-hero')) return;
      btn.classList.add('gp-styled-btn');
    });

    // Style existing tables (notifications)
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      table.classList.add('gp-account-notif-table');
    });

    // Find and enhance 2FA section
    const twoFaText = document.body.innerText;
    if (twoFaText.includes('Two-factor') || twoFaText.includes('2FA')) {
      const twoFaHeader = Array.from(document.querySelectorAll('strong, h4, h5'))
        .find(el => el.textContent.includes('Two-factor'));

      if (twoFaHeader) {
        const twoFaSection = twoFaHeader.closest('div');
        if (twoFaSection && !twoFaSection.classList.contains('gp-account-2fa')) {
          twoFaSection.classList.add('gp-account-2fa');
        }
      }
    }
  }

  // Initialisation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initAccountRedesign, 500));
  } else {
    setTimeout(initAccountRedesign, 500);
  }

})();

// =============================================================================
// MODULE: MASS ORDER PAGE REDESIGN — BULK ORDERING EXPERIENCE
// =============================================================================
(function () {
  'use strict';

  // Détection page Mass Order
  const isMassOrderPage = window.location.pathname.includes('/massorder') ||
    window.location.pathname.includes('/mass-order') ||
    window.location.pathname.includes('/bulkorder');

  if (!isMassOrderPage) return;

  console.log('📦 [Mass Order] Initializing Premium Redesign...');

  function initMassOrderRedesign() {
    // Éviter double initialisation
    if (document.querySelector('#gp-massorder-redesign')) return;

    // Attendre que la page soit chargée
    const form = document.querySelector('form') || document.querySelector('textarea');

    if (!form) {
      console.log('⏳ [Mass Order] Waiting for content...');
      setTimeout(initMassOrderRedesign, 500);
      return;
    }

    // Marquer comme initialisé
    const marker = document.createElement('div');
    marker.id = 'gp-massorder-redesign';
    marker.style.display = 'none';
    document.body.appendChild(marker);

    // === INJECTION CSS ===
    injectStyles();

    // === ENHANCE PAGE ===
    addHeroHeader();
    enhanceForm();

    console.log('✅ [Mass Order] Premium Redesign Applied!');
  }

  function injectStyles() {
    if (document.getElementById('gp-massorder-styles')) return;

    const styles = document.createElement('style');
    styles.id = 'gp-massorder-styles';
    styles.textContent = `
      /* === MASS ORDER PAGE PREMIUM STYLES === */
      
      /* Hero Banner - Purple/Indigo bulk theme */
      .gp-massorder-hero {
        background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 50%, #6366f1 100%) !important;
        border-radius: 16px !important;
        padding: 28px 32px !important;
        margin-bottom: 24px !important;
        margin-top: 0 !important;
        position: relative !important;
        overflow: hidden !important;
        color: white !important;
        box-shadow: 0 10px 40px rgba(124, 58, 237, 0.25) !important;
      }
      
      .gp-massorder-hero::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        width: 100%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        pointer-events: none;
      }
      
      .gp-massorder-hero-content {
        position: relative;
        z-index: 1;
      }
      
      .gp-massorder-hero-title {
        font-size: 26px;
        font-weight: 800;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 12px;
        color: white !important;
      }
      
      .gp-massorder-hero-subtitle {
        font-size: 14px;
        opacity: 0.9;
        margin: 8px 0 0 0;
        max-width: 600px;
        line-height: 1.5;
      }
      
      /* Form Card */
      .gp-massorder-form-card {
        background: white;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        border: 1px solid #e2e8f0;
      }
      
      .gp-massorder-form-header {
        font-size: 18px;
        font-weight: 700;
        color: #1e293b;
        margin: 0 0 8px 0;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .gp-massorder-format-guide {
        background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        border: 1px solid #7dd3fc;
        border-radius: 10px;
        padding: 14px 18px;
        margin-bottom: 16px;
      }
      
      .gp-massorder-format-guide code {
        background: #0ea5e9;
        color: white;
        padding: 3px 8px;
        border-radius: 6px;
        font-weight: 600;
        font-size: 13px;
      }
      
      .gp-massorder-format-guide p {
        margin: 0;
        font-size: 13px;
        color: #0369a1;
      }
      
      /* Textarea */
      .gp-massorder-form-card textarea {
        width: 100%;
        min-height: 250px;
        padding: 16px;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        font-size: 14px;
        font-family: 'Monaco', 'Consolas', monospace;
        line-height: 1.6;
        resize: vertical;
        transition: all 0.2s;
        background: #f8fafc;
      }
      
      .gp-massorder-form-card textarea:focus {
        outline: none;
        border-color: #7c3aed;
        background: white;
        box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);
      }
      
      .gp-massorder-form-card textarea::placeholder {
        color: #94a3b8;
      }
      
      /* Submit Button */
      .gp-massorder-form-card button[type="submit"],
      .gp-massorder-form-card .btn-primary {
        background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%) !important;
        border: none !important;
        padding: 14px 32px !important;
        border-radius: 10px !important;
        font-weight: 700 !important;
        font-size: 15px !important;
        color: white !important;
        cursor: pointer;
        transition: all 0.2s !important;
        width: 100%;
        margin-top: 16px;
      }
      
      .gp-massorder-form-card button[type="submit"]:hover,
      .gp-massorder-form-card .btn-primary:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4) !important;
      }
      
      /* Example line */
      .gp-massorder-example {
        margin-top: 16px;
        padding: 12px 16px;
        background: #fef3c7;
        border-radius: 8px;
        border-left: 4px solid #f59e0b;
        font-size: 12px;
        color: #92400e;
      }
      
      .gp-massorder-example strong {
        display: block;
        margin-bottom: 4px;
      }
      
      .gp-massorder-example code {
        background: rgba(0,0,0,0.1);
        padding: 2px 6px;
        border-radius: 4px;
        font-family: monospace;
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        .gp-massorder-hero {
          padding: 20px;
        }
        
        .gp-massorder-hero-title {
          font-size: 22px;
        }
        
        .gp-massorder-form-card textarea {
          min-height: 180px;
        }
      }
    `;
    document.head.appendChild(styles);
  }

  function addHeroHeader() {
    if (document.querySelector('.gp-massorder-hero')) return;

    // Find where to insert
    const mainContent = document.querySelector('.wrapper-content__body') ||
      document.querySelector('.main-content') ||
      document.querySelector('.content') ||
      document.querySelector('main');

    const existingTitle = document.querySelector('h1, h2, strong');
    const insertPoint = existingTitle || (mainContent ? mainContent.firstElementChild : null);

    if (!insertPoint) return;

    // Hide original title/instruction
    if (existingTitle && (existingTitle.textContent.toLowerCase().includes('order') ||
      existingTitle.textContent.toLowerCase().includes('format'))) {
      existingTitle.style.display = 'none';
      // Also hide the format instruction if separate
      const formatHint = existingTitle.nextElementSibling;
      if (formatHint && formatHint.textContent.includes('service_id')) {
        formatHint.style.display = 'none';
      }
    }

    const hero = document.createElement('div');
    hero.className = 'gp-massorder-hero';
    hero.innerHTML = `
      <div class="gp-massorder-hero-content">
        <h1 class="gp-massorder-hero-title">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="1" y="3" width="15" height="13"/>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
          Mass Order
        </h1>
        <p class="gp-massorder-hero-subtitle">
          Place multiple orders at once! Enter one order per line using the format: 
          <strong>service_id|link|quantity</strong>. Perfect for bulk campaigns and resellers.
        </p>
      </div>
    `;

    insertPoint.parentElement.insertBefore(hero, insertPoint);
  }

  function enhanceForm() {
    const form = document.querySelector('form');
    const textarea = document.querySelector('textarea');

    if (!textarea) return;
    if (textarea.closest('.gp-massorder-form-card')) return;

    const formElement = form || textarea.parentElement;

    // Wrap in styled card
    const card = document.createElement('div');
    card.className = 'gp-massorder-form-card';

    const header = document.createElement('h3');
    header.className = 'gp-massorder-form-header';
    header.innerHTML = '📝 Enter Your Orders';

    const formatGuide = document.createElement('div');
    formatGuide.className = 'gp-massorder-format-guide';
    formatGuide.innerHTML = `
      <p><strong>Format:</strong> <code>service_id|link|quantity</code></p>
    `;

    formElement.parentElement.insertBefore(card, formElement);
    card.appendChild(header);
    card.appendChild(formatGuide);
    card.appendChild(formElement);

    // Add placeholder to textarea
    textarea.placeholder = '100|https://instagram.com/username|1000\n101|https://twitter.com/username|500\n102|https://youtube.com/watch?v=xxxxx|2000';

    // Add example tip
    const example = document.createElement('div');
    example.className = 'gp-massorder-example';
    example.innerHTML = `
      <strong>💡 Tip:</strong> 
      Each line creates one order. Use <code>|</code> (pipe) to separate values.
    `;
    card.appendChild(example);
  }

  // Initialisation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initMassOrderRedesign, 500));
  } else {
    setTimeout(initMassOrderRedesign, 500);
  }

})();

// =============================================================================
// MODULE: TICKETS PAGE REDESIGN — PREMIUM SUPPORT EXPERIENCE
// =============================================================================
(function () {
  'use strict';

  // Détection page Tickets (list + conversation view)
  const isTicketsPage = window.location.pathname.includes('/tickets') ||
    window.location.pathname.includes('/ticket') ||
    window.location.pathname.includes('/viewticket');

  const isViewTicketPage = window.location.pathname.includes('/viewticket');

  if (!isTicketsPage) return;

  console.log('🎫 [Tickets] Initializing Premium Redesign...');

  function initTicketsRedesign() {
    // Éviter double initialisation
    if (document.querySelector('#gp-tickets-redesign')) return;

    // Attendre que la page soit chargée
    const table = document.querySelector('table');
    const form = document.querySelector('form');

    if (!table && !form) {
      console.log('⏳ [Tickets] Waiting for content...');
      setTimeout(initTicketsRedesign, 500);
      return;
    }

    // Marquer comme initialisé
    const marker = document.createElement('div');
    marker.id = 'gp-tickets-redesign';
    marker.style.display = 'none';
    document.body.appendChild(marker);

    // === INJECTION CSS ===
    injectStyles();

    // === ENHANCE PAGE ===
    if (isViewTicketPage) {
      // Conversation view
      addConversationHero();
      enhanceConversationMessages();
      enhanceReplyForm();
    } else {
      // Tickets list
      addHeroHeader();
      enhanceForm();
      enhanceTable();
    }

    console.log('✅ [Tickets] Premium Redesign Applied!');
  }

  function injectStyles() {
    if (document.getElementById('gp-tickets-styles')) return;

    const styles = document.createElement('style');
    styles.id = 'gp-tickets-styles';
    styles.textContent = `
      /* === TICKETS PAGE PREMIUM STYLES === */
      
      /* Hero Banner - Orange/Amber support gradient */
      .gp-tickets-hero {
        background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%) !important;
        border-radius: 16px !important;
        padding: 28px 32px !important;
        margin-bottom: 24px !important;
        margin-top: 0 !important;
        position: relative !important;
        overflow: hidden !important;
        color: white !important;
        box-shadow: 0 10px 40px rgba(245, 158, 11, 0.25) !important;
      }
      
      .gp-tickets-hero::before {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        width: 100%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        pointer-events: none;
      }
      
      .gp-tickets-hero-content {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;
      }
      
      .gp-tickets-hero-title {
        font-size: 26px;
        font-weight: 800;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 12px;
        color: white !important;
      }
      
      .gp-tickets-hero-subtitle {
        font-size: 14px;
        opacity: 0.9;
        margin: 6px 0 0 0;
      }
      
      .gp-tickets-hero-stats {
        display: flex;
        gap: 16px;
      }
      
      .gp-tickets-stat {
        background: rgba(255,255,255,0.2);
        backdrop-filter: blur(10px);
        border-radius: 12px;
        padding: 14px 20px;
        text-align: center;
        min-width: 100px;
        border: 1px solid rgba(255,255,255,0.2);
      }
      
      .gp-tickets-stat-value {
        font-size: 28px;
        font-weight: 800;
        display: block;
        color: white;
      }
      
      .gp-tickets-stat-label {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        opacity: 0.9;
      }
      
      /* Form Card */
      .gp-tickets-form-card {
        background: white;
        border-radius: 16px;
        padding: 24px;
        margin-bottom: 24px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        border: 1px solid #e2e8f0;
      }
      
      .gp-tickets-form-header {
        font-size: 18px;
        font-weight: 700;
        color: #1e293b;
        margin: 0 0 20px 0;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      /* Form Elements */
      .gp-tickets-form-card select,
      .gp-tickets-form-card input[type="text"],
      .gp-tickets-form-card input[type="number"],
      .gp-tickets-form-card textarea {
        width: 100%;
        padding: 12px 16px;
        border: 2px solid #e2e8f0;
        border-radius: 10px;
        font-size: 14px;
        transition: all 0.2s;
        background: #f8fafc;
      }
      
      .gp-tickets-form-card select:focus,
      .gp-tickets-form-card input:focus,
      .gp-tickets-form-card textarea:focus {
        outline: none;
        border-color: #f59e0b;
        background: white;
        box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
      }
      
      .gp-tickets-form-card label {
        display: block;
        font-weight: 600;
        color: #334155;
        margin-bottom: 8px;
        font-size: 13px;
      }
      
      .gp-tickets-form-card .form-group,
      .gp-tickets-form-card .mb-3 {
        margin-bottom: 16px;
      }
      
      .gp-tickets-form-card textarea {
        min-height: 120px;
        resize: vertical;
      }
      
      /* Submit Button */
      .gp-tickets-form-card button[type="submit"],
      .gp-tickets-form-card .btn-primary {
        background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%) !important;
        border: none !important;
        padding: 14px 28px !important;
        border-radius: 10px !important;
        font-weight: 700 !important;
        font-size: 14px !important;
        color: white !important;
        cursor: pointer;
        transition: all 0.2s !important;
        width: 100%;
      }
      
      .gp-tickets-form-card button[type="submit"]:hover,
      .gp-tickets-form-card .btn-primary:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4) !important;
      }
      
      /* Attach files */
      .gp-tickets-form-card a[href*="attach"],
      .gp-tickets-form-card .attach-files {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: #f59e0b;
        font-weight: 600;
        font-size: 13px;
        text-decoration: none;
        margin-bottom: 16px;
      }
      
      /* Table Card */
      .gp-tickets-table-card {
        background: white;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        border: 1px solid #e2e8f0;
      }
      
      .gp-tickets-table-header {
        font-size: 18px;
        font-weight: 700;
        color: #1e293b;
        margin: 0 0 20px 0;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      /* Search Bar */
      .gp-tickets-table-card .input-group,
      .gp-tickets-table-card form:has(input[type="search"]),
      .gp-tickets-table-card form:has(input[placeholder*="Search"]) {
        display: flex;
        gap: 8px;
        margin-bottom: 16px;
      }
      
      .gp-tickets-table-card input[type="search"],
      .gp-tickets-table-card input[placeholder*="Search"] {
        flex: 1;
        padding: 10px 16px;
        border: 2px solid #e2e8f0;
        border-radius: 10px;
        font-size: 14px;
      }
      
      /* Table Styling */
      .gp-tickets-table-card table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;
      }
      
      .gp-tickets-table-card table thead {
        background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%);
      }
      
      .gp-tickets-table-card table th {
        padding: 14px 16px;
        text-align: left;
        font-weight: 700;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: white !important;
        border: none !important;
      }
      
      .gp-tickets-table-card table th:first-child {
        border-radius: 10px 0 0 10px;
      }
      
      .gp-tickets-table-card table th:last-child {
        border-radius: 0 10px 10px 0;
      }
      
      .gp-tickets-table-card table td {
        padding: 14px 16px;
        border-bottom: 1px solid #f1f5f9;
        font-size: 14px;
        color: #334155;
      }
      
      .gp-tickets-table-card table tr:hover td {
        background: #fef3c7;
      }
      
      .gp-tickets-table-card table tbody tr:last-child td {
        border-bottom: none;
      }
      
      /* Status Badges */
      .gp-ticket-status {
        display: inline-flex;
        padding: 6px 12px;
        border-radius: 20px;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .gp-ticket-status.pending {
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        color: #92400e;
        border: 1px solid #fcd34d;
      }
      
      .gp-ticket-status.open,
      .gp-ticket-status.answered {
        background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
        color: #065f46;
        border: 1px solid #6ee7b7;
      }
      
      .gp-ticket-status.closed,
      .gp-ticket-status.resolved {
        background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
        color: #475569;
        border: 1px solid #cbd5e1;
      }
      
      /* Subject Link */
      .gp-tickets-table-card table td a {
        color: #ea580c;
        font-weight: 600;
        text-decoration: none;
      }
      
      .gp-tickets-table-card table td a:hover {
        color: #f59e0b;
        text-decoration: underline;
      }
      
      /* === CONVERSATION VIEW STYLES === */
      
      /* Conversation Card */
      .gp-tickets-conv-card {
        background: white;
        border-radius: 16px;
        padding: 24px;
        margin-bottom: 24px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        border: 1px solid #e2e8f0;
      }
      
      /* Message bubbles */
      .gp-ticket-message {
        background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
        border-radius: 12px;
        padding: 16px 20px;
        margin-bottom: 12px;
        border-left: 4px solid #3b82f6;
      }
      
      .gp-ticket-message.admin {
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        border-left-color: #f59e0b;
      }
      
      .gp-ticket-message-content {
        color: #1e293b;
        font-size: 14px;
        line-height: 1.6;
      }
      
      .gp-ticket-message-content a {
        color: #2563eb;
        font-weight: 600;
      }
      
      .gp-ticket-message-meta {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(0,0,0,0.1);
        font-size: 12px;
        color: #64748b;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .gp-ticket-message-author {
        font-weight: 600;
        color: #334155;
      }
      
      /* Reply Form */
      .gp-tickets-reply-card {
        background: white;
        border-radius: 16px;
        padding: 24px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        border: 1px solid #e2e8f0;
      }
      
      .gp-tickets-reply-header {
        font-size: 16px;
        font-weight: 700;
        color: #1e293b;
        margin: 0 0 16px 0;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .gp-tickets-reply-card textarea {
        width: 100%;
        min-height: 100px;
        padding: 14px 16px;
        border: 2px solid #e2e8f0;
        border-radius: 10px;
        font-size: 14px;
        resize: vertical;
        transition: all 0.2s;
        background: #f8fafc;
      }
      
      .gp-tickets-reply-card textarea:focus {
        outline: none;
        border-color: #f59e0b;
        background: white;
        box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
      }
      
      .gp-tickets-reply-card button[type="submit"],
      .gp-tickets-reply-card .btn-primary {
        background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%) !important;
        border: none !important;
        padding: 12px 24px !important;
        border-radius: 10px !important;
        font-weight: 700 !important;
        font-size: 14px !important;
        color: white !important;
        cursor: pointer;
        transition: all 0.2s !important;
        width: 100%;
        margin-top: 12px;
      }
      
      .gp-tickets-reply-card button[type="submit"]:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 6px 20px rgba(245, 158, 11, 0.4) !important;
      }
      
      /* Attach files in conv */
      .gp-tickets-reply-card a[href*="attach"],
      .gp-tickets-conv-card a[href*="attach"] {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        color: #f59e0b;
        font-weight: 600;
        font-size: 13px;
        text-decoration: none;
        margin-bottom: 12px;
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        .gp-tickets-hero {
          padding: 20px;
        }
        
        .gp-tickets-hero-content {
          flex-direction: column;
          text-align: center;
        }
        
        .gp-tickets-hero-title {
          font-size: 22px;
          justify-content: center;
        }
        
        .gp-tickets-hero-stats {
          justify-content: center;
        }
        
        .gp-tickets-stat {
          min-width: 80px;
          padding: 10px 14px;
        }
        
        .gp-tickets-stat-value {
          font-size: 22px;
        }
      }
    `;
    document.head.appendChild(styles);
  }

  function addHeroHeader() {
    if (document.querySelector('.gp-tickets-hero')) return;

    // Count tickets from table
    const table = document.querySelector('table');
    let totalTickets = 0;
    let pendingCount = 0;

    if (table) {
      const rows = table.querySelectorAll('tbody tr');
      totalTickets = rows.length;

      rows.forEach(row => {
        const statusCell = row.querySelector('td:nth-child(3)');
        if (statusCell) {
          const statusText = statusCell.textContent.toLowerCase().trim();
          if (statusText.includes('pending') || statusText.includes('waiting')) {
            pendingCount++;
          }
        }
      });
    }

    // Find where to insert
    const mainContent = document.querySelector('.wrapper-content__body') ||
      document.querySelector('.main-content') ||
      document.querySelector('.content') ||
      document.querySelector('main');

    const existingTitle = document.querySelector('h1, h2');
    const insertPoint = existingTitle || (mainContent ? mainContent.firstElementChild : null);

    if (!insertPoint) return;

    // Hide original title
    if (existingTitle && existingTitle.textContent.toLowerCase().includes('ticket')) {
      existingTitle.style.display = 'none';
    }

    const hero = document.createElement('div');
    hero.className = 'gp-tickets-hero';
    hero.innerHTML = `
      <div class="gp-tickets-hero-content">
        <div>
          <h1 class="gp-tickets-hero-title">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14,2 14,8 20,8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <line x1="10" y1="9" x2="8" y2="9"/>
            </svg>
            Support Tickets
          </h1>
          <p class="gp-tickets-hero-subtitle">Create and track your support requests</p>
        </div>
        <div class="gp-tickets-hero-stats">
          <div class="gp-tickets-stat">
            <span class="gp-tickets-stat-value">${totalTickets}</span>
            <span class="gp-tickets-stat-label">Total Tickets</span>
          </div>
          <div class="gp-tickets-stat" style="background: rgba(255,255,255,0.3);">
            <span class="gp-tickets-stat-value">${pendingCount}</span>
            <span class="gp-tickets-stat-label">Pending</span>
          </div>
        </div>
      </div>
    `;

    insertPoint.parentElement.insertBefore(hero, insertPoint);
  }

  function enhanceForm() {
    const form = document.querySelector('form');
    if (!form || form.closest('.gp-tickets-form-card')) return;

    // Wrap form in styled card
    const card = document.createElement('div');
    card.className = 'gp-tickets-form-card';

    const header = document.createElement('h3');
    header.className = 'gp-tickets-form-header';
    header.innerHTML = '✉️ Create New Ticket';

    form.parentElement.insertBefore(card, form);
    card.appendChild(header);
    card.appendChild(form);
  }

  function enhanceTable() {
    const table = document.querySelector('table');
    if (!table || table.closest('.gp-tickets-table-card')) return;

    // Find table container
    let tableContainer = table.parentElement;

    // Wrap in styled card
    const card = document.createElement('div');
    card.className = 'gp-tickets-table-card';

    const header = document.createElement('h3');
    header.className = 'gp-tickets-table-header';
    header.innerHTML = '📋 Your Tickets';

    tableContainer.insertBefore(card, table);
    card.appendChild(header);

    // Move search if exists
    const searchInput = tableContainer.querySelector('input[type="search"], input[placeholder*="Search"]');
    if (searchInput) {
      const searchForm = searchInput.closest('form') || searchInput.parentElement;
      card.appendChild(searchForm);
    }

    card.appendChild(table);

    // Enhance status cells
    const statusCells = table.querySelectorAll('tbody td:nth-child(3)');
    statusCells.forEach(cell => {
      const text = cell.textContent.trim().toLowerCase();
      let statusClass = '';

      if (text.includes('pending') || text.includes('waiting')) {
        statusClass = 'pending';
      } else if (text.includes('open') || text.includes('answered') || text.includes('reply')) {
        statusClass = 'open';
      } else if (text.includes('closed') || text.includes('resolved')) {
        statusClass = 'closed';
      }

      if (statusClass) {
        cell.innerHTML = `<span class="gp-ticket-status ${statusClass}">${cell.textContent.trim()}</span>`;
      }
    });
  }

  // === CONVERSATION PAGE FUNCTIONS ===

  function addConversationHero() {
    if (document.querySelector('.gp-tickets-hero')) return;

    // Get ticket subject from page title or h1/h2
    const existingTitle = document.querySelector('h1, h2');
    const ticketSubject = existingTitle ? existingTitle.textContent.trim() : 'Ticket Conversation';

    // Find where to insert
    const mainContent = document.querySelector('.wrapper-content__body') ||
      document.querySelector('.main-content') ||
      document.querySelector('.content') ||
      document.querySelector('main');

    const insertPoint = existingTitle || (mainContent ? mainContent.firstElementChild : null);

    if (!insertPoint) return;

    // Hide original title
    if (existingTitle) {
      existingTitle.style.display = 'none';
    }

    const hero = document.createElement('div');
    hero.className = 'gp-tickets-hero';
    hero.innerHTML = `
      <div class="gp-tickets-hero-content">
        <div style="flex: 1;">
          <h1 class="gp-tickets-hero-title">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            ${ticketSubject}
          </h1>
          <p class="gp-tickets-hero-subtitle">View and reply to your support ticket</p>
        </div>
        <a href="/tickets" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: rgba(255,255,255,0.2); border-radius: 10px; color: white; text-decoration: none; font-weight: 600; font-size: 13px; backdrop-filter: blur(10px);">
          ← Back to Tickets
        </a>
      </div>
    `;

    insertPoint.parentElement.insertBefore(hero, insertPoint);
  }

  function enhanceConversationMessages() {
    // Find message containers - typically divs with background color or specific structure
    const messageContainers = document.querySelectorAll('div[style*="background"], .message, .ticket-message, .reply');

    messageContainers.forEach(msg => {
      if (msg.closest('.gp-tickets-hero') || msg.closest('.gp-tickets-reply-card')) return;
      if (msg.classList.contains('gp-ticket-message')) return;

      // Check if it looks like a message (has text content)
      const hasText = msg.textContent.trim().length > 0;
      const hasLink = msg.querySelector('a');
      const bgStyle = msg.getAttribute('style') || '';

      if (hasText && (bgStyle.includes('background') || hasLink)) {
        msg.classList.add('gp-ticket-message');

        // Check if admin message
        const text = msg.textContent.toLowerCase();
        if (text.includes('admin') || text.includes('support')) {
          msg.classList.add('admin');
        }
      }
    });

    // Also wrap existing blue message boxes
    const blueBoxes = document.querySelectorAll('div[style*="#"]');
    blueBoxes.forEach(box => {
      const style = box.getAttribute('style') || '';
      if (style.includes('bfdbfe') || style.includes('dbeafe') || style.includes('93c5fd')) {
        if (!box.classList.contains('gp-ticket-message')) {
          box.classList.add('gp-ticket-message');
        }
      }
    });
  }

  function enhanceReplyForm() {
    const form = document.querySelector('form');
    if (!form || form.closest('.gp-tickets-reply-card') || form.closest('.gp-tickets-form-card')) return;

    // Check if this looks like a reply form (has textarea)
    const textarea = form.querySelector('textarea');
    if (!textarea) return;

    // Wrap form in styled card
    const card = document.createElement('div');
    card.className = 'gp-tickets-reply-card';

    const header = document.createElement('h3');
    header.className = 'gp-tickets-reply-header';
    header.innerHTML = '💬 Reply to this ticket';

    form.parentElement.insertBefore(card, form);
    card.appendChild(header);
    card.appendChild(form);
  }

  // Initialisation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initTicketsRedesign, 500));
  } else {
    setTimeout(initTicketsRedesign, 500);
  }

})();

// =============================================================================
// MODULE: ADD FUNDS PAGE REDESIGN — PREMIUM EDITION
// =============================================================================
(function () {
  'use strict';

  // Détection page Add Funds
  const isAddFundsPage = window.location.pathname.includes('/addfunds') ||
    window.location.pathname.includes('/add-funds') ||
    window.location.pathname.includes('/deposit');

  if (!isAddFundsPage) {
    return;
  }

  console.log('🎯 [ADD FUNDS] Page detected - Loading Premium Redesign...');

  function initAddFundsRedesign() {
    // Éviter double injection
    if (document.getElementById('gp-addfunds-redesign')) {
      return;
    }

    // Marquer comme initialisé
    const marker = document.createElement('div');
    marker.id = 'gp-addfunds-redesign';
    marker.style.display = 'none';
    document.body.appendChild(marker);

    // === INJECTION CSS ===
    const styles = document.createElement('style');
    styles.id = 'gp-addfunds-styles';
    styles.textContent = `
      /* === ADD FUNDS PAGE PREMIUM STYLES === */
      
      /* Hero Banner */
      .gp-addfunds-hero {
        background: linear-gradient(135deg, #059669 0%, #10b981 50%, #34d399 100%) !important;
        border-radius: 16px !important;
        padding: 24px 32px !important;
        margin-bottom: 20px !important;
        position: relative !important;
        overflow: hidden !important;
        color: white !important;
        box-shadow: 0 8px 30px rgba(5, 150, 105, 0.2) !important;
        width: 100% !important;
        box-sizing: border-box !important;
      }
      
      .gp-addfunds-hero::before {
        content: '';
        position: absolute;
        top: -100px;
        right: -100px;
        width: 250px;
        height: 250px;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        pointer-events: none;
      }
      
      .gp-addfunds-hero-content {
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
      }
      
      .gp-addfunds-hero-title {
        font-size: 26px;
        font-weight: 800;
        margin: 0 0 4px 0;
        letter-spacing: -0.5px;
        display: flex;
        align-items: center;
        gap: 12px;
      }
      
      .gp-addfunds-hero-subtitle {
        font-size: 15px;
        color: rgba(255,255,255,0.85);
        margin: 0;
      }
      
      .gp-addfunds-balance {
        text-align: right;
        padding: 20px 32px;
        background: rgba(255,255,255,0.15);
        border-radius: 12px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
      }
      
      .gp-addfunds-balance-label {
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: rgba(255,255,255,0.8);
        margin-bottom: 4px;
      }
      
      .gp-addfunds-balance-value {
        font-size: 36px;
        font-weight: 800;
        line-height: 1;
      }
      
      /* Form Container */
      .gp-addfunds-form-wrapper {
        background: white !important;
        border-radius: 16px !important;
        padding: 32px !important;
        margin-bottom: 24px !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.06) !important;
        border: 1px solid #e2e8f0 !important;
      }
      
      .gp-addfunds-form-title {
        font-size: 18px;
        font-weight: 700;
        color: #1e293b;
        margin: 0 0 24px 0;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      
      .gp-addfunds-form-title svg {
        color: #10b981;
      }
      
      /* Amount Input Premium */
      .gp-amount-input-wrapper {
        position: relative;
        margin-bottom: 20px;
      }
      
      .gp-amount-input-wrapper label {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: #374151;
        margin-bottom: 8px;
      }
      
      .gp-amount-input-wrapper input {
        width: 100% !important;
        padding: 16px 20px 16px 60px !important;
        font-size: 20px !important;
        font-weight: 700 !important;
        border: 2px solid #e2e8f0 !important;
        border-radius: 12px !important;
        background: white !important;
        transition: all 0.2s !important;
        box-sizing: border-box !important;
      }
      
      .gp-amount-input-wrapper input:focus {
        outline: none !important;
        border-color: #10b981 !important;
        background: white !important;
        box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1) !important;
      }
      
      .gp-amount-currency {
        position: absolute;
        left: 16px;
        bottom: 14px;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 700;
        color: #10b981;
        background: #f0fdf4;
        border-radius: 8px;
      }
      
      /* Quick Amount Buttons */
      .gp-quick-amounts {
        display: flex;
        gap: 10px;
        margin-bottom: 24px;
        flex-wrap: wrap;
      }
      
      .gp-quick-amount-btn {
        padding: 10px 20px;
        border: 2px solid #e2e8f0;
        border-radius: 10px;
        background: white;
        color: #64748b;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .gp-quick-amount-btn:hover {
        border-color: #10b981;
        color: #10b981;
        background: #f0fdf4;
      }
      
      .gp-quick-amount-btn.active {
        background: #10b981;
        border-color: #10b981;
        color: white;
      }
      
      /* Pay Button */
      .gp-pay-btn {
        width: 100% !important;
        padding: 18px 32px !important;
        background: linear-gradient(135deg, #059669, #10b981) !important;
        border: none !important;
        border-radius: 12px !important;
        color: white !important;
        font-size: 16px !important;
        font-weight: 700 !important;
        cursor: pointer !important;
        transition: all 0.3s !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 10px !important;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3) !important;
      }
      
      .gp-pay-btn:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4) !important;
      }
      
      /* Method Select Premium */
      .gp-method-select {
        width: 100% !important;
        padding: 16px 20px !important;
        font-size: 15px !important;
        font-weight: 600 !important;
        border: 2px solid #e2e8f0 !important;
        border-radius: 12px !important;
        background: white !important;
        cursor: pointer !important;
        transition: all 0.2s !important;
        margin-bottom: 20px !important;
        text-overflow: initial !important;
        white-space: normal !important;
        overflow: visible !important;
        -webkit-appearance: none !important;
        -moz-appearance: none !important;
        appearance: none !important;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") !important;
        background-repeat: no-repeat !important;
        background-position: right 16px center !important;
        padding-right: 48px !important;
      }
      
      .gp-method-select:focus {
        outline: none !important;
        border-color: #10b981 !important;
        box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.1) !important;
      }
      
      .gp-method-select option {
        padding: 12px !important;
        font-size: 14px !important;
      }
      
      /* History Section */
      .gp-addfunds-history {
        background: white !important;
        border-radius: 16px !important;
        overflow: hidden !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.06) !important;
        border: 1px solid #e2e8f0 !important;
      }
      
      .gp-addfunds-history-header {
        padding: 20px 24px;
        border-bottom: 1px solid #e2e8f0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .gp-addfunds-history-title {
        font-size: 16px;
        font-weight: 700;
        color: #1e293b;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      
      .gp-addfunds-table {
        width: 100%;
        border-collapse: collapse;
      }
      
      .gp-addfunds-table th {
        padding: 14px 20px;
        text-align: left;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        color: #64748b;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
      }
      
      .gp-addfunds-table td {
        padding: 16px 20px;
        font-size: 14px;
        color: #334155;
        border-bottom: 1px solid #f1f5f9;
      }
      
      .gp-addfunds-table tr:hover td {
        background: #f8fafc;
      }
      
      .gp-addfunds-table tr:last-child td {
        border-bottom: none;
      }
      
      .gp-deposit-id {
        font-weight: 700;
        color: #059669;
      }
      
      .gp-deposit-amount {
        font-weight: 700;
        color: #1e293b;
        font-size: 15px;
      }
      
      .gp-deposit-method {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 12px;
        background: #f0fdf4;
        color: #059669;
        border-radius: 6px;
        font-weight: 600;
        font-size: 12px;
      }
      
      /* Instruction styling */
      .gp-instruction-box {
        background: #fffbeb;
        border: 1px solid #fcd34d;
        border-radius: 10px;
        padding: 16px 20px;
        margin-bottom: 20px;
      }
      
      .gp-instruction-box p {
        margin: 0;
        color: #92400e;
        font-size: 14px;
        line-height: 1.6;
      }
      
      /* Responsive */
      @media (max-width: 768px) {
        .gp-addfunds-hero {
          padding: 24px !important;
        }
        
        .gp-addfunds-hero-content {
          flex-direction: column;
          text-align: center;
        }
        
        .gp-addfunds-balance {
          width: 100%;
          text-align: center;
        }
        
        .gp-quick-amounts {
          justify-content: center;
        }
      }
    `;
    document.head.appendChild(styles);

    // === AJOUTER LE HERO HEADER ===
    addHeroHeader();

    // === AMÉLIORER LE FORMULAIRE ===
    enhanceForm();

    // === AMÉLIORER LE TABLEAU D'HISTORIQUE ===
    enhanceHistoryTable();

    console.log('✅ [ADD FUNDS] Premium Redesign Applied!');
  }

  function addHeroHeader() {
    // Trouver le conteneur principal
    const mainContainer = document.querySelector('.wrapper-content__body') ||
      document.querySelector('[id^="block_"]')?.parentElement ||
      document.querySelector('main, .main-content');

    if (!mainContainer || document.querySelector('.gp-addfunds-hero')) return;

    // Récupérer le solde depuis le header
    const balanceElement = document.querySelector('[class*="balance"], .navbar-balance, header span, .user-balance');
    const balanceText = balanceElement?.textContent?.match(/[\d.,]+/) || ['0.00'];
    const balance = balanceText[0];

    const hero = document.createElement('div');
    hero.className = 'gp-addfunds-hero';
    hero.innerHTML = `
      <div class="gp-addfunds-hero-content">
        <div>
          <h1 class="gp-addfunds-hero-title">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
            Add Funds
          </h1>
          <p class="gp-addfunds-hero-subtitle">Deposit funds to your account securely and instantly</p>
        </div>
        <div class="gp-addfunds-balance">
          <div class="gp-addfunds-balance-label">Current Balance</div>
          <div class="gp-addfunds-balance-value">$${balance}</div>
        </div>
      </div>
    `;

    mainContainer.insertBefore(hero, mainContainer.firstChild);
    console.log('✅ [ADD FUNDS] Hero inserted');
  }

  function enhanceForm() {
    // Trouver le formulaire
    const form = document.querySelector('form') ||
      document.querySelector('[id^="block_"]');

    if (!form) return;

    // Améliorer le select des méthodes - créer un custom dropdown
    const methodSelect = form.querySelector('select');
    if (methodSelect && !methodSelect.dataset.enhanced) {
      methodSelect.dataset.enhanced = 'true';

      // Créer un wrapper pour le custom select
      const selectWrapper = document.createElement('div');
      selectWrapper.className = 'gp-custom-select-wrapper';
      selectWrapper.style.cssText = 'position: relative; width: 100%; margin-bottom: 20px;';

      // Créer le bouton d'affichage
      const selectDisplay = document.createElement('div');
      selectDisplay.className = 'gp-custom-select-display';
      selectDisplay.style.cssText = `
        width: 100%;
        padding: 16px 48px 16px 20px;
        font-size: 15px;
        font-weight: 600;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        background: white url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") no-repeat right 16px center;
        cursor: pointer;
        box-sizing: border-box;
        color: #1e293b;
      `;

      // Afficher la valeur sélectionnée
      const updateDisplay = () => {
        const selectedOption = methodSelect.options[methodSelect.selectedIndex];
        selectDisplay.textContent = selectedOption ? selectedOption.text : 'Select method';
      };
      updateDisplay();

      // Cacher le select natif mais le garder fonctionnel
      methodSelect.style.cssText = `
        position: absolute !important;
        opacity: 0 !important;
        width: 100% !important;
        height: 100% !important;
        top: 0 !important;
        left: 0 !important;
        cursor: pointer !important;
        z-index: 2 !important;
      `;

      // Insérer le wrapper
      methodSelect.parentElement.insertBefore(selectWrapper, methodSelect);
      selectWrapper.appendChild(selectDisplay);
      selectWrapper.appendChild(methodSelect);

      // Fonction pour cacher/montrer les éléments selon la méthode
      const toggleAmountElements = () => {
        const selectedOption = methodSelect.options[methodSelect.selectedIndex];
        const selectedText = selectedOption ? selectedOption.text.toLowerCase() : '';
        const isManual = selectedText.includes('manual') || selectedText.includes('crypto');

        // Cacher les quick amounts et l'input amount pour les méthodes manuelles
        const quickAmounts = document.querySelector('.gp-quick-amounts');
        const amountInput = form.querySelector('input[type="number"], input[type="text"]:not([name*="search"])');
        const amountParent = amountInput?.closest('.form-group') || amountInput?.parentElement;

        if (quickAmounts) {
          quickAmounts.style.display = isManual ? 'none' : 'flex';
        }
        if (amountParent) {
          amountParent.style.display = isManual ? 'none' : 'block';
        }
      };

      // Mettre à jour l'affichage quand la sélection change
      methodSelect.addEventListener('change', () => {
        updateDisplay();
        toggleAmountElements();
      });

      // Appliquer au chargement initial
      setTimeout(toggleAmountElements, 100);
    }

    // Améliorer l'input amount avec styles inline
    const amountInput = form.querySelector('input[type="number"], input[type="text"]:not([name*="search"])');
    if (amountInput && !amountInput.dataset.enhanced) {
      amountInput.dataset.enhanced = 'true';

      // Style de l'input
      amountInput.style.cssText = `
        width: 100% !important;
        padding: 18px 20px !important;
        font-size: 20px !important;
        font-weight: 700 !important;
        border: 2px solid #e2e8f0 !important;
        border-radius: 12px !important;
        background: white !important;
        transition: all 0.2s !important;
        box-sizing: border-box !important;
        margin-bottom: 16px !important;
      `;

      amountInput.placeholder = 'Enter amount...';

      // Ajouter boutons de montant rapide après l'input
      const existingQuick = document.querySelector('.gp-quick-amounts');
      if (!existingQuick) {
        const quickAmounts = document.createElement('div');
        quickAmounts.className = 'gp-quick-amounts';
        quickAmounts.style.cssText = 'display: flex; gap: 10px; margin-bottom: 24px; flex-wrap: wrap;';
        quickAmounts.innerHTML = `
          <button type="button" class="gp-quick-amount-btn" data-amount="5" style="padding: 10px 20px; border: 2px solid #e2e8f0; border-radius: 10px; background: white; color: #64748b; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s;">$5</button>
          <button type="button" class="gp-quick-amount-btn" data-amount="10" style="padding: 10px 20px; border: 2px solid #e2e8f0; border-radius: 10px; background: white; color: #64748b; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s;">$10</button>
          <button type="button" class="gp-quick-amount-btn" data-amount="25" style="padding: 10px 20px; border: 2px solid #e2e8f0; border-radius: 10px; background: white; color: #64748b; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s;">$25</button>
          <button type="button" class="gp-quick-amount-btn" data-amount="50" style="padding: 10px 20px; border: 2px solid #e2e8f0; border-radius: 10px; background: white; color: #64748b; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s;">$50</button>
          <button type="button" class="gp-quick-amount-btn" data-amount="100" style="padding: 10px 20px; border: 2px solid #e2e8f0; border-radius: 10px; background: white; color: #64748b; font-weight: 600; font-size: 14px; cursor: pointer; transition: all 0.2s;">$100</button>
        `;

        // Insérer après le parent de l'input amount
        const inputParent = amountInput.closest('.form-group') || amountInput.parentElement;
        if (inputParent && inputParent.parentElement) {
          inputParent.parentElement.insertBefore(quickAmounts, inputParent.nextSibling);
        }

        // Event listeners pour les boutons
        quickAmounts.querySelectorAll('.gp-quick-amount-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            amountInput.value = btn.dataset.amount;
            quickAmounts.querySelectorAll('.gp-quick-amount-btn').forEach(b => {
              b.style.background = 'white';
              b.style.color = '#64748b';
              b.style.borderColor = '#e2e8f0';
            });
            btn.style.background = '#10b981';
            btn.style.color = 'white';
            btn.style.borderColor = '#10b981';
            amountInput.dispatchEvent(new Event('input', { bubbles: true }));
          });

          // Hover effect
          btn.addEventListener('mouseenter', () => {
            if (btn.style.background !== 'rgb(16, 185, 129)') {
              btn.style.borderColor = '#10b981';
              btn.style.color = '#10b981';
            }
          });
          btn.addEventListener('mouseleave', () => {
            if (btn.style.background !== 'rgb(16, 185, 129)') {
              btn.style.borderColor = '#e2e8f0';
              btn.style.color = '#64748b';
            }
          });
        });
      }
    }

    // Améliorer le bouton Pay
    const payBtn = form.querySelector('button[type="submit"], input[type="submit"]');
    if (payBtn) {
      payBtn.style.cssText = `
        width: 100% !important;
        padding: 18px 32px !important;
        background: linear-gradient(135deg, #059669, #10b981) !important;
        border: none !important;
        border-radius: 12px !important;
        color: white !important;
        font-size: 16px !important;
        font-weight: 700 !important;
        cursor: pointer !important;
        transition: all 0.3s !important;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3) !important;
        margin-top: 16px !important;
      `;
    }
  }

  function enhanceHistoryTable() {
    const table = document.querySelector('table');
    if (!table) return;

    // Wrapper le tableau
    if (!table.closest('.gp-addfunds-history')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'gp-addfunds-history';

      const header = document.createElement('div');
      header.className = 'gp-addfunds-history-header';
      header.innerHTML = `
        <h3 class="gp-addfunds-history-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          Payment History
        </h3>
      `;

      table.parentElement.insertBefore(wrapper, table);
      wrapper.appendChild(header);
      wrapper.appendChild(table);
    }

    table.classList.add('gp-addfunds-table');

    // Améliorer les cellules
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');

      cells.forEach((cell, index) => {
        const text = cell.textContent.trim();

        // ID cell (première colonne seulement)
        if (index === 0 && !isNaN(parseInt(text))) {
          cell.innerHTML = `<span class="gp-deposit-id">#${text}</span>`;
          return; // Skip autres formatages pour l'ID
        }

        // Method cell
        const methods = ['paypal', 'stripe', 'bitcoin', 'crypto', 'bank', 'manual', 'bonus', 'gpay', 'cashu', 'hesabe'];
        if (methods.some(m => text.toLowerCase().includes(m))) {
          cell.innerHTML = `<span class="gp-deposit-method">${text}</span>`;
          return; // Skip autres formatages
        }

        // Amount cell (dernière colonne avec nombre décimal) - mais pas l'ID
        if (index > 0 && text.match(/^\d+\.?\d*$/)) {
          cell.innerHTML = `<span class="gp-deposit-amount">$${text}</span>`;
        }
      });
    });
  }

  // Initialisation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initAddFundsRedesign, 500));
  } else {
    setTimeout(initAddFundsRedesign, 500);
  }

})();

// =============================================================================
// MODULE: STATS BAR SVG ICONS INJECTION
// =============================================================================
(function () {
  'use strict';

  // Icônes SVG personnalisées pour chaque carte
  const statsIcons = {
    // 1. Username - Icône User moderne
    user: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>`,

    // 2. Spent Balance - Icône Trending Up
    spent: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>`,

    // 3. Account Balance - Icône Wallet
    wallet: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
      <path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>
    </svg>`,

    // 4. Active Services - Icône Activity
    activity: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>`
  };

  function injectStatsIcons() {
    const statsBlock = document.querySelector('#block_206');
    if (!statsBlock || statsBlock.dataset.iconsInjected) return;

    const cards = statsBlock.querySelectorAll('.row > [class*="col-"]');
    if (cards.length < 4) return;

    const iconKeys = ['user', 'spent', 'wallet', 'activity'];
    const iconColors = ['#6366f1', '#f59e0b', '#10b981', '#3b82f6'];

    cards.forEach((card, index) => {
      if (index >= 4) return;

      const iconContainer = card.querySelector('.totals-block__card-left');
      if (iconContainer && !iconContainer.dataset.svgInjected) {
        iconContainer.dataset.svgInjected = 'true';
        iconContainer.innerHTML = statsIcons[iconKeys[index]];
        iconContainer.style.color = iconColors[index];
      }
    });

    statsBlock.dataset.iconsInjected = 'true';
    console.log('✅ [STATS BAR] Custom SVG icons injected');
  }

  // Initialisation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(injectStatsIcons, 500));
  } else {
    setTimeout(injectStatsIcons, 500);
  }

})();
