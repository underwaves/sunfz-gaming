import { ECOSYSTEM_CONFIG } from './config/ecosystem.js';
import { GAME_SERVICES, GAME_RATE_TABLE, SAFETY_PROMISES } from './data/games.js';

function renderEcosystemBar() {
  const mount = document.getElementById('ecosystem-bar');
  if (!mount) return;

  const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  const linksHtml = ECOSYSTEM_CONFIG.sites.map((site) => {
    const href = isLocal ? site.localUrl : site.prodUrl;
    const isActive = site.id === ECOSYSTEM_CONFIG.currentSiteId;
    const cls = [
      'eco-link',
      isActive ? 'active' : '',
      site.isTrustBadge ? 'trust-pill' : ''
    ].filter(Boolean).join(' ');
    return `<a href="${href}" class="${cls}" title="${site.desc}">${site.shortName}</a>`;
  }).join('');

  mount.innerHTML = `
    <div class="eco-bar">
      <div class="container eco-bar-inner">
        <span>เครือข่ายบริการ <strong>${ECOSYSTEM_CONFIG.brandName}</strong>:</span>
        <div class="eco-links">${linksHtml}</div>
      </div>
    </div>
  `;
}

function renderServices() {
  const grid = document.getElementById('services-grid');
  if (!grid) return;

  grid.innerHTML = GAME_SERVICES.map((g) => `
    <article class="card">
      <span class="card-badge">${g.badge}</span>
      <h3>${g.title}</h3>
      <div style="margin: 0.5rem 0; font-weight: 700; color: var(--primary); font-size: 1.2rem;">${g.priceText}</div>
      <p style="font-size: 0.9rem; color: var(--text-muted);">${g.desc}</p>
      <ul class="feature-list">
        ${g.features.map((f) => `<li>${f}</li>`).join('')}
      </ul>
      <a href="${ECOSYSTEM_CONFIG.contact.facebookUrl}" target="_blank" rel="noopener" class="btn btn-primary" style="width: 100%; justify-content: center; margin-top: 0.75rem;">
        จองคิวหมวดนี้
      </a>
    </article>
  `).join('');
}

function renderRateTable() {
  const grid = document.getElementById('ratecards-grid');
  if (!grid) return;

  grid.innerHTML = GAME_RATE_TABLE.map((group) => `
    <article class="card">
      <h3 style="font-size: 1.15rem; margin-bottom: 1rem; color: var(--primary);">${group.category}</h3>
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${group.items.map((item) => `
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; padding-bottom: 0.65rem; border-bottom: 1px dashed var(--border);">
            <span style="font-size: 0.92rem;">${item.name}</span>
            <strong style="color: #34D399; white-space: nowrap; font-size: 0.95rem;">${item.price}</strong>
          </div>
        `).join('')}
      </div>
    </article>
  `).join('');
}

function renderSafety() {
  const grid = document.getElementById('safety-grid');
  if (!grid) return;

  grid.innerHTML = SAFETY_PROMISES.map((s) => `
    <div class="card" style="text-align: center;">
      <div style="font-size: 2.2rem; margin-bottom: 0.5rem;">${s.icon}</div>
      <h3 style="font-size: 1.1rem; margin-bottom: 0.4rem;">${s.title}</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted);">${s.desc}</p>
    </div>
  `).join('');
}

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('sunfz_gaming_theme', next);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderEcosystemBar();
  renderServices();
  renderRateTable();
  renderSafety();
  initThemeToggle();
});
