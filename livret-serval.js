/* ─────────────────────────────────────────
   Le serval de l'Oustal : petite tête de serval avec une bulle « j'ai un mot pour vous ».
   Au clic, il « parle » comme dans une messagerie et invite à laisser un avis Google.
   ───────────────────────────────────────── */
(function () {
  const REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJexhfshutsRIRnq9RoxvEMTE';
  const SEEN_KEY = 'livretServalSeen';

  // Textes (le français est le texte d'origine ; les autres langues suivent la langue du livret)
  const TEXT = {
    fr: {
      teaser: "Psst… j'ai un petit mot pour vous 🐾",
      name: "Le serval de l'Oustal",
      status: 'en ligne',
      review: 'Laisser un avis Google',
      close: 'Fermer',
      msgs: [
        "Merci beaucoup d'avoir choisi Les Jardins de l'Oustal 🌲",
        "Nous avons été très heureux de vous accueillir et nous espérons que vous avez passé un très beau moment parmi nous.",
        "Si vous avez un instant et que vous le souhaitez, un avis Google compterait énormément pour nous. C'est ce qui permet à d'autres voyageurs de nous découvrir, et c'est toujours un vrai plaisir de vous lire :",
        'REVIEW',
        "Et si quelque chose n'était pas à la hauteur de vos attentes, n'hésitez pas à nous le dire, nous y serons très attentifs.",
        "Au plaisir de vous accueillir à nouveau,\nL'équipe des Jardins de l'Oustal",
      ],
    },
    en: {
      teaser: 'Psst… I have a little note for you 🐾',
      name: 'The Oustal serval',
      status: 'online',
      review: 'Leave a Google review',
      close: 'Close',
      msgs: [
        "Thank you so much for choosing Les Jardins de l'Oustal 🌲",
        'We were delighted to welcome you and we hope you had a wonderful time with us.',
        'If you have a moment and would like to, a Google review would mean a lot to us. It helps other travellers discover us, and we always love reading them:',
        'REVIEW',
        "And if anything didn't live up to your expectations, please don't hesitate to tell us, we'll pay close attention.",
        "We look forward to welcoming you again,\nThe Jardins de l'Oustal team",
      ],
    },
    es: {
      teaser: 'Psst… tengo un mensajito para usted 🐾',
      name: "El serval de l'Oustal",
      status: 'en línea',
      review: 'Dejar una reseña en Google',
      close: 'Cerrar',
      msgs: [
        "¡Muchas gracias por elegir Les Jardins de l'Oustal! 🌲",
        'Ha sido un placer recibirle y esperamos que haya pasado un momento muy bonito con nosotros.',
        'Si tiene un momento y le apetece, una reseña en Google significaría mucho para nosotros. Así otros viajeros pueden descubrirnos, y siempre es un placer leerle:',
        'REVIEW',
        'Y si algo no estuvo a la altura de sus expectativas, no dude en decírnoslo: lo tendremos muy en cuenta.',
        "Esperamos volver a recibirle pronto,\nEl equipo de Les Jardins de l'Oustal",
      ],
    },
    nl: {
      teaser: 'Psst… ik heb een berichtje voor u 🐾',
      name: "De serval van l'Oustal",
      status: 'online',
      review: 'Een Google-review schrijven',
      close: 'Sluiten',
      msgs: [
        "Hartelijk dank voor uw keuze voor Les Jardins de l'Oustal 🌲",
        'We vonden het heel fijn u te ontvangen en hopen dat u een heerlijke tijd bij ons heeft gehad.',
        'Als u even tijd heeft en het leuk vindt, zou een Google-review ons enorm helpen. Zo ontdekken andere reizigers ons, en we lezen ze altijd met veel plezier:',
        'REVIEW',
        'En als iets niet aan uw verwachtingen voldeed, laat het ons gerust weten: we nemen het ter harte.',
        "We hopen u snel weer te verwelkomen,\nHet team van Les Jardins de l'Oustal",
      ],
    },
  };
  const tx = () => TEXT[(typeof LANG !== 'undefined' && TEXT[LANG]) ? LANG : 'fr'];
  const track = (name, data) => { if (window.ljdoTrack) window.ljdoTrack(name, data || {}); };

  // Tête de serval dessinée en SVG (grandes oreilles, pelage fauve tacheté)
  const HEAD = `
<svg viewBox="0 0 100 100" aria-hidden="true">
  <g class="sv-ear sv-ear-l">
    <path d="M17 52 C6 26 10 4 26 5 C38 6 43 26 41 42 Z" fill="#c98f3c" stroke="#3a2614" stroke-width="2.2"/>
    <path d="M23 45 C16 28 18 13 27 13 C34 14 37 28 36 39 Z" fill="#f4dfc2"/>
  </g>
  <g class="sv-ear sv-ear-r">
    <path d="M83 52 C94 26 90 4 74 5 C62 6 57 26 59 42 Z" fill="#c98f3c" stroke="#3a2614" stroke-width="2.2"/>
    <path d="M77 45 C84 28 82 13 73 13 C66 14 63 28 64 39 Z" fill="#f4dfc2"/>
  </g>
  <ellipse cx="50" cy="62" rx="31" ry="28" fill="#e2ad52"/>
  <g fill="#3a2614">
    <rect x="43.2" y="35.5" width="2.6" height="12" rx="1.3"/>
    <rect x="48.7" y="34.5" width="2.6" height="14" rx="1.3"/>
    <rect x="54.2" y="35.5" width="2.6" height="12" rx="1.3"/>
    <circle cx="27" cy="55" r="2.3"/><circle cx="24.5" cy="63" r="2"/><circle cx="29" cy="47.5" r="1.9"/>
    <circle cx="73" cy="55" r="2.3"/><circle cx="75.5" cy="63" r="2"/><circle cx="71" cy="47.5" r="1.9"/>
    <circle cx="36" cy="44" r="1.6"/><circle cx="64" cy="44" r="1.6"/>
  </g>
  <ellipse cx="40" cy="76" rx="11" ry="9" fill="#fbf2e2"/>
  <ellipse cx="60" cy="76" rx="11" ry="9" fill="#fbf2e2"/>
  <ellipse cx="50" cy="81" rx="8" ry="6" fill="#fbf2e2"/>
  <g class="sv-eyes">
    <ellipse cx="38" cy="59" rx="6.4" ry="6.8" fill="#d8b23a" stroke="#3a2614" stroke-width="1.6"/>
    <ellipse cx="62" cy="59" rx="6.4" ry="6.8" fill="#d8b23a" stroke="#3a2614" stroke-width="1.6"/>
    <ellipse cx="38.4" cy="59.5" rx="2" ry="4.6" fill="#1b130a"/>
    <ellipse cx="61.6" cy="59.5" rx="2" ry="4.6" fill="#1b130a"/>
    <circle cx="40" cy="56.5" r="1.4" fill="#fff"/><circle cx="63.6" cy="56.5" r="1.4" fill="#fff"/>
  </g>
  <path d="M42.5 65 Q44.5 69 45 72.5 M57.5 65 Q55.5 69 55 72.5" stroke="#3a2614" stroke-width="1.6" fill="none" stroke-linecap="round"/>
  <path d="M45.4 70 H54.6 Q53.6 74.2 50 75.4 Q46.4 74.2 45.4 70 Z" fill="#d9837c"/>
  <path d="M50 75.4 V78 M50 78 Q47 81 44.5 79.2 M50 78 Q53 81 55.5 79.2" stroke="#3a2614" stroke-width="1.4" fill="none" stroke-linecap="round"/>
  <g stroke="#fff" stroke-width=".9" stroke-linecap="round" opacity=".9">
    <path d="M38 77 L22 74 M38 79.5 L22 80.5 M62 77 L78 74 M62 79.5 L78 80.5"/>
  </g>
</svg>`;

  // Bouton flottant + bulle
  const fab = document.createElement('div');
  fab.className = 'sv-fab';
  fab.innerHTML = `
    <button class="sv-teaser" type="button"></button>
    <button class="sv-head" type="button">${HEAD}<span class="sv-badge">1</span></button>`;

  // Fenêtre de discussion
  const chat = document.createElement('section');
  chat.className = 'sv-chat';
  chat.hidden = true;
  chat.setAttribute('role', 'dialog');
  chat.setAttribute('aria-modal', 'true');
  chat.innerHTML = `
    <div class="sv-panel">
      <header class="sv-top">
        <span class="sv-avatar">${HEAD}</span>
        <span class="sv-who"><strong class="sv-name"></strong><span class="sv-status"></span></span>
        <button class="sv-close" type="button">✕</button>
      </header>
      <div class="sv-thread"></div>
    </div>`;

  const teaser = fab.querySelector('.sv-teaser');
  const thread = chat.querySelector('.sv-thread');
  let seen = false;
  try { seen = !!localStorage.getItem(SEEN_KEY); } catch (e) {}
  let timers = [];

  function refreshTexts() {
    const T = tx();
    teaser.textContent = T.teaser;
    fab.querySelector('.sv-head').setAttribute('aria-label', T.teaser);
    chat.querySelector('.sv-name').textContent = T.name;
    chat.querySelector('.sv-status').textContent = T.status;
    chat.querySelector('.sv-close').setAttribute('aria-label', T.close);
  }

  function bubble(content) {
    const row = document.createElement('div');
    row.className = 'sv-row';
    row.innerHTML = `<span class="sv-mini">${HEAD}</span>`;
    row.appendChild(content);
    thread.appendChild(row);
    requestAnimationFrame(() => row.classList.add('in'));
    thread.scrollTop = thread.scrollHeight;
    return row;
  }

  // Le serval « écrit » ses messages les uns après les autres
  function playMessages() {
    timers.forEach(clearTimeout); timers = [];
    thread.innerHTML = '';
    const T = tx();
    let delay = 350;
    T.msgs.forEach((m, i) => {
      timers.push(setTimeout(() => {
        const typing = document.createElement('div');
        typing.className = 'sv-bubble sv-typing';
        typing.innerHTML = '<i></i><i></i><i></i>';
        const row = bubble(typing);
        const wait = m === 'REVIEW' ? 450 : Math.min(1400, 500 + m.length * 9);
        timers.push(setTimeout(() => {
          row.remove();
          let el;
          if (m === 'REVIEW') {
            el = document.createElement('a');
            el.className = 'sv-bubble sv-review';
            el.href = REVIEW_URL; el.target = '_blank'; el.rel = 'noopener';
            el.innerHTML = `<span class="sv-stars">★★★★★</span><span>👉 ${T.review}</span>`;
            el.addEventListener('click', () => track('Serval : avis Google'));
          } else {
            el = document.createElement('p');
            el.className = 'sv-bubble';
            el.textContent = m;
          }
          bubble(el);
        }, wait));
      }, delay));
      delay += (m === 'REVIEW' ? 450 : Math.min(1400, 500 + m.length * 9)) + 450;
    });
  }

  function openChat() {
    refreshTexts();
    chat.hidden = false;
    requestAnimationFrame(() => chat.classList.add('open'));
    fab.classList.remove('has-teaser');
    fab.classList.add('is-read');
    try { localStorage.setItem(SEEN_KEY, '1'); } catch (e) {}
    track('Serval : message ouvert');
    playMessages();
  }
  function closeChat() {
    chat.classList.remove('open');
    timers.forEach(clearTimeout); timers = [];
    setTimeout(() => { chat.hidden = true; }, 300);
  }

  fab.querySelector('.sv-head').addEventListener('click', openChat);
  teaser.addEventListener('click', openChat);
  chat.querySelector('.sv-close').addEventListener('click', closeChat);
  chat.addEventListener('click', (e) => { if (e.target === chat) closeChat(); });

  document.body.append(fab, chat);
  refreshTexts();
  if (seen) fab.classList.add('is-read');

  // Il apparaît une fois l'écran d'accueil terminé (et la langue choisie)
  function showWhenReady() {
    if (document.getElementById('splash')) return setTimeout(showWhenReady, 300);
    setTimeout(() => {
      refreshTexts();
      fab.classList.add('show');
      setTimeout(() => fab.classList.add('has-teaser'), 900);
      // La bulle se range toute seule au bout d'un moment ; le serval reste
      setTimeout(() => fab.classList.remove('has-teaser'), 14000);
    }, 900);
  }
  showWhenReady();
})();
