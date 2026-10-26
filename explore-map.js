/* ─────────────────────────────────────────
   Accueil — carte interactive « À explorer autour de Narbonne »
   Carte illustrée (pas à l'échelle) : chaque lieu est placé dans sa vraie
   direction depuis le domaine, mais les distances sont « resserrées » pour
   que tout tienne sur l'écran. Le domaine est au centre (300, 300).
   ───────────────────────────────────────── */
(function () {
  const root = document.getElementById('exploreMap');
  if (!root) return;

  const ORIGIN = '21 Impasse Hélène Boucher, 11100 Narbonne';

  // x / y : position sur la carte (viewBox 600 × 600) — label : côté de l'étiquette
  const PLACES = [
    { id: 'buffets', icon: '🍽️', name: 'Les Grands Buffets', short: 'Grands Buffets', km: 5, time: '8 min', x: 402, y: 274, label: 'top',
      img: 'images/grands-buffets.jpg', hours: 'Déjeuner & dîner · horaires selon saison', dest: 'Les Grands Buffets, Narbonne',
      desc: 'Le plus grand buffet de France, à volonté, à quelques minutes de vos cottages : plus de 120 plats et un chariot de fromages mémorable. Pensez à réserver longtemps à l’avance.' },
    { id: 'etangs', icon: '🦩', name: 'Étangs & flamants roses', short: 'Étangs', km: 5, time: '10 min', x: 343, y: 396, label: 'right',
      img: 'images/bages.jpg', hours: 'Accès libre, toute l’année', dest: 'Bages, Aude',
      desc: 'Les étangs de Bages et de Sigean abritent des colonies de flamants roses tout au long de l’année. Un spectacle naturel unique à deux pas du domaine.' },
    { id: 'canal', icon: '⛵', name: 'Canal du Midi', short: 'Canal du Midi', km: 10, time: '15 min', x: 279, y: 167, label: 'top',
      img: 'images/canal-midi.webp', hours: 'Accès libre', dest: 'Canal du Midi, Sallèles-d’Aude',
      desc: 'Classé au patrimoine mondial de l’UNESCO. Promenades à vélo sous les platanes, croisières fluviales, villages de caractère au fil de l’eau.' },
    { id: 'fontfroide', icon: '🏛️', name: 'Abbaye de Fontfroide', short: 'Fontfroide', km: 14, time: '20 min', x: 164, y: 384, label: 'bottom',
      img: 'images/abbaye-fontfroide2020-01-15site1-1579088319.webp', hours: '10h–17h (variable selon saison)', dest: 'Abbaye de Fontfroide',
      desc: 'Abbaye cistercienne du XIIe siècle nichée dans un écrin de cyprès et de vignes. Architecture remarquable, jardins à la française, visites guidées.' },
    { id: 'plages', icon: '🏖️', name: 'Plages de Narbonne', short: 'Plages', km: 15, time: '20 min', x: 458, y: 300, label: 'bottom',
      img: 'images/plage-narbonne.jpg', hours: 'Accès libre', dest: 'Narbonne-Plage',
      desc: 'Plusieurs kilomètres de sable fin entre la Méditerranée et les étangs. Narbonne-Plage et Saint-Pierre-la-Mer, idéales pour une journée au soleil.' },
    { id: 'corbieres', icon: '🍷', name: 'Vignobles des Corbières', short: 'Corbières', km: 20, time: '25 min', x: 122, y: 327, label: 'top',
      img: 'images/les-vignobles-a-vincent-photographie.webp', hours: 'Dégustations 10h–18h', dest: 'Boutenac, Corbières',
      desc: 'Route des vins AOC Corbières à travers un paysage de garrigue et de calanques. Nombreuses caves ouvertes à la dégustation en toute saison.' },
    { id: 'sigean', icon: '🦁', name: 'Réserve Africaine de Sigean', short: 'Réserve de Sigean', km: 25, time: '25 min', x: 313, y: 500, label: 'right',
      img: 'images/reserve-africaine-de-sigean.jpg', hours: '9h30–18h (variable selon saison)', dest: 'Réserve Africaine de Sigean',
      desc: 'Plus grand parc zoologique animalier de France avec 3 800 animaux en semi-liberté. Une expérience de safari à quelques kilomètres de la mer.' },
    { id: 'carcassonne', icon: '🏰', name: 'Cité de Carcassonne', short: 'Carcassonne', km: 55, time: '50 min', x: 66, y: 262, label: 'top',
      img: 'images/la-cite-medievale-de-carcassonne_g-deschamps-crt-occitanie.jpg', hours: 'Remparts libres · Château 10h–18h', dest: 'Cité de Carcassonne',
      desc: 'La plus grande cité médiévale fortifiée d’Europe, classée UNESCO. Remparts, tours, château comtal : une visite incontournable à une heure de route.' },
    { id: 'espagne', icon: '🥘', name: 'Espagne · Costa Brava', short: 'Costa Brava', km: 75, time: '1 h', x: 367, y: 560, label: 'left',
      img: 'images/palafrugell-girona-s144973225.avif', hours: 'Frontière ouverte 24h/24', dest: 'Figueres, Espagne',
      desc: 'La frontière espagnole à moins d’une heure : Figueres et le musée Dalí, Cadaqués et ses criques, la Costa Brava à portée de journée.' },
  ];

  const pct = (v) => (v / 600 * 100).toFixed(3) + '%';
  const mapsUrl = (p) => 'https://www.google.com/maps/dir/?api=1&origin=' + encodeURIComponent(ORIGIN) +
    '&destination=' + encodeURIComponent(p.dest) + '&travelmode=driving';

  /* ── Construction ─────────────────────── */
  root.innerHTML = `
    <div class="xmap-stage">
      <div class="xmap-canvas">
        <svg class="xmap-svg" viewBox="0 0 600 600" aria-hidden="true">
          <defs>
            <radialGradient id="xmLand" cx="50%" cy="50%" r="60%">
              <stop offset="0" stop-color="#2d4a2a"/><stop offset=".7" stop-color="#1c2f1b"/><stop offset="1" stop-color="#142213"/>
            </radialGradient>
            <linearGradient id="xmSea" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stop-color="#1d4f57"/><stop offset="1" stop-color="#123a43"/>
            </linearGradient>
            <radialGradient id="xmGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0" stop-color="#c9a96e" stop-opacity=".35"/><stop offset="1" stop-color="#c9a96e" stop-opacity="0"/>
            </radialGradient>
            <pattern id="xmWaves" width="40" height="14" patternUnits="userSpaceOnUse">
              <path d="M0 7 Q10 2 20 7 T40 7" fill="none" stroke="rgba(160,215,220,.16)" stroke-width="1.2"/>
            </pattern>
          </defs>
          <rect width="600" height="600" fill="url(#xmLand)"/>
          <!-- Mer Méditerranée -->
          <path d="M512 0 C495 60 502 120 490 180 C480 230 492 270 484 320 C476 370 468 420 472 470 C476 520 452 560 444 600 L600 600 L600 0 Z" fill="url(#xmSea)"/>
          <path d="M512 0 C495 60 502 120 490 180 C480 230 492 270 484 320 C476 370 468 420 472 470 C476 520 452 560 444 600 L600 600 L600 0 Z" fill="url(#xmWaves)"/>
          <path class="xmap-coast" d="M512 0 C495 60 502 120 490 180 C480 230 492 270 484 320 C476 370 468 420 472 470 C476 520 452 560 444 600"/>
          <!-- Étangs -->
          <path d="M370 372 C386 364 406 374 410 392 C414 412 400 436 386 442 C370 448 356 432 358 416 C360 400 356 380 370 372 Z" fill="#1f4a52" opacity=".85"/>
          <path d="M404 462 C416 456 430 464 430 478 C430 494 418 504 408 500 C396 496 392 470 404 462 Z" fill="#1f4a52" opacity=".75"/>
          <!-- Reliefs (garrigue / Corbières) -->
          <g class="xmap-hills">
            <path d="M80 440 l18 -22 l18 22 M110 450 l14 -17 l14 17 M60 405 l15 -18 l15 18"/>
            <path d="M190 525 l18 -22 l18 22 M220 535 l14 -17 l14 17 M160 510 l12 -15 l12 15"/>
            <path d="M372 150 l14 -17 l14 17 M400 160 l12 -15 l12 15"/>
          </g>
          <text class="xmap-sea-label" x="550" y="300" transform="rotate(90 550 300)">Mer Méditerranée</text>
          <!-- Cercles de distance -->
          <circle class="xmap-ring" cx="300" cy="300" r="135"/>
          <circle class="xmap-ring" cx="300" cy="300" r="195"/>
          <circle class="xmap-ring" cx="300" cy="300" r="270"/>
          <text class="xmap-ring-label" x="205" y="209">≈ 15 min</text>
          <text class="xmap-ring-label" x="162" y="166">≈ 30 min</text>
          <text class="xmap-ring-label" x="109" y="113">≈ 1 h</text>
          <!-- Rose des vents -->
          <g class="xmap-compass" transform="translate(52 540)">
            <circle r="22"/><path d="M0 -18 L5 0 L0 18 L-5 0 Z"/><text y="-26">N</text>
          </g>
          <!-- Trajet vers le lieu choisi -->
          <path class="xmap-route" id="xmRoute" d=""/>
          <circle cx="300" cy="300" r="60" fill="url(#xmGlow)"/>
        </svg>

        <div class="xmap-home" style="left:50%;top:50%">
          <span class="xmap-home-pulse"></span>
          <span class="xmap-home-dot">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>
          </span>
          <span class="xmap-home-label">Les Jardins de l’Oustal</span>
        </div>

        ${PLACES.map((p, i) => `
          <button class="xmap-pin is-${p.label}" type="button" data-i="${i}" style="left:${pct(p.x)};top:${pct(p.y)}" aria-label="${p.name}, ${p.km} km">
            <span class="xmap-pin-dot"><span>${p.icon}</span></span>
            <span class="xmap-pin-label">${p.short}</span>
          </button>`).join('')}
      </div>
      <p class="xmap-note">Carte illustrative · touchez un lieu pour le découvrir</p>
    </div>

    <div class="xmap-backdrop" id="xmBackdrop"></div>
    <aside class="xmap-card" id="xmCard" aria-live="polite">
      <button class="xmap-card-close" id="xmClose" type="button" aria-label="Fermer">✕</button>
      <div class="xmap-card-photo" id="xmPhoto"></div>
      <div class="xmap-card-body">
        <div class="xmap-card-top">
          <span class="xmap-card-icon" id="xmIcon"></span>
          <div class="xmap-card-chips">
            <span class="xmap-chip" id="xmKm"></span>
            <span class="xmap-chip is-time" id="xmTime"></span>
          </div>
        </div>
        <h3 class="xmap-card-name" id="xmName"></h3>
        <p class="xmap-card-hours" id="xmHours"></p>
        <p class="xmap-card-desc" id="xmDesc"></p>
        <div class="xmap-card-actions">
          <a class="xmap-go" id="xmGo" href="#" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 22 2l-9 19-2-8z"/></svg>
            Itinéraire
          </a>
          <div class="xmap-nav">
            <button type="button" id="xmPrev" aria-label="Lieu précédent">‹</button>
            <span id="xmCount"></span>
            <button type="button" id="xmNext" aria-label="Lieu suivant">›</button>
          </div>
        </div>
      </div>
    </aside>
  `;

  /* ── Interaction ──────────────────────── */
  const $ = (id) => document.getElementById(id);
  const pins = Array.from(root.querySelectorAll('.xmap-pin'));
  const card = $('xmCard');
  const backdrop = $('xmBackdrop');
  const route = $('xmRoute');
  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
  let current = -1;

  function routePath(p) {
    // Courbe douce du domaine vers le lieu
    const mx = (300 + p.x) / 2, my = (300 + p.y) / 2;
    const dx = p.x - 300, dy = p.y - 300;
    const cx = mx - dy * 0.18, cy = my + dx * 0.18;
    return `M300 300 Q${cx.toFixed(1)} ${cy.toFixed(1)} ${p.x} ${p.y}`;
  }

  function select(i, { open = true } = {}) {
    current = (i + PLACES.length) % PLACES.length;
    const p = PLACES[current];
    pins.forEach((b, k) => b.classList.toggle('active', k === current));

    route.setAttribute('d', routePath(p));
    route.classList.remove('draw'); void route.getBoundingClientRect(); route.classList.add('draw');

    card.classList.remove('swap'); void card.offsetWidth; card.classList.add('swap');
    $('xmPhoto').style.backgroundImage = `url('${p.img}')`;
    $('xmIcon').textContent = p.icon;
    $('xmKm').textContent = `${p.km} km`;
    $('xmTime').textContent = `≈ ${p.time} en voiture`;
    $('xmName').textContent = p.name;
    $('xmHours').textContent = '🕒 ' + p.hours;
    $('xmDesc').textContent = p.desc;
    $('xmGo').href = mapsUrl(p);
    $('xmCount').textContent = `${current + 1} / ${PLACES.length}`;

    if (open && isMobile()) {
      card.classList.add('open');
      backdrop.classList.add('open');
    }
    if (window.ljdoTrack) window.ljdoTrack('Carte - lieu', { lieu: p.id });
  }

  function closeCard() {
    card.classList.remove('open');
    backdrop.classList.remove('open');
  }

  pins.forEach((b) => b.addEventListener('click', () => select(Number(b.dataset.i))));
  $('xmPrev').addEventListener('click', () => select(current - 1));
  $('xmNext').addEventListener('click', () => select(current + 1));
  $('xmClose').addEventListener('click', closeCard);
  backdrop.addEventListener('click', closeCard);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeCard(); });

  // Glisser vers le bas pour fermer la fiche (téléphone)
  let startY = null;
  card.addEventListener('touchstart', (e) => { startY = e.touches[0].clientY; }, { passive: true });
  card.addEventListener('touchend', (e) => {
    if (startY !== null && e.changedTouches[0].clientY - startY > 70) closeCard();
    startY = null;
  });

  // Au départ : les Grands Buffets affichés sur ordinateur (fiche fermée sur téléphone)
  select(0, { open: false });

  // Apparition des épingles quand la carte arrive à l'écran
  const stage = root.querySelector('.xmap-stage');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((en) => en.isIntersecting)) { stage.classList.add('in'); io.disconnect(); }
    }, { threshold: 0.25 });
    io.observe(stage);
  } else {
    stage.classList.add('in');
  }
})();
