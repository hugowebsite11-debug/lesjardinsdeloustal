/* ─────────────────────────────────────────
   Statistiques (Umami) — clics importants sur tout le site
   Le script Umami lui-même est chargé dans le <head> de chaque page,
   et ne compte que les visites sur le vrai domaine (pas en local).
   ───────────────────────────────────────── */
(function () {
  // Envoie une action à Umami (sans rien casser si le script est bloqué ou absent)
  function track(name, data) {
    try { if (window.umami && typeof window.umami.track === 'function') window.umami.track(name, data); } catch (e) {}
  }
  window.ljdoTrack = track;

  function pageName() {
    return location.pathname.replace(/^\//, '') || 'index.html';
  }
  function cottageParam() {
    return new URLSearchParams(location.search).get('cottage') || undefined;
  }

  // Liens importants (les liens qui ont déjà data-umami-event sont comptés par Umami directement)
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || a.hasAttribute('data-umami-event')) return;
    var href = a.getAttribute('href') || '';
    var name = null;
    if (href.indexOf('direct-book.com') !== -1) name = 'Réserver';
    else if (href.indexOf('tel:') === 0) name = 'Appel téléphone';
    else if (href.indexOf('mailto:') === 0) name = 'Email';
    else if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp') !== -1) name = 'WhatsApp';
    else if (href.indexOf('instagram.com') !== -1) name = 'Instagram';
    else if (href.indexOf('facebook.com') !== -1) name = 'Facebook';
    else if (href.indexOf('google.com/travel') !== -1 || href.indexOf('g.page') !== -1) name = 'Avis Google';
    if (!name) return;
    track(name, {
      page: pageName(),
      cottage: cottageParam(),
      numero: href.indexOf('tel:') === 0 ? href.slice(4) : undefined,
    });
  }, true);

  // Formulaires envoyés (contact, etc.)
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || form.tagName !== 'FORM') return;
    track('Formulaire envoyé', { page: pageName(), formulaire: form.id || form.getAttribute('name') || 'contact' });
  }, true);
})();
