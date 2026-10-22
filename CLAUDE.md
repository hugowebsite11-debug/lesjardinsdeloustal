# Les Jardins de l'Oustal — contexte projet

Site vitrine + livrets d'accueil numériques pour des cottages de location à Narbonne.

## Infos générales
- Domaine live : **https://www.lesjardinsdeloustal.com** (le `.fr` ne fonctionne pas, ne pas l'utiliser)
- Dépôt Git : `https://github.com/hugowebsite11-debug/lesjardinsdeloustal.git` — un `git push` sur `main` déploie automatiquement le site en ligne
- Stack : HTML/CSS/JS vanilla, pas de framework, pas de build. `server.js` sert le dossier en local (`node server.js`, port 3000)
- Téléphone : 07 61 50 75 50 — Email : lesjardinsdeloustal@gmail.com
- Adresse : 21 Impasse Hélène Boucher, 11100 Narbonne
- 5 cottages : La Falaise, Le Chalet Zen, Sous les Pins 1, Sous les Pins 2, La Bois Flottée (chacun a sa page `*.html` sur le site principal)

## Livret d'accueil numérique (`livret.html` + `livret.css` + `livret.js`)
Page **cachée** (non liée dans le menu, `noindex`), accessible uniquement via QR code / URL directe, format mobile uniquement même sur grand écran. PWA installable, fonctionne hors-ligne (`sw-livret.js`).

- Un seul template pour les 5 cottages, piloté par `?cottage=falaise|chalet-zen|sous-les-pins-1|sous-les-pins-2|bois-flottee`
- 5 onglets en bas : Mon séjour / Bonnes adresses / À découvrir / Services / Aide
- Liens (à mettre sur les QR codes, déjà générés dans `images/qr/`) :
  `https://www.lesjardinsdeloustal.com/livret.html?cottage=<slug>`
- Wifi : mot de passe `Ljdo-11100` (identique partout) ; réseau `Xiaomi_B3B2` pour La Bois Flottée, `Xiaomi_B2BC` pour les 4 autres (champ `wifi` dans `COTTAGES`)
- Départ tardif (jusqu'à 13h, 20€, demande WhatsApp) : **masqué pour l'instant** (`LATE_CHECKOUT_ACTIVE = false` dans `livret.js`). Réactivable : bouton actif seulement de 9h00 à 18h54 (heure de Paris), option validée uniquement après réponse des propriétaires
- Jacuzzi : bouton « Voir le mode d'emploi » qui ouvre une page plein écran générée par `livret-spa.js` (4 langues), selon le modèle de spa du cottage (champ `spa` dans `COTTAGES`) : `menu` = La Bois Flottée et Sous les Pins 2 (Aux, Menu, codes R/IR/RR, pas de voyant HEAT), `heat` = La Falaise (codes St/Ec/Sl, voyant HEAT), `noheat` = Sous les Pins 1 et Chalet Zen (codes St/Ec/Sl, sans voyant HEAT)
- Avis séjour ("un souci") : envoyé par email (formsubmit.co) + WhatsApp
- Programme fidélité **"Les amis de l'Oustal"** : notification + carte d'accueil + formulaire d'inscription, envoie en `POST`/`no-cors` vers un Google Apps Script déjà déployé par le client (URL et contrat de champs dans le code — `livret.js`, section "Les amis de l'Oustal"). Le Google Sheet et l'automatisation d'email (envoyé à 15h le jour du départ) sont gérés côté client, pas dans ce dépôt.
- Photos "À découvrir" (`images/decouvrir/<slug>/`) : sourcées légalement (Wikimedia Commons / Pexels), crédits dans `images/decouvrir/credits.json` — toujours vérifier la licence avant d'ajouter une nouvelle photo (pas d'images Google Images non libres de droits)

## Convention de travail
- Toujours tester en local (`node server.js`) avant de pousser en prod
- `git add` seulement les fichiers concernés (jamais `git add -A` sans vérifier `git status`)
- Ne jamais committer/pousser sans que ce soit explicitement demandé
