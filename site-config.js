/* ─────────────────────────────────────────
   Configuration du site — à modifier ici uniquement
   ───────────────────────────────────────── */

// Liens de paiement Stripe des bons cadeaux (page bons-cadeaux.html).
// Remplacez chaque valeur par le lien de paiement Stripe (https://buy.stripe.com/...).
// Tant qu'un lien ne commence pas par « https:// », le bouton affiche « Bientôt disponible ».
window.GIFT_LINKS = {
  nuit: 'LIEN_STRIPE_150',     // « Une nuit sous les pins » – 150 €
  weekend: 'LIEN_STRIPE_300',  // « Un week-end à deux » – 300 €
  libre: 'LIEN_STRIPE_LIBRE',  // « Montant libre » – à partir de 50 €
};

// Bandeau saisonnier en haut de toutes les pages.
// Il s'affiche automatiquement entre `start` et `end` (format « MM-JJ », date du navigateur du visiteur),
// et peut être fermé (il reste fermé pendant la session).
// Pour la Saint-Valentin ou la fête des mères : changez `id`, `text`, `link` et les dates.
// Astuce test : ajoutez « ?bandeau=1 » à l'adresse d'une page pour l'afficher hors période.
window.SEASONAL_BANNER = {
  enabled: false,                                    // true = bandeau affiché (désactivé pour l'instant)
  id: 'noel',                                         // changer l'id pour qu'une nouvelle campagne réapparaisse
  start: '11-15',                                     // du 15 novembre…
  end: '12-31',                                       // …au 31 décembre (inclus)
  text: '🎄 Offrez un séjour sous les pins pour Noël',
  linkText: 'Bons cadeaux',
  link: 'bons-cadeaux.html',
};
