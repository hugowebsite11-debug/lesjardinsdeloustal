/* ─────────────────────────────────────────
   Livret d'arrivée — mode d'emploi des spas (FR / EN / ES / NL)
   3 modèles de spa :
     'menu'      → La Bois Flottée et Sous les Pins 2 (boutons Aux + Menu, codes R / IR / RR, sans voyant HEAT)
     'heat'      → La Falaise (codes St / Ec / Sl, voyant HEAT)
     'noheat'    → Sous les Pins 1, Chalet Zen (codes St / Ec / Sl, sans voyant HEAT)
   Le modèle de chaque cottage est indiqué par le champ `spa` dans COTTAGES (livret.js).
   ───────────────────────────────────────── */

const SPA_TEXT = {
  fr: {
    eyebrow: 'Votre jacuzzi privatif',
    title: "Mode d'emploi du spa",
    intro: 'Tout ce qu’il faut savoir pour profiter de votre bain, en quelques gestes.',
    close: 'Fermer',
    simple: 'Le plus simple : ne touchez à aucun bouton !',
    simpleSub: 'Votre spa est déjà réglé et prêt à vous accueillir.',
    secButtons: 'Les boutons',
    secTemp: 'Régler la température',
    secCold: "L'eau est froide ou ne chauffe plus ?",
    btn: {
      jets: '1 appui : massage doux · 2 appuis : massage fort · 3 appuis : arrêt',
      aux: 'Jets supplémentaires (selon les équipements du spa)',
      light: 'Allume / éteint la lumière',
      warmcool: 'Monte / baisse la température',
      heat: 'Voyant allumé : l’eau est en train de chauffer',
    },
    heatLabel: 'Voyant HEAT',
    screenNote: 'L’écran affiche la température de l’eau en °C.',
    temp1: 'Appuyez une fois sur <b>Warm</b> ou <b>Cool</b> : le chiffre clignote.',
    temp2: 'Appuyez à nouveau pour monter ou baisser la température.',
    temp3menu: '<b>Attendez 5 secondes</b> : le réglage est enregistré.',
    temp3: '<b>Attendez 5 secondes</b> que le chiffre arrête de clignoter avant de toucher un autre bouton.',
    maxTemp: '40 °C maximum',
    maxLabel: 'max',
    important: '<b>Important :</b> appuyer sur <b>Light</b> juste après <b>Warm</b> ou <b>Cool</b> modifie un réglage interne, et l’eau ne chauffe plus. Attendez toujours la fin du clignotement.',
    slow: 'Le spa chauffe doucement : environ <b>1 °C par heure</b>, couvercle fermé.',
    coldIntroMenu: 'Regardez les petits symboles en bas à gauche de l’écran.',
    coldIntro: 'Regardez l’écran. S’il affiche <b>Ec</b> ou <b>Sl</b> (à la place de la température ou en alternance), le spa est en mode économie et ne chauffe presque plus.',
    code: {
      R: 'Normal : le spa garde la température en permanence',
      IR: 'Mode repos : chauffe seulement quelques heures par jour',
      thermo: 'Plage « vacances » : limitée à 37 °C',
      St: 'Normal : le spa garde la température en permanence',
      Ec: 'Économie : chauffe seulement quelques heures par jour',
      Sl: 'Veille : chauffe très peu, l’eau refroidit',
    },
    codeOk: 'Normal',
    codeKo: 'À corriger',
    thermoLabel: 'Thermomètre ↓',
    fixTitleMenu: 'Vous voyez IR ou RR ? Repassez en mode normal :',
    fixMenu: [
      'Appuyez sur <b>Menu</b> plusieurs fois jusqu’à voir <b>MODE</b>.',
      'Appuyez sur <b>Warm</b> : le symbole passe à <b>R</b>.',
      'Appuyez sur <b>Menu</b> pour valider.',
    ],
    arrowMenu: 'La flèche du thermomètre pointe vers le bas ? Appuyez une fois sur <b>Menu</b> (écran de la plage de température), puis sur <b>Warm</b> pour mettre la flèche vers le haut, puis sur <b>Menu</b> pour valider.',
    fixTitle: 'Pour revenir en mode normal :',
    fix: [
      'Appuyez sur <b>Warm</b> : le chiffre clignote.',
      'Tout de suite, appuyez sur <b>Light</b> : un code s’affiche.',
      'Recommencez <b>Warm</b> puis <b>Light</b> jusqu’à voir <b>St</b>. Sans aller trop vite, sinon l’appui n’est pas pris en compte.',
    ],
    finishHeat: 'Fermez le couvercle. Si l’eau est sous la température réglée, le voyant <b>HEAT</b> s’allume : le spa chauffe. Il remonte d’environ 1 °C par heure, comptez plusieurs heures pour une eau froide.',
    finish: 'Fermez le couvercle. Le spa remonte d’environ 1 °C par heure : pour une eau froide, comptez plusieurs heures.',
    help: 'Un doute, un souci ? Appelez-nous, on vous aide.',
  },

  en: {
    eyebrow: 'Your private jacuzzi',
    title: 'Hot tub user guide',
    intro: 'Everything you need to enjoy your bath, in just a few steps.',
    close: 'Close',
    simple: 'The easiest thing: don’t touch any buttons!',
    simpleSub: 'Your hot tub is already set up and ready for you.',
    secButtons: 'The buttons',
    secTemp: 'Setting the temperature',
    secCold: 'Water cold or not heating?',
    btn: {
      jets: '1 press: gentle massage · 2 presses: strong · 3 presses: off',
      aux: 'Extra jets (depending on the hot tub’s equipment)',
      light: 'Turns the light on / off',
      warmcool: 'Raises / lowers the temperature',
      heat: 'Light on: the water is heating up',
    },
    heatLabel: 'HEAT light',
    screenNote: 'The screen shows the water temperature in °C.',
    temp1: 'Press <b>Warm</b> or <b>Cool</b> once: the number flashes.',
    temp2: 'Press again to raise or lower the temperature.',
    temp3menu: '<b>Wait 5 seconds</b>: the setting is saved.',
    temp3: '<b>Wait 5 seconds</b> until the number stops flashing before touching any other button.',
    maxTemp: '40 °C maximum',
    maxLabel: 'max',
    important: '<b>Important:</b> pressing <b>Light</b> right after <b>Warm</b> or <b>Cool</b> changes an internal setting and the water stops heating. Always wait until the flashing stops.',
    slow: 'The hot tub heats up slowly: about <b>1 °C per hour</b>, with the cover closed.',
    coldIntroMenu: 'Look at the small symbols at the bottom left of the screen.',
    coldIntro: 'Look at the screen. If it shows <b>Ec</b> or <b>Sl</b> (instead of the temperature, or alternating with it), the hot tub is in economy mode and barely heats.',
    code: {
      R: 'Normal: the hot tub keeps the temperature at all times',
      IR: 'Rest mode: only heats a few hours a day',
      thermo: '“Holiday” range: limited to 37 °C',
      St: 'Normal: the hot tub keeps the temperature at all times',
      Ec: 'Economy: only heats a few hours a day',
      Sl: 'Sleep: barely heats, the water cools down',
    },
    codeOk: 'Normal',
    codeKo: 'To fix',
    thermoLabel: 'Thermometer ↓',
    fixTitleMenu: 'Seeing IR or RR? Switch back to normal mode:',
    fixMenu: [
      'Press <b>Menu</b> several times until you see <b>MODE</b>.',
      'Press <b>Warm</b>: the symbol changes to <b>R</b>.',
      'Press <b>Menu</b> to confirm.',
    ],
    arrowMenu: 'Is the thermometer arrow pointing down? Press <b>Menu</b> once (temperature range screen), then <b>Warm</b> to point the arrow up, then <b>Menu</b> to confirm.',
    fixTitle: 'To switch back to normal mode:',
    fix: [
      'Press <b>Warm</b>: the number flashes.',
      'Straight away, press <b>Light</b>: a code appears.',
      'Repeat <b>Warm</b> then <b>Light</b> until you see <b>St</b>. Not too fast, or the press won’t register.',
    ],
    finishHeat: 'Close the cover. If the water is below the set temperature, the <b>HEAT</b> light comes on: the hot tub is heating. It rises about 1 °C per hour, so allow several hours for cold water.',
    finish: 'Close the cover. The hot tub rises about 1 °C per hour: allow several hours for cold water.',
    help: 'Any doubt or problem? Give us a call, we’ll help you.',
  },

  es: {
    eyebrow: 'Su jacuzzi privado',
    title: 'Modo de empleo del spa',
    intro: 'Todo lo que necesita para disfrutar de su baño, en unos pocos pasos.',
    close: 'Cerrar',
    simple: 'Lo más sencillo: ¡no toque ningún botón!',
    simpleSub: 'Su spa ya está ajustado y listo para usted.',
    secButtons: 'Los botones',
    secTemp: 'Ajustar la temperatura',
    secCold: '¿El agua está fría o ya no calienta?',
    btn: {
      jets: '1 pulsación: masaje suave · 2: masaje fuerte · 3: apagado',
      aux: 'Chorros adicionales (según el equipamiento del spa)',
      light: 'Enciende / apaga la luz',
      warmcool: 'Sube / baja la temperatura',
      heat: 'Piloto encendido: el agua se está calentando',
    },
    heatLabel: 'Piloto HEAT',
    screenNote: 'La pantalla muestra la temperatura del agua en °C.',
    temp1: 'Pulse una vez <b>Warm</b> o <b>Cool</b>: la cifra parpadea.',
    temp2: 'Vuelva a pulsar para subir o bajar la temperatura.',
    temp3menu: '<b>Espere 5 segundos</b>: el ajuste queda guardado.',
    temp3: '<b>Espere 5 segundos</b> a que la cifra deje de parpadear antes de tocar otro botón.',
    maxTemp: '40 °C como máximo',
    maxLabel: 'máx',
    important: '<b>Importante:</b> pulsar <b>Light</b> justo después de <b>Warm</b> o <b>Cool</b> modifica un ajuste interno y el agua deja de calentarse. Espere siempre a que termine el parpadeo.',
    slow: 'El spa se calienta despacio: aproximadamente <b>1 °C por hora</b>, con la tapa cerrada.',
    coldIntroMenu: 'Mire los pequeños símbolos abajo a la izquierda de la pantalla.',
    coldIntro: 'Mire la pantalla. Si muestra <b>Ec</b> o <b>Sl</b> (en lugar de la temperatura o alternando con ella), el spa está en modo ahorro y apenas calienta.',
    code: {
      R: 'Normal: el spa mantiene la temperatura en todo momento',
      IR: 'Modo reposo: solo calienta unas horas al día',
      thermo: 'Rango «vacaciones»: limitado a 37 °C',
      St: 'Normal: el spa mantiene la temperatura en todo momento',
      Ec: 'Ahorro: solo calienta unas horas al día',
      Sl: 'Reposo: apenas calienta, el agua se enfría',
    },
    codeOk: 'Normal',
    codeKo: 'A corregir',
    thermoLabel: 'Termómetro ↓',
    fixTitleMenu: '¿Ve IR o RR? Vuelva al modo normal:',
    fixMenu: [
      'Pulse <b>Menu</b> varias veces hasta ver <b>MODE</b>.',
      'Pulse <b>Warm</b>: el símbolo cambia a <b>R</b>.',
      'Pulse <b>Menu</b> para confirmar.',
    ],
    arrowMenu: '¿La flecha del termómetro apunta hacia abajo? Pulse una vez <b>Menu</b> (pantalla del rango de temperatura), luego <b>Warm</b> para que la flecha apunte hacia arriba y después <b>Menu</b> para confirmar.',
    fixTitle: 'Para volver al modo normal:',
    fix: [
      'Pulse <b>Warm</b>: la cifra parpadea.',
      'Enseguida, pulse <b>Light</b>: aparece un código.',
      'Repita <b>Warm</b> y luego <b>Light</b> hasta ver <b>St</b>. Sin ir demasiado rápido, o la pulsación no se tendrá en cuenta.',
    ],
    finishHeat: 'Cierre la tapa. Si el agua está por debajo de la temperatura ajustada, el piloto <b>HEAT</b> se enciende: el spa está calentando. Sube aproximadamente 1 °C por hora; cuente varias horas si el agua está fría.',
    finish: 'Cierre la tapa. El spa sube aproximadamente 1 °C por hora: cuente varias horas si el agua está fría.',
    help: '¿Alguna duda o problema? Llámenos, le ayudamos.',
  },

  nl: {
    eyebrow: 'Uw privéjacuzzi',
    title: 'Handleiding van de spa',
    intro: 'Alles wat u moet weten om van uw bad te genieten, in een paar stappen.',
    close: 'Sluiten',
    simple: 'Het makkelijkst: raak geen enkele knop aan!',
    simpleSub: 'Uw spa is al ingesteld en klaar voor gebruik.',
    secButtons: 'De knoppen',
    secTemp: 'De temperatuur instellen',
    secCold: 'Is het water koud of warmt het niet meer op?',
    btn: {
      jets: '1× drukken: zachte massage · 2×: krachtig · 3×: uit',
      aux: 'Extra jets (afhankelijk van de uitrusting van de spa)',
      light: 'Licht aan / uit',
      warmcool: 'Temperatuur hoger / lager',
      heat: 'Lampje aan: het water wordt verwarmd',
    },
    heatLabel: 'HEAT-lampje',
    screenNote: 'Het scherm toont de watertemperatuur in °C.',
    temp1: 'Druk één keer op <b>Warm</b> of <b>Cool</b>: het getal knippert.',
    temp2: 'Druk opnieuw om de temperatuur hoger of lager te zetten.',
    temp3menu: '<b>Wacht 5 seconden</b>: de instelling is opgeslagen.',
    temp3: '<b>Wacht 5 seconden</b> tot het getal stopt met knipperen voordat u een andere knop aanraakt.',
    maxTemp: 'Maximaal 40 °C',
    maxLabel: 'max',
    important: '<b>Belangrijk:</b> op <b>Light</b> drukken direct na <b>Warm</b> of <b>Cool</b> wijzigt een interne instelling, waardoor het water niet meer opwarmt. Wacht altijd tot het knipperen stopt.',
    slow: 'De spa warmt langzaam op: ongeveer <b>1 °C per uur</b>, met gesloten deksel.',
    coldIntroMenu: 'Kijk naar de kleine symbolen linksonder op het scherm.',
    coldIntro: 'Kijk naar het scherm. Staat er <b>Ec</b> of <b>Sl</b> (in plaats van de temperatuur of afwisselend), dan staat de spa in spaarstand en warmt hij nauwelijks op.',
    code: {
      R: 'Normaal: de spa houdt de temperatuur altijd vast',
      IR: 'Ruststand: verwarmt maar een paar uur per dag',
      thermo: '“Vakantie”-bereik: beperkt tot 37 °C',
      St: 'Normaal: de spa houdt de temperatuur altijd vast',
      Ec: 'Spaarstand: verwarmt maar een paar uur per dag',
      Sl: 'Slaapstand: verwarmt nauwelijks, het water koelt af',
    },
    codeOk: 'Normaal',
    codeKo: 'Aanpassen',
    thermoLabel: 'Thermometer ↓',
    fixTitleMenu: 'Ziet u IR of RR? Zet de spa terug in de normale stand:',
    fixMenu: [
      'Druk meerdere keren op <b>Menu</b> tot u <b>MODE</b> ziet.',
      'Druk op <b>Warm</b>: het symbool verandert in <b>R</b>.',
      'Druk op <b>Menu</b> om te bevestigen.',
    ],
    arrowMenu: 'Wijst de pijl van de thermometer naar beneden? Druk één keer op <b>Menu</b> (scherm met het temperatuurbereik), dan op <b>Warm</b> om de pijl omhoog te zetten, en daarna op <b>Menu</b> om te bevestigen.',
    fixTitle: 'Terug naar de normale stand:',
    fix: [
      'Druk op <b>Warm</b>: het getal knippert.',
      'Druk meteen op <b>Light</b>: er verschijnt een code.',
      'Herhaal <b>Warm</b> en dan <b>Light</b> tot u <b>St</b> ziet. Niet te snel, anders wordt de druk niet geregistreerd.',
    ],
    finishHeat: 'Sluit het deksel. Is het water kouder dan de ingestelde temperatuur, dan gaat het <b>HEAT</b>-lampje branden: de spa warmt op. Hij stijgt ongeveer 1 °C per uur; reken op een aantal uren bij koud water.',
    finish: 'Sluit het deksel. De spa stijgt ongeveer 1 °C per uur: reken op een aantal uren bij koud water.',
    help: 'Twijfel of een probleem? Bel ons, we helpen u graag.',
  },
};

// Construit le HTML du mode d'emploi pour un modèle de spa et une langue
function renderSpaManual(model, lang, cottageName) {
  const T = SPA_TEXT[lang] || SPA_TEXT.fr;
  const isMenu = model === 'menu';
  const hasHeat = model === 'heat'; // seul le spa de La Falaise a un voyant HEAT

  const key = (label, cls = '') => `<span class="spa-key ${cls}">${label}</span>`;
  const buttons = [
    [key('Jets'), T.btn.jets],
    isMenu ? [key('Aux'), T.btn.aux] : null,
    [key('Light', 'is-light'), T.btn.light],
    [key('Warm', 'is-warm') + key('Cool', 'is-cool'), T.btn.warmcool],
    hasHeat ? [`<span class="spa-led"></span><span class="spa-led-label">${T.heatLabel}</span>`, T.btn.heat] : null,
  ].filter(Boolean);

  const steps = (list) => `<ol class="spa-steps">${list.map(s => `<li>${s}</li>`).join('')}</ol>`;
  const lcd = (txt) => `<span class="spa-lcd">${txt}</span>`;
  const codeRow = (code, desc, ok) => `
    <div class="spa-code ${ok ? 'is-ok' : 'is-ko'}">
      <div class="spa-code-lcds">${code}</div>
      <div><p>${desc}</p><span class="spa-code-tag">${ok ? T.codeOk : T.codeKo}</span></div>
    </div>`;

  const codes = isMenu
    ? codeRow(lcd('R'), T.code.R, true) + codeRow(lcd('IR') + lcd('RR'), T.code.IR, false) + codeRow(lcd('🌡↓'), T.code.thermo, false)
    : codeRow(lcd('St'), T.code.St, true) + codeRow(lcd('Ec'), T.code.Ec, false) + codeRow(lcd('Sl'), T.code.Sl, false);

  return `
    <header class="spa-hero">
      <div class="spa-water"><i></i><i></i><i></i></div>
      <div class="spa-bubbles">${'<span></span>'.repeat(14)}</div>
      <div class="spa-hero-in">
        <span class="spa-eyebrow">${T.eyebrow} · ${cottageName}</span>
        <h2>${T.title}</h2>
        <p>${T.intro}</p>
      </div>
    </header>

    <div class="spa-body">
      <div class="spa-simple"><span class="spa-simple-emoji">😉</span><div><strong>${T.simple}</strong><p>${T.simpleSub}</p></div></div>
      <section class="spa-sec">
        <h3><span class="spa-num">1</span>${T.secButtons}</h3>
        <div class="spa-buttons">
          ${buttons.map(([k, d]) => `<div class="spa-btn-row"><div class="spa-btn-keys">${k}</div><p>${d}</p></div>`).join('')}
        </div>
        ${model === 'noheat' ? `<p class="spa-small">${T.screenNote}</p>` : ''}
      </section>

      <section class="spa-sec">
        <h3><span class="spa-num">2</span>${T.secTemp}</h3>
        <div class="spa-temp">
          <div class="spa-gauge"><span>40°</span><small>${T.maxLabel}</small></div>
          ${steps([T.temp1, T.temp2, isMenu ? T.temp3menu : T.temp3])}
        </div>
        ${!isMenu ? `<div class="spa-alert">${T.important}</div>` : ''}
        <p class="spa-small">♨︎ ${T.slow}</p>
      </section>

      <section class="spa-sec">
        <h3><span class="spa-num">3</span>${T.secCold}</h3>
        <p class="spa-text">${isMenu ? T.coldIntroMenu : T.coldIntro}</p>
        <div class="spa-codes">${codes}</div>
        <h4>${isMenu ? T.fixTitleMenu : T.fixTitle}</h4>
        ${steps(isMenu ? T.fixMenu : T.fix)}
        ${isMenu ? `<p class="spa-text spa-after-steps">${T.arrowMenu}</p>` : ''}
        <div class="spa-finish">${isMenu ? T.finish : (hasHeat ? T.finishHeat : T.finish)}</div>
      </section>

      <a class="spa-help" href="tel:+33761507550">📞 ${T.help}<b>07 61 50 75 50</b></a>
    </div>
  `;
}
