/* ─────────────────────────────────────────
   Accueil — « Depuis votre terrasse… » : carte gravée (vert & or)
   Carte illustrée (pas à l'échelle) : chaque lieu est placé dans sa vraie
   direction depuis le domaine, distances resserrées pour tenir à l'écran.
   Le domaine est au centre (300, 300). Les « conseils de l'Oustal » sont
   la voix des hôtes : à relire / ajuster par les propriétaires.
   ───────────────────────────────────────── */
(function () {
  const root = document.getElementById('exploreMap');
  if (!root) return;

  const ORIGIN = '21 Impasse Hélène Boucher, 11100 Narbonne';

  // Petites illustrations à l'encre (viewBox 0 0 40 40)
  const ICONS = {
    buffets: '<path d="M9 27a11 11 0 0 1 22 0"/><path d="M6 27h28"/><path d="M8 31h24"/><path d="M20 16v-2.5"/><circle cx="20" cy="12" r="1.6"/><path d="M14 22c1.5-2 3.5-3 6-3"/>',
    etangs: '<path d="M14 21c2-4 10-5 13-1 2 3-1 6-6 6-4 0-7-2-7-5z"/><path d="M16 20c-3-3-3.5-8-.5-11 2-2 5-1 5 1.5"/><path d="M20.5 11.5l3.5 2"/><path d="M20 26v8"/><path d="M22 26l1.5 4-3.5 4"/><path d="M4 35c3-1.5 5-1.5 8 0s5 1.5 8 0"/>',
    canal: '<path d="M6 25h28l-3 4H9z"/><path d="M12 25v-5h12v5"/><path d="M15 20v-3h6v3"/><path d="M28 25v-7"/><path d="M4 33c3-2 5-2 8 0s5 2 8 0 5-2 8 0 5 2 8 0"/>',
    fontfroide: '<path d="M8 33V18l6-5 6 5v15"/><path d="M20 33V22h12v11"/><path d="M14 13V8"/><path d="M12 10h4"/><path d="M12 33v-5a2 2 0 0 1 4 0v5"/><path d="M24 33v-4a2 2 0 0 1 4 0v4"/><path d="M5 33h30"/>',
    plages: '<path d="M9 18a12 12 0 0 1 23 0z"/><path d="M15 18c1-5 3-7 5.5-8.5M26 18c-1-5-3-7-5.5-8.5"/><path d="M20.5 18l-4 14"/><path d="M4 34c3-2 5-2 8 0s5 2 8 0 5-2 8 0 5 2 8 0"/>',
    corbieres: '<path d="M19 15c0-4 2-6 5-7"/><path d="M24 8c4-1.5 7.5.5 8.5 4-4 1.5-7.5 0-8.5-4z"/><circle cx="15.5" cy="18.5" r="2.6"/><circle cx="21.5" cy="18.5" r="2.6"/><circle cx="12.5" cy="23.5" r="2.6"/><circle cx="18.5" cy="23.5" r="2.6"/><circle cx="24.5" cy="23.5" r="2.6"/><circle cx="15.5" cy="28.5" r="2.6"/><circle cx="21.5" cy="28.5" r="2.6"/><circle cx="18.5" cy="33" r="2.6"/>',
    sigean: '<path d="M10 27c0-2 2-3.5 4-3.5h9c2 0 3 2 3 4"/><path d="M12 27v8M16 27v8M21 27v8M25 27v8"/><path d="M24 24l4-13"/><path d="M27 11l5.5 1.5-.8 2.2-5-.7"/><path d="M27.5 10.5l-.5-3M29.5 11l.3-3"/><circle cx="15" cy="26" r=".9"/><circle cx="20" cy="25.6" r=".9"/><circle cx="25.6" cy="18" r=".9"/>',
    carcassonne: '<path d="M6 33V17h6v16M28 33V17h6v16M12 33V24h16v9"/><path d="M5 17l4-7 4 7M27 17l4-7 4 7"/><path d="M17 33v-5a3 3 0 0 1 6 0v5"/><path d="M12 24v-3h3v3h3v-3h4v3h3v-3h3v3"/><path d="M9 10V6l3 1-3 1"/>',
    espagne: '<circle cx="28" cy="12" r="4.5"/><path d="M28 4.5v1.5M28 18v1.5M20.5 12H22M34 12h1.5"/><path d="M12 27V11l8 14z"/><path d="M7 27h18l-3 3.5H10z"/><path d="M4 34c3-2 5-2 8 0s5 2 8 0 5-2 8 0 5 2 8 0"/>',
  };

  // x / y : position sur la carte (viewBox 600 × 600) — label : côté du nom — tint : lavis aquarelle
  const PLACES = [
    { id: 'buffets', name: 'Les Grands Buffets', short: 'Les Grands Buffets', km: 5, time: '8 min', x: 402, y: 270, label: 'top', tint: '#d9a95f',
      img: 'images/grands-buffets.jpg', hours: 'Déjeuner & dîner · horaires selon saison', dest: 'Les Grands Buffets, Narbonne',
      desc: 'Le plus grand buffet de France, à volonté, à quelques minutes de vos cottages : plus de 120 plats et un chariot de fromages mémorable.',
      tip: 'Réservez plusieurs semaines à l’avance… et gardez une place pour le chariot de fromages !' },
    { id: 'etangs', name: 'Étangs & flamants roses', short: 'Les étangs', km: 5, time: '10 min', x: 343, y: 398, label: 'right', tint: '#e8a3a3',
      img: 'images/bages.jpg', hours: 'Accès libre, toute l’année', dest: 'Bages, Aude',
      desc: 'Les étangs de Bages et de Sigean abritent des colonies de flamants roses tout au long de l’année. Un spectacle naturel unique à deux pas du domaine.',
      tip: 'Allez-y en fin de journée : au coucher du soleil, les flamants se reflètent dans l’étang. Le village de Bages vaut le détour.' },
    { id: 'canal', name: 'Canal du Midi', short: 'Canal du Midi', km: 10, time: '15 min', x: 279, y: 165, label: 'top', tint: '#8fbcb4',
      img: 'images/canal-midi.webp', hours: 'Accès libre', dest: 'Canal du Midi, Sallèles-d’Aude',
      desc: 'Classé au patrimoine mondial de l’UNESCO. Promenades à vélo sous les platanes, croisières fluviales, villages de caractère au fil de l’eau.',
      tip: 'Suivez le chemin de halage jusqu’au Somail : sa librairie ancienne est un vrai trésor.' },
    { id: 'fontfroide', name: 'Abbaye de Fontfroide', short: 'Fontfroide', km: 14, time: '20 min', x: 164, y: 384, label: 'bottom', tint: '#d7b98a',
      img: 'images/abbaye-fontfroide2020-01-15site1-1579088319.webp', hours: '10h–17h (variable selon saison)', dest: 'Abbaye de Fontfroide',
      desc: 'Abbaye cistercienne du XIIe siècle nichée dans un écrin de cyprès et de vignes. Architecture remarquable, jardins à la française, visites guidées.',
      tip: 'Venez le matin, quand le cloître est encore silencieux. Au printemps, la roseraie est magnifique.' },
    { id: 'plages', name: 'Plages de Narbonne', short: 'Les plages', km: 15, time: '20 min', x: 458, y: 302, label: 'bottom', tint: '#9cc6cf',
      img: 'images/plage-narbonne.jpg', hours: 'Accès libre', dest: 'Narbonne-Plage',
      desc: 'Plusieurs kilomètres de sable fin entre la Méditerranée et les étangs. Narbonne-Plage et Saint-Pierre-la-Mer, idéales pour une journée au soleil.',
      tip: 'Pour plus de calme, filez vers Saint-Pierre-la-Mer et son gouffre de l’Œil Doux, un lac turquoise au milieu des pins.' },
    { id: 'corbieres', name: 'Vignobles des Corbières', short: 'Corbières', km: 20, time: '25 min', x: 122, y: 327, label: 'top', tint: '#b78aa6',
      img: 'images/les-vignobles-a-vincent-photographie.webp', hours: 'Dégustations 10h–18h', dest: 'Boutenac, Corbières',
      desc: 'Route des vins AOC Corbières à travers un paysage de garrigue et de calanques. Nombreuses caves ouvertes à la dégustation en toute saison.',
      tip: 'Poussez la porte d’une petite cave familiale : l’accueil y est toujours chaleureux.' },
    { id: 'sigean', name: 'Réserve Africaine de Sigean', short: 'Réserve de Sigean', km: 25, time: '25 min', x: 313, y: 500, label: 'right', tint: '#dcb56e',
      img: 'images/reserve-africaine-de-sigean.jpg', hours: '9h30–18h (variable selon saison)', dest: 'Réserve Africaine de Sigean',
      desc: 'Plus grand parc zoologique animalier de France avec 3 800 animaux en semi-liberté. Une expérience de safari à quelques kilomètres de la mer.',
      tip: 'Arrivez dès l’ouverture : les animaux sont plus actifs à la fraîche.' },
    { id: 'carcassonne', name: 'Cité de Carcassonne', short: 'Carcassonne', km: 55, time: '50 min', x: 66, y: 258, label: 'top', tint: '#c9b49a',
      img: 'images/la-cite-medievale-de-carcassonne_g-deschamps-crt-occitanie.jpg', hours: 'Remparts libres · Château 10h–18h', dest: 'Cité de Carcassonne',
      desc: 'La plus grande cité médiévale fortifiée d’Europe, classée UNESCO. Remparts, tours, château comtal : une visite incontournable à une heure de route.',
      tip: 'Restez jusqu’à la nuit tombée : la Cité illuminée est magique.' },
    { id: 'espagne', name: 'Espagne · Costa Brava', short: 'Costa Brava', km: 75, time: '1 h', x: 367, y: 560, label: 'left', tint: '#e4b27a',
      img: 'images/palafrugell-girona-s144973225.avif', hours: 'Frontière ouverte 24h/24', dest: 'Figueres, Espagne',
      desc: 'La frontière espagnole à moins d’une heure : Figueres et le musée Dalí, Cadaqués et ses criques, la Costa Brava à portée de journée.',
      tip: 'Cadaqués au coucher du soleil, puis un dîner de tapas : la journée parfaite.' },
  ];

  const pct = (v) => (v / 600 * 100).toFixed(3) + '%';
  const mapsUrl = (p) => 'https://www.google.com/maps/dir/?api=1&origin=' + encodeURIComponent(ORIGIN) +
    '&destination=' + encodeURIComponent(p.dest) + '&travelmode=driving';
  const icon = (id) => `<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${ICONS[id]}</svg>`;

  const COAST = 'M512 0 C495 60 502 120 490 180 C480 230 492 270 484 320 C476 370 468 420 472 470 C476 520 452 560 444 600';

  /* ── Construction ─────────────────────── */
  root.innerHTML = `
    <div class="xmap-stage">
      <div class="xmap-canvas">
        <svg class="xmap-svg" viewBox="0 0 600 600" aria-hidden="true">
          <defs>
            <radialGradient id="xmLand" cx="50%" cy="50%" r="70%">
              <stop offset="0" stop-color="#25402a"/><stop offset=".65" stop-color="#1a2e1c"/><stop offset="1" stop-color="#111f12"/>
            </radialGradient>
            <linearGradient id="xmSea" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stop-color="#16343a"/><stop offset="1" stop-color="#0e252a"/>
            </linearGradient>
            <radialGradient id="xmGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0" stop-color="#c9a96e" stop-opacity=".22"/><stop offset="1" stop-color="#c9a96e" stop-opacity="0"/>
            </radialGradient>
            <radialGradient id="xmLight" cx="85%" cy="5%" r="70%">
              <stop offset="0" stop-color="#e0c48a" stop-opacity=".16"/><stop offset="1" stop-color="#e0c48a" stop-opacity="0"/>
            </radialGradient>
          </defs>

          <rect width="600" height="600" fill="url(#xmLand)"/>
          <path d="${COAST} L620 620 L620 -20 Z" fill="url(#xmSea)"/>
          <rect width="600" height="600" fill="url(#xmLight)"/>

          <!-- Gravure : courbes de niveau, côte, vagues (traits or très fins) -->
          <g class="xmap-gold">
            <g class="xmap-contours">
              <path d="M40 420 C70 380 130 372 170 400 C205 425 235 470 210 505 C180 545 105 548 70 515 C38 485 22 450 40 420 Z"/>
              <path d="M62 428 C88 398 132 394 162 414 C190 434 208 468 190 494 C168 524 112 526 86 502 C62 480 48 452 62 428 Z"/>
              <path d="M86 440 C104 420 134 418 152 432 C170 446 180 470 166 486 C150 504 116 504 100 488 C84 472 76 456 86 440 Z"/>
              <path d="M90 300 C112 272 160 268 186 290 C210 312 204 350 176 366 C146 382 104 372 88 348 C76 330 78 314 90 300 Z"/>
              <path d="M112 306 C128 290 158 288 172 302 C186 316 182 338 164 348 C144 358 118 352 108 336 C100 324 102 314 112 306 Z"/>
              <path d="M350 120 C378 98 420 104 436 132 C450 158 432 186 404 192 C374 198 346 180 340 154 C336 138 340 128 350 120 Z"/>
              <path d="M368 132 C386 120 410 124 420 140 C428 156 418 172 400 176 C382 180 364 170 360 156 C358 146 360 138 368 132 Z"/>
            </g>
            <path class="xmap-coast" d="${COAST}"/>
            <path class="xmap-coast is-echo" d="M522 0 C505 60 512 120 500 180 C490 230 502 270 494 320 C486 370 478 420 482 470 C486 520 462 560 454 600"/>
            <path class="xmap-coast is-echo" d="M534 0 C517 60 524 120 512 180 C502 230 514 270 506 320 C498 370 490 420 494 470 C498 520 474 560 466 600"/>
            <path class="xmap-lagoon" d="M370 372 C386 364 406 374 410 392 C414 412 400 436 386 442 C370 448 356 432 358 416 C360 400 356 380 370 372 Z"/>
            <path class="xmap-lagoon" d="M404 462 C416 456 430 464 430 478 C430 494 418 504 408 500 C396 496 392 470 404 462 Z"/>
            <!-- Cercles de distance -->
            <circle class="xmap-ring" cx="300" cy="300" r="135"/>
            <circle class="xmap-ring" cx="300" cy="300" r="195"/>
            <circle class="xmap-ring" cx="300" cy="300" r="270"/>
            <!-- Rose des vents -->
            <g class="xmap-compass" transform="translate(56 540)">
              <circle r="21"/><circle r="15" class="is-faint"/>
              <path d="M0 -26 L3.5 0 L0 26 L-3.5 0 Z"/><path d="M-26 0 L0 3.5 L26 0 L0 -3.5 Z" class="is-faint"/>
            </g>
          </g>
          <text class="xmap-ring-label" x="232" y="424">15 MIN</text>
          <text class="xmap-ring-label" x="202" y="476">30 MIN</text>
          <text class="xmap-ring-label" x="165" y="541">1 H</text>
          <text class="xmap-compass-n" x="56" y="507">N</text>
          <text class="xmap-sea-label" x="555" y="300" transform="rotate(90 555 300)">Mer Méditerranée</text>

          <circle cx="300" cy="300" r="80" fill="url(#xmGlow)"/>
          <!-- Trajet vers le lieu choisi -->
          <path id="xmRoute" d="" fill="none" stroke="none"/>
          <g class="xmap-route" id="xmRouteDots"></g>
        </svg>

        <div class="xmap-title">
          <span class="xmap-title-main">Depuis votre <em>terrasse</em>…</span>
          <small>Nos escapades préférées</small>
        </div>

        <div class="xmap-home" style="left:50%;top:50%">
          <span class="xmap-home-photo"><img src="images/domaine-salon.jpg" alt="" loading="lazy"></span>
          <span class="xmap-home-label">Les Jardins de l’Oustal</span>
        </div>

        ${PLACES.map((p, i) => `
          <button class="xmap-pin is-${p.label}" type="button" data-i="${i}" style="left:${pct(p.x)};top:${pct(p.y)}" aria-label="${p.name}, ${p.km} km">
            <span class="xmap-pin-art">${icon(p.id)}</span>
            <span class="xmap-pin-label">${p.short}</span>
          </button>`).join('')}
      </div>
      <p class="xmap-note">Carte illustrative, pas à l’échelle · touchez un lieu pour le découvrir</p>
    </div>

    <div class="xmap-backdrop" id="xmBackdrop"></div>
    <aside class="xmap-card" id="xmCard" aria-live="polite">
      <button class="xmap-card-close" id="xmClose" type="button" aria-label="Fermer">✕</button>
      <div class="xmap-card-photo" id="xmPhoto"></div>
      <div class="xmap-card-body">
        <div class="xmap-card-top">
          <span class="xmap-card-art" id="xmArt"></span>
          <div class="xmap-card-chips">
            <span class="xmap-chip" id="xmKm"></span>
            <span class="xmap-chip is-time" id="xmTime"></span>
          </div>
        </div>
        <h3 class="xmap-card-name" id="xmName"></h3>
        <p class="xmap-card-hours" id="xmHours"></p>
        <p class="xmap-card-desc" id="xmDesc"></p>
        <div class="xmap-tip">
          <span class="xmap-tip-label">Le conseil de l’Oustal</span>
          <p id="xmTip"></p>
        </div>
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
  const routeDots = $('xmRouteDots');
  const SVG_NS = 'http://www.w3.org/2000/svg';

  // Trajet au crayon : des petits points posés un à un le long du chemin
  function drawRoute(d) {
    route.setAttribute('d', d);
    routeDots.innerHTML = '';
    const len = route.getTotalLength ? route.getTotalLength() : 0;
    const n = Math.max(2, Math.floor(len / 9));
    for (let k = 0; k <= n; k++) {
      const pt = route.getPointAtLength(len * k / n);
      const c = document.createElementNS(SVG_NS, 'circle');
      c.setAttribute('cx', pt.x.toFixed(1)); c.setAttribute('cy', pt.y.toFixed(1));
      c.setAttribute('r', k === n ? '3' : '1.5');
      c.style.animationDelay = (k * 1.1 / n).toFixed(2) + 's';
      routeDots.appendChild(c);
    }
  }
  const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
  let current = -1;

  function routePath(p) {
    // Courbe douce du domaine vers le lieu (s'arrête un peu avant le dessin)
    const dx = p.x - 300, dy = p.y - 300;
    const len = Math.hypot(dx, dy) || 1;
    const ex = p.x - dx / len * 22, ey = p.y - dy / len * 22;
    const sx = 300 + dx / len * 34, sy = 300 + dy / len * 34;
    const mx = (sx + ex) / 2, my = (sy + ey) / 2;
    const cx = mx - dy * 0.16, cy = my + dx * 0.16;
    return `M${sx.toFixed(1)} ${sy.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`;
  }

  function select(i, { open = true } = {}) {
    current = (i + PLACES.length) % PLACES.length;
    const p = PLACES[current];
    pins.forEach((b, k) => b.classList.toggle('active', k === current));

    const d = routePath(p);
    drawRoute(d);

    card.style.setProperty('--tint', p.tint);
    card.classList.remove('swap'); void card.offsetWidth; card.classList.add('swap');
    $('xmPhoto').style.backgroundImage = `url('${p.img}')`;
    $('xmArt').innerHTML = icon(p.id);
    $('xmKm').textContent = `${p.km} km`;
    $('xmTime').textContent = `≈ ${p.time} en voiture`;
    $('xmName').textContent = p.name;
    $('xmHours').textContent = p.hours;
    $('xmDesc').textContent = p.desc;
    $('xmTip').textContent = p.tip;
    $('xmGo').href = mapsUrl(p);
    $('xmCount').textContent = `${current + 1} / ${PLACES.length}`;

    if (open && isMobile()) {
      card.classList.add('open');
      backdrop.classList.add('open');
    }
    if (open && window.ljdoTrack) window.ljdoTrack('Carte - lieu', { lieu: p.id });
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
    if (startY !== null && e.changedTouches[0].clientY - startY > 70 && card.scrollTop <= 0) closeCard();
    startY = null;
  });

  // Au départ : les Grands Buffets affichés sur ordinateur (fiche fermée sur téléphone)
  select(0, { open: false });

  // Apparition des dessins quand la carte arrive à l'écran
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
