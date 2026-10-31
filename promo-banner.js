/* ─────────────────────────────────────────
   Bandeau saisonnier (Noël, Saint-Valentin…) — affiché en haut de toutes les pages.
   Réglages (texte, lien, dates) dans site-config.js.
   ───────────────────────────────────────── */
(function () {
  const cfg = window.SEASONAL_BANNER;
  if (!cfg || !cfg.enabled) return;
  const forced = new URLSearchParams(location.search).get('bandeau') === '1';
  const key = 'promoBannerClosed-' + cfg.id;
  let closed = false;
  try { closed = !!sessionStorage.getItem(key); } catch (e) {}
  if (closed && !forced) return;

  // Date du jour comparée aux bornes « MM-JJ » (gère aussi une période à cheval sur deux années)
  const now = new Date();
  const today = (now.getMonth() + 1) * 100 + now.getDate();
  const toNum = (s) => { const [m, d] = String(s).split('-').map(Number); return m * 100 + d; };
  const start = toNum(cfg.start), end = toNum(cfg.end);
  const inPeriod = start <= end ? (today >= start && today <= end) : (today >= start || today <= end);
  if (!inPeriod && !forced) return;

  const bar = document.createElement('div');
  bar.className = 'promo-banner';
  bar.setAttribute('role', 'region');
  bar.setAttribute('aria-label', 'Offre du moment');
  bar.innerHTML = `
    <a class="promo-banner-link" href="${cfg.link}">
      <span>${cfg.text}</span>
      <span class="promo-banner-arrow" aria-hidden="true">→</span>
      <strong>${cfg.linkText}</strong>
    </a>
    <button class="promo-banner-close" type="button" aria-label="Fermer">✕</button>
  `;
  document.body.prepend(bar);
  document.documentElement.classList.add('has-promo');
  bar.querySelector('.promo-banner-close').addEventListener('click', () => {
    try { sessionStorage.setItem(key, '1'); } catch (e) {}
    bar.remove();
    document.documentElement.classList.remove('has-promo');
  });
})();
