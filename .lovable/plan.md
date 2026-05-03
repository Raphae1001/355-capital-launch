## Diagnostic

J'ai vérifié techniquement et **le logo Lovable n'existe nulle part dans ton projet** :

- Badge "Edit with Lovable" : déjà caché ✅
- Tous les fichiers dans `public/` sont les versions "355" (vérifié par hash MD5)
- `index.html` ne référence que les bonnes icônes
- `site.webmanifest` affiche "355 Capital" comme nom PWA
- Le serveur Vercel sert bien `favicon.ico` en HTTP 200 sur `www.355cap.com`
- DNS pointe correctement vers Vercel (216.198.79.1)

**Le "logo Lovable" que tu vois encore vient à 100% des caches externes (Safari iOS + Google), pas de ton site.**

## Pourquoi Safari est têtu

Safari iOS maintient 3 caches d'icônes séparés qui ne se vident PAS avec "Effacer historique et données de site" :
1. Cache `Favicons.db` au niveau système (suggestions barre d'URL)
2. Snapshots d'aperçus d'onglets (pris à la première visite)
3. Index des résultats Google (stocké côté Google, pas chez toi)

## Plan en 2 parties

### Partie A — Côté code (optionnel, petit ajustement de robustesse)

Une seule petite modification utile pour forcer Safari à invalider son cache d'icônes plus rapidement :

1. **Ajouter un en-tête `Cache-Control` plus agressif sur les icônes** via un fichier `vercel.json` à la racine, qui force `max-age=0, must-revalidate` sur tous les fichiers `*.png`, `*.ico`, `*.svg`, `*.webmanifest`. Cela aide Safari à recharger les icônes au lieu de garder ses copies indéfiniment.

2. **Bumper la version de cache-bust** de `?v=4` à `?v=5` dans `index.html` et `site.webmanifest`. Force tous les navigateurs à re-télécharger.

### Partie B — Côté toi (étapes manuelles obligatoires, le code n'y peut rien)

#### Pour Safari iOS (icône dans suggestions / onglets)

1. **Réglages iPhone → Général → Stockage iPhone → Safari → Données de sites web → Tout supprimer**
   (différent de "Effacer historique" — vide aussi `Favicons.db`)
2. **Forcer l'arrêt de Safari** : double-tap home / swipe-up et balaye Safari vers le haut
3. **Redémarrer l'iPhone** (oui, vraiment — c'est ce qui purge les snapshots d'onglets)
4. Rouvrir Safari → taper directement `www.355cap.com` (ne PAS cliquer sur une suggestion)
5. Attendre 3-4 secondes que la page charge complètement avant de fermer

#### Pour Google (icône dans résultats de recherche)

Google met **plusieurs jours à plusieurs semaines** à mettre à jour le favicon dans les résultats. Pour accélérer :

1. Aller sur **Google Search Console** : https://search.google.com/search-console
2. Ajouter ta propriété `355cap.com` (vérification par enregistrement TXT DNS)
3. Inspecter l'URL `https://www.355cap.com/` → **Demander une indexation**
4. Google revalidera le favicon sous 24-72h

#### Vérification que ça marche

Demande à un ami qui n'a JAMAIS visité ton site d'aller sur `355cap.com` depuis son iPhone. Lui verra immédiatement le bon logo "355" — preuve que le problème est ton cache local, pas ton site.

## Ce qui sera modifié

- **Créé** : `vercel.json` (config cache headers)
- **Modifié** : `index.html` (bump v=4 → v=5)
- **Modifié** : `public/site.webmanifest` (bump v=3 → v=5)

Aucune autre modification de code n'est nécessaire — ton site est déjà propre.
