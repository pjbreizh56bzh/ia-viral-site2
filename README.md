# ⚡ ViraIA — Site de contenu IA viral

Un site de contenu viral généré par IA, 100% statique (HTML/CSS/JS pur), déployable gratuitement sur GitHub Pages.

## Fonctionnalités

- **9 articles complets** sur l'IA, la finance, la productivité, la tech et le marketing
- **Mode sombre / clair** avec bascule
- **Filtres par catégorie** (IA, Finance, Productivité, Tech, Marketing)
- **Recherche en temps réel** dans les titres, descriptions et tags
- **Modal de lecture** pour chaque article avec contenu complet
- **Partage social** : Twitter/X, LinkedIn, WhatsApp, copie de lien
- **Newsletter** (formulaire fonctionnel côté UX)
- **Responsive** : mobile, tablette, desktop
- **SEO-ready** : meta tags Open Graph inclus

## Structure

```
ia-viral-site2/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles complets (dark/light mode)
├── js/
│   └── app.js          # Logique + données des 9 articles
└── README.md
```

## Déploiement sur GitHub Pages

1. Va dans **Settings** → **Pages** de ce repo
2. Dans **Source**, sélectionne `Deploy from a branch`
3. Choisis la branche `main` et le dossier `/ (root)`
4. Clique **Save**
5. Ton site sera disponible sur `https://pjbreizh56bzh.github.io/ia-viral-site2/`

## Déploiement alternatif (Netlify)

1. Va sur [netlify.com](https://netlify.com)
2. Clique **Add new site → Import an existing project**
3. Connecte ton GitHub et sélectionne ce repo
4. Build command : *(laisser vide)*
5. Publish directory : `.`
6. Clique **Deploy**

## Tech stack

- **HTML5** — Structure sémantique
- **CSS3** — Variables CSS, Grid, Flexbox, animations
- **JavaScript ES6+** — Rendu dynamique, filtres, modal, partage
- **Google Fonts** — Inter
- **Unsplash** — Images libres de droits

## Ajouter un article

Dans `js/app.js`, ajouter un objet dans le tableau `articles` :

```js
{
  id: 10,
  slug: "mon-nouvel-article",
  title: "Titre de l'article",
  excerpt: "Description courte...",
  content: `<p>Contenu HTML complet...</p>`,
  category: "ia", // ia | finance | productivite | tech | marketing
  categoryLabel: "Intelligence Artificielle",
  readTime: 5,
  date: "26 Fév 2026",
  views: "0",
  shares: "0",
  image: "https://images.unsplash.com/photo-XXXX?w=800&q=80",
  featured: false,
  tags: ["tag1", "tag2"]
}
```

---

Fait avec ❤️ et l'IA 🤖
