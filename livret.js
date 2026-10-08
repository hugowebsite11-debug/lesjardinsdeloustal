/* ─────────────────────────────────────────
   Livret d'arrivée — Les Jardins de l'Oustal
   ───────────────────────────────────────── */

// Programme fidélité « Les amis de l'Oustal » : masqué pour l'instant
// (carte sur Mon séjour + notification). Passer à true pour le réactiver.
const AMIS_ACTIVE = false;

// Ouverture de l'espace balnéo (compte à rebours, onglet Services).
// Date au format (année, mois - 1, jour) : 7 février 2027 à minuit.
const BALNEO_OPENING = new Date(2027, 1, 7, 0, 0, 0);

const COTTAGES = {
  'falaise': { name: 'La Falaise', hero: 'images/falaise.png', wifi: 'Xiaomi_B2BC', box: 'sous la télé' },
  'chalet-zen': { name: 'Le Chalet Zen', hero: 'images/chalet-0.png', wifi: 'Xiaomi_B2BC', box: 'sous la télé' },
  'sous-les-pins-1': { name: 'Sous les Pins 1', hero: 'images/slp.png', wifi: 'Xiaomi_B2BC', box: "sous les peignoirs, à droite de l'armoire" },
  'sous-les-pins-2': { name: 'Sous les Pins 2', hero: 'images/slp2.avif', wifi: 'Xiaomi_B2BC', box: "sous les peignoirs, à droite de l'armoire" },
  'bois-flottee': { name: 'La Bois Flottée', hero: 'images/bf-hero.png', wifi: 'Xiaomi_B3B2', box: 'sous la télé' },
};

const ADRESSES = {
  restaurants: [
    { name: 'Chez Bebelle', url: 'https://www.chez-bebelle.fr/', loc: "Les Halles de Narbonne", desc: "Pour les amateurs de viande : grillades à la plancha, frites maison et commandes au mégaphone. Une vraie ambiance de marché.", star: true,
      img: 'restos/chez-bebelle.jpg', credit: 'Jacques Le Letty, Wikimedia Commons (CC BY-SA 4.0)' },
    { name: 'Ô Juste', loc: 'Narbonne, 21 cours Mirabeau', desc: "Un bistrot moderne face au canal : une courte carte de saison, des produits de producteurs locaux et des assiettes créatives. Terrasse sur le cours Mirabeau. Fermé le mardi et le mercredi.", star: true,
      img: 'restos/o-juste.jpg', credit: 'Didier Descouens, Wikimedia Commons (CC BY-SA 4.0)' },
    { name: 'Chez Marius', loc: 'Narbonne, 3 place Lamourguier', desc: "Bistrot et bar à vin à deux pas des Halles : tapas travaillées, plats à partager, une carte qui change chaque semaine et de bons vins de la région. Terrasse ombragée.", star: true,
      img: 'restos/chez-marius.jpg', credit: 'Deniz Aydogan, Pexels' },
    { name: 'Cadence', loc: 'Narbonne, 15 cours Mirabeau', desc: "Au bord du canal de la Robine : une cuisine bistronomique faite maison le midi, des tapas à partager et des cocktails le soir.",
      img: 'restos/cadence.jpg', credit: 'benibeny, Wikimedia Commons (CC0)' },
    { name: 'La Cave à Manger', url: 'https://maison.saintcrescent.com/la-cave-a-manger/', loc: 'Narbonne, Maison Saint Crescent', desc: "Plats traditionnels régionaux, charcuteries et vins dans une salle voûtée en pierre. Une adresse conviviale, menu affiché à 35 €.", star: true,
      img: 'restos/cave-a-manger.jpg', credit: 'Taha Samett, Pexels' },
    { name: 'Papa Ours', loc: 'Narbonne, 100 rue Georges Bouton', desc: "Une adresse généreuse et conviviale : de belles grillades et un buffet d'entrées aux produits de la région. Terrasse.",
      img: 'restos/papa-ours.jpg', credit: 'Vidal Balielo Jr, Pexels' },
    { name: 'La Bonne Excuse', loc: 'Narbonne, 22 rue Ancienne Porte de Béziers', desc: "Un bistrot gourmand recommandé par Gault&Millau : produits frais en circuit court, salle colorée et accueil chaleureux. Menu autour de 39 €.",
      img: 'restos/bonne-excuse.jpg', credit: 'Rene Terp, Pexels' },
    { name: 'Les Grands Buffets', url: 'https://www.lesgrandsbuffets.com/fr/infos-pratiques/', loc: 'Narbonne, Espace de Liberté', desc: "Les grands classiques de la cuisine française sous forme de buffets à volonté. Menu actuellement à 65,90 € hors boissons. <strong>Réservez longtemps à l'avance</strong> : les tables partent souvent plusieurs semaines avant.",
      img: 'restos/grands-buffets.jpg', credit: 'Adrien Privat, Wikimedia Commons (CC BY-SA 4.0)' },
    { name: 'La Table Lionel Giraud', url: 'https://maison.saintcrescent.com/la-table/', loc: 'Narbonne, Maison Saint Crescent', desc: "La table gastronomique deux étoiles Michelin de Narbonne, autour des produits d'Occitanie. Pour un anniversaire ou un dîner exceptionnel.",
      img: 'restos/table-lionel-giraud.jpg', credit: 'Nadin Sh, Pexels' },
  ],
  bars: [
    { name: 'Cadence', loc: 'Narbonne, 15 cours Mirabeau', desc: "Cocktails créatifs, vins et tapas en terrasse au bord du canal. L'ambiance devient bar musical à partir de 22h30.", star: true,
      img: 'bars/cadence.jpg', credit: 'Vera Rishkevich, Pexels' },
    { name: 'La Rive Gauche', loc: 'Narbonne, 37 cours de la République', desc: "Une institution depuis 1993 : grande terrasse sous les platanes, face au canal. Une vingtaine de cocktails, des tapas et des planches à partager. Concerts le vendredi soir en été.", star: true,
      img: 'bars/rive-gauche.jpg', credit: 'Pymouss, Wikimedia Commons (CC BY-SA 4.0)' },
    { name: 'Viny', loc: 'Narbonne, 26 boulevard Gambetta', desc: "Tout nouveau : un bar à vin et à vinyles, pour prendre un verre en musique dans une ambiance détendue.",
      img: 'bars/viny.jpg', credit: 'Valeriya, Pexels' },
    { name: "La Part de l'Ange", loc: 'Narbonne, 32 boulevard Frédéric Mistral', desc: "Bar à vin, cave et petite librairie : vins bio et nature, planches de charcuterie et de fromage, tapas le soir. Terrasse.",
      img: 'bars/part-de-lange.jpg', credit: 'Vince, Pexels' },
    { name: 'Macar', loc: 'Narbonne, 21 cours de la République', desc: "Bar à vin et tapas avec terrasse au bord du canal, en plein centre-ville. Idéal pour un apéritif en fin de journée.",
      img: 'bars/macar.jpg', credit: 'Calips, Wikimedia Commons (CC BY-SA 3.0)' },
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
    { slug: 'grands-buffets', name: 'Les Grands Buffets', url: 'https://www.lesgrandsbuffets.com/fr/infos-pratiques/', desc: "Les grands classiques de la cuisine française sous forme de buffets à volonté, à 5 minutes du cottage. Pensez à réserver longtemps à l'avance." },
    { slug: 'halles-narbonne', name: 'Les Halles de Narbonne', url: 'https://www.cotedumidi.com/', desc: "Une halte gourmande pour découvrir les étals, les spécialités locales et l'ambiance du marché couvert." },
    { slug: 'oulibo', name: "L'Oulibo, à Bize-Minervois", url: 'https://www.cotedumidi.com/', desc: "Visiter une coopérative oléicole et découvrir le savoir-faire local autour des olives et de l'huile d'olive." },
  ],
  mer: [
    { slug: 'gruissan-chalets', name: 'Gruissan et la plage des Chalets', url: 'https://www.gruissan-mediterranee.com/', desc: "Les célèbres chalets sur pilotis du film « 37°2 le matin », face à une immense plage de sable. À compléter par une balade dans le vieux village, au pied de la tour Barberousse.", star: true },
    { slug: 'narbonne-plage', name: 'Narbonne-Plage et Saint-Pierre-la-Mer', url: 'https://www.cotedumidi.com/', desc: "De grandes plages de sable au pied du massif de la Clape. À Saint-Pierre, ne manquez pas le Gouffre de l'Œil Doux, un lac d'eau turquoise au milieu des pins." },
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
  document.getElementById('wifiName').textContent = cottage.wifi;
  document.querySelectorAll('.js-wifi-box').forEach(el => { el.textContent = cottage.box; });

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
          ${a.img ? `<figure class="l-place-figure">
            <img class="l-place-photo" src="images/${a.img}" alt="${a.name}" loading="lazy">
            ${a.credit ? `<figcaption class="l-place-credit">${a.credit}</figcaption>` : ''}
          </figure>` : ''}
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

  /* ── Notification promo (petit-déj offert) ── */
  const promoToast = document.getElementById('promoToast');
  const promoClose = document.getElementById('promoClose');
  const promoOpen = document.getElementById('promoOpen');

  if (AMIS_ACTIVE && promoToast && !localStorage.getItem('livretPromoDismissed') && !localStorage.getItem('livretAmisSignedUp')) {
    promoToast.hidden = false;
    setTimeout(() => promoToast.classList.add('show'), 1500);
  }

  function dismissPromo() {
    if (!promoToast) return;
    promoToast.classList.remove('show');
    localStorage.setItem('livretPromoDismissed', '1');
    setTimeout(() => { promoToast.hidden = true; }, 400);
  }

  promoClose?.addEventListener('click', dismissPromo);
  promoOpen?.addEventListener('click', () => { dismissPromo(); openOfferScreen(); });

  /* ── Les amis de l'Oustal (carte + écran + formulaire) ── */
  const AMIS_URL = 'https://script.google.com/macros/s/AKfycbwfUggWetPiX45QQB7YTV8Lt70RcZJFhWUhM3l65Q8IzpCtazzus0dtDCdT_i0C0rj9-Q/exec';

  const offerCard = document.getElementById('offerCard');
  const offerCardTitle = document.getElementById('offerCardTitle');
  const offerCardSub = document.getElementById('offerCardSub');
  const offerScreen = document.getElementById('offerScreen');
  const offerBack = document.getElementById('offerBack');
  const offerFormView = document.getElementById('offerFormView');
  const offerConfirmView = document.getElementById('offerConfirmView');
  const offerForm = document.getElementById('offerForm');
  const offerGite = document.getElementById('offerGite');
  const offerError = document.getElementById('offerError');
  const offerSubmit = document.getElementById('offerSubmit');
  const offerConsentLabel = document.getElementById('offerConsentLabel');
  const offerConsentInput = document.getElementById('offerConsentInput');
  const offerConfirmName = document.getElementById('offerConfirmName');
  const offerConfirmClose = document.getElementById('offerConfirmClose');

  if (offerCard) offerCard.hidden = !AMIS_ACTIVE;
  if (offerGite) offerGite.value = cottage.name;

  function isAmisSignedUp() {
    return !!localStorage.getItem('livretAmisSignedUp');
  }

  function updateOfferCard() {
    if (!offerCard) return;
    if (isAmisSignedUp()) {
      offerCardTitle.textContent = 'Vous faites partie des amis de l’Oustal';
      offerCardSub.textContent = 'Votre email arrivera après votre départ';
    }
  }
  updateOfferCard();

  function openOfferScreen() {
    if (!offerScreen) return;
    offerScreen.hidden = false;
    offerScreen.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    if (isAmisSignedUp()) {
      offerFormView.hidden = true;
      offerConfirmView.hidden = false;
    } else {
      offerFormView.hidden = false;
      offerConfirmView.hidden = true;
    }
  }

  function closeOfferScreen() {
    if (!offerScreen) return;
    offerScreen.hidden = true;
    document.body.style.overflow = '';
  }

  offerCard?.addEventListener('click', openOfferScreen);
  offerBack?.addEventListener('click', closeOfferScreen);
  offerConfirmClose?.addEventListener('click', closeOfferScreen);

  function showOfferError(msg, field) {
    offerError.textContent = msg;
    offerError.hidden = false;
    if (field) { field.classList.add('l-invalid'); field.focus(); }
  }

  offerForm?.addEventListener('input', (e) => {
    e.target.classList.remove('l-invalid');
    if (e.target === offerConsentInput) offerConsentLabel.classList.remove('l-invalid');
    offerError.hidden = true;
  });

  offerForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    offerForm.querySelectorAll('.l-invalid').forEach((el) => el.classList.remove('l-invalid'));
    offerConsentLabel.classList.remove('l-invalid');

    const data = Object.fromEntries(new FormData(offerForm));

    if (!data.prenom) return showOfferError('Indiquez votre prénom.', offerForm.prenom);
    if (!data.nom) return showOfferError('Indiquez votre nom.', offerForm.nom);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '')) return showOfferError('Vérifiez votre adresse email.', offerForm.email);
    if (!data.depart) return showOfferError('Indiquez la date de votre départ, pour qu’on vous écrive au bon moment.', offerForm.depart);
    if (data.consentement !== 'oui') {
      offerConsentLabel.classList.add('l-invalid');
      return showOfferError('Cochez la case pour rejoindre Les amis de l’Oustal.', offerConsentInput);
    }

    offerSubmit.disabled = true;
    offerSubmit.textContent = 'Inscription en cours…';

    try {
      await fetch(AMIS_URL, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(data) });
      localStorage.setItem('livretAmisSignedUp', '1');
      offerConfirmName.textContent = `, ${data.prenom}`;
      offerFormView.hidden = true;
      offerConfirmView.hidden = false;
      offerScreen.scrollTop = 0;
      updateOfferCard();
    } catch (err) {
      showOfferError('L’inscription n’a pas fonctionné. Vérifiez votre connexion et réessayez.');
      offerSubmit.disabled = false;
      offerSubmit.textContent = 'Rejoindre Les amis de l’Oustal';
    }
  });

  /* ── Espace balnéo : compte à rebours ── */
  const countdownEl = document.getElementById('balneoCountdown');
  const balneoOpenEl = document.getElementById('balneoOpen');

  function addMonths(date, n) {
    const d = new Date(date);
    d.setMonth(d.getMonth() + n);
    return d;
  }

  function updateCountdown() {
    if (!countdownEl) return;
    const now = new Date();
    if (now >= BALNEO_OPENING) {
      countdownEl.hidden = true;
      balneoOpenEl.hidden = false;
      return false;
    }
    let months = 0;
    while (addMonths(now, months + 1) <= BALNEO_OPENING) months++;
    const rest = Math.floor((BALNEO_OPENING - addMonths(now, months)) / 1000);
    const parts = {
      mois: months,
      jours: Math.floor(rest / 86400),
      heures: Math.floor((rest % 86400) / 3600),
      minutes: Math.floor((rest % 3600) / 60),
      secondes: rest % 60,
    };
    for (const [key, value] of Object.entries(parts)) {
      const el = countdownEl.querySelector(`[data-cd="${key}"]`);
      el.textContent = (key === 'mois' || key === 'jours') ? value : String(value).padStart(2, '0');
    }
    return true;
  }

  if (updateCountdown()) {
    const countdownTimer = setInterval(() => {
      if (!updateCountdown()) clearInterval(countdownTimer);
    }, 1000);
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
