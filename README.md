# Ibadat Khana - Association Musulmane Sunnite de Plateau Caillou

Site web de l'Association Musulmane Sunnite de Plateau Caillou (AMSPC) à Saint-Paul, La Réunion.

## Technologies utilisées

- **Next.js 16** - Framework React avec App Router
- **TypeScript** - Typage statique
- **TailwindCSS** - Framework CSS utilitaire
- **shadcn/ui** - Composants UI réutilisables
- **Lucide React** - Icônes

## Structure du projet

```
ibadatkhanapc/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal avec Header et Footer
│   │   ├── page.tsx             # Page d'accueil
│   │   ├── madrassah/
│   │   │   └── page.tsx         # Page de la Madrassah
│   │   └── globals.css          # Styles globaux
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # En-tête du site
│   │   │   └── Footer.tsx       # Pied de page
│   │   └── ui/
│   │       └── button.tsx       # Composant Button
│   └── lib/
│       └── utils.ts             # Utilitaires (cn)
├── public/
│   └── images/                  # Images du site
├── tailwind.config.ts           # Configuration TailwindCSS
├── tsconfig.json                # Configuration TypeScript
└── package.json                 # Dépendances du projet
```

## Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## Pages

### Page d'accueil (/)
- Section héro avec titre et bouton de don
- Informations générales sur l'association
- Présentation de l'AMSPC
- Appel au don
- Widget Facebook (à intégrer avec EmbedSocial)

### Page La Madrassah (/madrassah)
- Présentation de l'enseignement
- Informations sur l'imam
- Horaires des cours
- Formulaire d'inscription
- Lien vers le parrainage HelloAsso

## Personnalisation

### Couleurs
Les couleurs du thème sont définies dans `tailwind.config.ts` :
- **gold** (#d6a70e) - Couleur principale
- **darkGray** (#161616) - Texte principal
- **lightGray** (#f6f6f6) - Arrière-plans secondaires

### Logo
Pour ajouter votre logo, placez l'image dans `public/images/` et modifiez le composant `Header.tsx`.

### Widget Facebook EmbedSocial
Pour intégrer le widget Facebook, ajoutez le code fourni par EmbedSocial dans `src/app/page.tsx` à l'emplacement indiqué.

### Google Maps
L'iframe Google Maps dans le Footer peut nécessiter une mise à jour de l'URL pour correspondre exactement à l'adresse : 14 rue Paul Ferrand, 97460 Saint Paul.

### Numéros de téléphone
Mettez à jour les numéros de téléphone du président et de l'imam dans `src/components/layout/Footer.tsx`.

## Déploiement

Le site peut être déployé sur :
- **Vercel** (recommandé pour Next.js)
- **Netlify**
- **AWS Amplify**
- Tout hébergeur supportant Node.js

Pour déployer sur Vercel :
```bash
npm install -g vercel
vercel
```

## Licence

© 2026 Association Musulmane Sunnite de Plateau Caillou. Tous droits réservés.
