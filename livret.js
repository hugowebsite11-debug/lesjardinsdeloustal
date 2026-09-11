/* ─────────────────────────────────────────
   Livret d'arrivée — Les Jardins de l'Oustal
   ───────────────────────────────────────── */

const COTTAGES = {
  'falaise': { name: 'La Falaise', hero: 'images/falaise.png' },
  'chalet-zen': { name: 'Le Chalet Zen', hero: 'images/chalet-0.png' },
  'sous-les-pins-1': { name: 'Sous les Pins 1', hero: 'images/slp.png' },
  'sous-les-pins-2': { name: 'Sous les Pins 2', hero: 'images/slp2.avif' },
  'bois-flottee': { name: 'La Bois Flottée', hero: 'images/bf-hero.png' },
};

const ADRESSES = {
  restaurants: [
    { name: 'Chez Bebelle', url: 'https://www.chez-bebelle.fr/', loc: "Les Halles de Narbonne", desc: "Pour les amateurs de viande : grillades à la plancha, frites maison et commandes au mégaphone. Une vraie ambiance de marché.", star: true },
    { name: 'Le Petit Comptoir', url: 'https://www.petitcomptoir.com/', loc: 'Narbonne', desc: "Une cuisine de bistrot soignée, des produits de saison et une belle sélection de vins. Pour un déjeuner ou un dîner gourmand." },
    { name: 'La Cave à Manger', url: 'https://maison.saintcrescent.com/la-cave-a-manger/', loc: 'Narbonne, Maison Saint Crescent', desc: "Plats traditionnels régionaux, charcuteries et vins dans une salle voûtée en pierre. Une adresse conviviale, menu affiché à 35 €.", star: true },
    { name: 'Les Grands Buffets', url: 'https://www.lesgrandsbuffets.com/fr/infos-pratiques/', loc: 'Narbonne, Espace de Liberté', desc: "Pour découvrir les grands classiques de la cuisine française sous forme de buffets à volonté. Menu actuellement à 65,90 € hors boissons." },
    { name: 'La Table Lionel Giraud', url: 'https://maison.saintcrescent.com/la-table/', loc: 'Narbonne', desc: "Une table gastronomique deux étoiles Michelin, autour des produits d'Occitanie. Pour un anniversaire ou un dîner exceptionnel." },
    { name: "L'Art de Vivre", url: 'https://chateau-hospitalet.com/pages/gastronomie-lart-de-vivre', loc: "Château L'Hospitalet, massif de la Clape", desc: "Une cuisine gastronomique de saison dans le cadre des vignobles, avec une place importante accordée aux vins du domaine." },
    { name: 'La Cambuse du Saunier', url: 'https://www.lesalindegruissan.fr/content/16-restaurant-la-cambuse-du-saunier', loc: "Gruissan, salin de l'île Saint-Martin", desc: "Poissons en croûte de sel, coquillages et cassoulet de seiche, avec vue sur les salins. Pour associer balade et repas.", star: true },
    { name: 'La Cranquette', url: 'https://www.lacranquette.com/', loc: 'Gruissan village, 13 rue de la République', desc: "Une cuisine tournée vers la mer, les poissons sauvages et les produits locaux, dans un ancien presbytère." },
    { name: 'Le Portanel', url: 'https://www.restaurant-portanel-bages.fr/', loc: 'Bages, La Placette', desc: "Une vue sur l'étang et une cuisine de poissons, avec l'anguille comme spécialité. Pour découvrir les saveurs du coin.", star: true },
    { name: 'Ô Vieux Tonneaux', url: 'https://www.audetourisme.com/fr/fiche/peyriac-de-mer/o-vieux-tonneaux_TFORESLAR011V501HTJ/', loc: 'Peyriac-de-Mer, 3 place de la Mairie', desc: "Un café-restaurant avec terrasse, cuisine de saison et ambiance conviviale. À associer à une promenade sur les pontons." },
  ],
  boulangeries: [
    { name: 'Marie Blachère', loc: 'Centre commercial Plein Soleil, 46 Route de Perpignan, Narbonne', desc: "Boulangerie-pâtisserie en libre-service, pratique pour le pain frais et les viennoiseries à toute heure." },
    { name: 'Le Fournil de Gilles', loc: '34 Avenue André Mecle, Narbonne', desc: "Boulangerie artisanale ouverte tous les jours, pains et pâtisseries traditionnelles." },
  ],
  supermarches: [
    { name: 'Auchan Narbonne', loc: '70 Route de Perpignan, Narbonne', desc: "Hypermarché avec un large choix, à quelques minutes en voiture du domaine." },
    { name: 'Carrefour Proximité', loc: 'Route de Perpignan, ZAC Croix Sud, Narbonne', desc: "Pratique pour un ravitaillement rapide en arrivant ou en dépannage." },
  ],
};

const DECOUVRIR = {
  balader: [
    { slug: 'peyriac-de-mer', name: 'Peyriac-de-Mer', url: 'https://www.cotedumidi.com/', desc: "Une balade sur les pontons en bois au-dessus de l'eau, entre étangs et flamants roses à observer.", star: true },
    { slug: 'bages', name: 'Le village de Bages', url: 'https://www.cotedumidi.com/', desc: "Flâner dans le village, découvrir les paysages de l'étang et prendre le temps d'observer les oiseaux." },
    { slug: 'le-somail', name: 'Le Somail et le canal du Midi', url: 'https://www.cotedumidi.com/', desc: "Une promenade au bord du canal, une sortie en bateau et la découverte de la librairie ancienne « Le Trouve Tout du Livre ».", star: true },
  ],
  visiter: [
    { slug: 'fontfroide', name: "L'abbaye de Fontfroide", url: 'https://www.fontfroide.com/', desc: "Une magnifique abbaye au milieu de la nature, avec son cloître, ses jardins et sa roseraie. Une belle sortie à deux.", star: true },
    { slug: 'terra-vinea', name: 'Terra Vinea', url: 'https://www.terra-vinea.com/', desc: "À Portel-des-Corbières, une visite insolite à 80 mètres sous terre, dans une ancienne mine, autour de l'histoire du vin.", star: true },
    { slug: 'narbo-via', name: 'Narbo Via et l’Horreum', url: 'https://narbovia.fr/', desc: "Découvrir le passé romain de Narbonne, entre musée archéologique et galeries souterraines antiques." },
    { slug: 'sigean', name: 'Réserve africaine de Sigean', url: 'https://www.reserveafricainesigean.fr/', desc: "Un safari-parc à ciel ouvert pour découvrir la faune africaine, en voiture ou à pied." },
    { slug: 'minerve', name: 'Minerve', url: 'https://fr.wikipedia.org/wiki/Minerve_(H%C3%A9rault)', desc: "Un village médiéval perché au-dessus des gorges, classé parmi les Plus Beaux Villages de France." },
    { slug: 'carcassonne', name: 'La cité de Carcassonne', url: 'https://www.remparts-carcassonne.fr/', desc: "Pour une excursion plus loin : découvrir la cité médiévale, visiter le château et parcourir les remparts." },
  ],
  regaler: [
    { slug: 'salin-gruissan', name: 'Le Salin de Gruissan', url: 'https://www.lesalindegruissan.fr/', desc: "Découverte des marais salants, visite guidée et dégustation d'huîtres. Une sortie qui mélange paysages et gourmandise.", star: true },
    { slug: 'grands-buffets', name: 'Les Grands Buffets', url: 'https://www.lesgrandsbuffets.com/fr/infos-pratiques/', desc: "Les grands classiques de la cuisine française sous forme de buffets à volonté, à 5 minutes du cottage." },
    { slug: 'halles-narbonne', name: 'Les Halles de Narbonne', url: 'https://www.cotedumidi.com/', desc: "Une halte gourmande pour découvrir les étals, les spécialités locales et l'ambiance du marché couvert." },
    { slug: 'oulibo', name: "L'Oulibo, à Bize-Minervois", url: 'https://www.cotedumidi.com/', desc: "Visiter une coopérative oléicole et découvrir le savoir-faire local autour des olives et de l'huile d'olive." },
  ],
  mer: [
    { slug: 'narbonne-plage', name: 'Narbonne-Plage et Saint-Pierre-la-Mer', url: 'https://www.cotedumidi.com/', desc: "Profiter des grandes plages de sable, se promener en bord de mer ou découvrir les activités nautiques." },
    { slug: 'salin-gruissan', name: 'Le Salin de Gruissan', url: 'https://www.lesalindegruissan.fr/', desc: "Marais salants et dégustation d'huîtres face à l'étang, à associer à la plage." },
  ],
};

document.addEventListener('DOMContentLoaded', () => {

  /* ── Cottage courant (via ?cottage=slug) ─── */
  const params = new URLSearchParams(location.search);
  const slug = COTTAGES[params.get('cottage')] ? params.get('cottage') : 'falaise';
  const cottage = COTTAGES[slug];

  document.getElementById('cottageName').textContent = cottage.name;
  document.getElementById('heroImg').src = cottage.hero;
  document.getElementById('heroImg').alt = cottage.name;
  document.title = `Livret d'arrivée — ${cottage.name}`;

  const manifestLink = document.getElementById('manifestLink');
  if (manifestLink) manifestLink.setAttribute('href', `manifest-${slug}.webmanifest`);

  /* ── Onglets bas ─────────────────────── */
  const tabBtns = document.querySelectorAll('.l-tab-btn');
  const tabs = document.querySelectorAll('.l-tab');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  /* ── Accordéons ──────────────────────── */
  document.querySelectorAll('.l-acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.l-acc').classList.toggle('open');
    });
  });

  /* ── Bonnes adresses ─────────────────── */
  const adressesCatBtns = document.querySelectorAll('#adressesCategoryTabs .l-cat-btn');
  const adressesGroupsEl = document.getElementById('adressesGroups');

  function mapsUrl(name, loc) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ', ' + loc)}`;
  }

  function renderAdresses(cat) {
    const items = ADRESSES[cat] || [];
    adressesGroupsEl.innerHTML = `<div class="l-cat-group active">` + items.map(a => {
      const btn = a.url
        ? `<a href="${a.url}" target="_blank" rel="noopener" class="l-btn-outline">Voir le site</a>`
        : `<a href="${mapsUrl(a.name, a.loc)}" target="_blank" rel="noopener" class="l-btn-outline">Voir sur la carte</a>`;
      return `
        <div class="l-place-card">
          ${a.star ? '<span class="l-place-badge">Coup de cœur</span>' : ''}
          <div class="l-place-name">${a.name}</div>
          ${a.loc ? `<div class="l-place-loc">${a.loc}</div>` : ''}
          <p class="l-place-desc">${a.desc}</p>
          ${btn}
        </div>
      `;
    }).join('') + `</div>`;
  }

  adressesCatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      adressesCatBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAdresses(btn.dataset.acat);
    });
  });

  renderAdresses('restaurants');

  /* ── À découvrir ─────────────────────── */
  const catBtns = document.querySelectorAll('#categoryTabs .l-cat-btn');
  const groupsEl = document.getElementById('decouvrirGroups');
  let currentDecouvrirCat = 'balader';
  let currentDecouvrirItems = [];
  let photoCredits = {};

  function photosFor(slug) {
    const list = photoCredits[slug];
    if (!list || !list.length) return [];
    return list.map(p => ({ src: `images/decouvrir/${slug}/${p.file}`, credit: p.credit || '' }));
  }

  function renderCategory(cat) {
    const items = DECOUVRIR[cat] || [];
    currentDecouvrirItems = items.map(p => ({ ...p, photos: photosFor(p.slug) }));
    groupsEl.innerHTML = `<div class="l-cat-group active">` + currentDecouvrirItems.map((p, i) => `
      <div class="l-place-card">
        ${p.star ? '<span class="l-place-badge">Coup de cœur</span>' : ''}
        ${p.photos[0] ? `<img class="l-place-photo" src="${p.photos[0].src}" alt="${p.name}" loading="lazy">` : ''}
        <div class="l-place-name">${p.name}</div>
        <p class="l-place-desc">${p.desc}</p>
        <div class="l-place-actions">
          <a href="${p.url}" target="_blank" rel="noopener" class="l-btn-outline">Voir le site</a>
          ${p.photos.length ? `<button class="l-btn-fill-green" data-photos-idx="${i}">Voir des photos</button>` : ''}
        </div>
      </div>
    `).join('') + `</div>`;
  }

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDecouvrirCat = btn.dataset.cat;
      renderCategory(currentDecouvrirCat);
    });
  });

  renderCategory(currentDecouvrirCat);

  fetch('images/decouvrir/credits.json')
    .then(r => (r.ok ? r.json() : {}))
    .catch(() => ({}))
    .then(data => {
      photoCredits = data || {};
      renderCategory(currentDecouvrirCat);
    });

  /* ── Lightbox photos ──────────────────── */
  const lightbox = document.getElementById('lightbox');
  const lightboxTrack = document.getElementById('lightboxTrack');
  const lightboxDots = document.getElementById('lightboxDots');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(photos) {
    if (!photos || !photos.length) return;
    lightboxTrack.innerHTML = photos.map(p => `
      <div class="l-lightbox-slide">
        <img src="${p.src}" alt="">
        ${p.credit ? `<div class="l-lightbox-credit">${p.credit}</div>` : ''}
      </div>
    `).join('');
    lightboxDots.innerHTML = photos.map((_, i) => `<span class="l-lightbox-dot${i === 0 ? ' active' : ''}"></span>`).join('');
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    lightboxTrack.scrollLeft = 0;
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxTrack.innerHTML = '';
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  lightboxTrack.addEventListener('scroll', () => {
    const idx = Math.round(lightboxTrack.scrollLeft / lightboxTrack.clientWidth);
    document.querySelectorAll('.l-lightbox-dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  });

  groupsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.l-btn-fill-green[data-photos-idx]');
    if (!btn) return;
    const item = currentDecouvrirItems[Number(btn.dataset.photosIdx)];
    if (item) openLightbox(item.photos);
  });

  /* ── Rester plus tard (WhatsApp, plus rapide qu'un email) ── */
  const WHATSAPP_NUMBER = '33761507550';

  document.getElementById('lateCheckoutBtn').addEventListener('click', () => {
    const message = `Bonjour, nous souhaiterions rester plus tard dans notre cottage "${cottage.name}" et profiter du jacuzzi jusqu'à 14h (supplément de 20 €). Est-ce possible ?`;
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });

  /* ── Services sur demande ─────────────── */
  document.querySelectorAll('.l-service-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const service = btn.dataset.service;
      const subject = encodeURIComponent(`Demande de service — ${service} — ${cottage.name}`);
      const body = encodeURIComponent(`Bonjour,\n\nNous souhaiterions profiter du service "${service}" pendant notre séjour au cottage "${cottage.name}". Pourriez-vous nous indiquer la disponibilité et le tarif ?\n\nMerci !`);
      window.location.href = `mailto:lesjardinsdeloustal@gmail.com?subject=${subject}&body=${body}`;
    });
  });

  /* ── Feedback séjour ──────────────────── */
  const feedbackOpts = document.querySelectorAll('.l-feedback-opt');
  const feedbackDetail = document.getElementById('feedbackDetail');
  const feedbackSend = document.getElementById('feedbackSend');
  const feedbackForm = document.getElementById('feedbackForm');
  const feedbackConfirm = document.getElementById('feedbackConfirm');
  const feedbackConfirmText = document.getElementById('feedbackConfirmText');
  const feedbackUndo = document.getElementById('feedbackUndo');
  const feedbackTextEl = document.getElementById('feedbackText');
  let selectedFeedback = null;

  const FEEDBACK_CONFIRM_MESSAGES = {
    "J'adore": "🥰 Merci beaucoup ! N'hésitez pas à laisser un avis pour nous dire à quel point vous avez apprécié votre séjour !",
    "Très bien": "😊 Merci ! N'hésitez pas à nous laisser un avis à la fin de votre séjour, pour nous dire ce qui aurait pu être encore mieux.",
    "Un souci": "🙏 Merci pour votre retour, nous revenons vers vous au plus vite.",
  };

  function lockFeedback(rating) {
    feedbackConfirmText.textContent = FEEDBACK_CONFIRM_MESSAGES[rating] || 'Merci, c’est bien reçu ! 🙏';
    feedbackForm.hidden = true;
    feedbackConfirm.hidden = false;
  }

  feedbackOpts.forEach(opt => {
    opt.addEventListener('click', () => {
      feedbackOpts.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedFeedback = opt.dataset.feedback;

      if (selectedFeedback === 'Un souci') {
        feedbackDetail.hidden = false;
      } else {
        feedbackDetail.hidden = true;
        sendFeedback(selectedFeedback, '');
        lockFeedback(selectedFeedback);
      }
    });
  });

  feedbackSend.addEventListener('click', () => {
    const text = feedbackTextEl.value.trim();
    sendFeedback(selectedFeedback, text);
    lockFeedback('Un souci');

    const message = `Bonjour, un souci dans notre cottage "${cottage.name}" : ${text || "(détails à suivre)"}`;
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  });

  feedbackUndo.addEventListener('click', () => {
    feedbackConfirm.hidden = true;
    feedbackForm.hidden = false;
    feedbackDetail.hidden = true;
    feedbackOpts.forEach(o => o.classList.remove('selected'));
    feedbackTextEl.value = '';
    selectedFeedback = null;
  });

  function sendFeedback(rating, comment) {
    if (!navigator.onLine) return;
    const data = new FormData();
    data.append('name', "Livret d'arrivée — Les Jardins de l'Oustal");
    data.append('_subject', `Avis séjour — ${cottage.name} — ${rating}`);
    data.append('_template', 'table');
    data.append('_captcha', 'false');
    data.append('cottage', cottage.name);
    data.append('avis', rating);
    data.append('commentaire', comment || '(aucun commentaire)');

    fetch('https://formsubmit.co/ajax/lesjardinsdeloustal@gmail.com', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data,
    }).catch(() => {});
  }

  /* ── PWA : service worker + install banner ── */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw-livret.js').catch(() => {});
    });
  }

  const installBanner = document.getElementById('installBanner');
  const installBtn = document.getElementById('installBtn');
  const installClose = document.getElementById('installClose');
  let deferredPrompt = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (!sessionStorage.getItem('livretInstallDismissed')) {
      installBanner.classList.add('show');
    }
  });

  installBtn.addEventListener('click', async () => {
    installBanner.classList.remove('show');
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      deferredPrompt = null;
    }
  });

  installClose.addEventListener('click', () => {
    installBanner.classList.remove('show');
    sessionStorage.setItem('livretInstallDismissed', '1');
  });

});
