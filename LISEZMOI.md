# Woordkracht

Petit jeu de révision du néerlandais pour un élève de 1re secondaire (FWB) dyslexique, dysorthographique et dysgraphique. L'application fonctionne dans Safari sur iPad, sans compte ni installation, et reste utilisable hors connexion une fois ouverte.

## Ce qu'il y a dans le dossier

| Fichier | Rôle |
|---|---|
| `index.html` | Le moteur du jeu. À ne modifier qu'avec Claude. |
| `contenu.js` | **Le vocabulaire et les blagues.** C'est le fichier que tu modifies. |
| `fonts/` | Les polices (Lexend, OpenDyslexic, Bangers), embarquées pour fonctionner sans internet. |
| `images/` | Dossier à créer pour tes images Magnific (facultatif). |
| `sw.js`, `manifest.json`, `icone-*.png` | Fonctionnement « comme une appli » sur l'iPad. |

## Principe pédagogique

Chaque mot a un niveau de 0 à 6, enregistré sur l'iPad. Le type d'exercice suit ce niveau : on reconnaît d'abord le mot à l'oreille, puis on le lit, puis on le reconstruit, et on finit par l'écrire de mémoire. Une réponse juste fait monter le mot d'un niveau ; une erreur le fait redescendre d'un cran et le remet dans la file quelques questions plus tard. Les mots les moins connus sont choisis en priorité à chaque combat.

| Niveau du mot | Exercices proposés |
|---|---|
| 0 | Écouter et toucher l'image |
| 1 | Écouter ; choisir le mot écrit |
| 2 | Choisir le mot ; reconstruire avec les syllabes ; de/het |
| 3 | Reconstruire ; recopier au clavier ; de/het |
| 4 | Recopier ; écrire de mémoire |
| 5 et plus | Écrire de mémoire (avec aide possible) ; reconstruire ; de/het |

Une épreuve de paires (mots et images) s'insère dans chaque combat.

## Ajouter des mots

Ouvre `contenu.js` avec un éditeur de texte (TextEdit en mode « texte brut », ou mieux, VS Code). Chaque mot tient sur une ligne :

```js
{ nl: "keuken", art: "de", fr: "la cuisine", syl: "keu·ken", img: "🍳", zin: "Ik eet in de keuken.", zinFr: "Je mange dans la cuisine." },
```

- `nl` : le mot sans article. `art` : `"de"` ou `"het"` (seulement pour les noms).
- `syl` : le découpage en syllabes avec le point médian `·` (Option + Maj + 9 sur Mac). Sans `syl`, le mot compte comme une seule syllabe.
- `img` : un emoji, ou `"images/keuken.png"`, ou `"kleur:#D62828"` (pastille de couleur), ou `"txt:12"` (gros chiffre).
- `zin` et `zinFr` : une phrase d'exemple, facultative, lue à voix haute dans le mode Découverte.
- `accepte` : d'autres orthographes acceptées, ex. `accepte: ["een"]`.

Pour un nouveau thème, copie un bloc `{ id: ..., mots: [...] }` en entier et change l'`id` (un mot court, sans espace ni accent). Attention aux virgules entre les blocs et entre les mots : c'est l'erreur la plus fréquente. Si l'appli affiche une page blanche après une modification, c'est presque toujours une virgule ou un guillemet oublié.

## Ajouter des images

1. Crée un dossier `images/` à côté de `index.html`.
2. Télécharge les images (PNG ou WebP, carrées, fond transparent si possible, 400 × 400 px suffisent).
3. Nomme-les simplement (`keuken.png`), puis remplace l'emoji dans `contenu.js` : `img: "images/keuken.png"`.

Choisis des images sans texte dedans : un mot écrit dans l'image donnerait la réponse ou ajouterait de la lecture inutile.

## Mettre à jour la version en ligne

Sur github.com, ouvre le dépôt, puis « Add file › Upload files » et glisse les fichiers modifiés (souvent seulement `contenu.js` et les nouvelles images). Valide avec « Commit changes ». La nouvelle version est en ligne une ou deux minutes plus tard. Sur l'iPad, il suffit de rouvrir l'appli avec une connexion.

## Installer sur l'iPad

1. Ouvre le lien dans **Safari**.
2. Bouton Partager › « Sur l'écran d'accueil ».
3. **Voix flamande** : Réglages › Accessibilité › Contenu énoncé › Voix › Néerlandais › télécharger « Ellen » (voix belge). Sans cette étape, l'iPad utilise une voix des Pays-Bas ou une voix de base.
4. Si la voix reste muette, vérifie le volume, le mode silencieux, puis le réglage « Voix néerlandaise » dans l'appli (roue dentée).

La progression est enregistrée dans l'iPad. Si on efface les données de Safari, elle repart de zéro.
