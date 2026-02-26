// ===================================================
// ViraIA — Application principale
// ===================================================

let articles = [
  {
    id: 1,
    slug: "chatgpt-remplace-metiers-2025",
    title: "ChatGPT remplace 10 métiers en 2026 — es-tu concerné ?",
    excerpt: "Des études récentes montrent que l'IA automatise des tâches dans 30% des emplois actuels. Voici lesquels sont les plus menacés et comment te repositionner.",
    content: `
      <p>L'intelligence artificielle n'est plus une technologie du futur. Elle transforme le marché du travail <strong>maintenant, en 2026</strong>. Une étude du cabinet McKinsey révèle que 30% des tâches professionnelles actuelles pourraient être automatisées d'ici 2030.</p>
      <h3>Les 10 métiers les plus impactés</h3>
      <ol>
        <li><strong>Traducteur / Interprète</strong> — DeepL et ChatGPT atteignent 95% de précision sur la plupart des langues courantes.</li>
        <li><strong>Rédacteur de contenu généraliste</strong> — Les articles SEO standards sont désormais générés en quelques secondes.</li>
        <li><strong>Analyste de données junior</strong> — ChatGPT analyse, interprète et visualise des datasets complexes sans expertise technique.</li>
        <li><strong>Développeur junior</strong> — GitHub Copilot génère 40% du code dans les grandes entreprises tech.</li>
        <li><strong>Comptable / Assistant comptable</strong> — L'automatisation des tâches répétitives est quasi-totale.</li>
        <li><strong>Service client niveau 1</strong> — Les chatbots IA résolvent 80% des tickets sans intervention humaine.</li>
        <li><strong>Graphiste logo/icônes</strong> — Midjourney et DALL-E 3 créent des visuels professionnels en 30 secondes.</li>
        <li><strong>Avocat junior (recherche juridique)</strong> — Harvey AI lit et analyse des milliers de documents en minutes.</li>
        <li><strong>Recruteur (tri de CV)</strong> — Les ATS intelligents filtrent et classent les candidats automatiquement.</li>
        <li><strong>Journaliste data</strong> — Des milliers d'articles financiers sont générés par IA chaque jour.</li>
      </ol>
      <h3>Ce que ça veut dire pour toi</h3>
      <p>Pas de panique. L'histoire l'a toujours montré : la technologie détruit des emplois mais en crée de nouveaux. La révolution industrielle a supprimé les tisserands manuels, mais a créé les ingénieurs, les opérateurs de machines, les gestionnaires d'usines.</p>
      <p>Aujourd'hui, l'IA crée de nouvelles opportunités :</p>
      <ul>
        <li><strong>Prompt Engineer</strong> — Salaire moyen : 80-120k€/an</li>
        <li><strong>AI Content Strategist</strong> — Salaire moyen : 60-90k€/an</li>
        <li><strong>Agent IA Specialist</strong> — Le métier le plus demandé de 2026</li>
        <li><strong>Formateur IA en entreprise</strong> — Les entreprises paient cher pour former leurs équipes</li>
      </ul>
      <h3>La question que tu dois te poser</h3>
      <p>Ce n'est pas "mon métier va-t-il disparaître ?" mais plutôt <strong>"comment puis-je utiliser l'IA pour faire mon travail 10x mieux ?"</strong></p>
      <blockquote>"L'IA ne remplacera pas les humains. Mais les humains qui utilisent l'IA remplaceront ceux qui ne l'utilisent pas." — Jensen Huang, CEO NVIDIA</blockquote>
    `,
    category: "ia", categoryLabel: "Intelligence Artificielle",
    readTime: 6, date: "24 Fév 2026", views: "52.4k", shares: "18.2k",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    featured: true, tags: ["emploi", "avenir", "chatgpt"]
  },
  {
    id: 2, slug: "5000-euros-ia-methode",
    title: "5 000€ en un mois avec l'IA : la méthode exacte",
    excerpt: "Thomas, développeur reconverti, révèle comment il génère 5 000€/mois en vendant des services IA. Voici son processus étape par étape.",
    content: `
      <p>Thomas avait 32 ans, un CDI dans une boîte de logistique, et un salaire de 2 400€ net. En janvier 2025, il a découvert une façon de monétiser l'IA. En avril, il gagnait 5 000€. En décembre, il avait quitté son CDI.</p>
      <h3>Étape 1 : Trouver un problème récurrent</h3>
      <p>Thomas s'est concentré sur un problème qu'il connaissait bien : <strong>les PME qui ont besoin de contenu mais n'ont pas le budget pour une agence</strong>.</p>
      <p>Son offre à 490€ livrait : 1 audit SEO, 10 articles optimisés, 30 posts réseaux sociaux, 1 newsletter mensuelle.</p>
      <h3>Étape 2 : Automatiser avec les bons outils</h3>
      <ul>
        <li><strong>Claude Pro</strong> (20$/mois) — Rédaction principale</li>
        <li><strong>ChatGPT Plus</strong> (20$/mois) — Validation</li>
        <li><strong>SEMrush</strong> (100€/mois) — Mots-clés</li>
        <li><strong>Canva Pro</strong> (13€/mois) — Visuels</li>
      </ul>
      <h3>Étape 3 : Le processus de production</h3>
      <p>2h pour l'audit SEO · 30 min par article · 15 min pour les posts.<br><strong>Total : 9h de travail par client pour 490€ = 54€/heure</strong></p>
      <h3>Étape 4 : Trouver ses premiers clients</h3>
      <p>LinkedIn (résultats avant/après) + Malt + réseau perso. En un mois : 10 clients = <strong>5 200€</strong>.</p>
      <blockquote>"L'IA ne m'a pas remplacé. Elle m'a rendu 10x plus productif." — Thomas</blockquote>
    `,
    category: "finance", categoryLabel: "Finance & Revenus",
    readTime: 7, date: "22 Fév 2026", views: "38.7k", shares: "14.3k",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    featured: false, tags: ["revenus", "freelance", "argent"]
  },
  {
    id: 3, slug: "7-outils-ia-15h-semaine",
    title: "7 outils IA qui vont te faire gagner 15h par semaine",
    excerpt: "Ces outils IA transforment 15h de tâches répétitives en 30 minutes de travail. Aucun ne coûte plus de 20€/mois.",
    content: `
      <p>Voici les 7 outils IA qui ont transformé la semaine de travail de milliers de professionnels.</p>
      <h3>1. Otter.ai — Transcription automatique (3h économisées)</h3>
      <p>Transcrit, résume et extrait les action items de toutes tes réunions. <strong>Prix :</strong> Gratuit jusqu'à 300 min/mois</p>
      <h3>2. Notion AI — Documentation (2h économisées)</h3>
      <p>Génère des documents, résume des réunions. <strong>Prix :</strong> 10€/mois</p>
      <h3>3. Perplexity Pro — Recherche web (2h économisées)</h3>
      <p>Remplace 2h de recherches Google par 10 minutes. <strong>Prix :</strong> 20$/mois</p>
      <h3>4. Make — Automatisation (3h économisées)</h3>
      <p>Connecte tous tes outils sans coder. <strong>Prix :</strong> Gratuit jusqu'à 1 000 opérations/mois</p>
      <h3>5. LanguageTool — Correction (1h économisée)</h3>
      <p>Corrige et améliore tous tes textes en temps réel. <strong>Prix :</strong> Gratuit</p>
      <h3>6. Superhuman — Email IA (2h économisées)</h3>
      <p>L'IA priorise tes emails, génère des réponses. <strong>Prix :</strong> 30$/mois</p>
      <h3>7. Midjourney — Visuels (2h économisées)</h3>
      <p>Crée des visuels professionnels en secondes. <strong>Prix :</strong> 10$/mois</p>
      <h3>Le calcul</h3>
      <p>Budget : ~85€/mois · Temps économisé : 15h/semaine · ROI : <strong>2 000%+</strong></p>
    `,
    category: "productivite", categoryLabel: "Productivité",
    readTime: 5, date: "20 Fév 2026", views: "29.1k", shares: "11.6k",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    featured: false, tags: ["outils", "ia", "travail"]
  },
  {
    id: 4, slug: "claude-vs-chatgpt-vs-gemini-2026",
    title: "Claude vs ChatGPT vs Gemini : le comparatif honnête de 2026",
    excerpt: "On a testé les 3 grands modèles IA pendant 30 jours sur des cas d'usage réels. Les résultats sont surprenants.",
    content: `
      <p>Après 30 jours de tests intensifs sur 15 cas d'usage différents, voici notre comparatif honnête des 3 grandes IA de 2026.</p>
      <h3>🏆 Claude — Meilleur pour la rédaction et l'analyse</h3>
      <ul><li>Rédaction la plus naturelle et nuancée</li><li>Excellente compréhension des instructions complexes</li><li>Très bon en code</li><li>Moins d'hallucinations</li><li>200k tokens de contexte</li></ul>
      <p><strong>Prix :</strong> 20$/mois (Claude Pro)</p>
      <h3>🥈 ChatGPT Plus — Le plus polyvalent</h3>
      <ul><li>Génération d'images (DALL-E 3)</li><li>Navigation web en temps réel</li><li>Marketplace de GPTs</li><li>Mode vocal avancé</li></ul>
      <p><strong>Prix :</strong> 20$/mois</p>
      <h3>🥉 Gemini Advanced — Meilleure intégration Google</h3>
      <ul><li>Intégration Google Workspace</li><li>Accès temps réel à Google Search</li><li>Gemini dans Gmail, Docs, Sheets</li></ul>
      <p><strong>Prix :</strong> 22€/mois</p>
      <h3>Notre verdict</h3>
      <p><strong>Combinaison optimale :</strong> Claude Pro + ChatGPT Plus. On couvre 95% des cas d'usage professionnels.</p>
    `,
    category: "ia", categoryLabel: "Intelligence Artificielle",
    readTime: 8, date: "18 Fév 2026", views: "61.3k", shares: "22.7k",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    featured: false, tags: ["claude", "chatgpt", "gemini"]
  },
  {
    id: 5, slug: "revenu-passif-ia-verite",
    title: "Revenu passif avec l'IA : ce que personne ne te dit vraiment",
    excerpt: "Les gurus en vendent du rêve. Voici la réalité du revenu passif IA : ce qui marche, ce qui ne marche pas.",
    content: `
      <p>Tout le monde vend du "revenu passif avec l'IA". La réalité est plus nuancée.</p>
      <h3>Ce qui marche vraiment</h3>
      <h4>✅ Sites de contenu/niche (6-18 mois)</h4>
      <p>Sites thématiques avec contenu IA optimisé SEO. <strong>Réaliste :</strong> 300-2 000€/mois après 12-18 mois</p>
      <h4>✅ Produits numériques automatisés</h4>
      <p>Ebooks, templates, cours créés avec l'IA. <strong>Réaliste :</strong> 200-1 500€/mois</p>
      <h4>✅ Micro-SaaS IA en no-code</h4>
      <p>Outil IA avec Bubble + API Claude. <strong>Réaliste :</strong> 500-5 000€/mois avec 50-200 utilisateurs</p>
      <h3>Ce qui ne marche pas</h3>
      <h4>❌ YouTube 100% IA sans valeur ajoutée</h4>
      <p>YouTube pénalise les contenus auto-générés. CPM en chute de 60%.</p>
      <h4>❌ E-books génériques</h4>
      <p>Marché saturé. Se vend moins de 5€ maintenant.</p>
      <h3>La vraie formule</h3>
      <p><strong>Revenus passifs IA = Niche spécifique + Contenu de qualité + Distribution + Patience</strong></p>
    `,
    category: "finance", categoryLabel: "Finance & Revenus",
    readTime: 9, date: "15 Fév 2026", views: "44.8k", shares: "16.1k",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    featured: false, tags: ["revenu passif", "finance"]
  },
  {
    id: 6, slug: "apple-intelligence-fonctions-cachees",
    title: "Apple Intelligence : les 8 fonctions cachées que personne n'utilise",
    excerpt: "Apple Intelligence est déjà sur ton iPhone. Mais 90% des utilisateurs ignorent ses fonctions les plus puissantes.",
    content: `
      <p>Voici les 8 fonctions Apple Intelligence que personne n'utilise mais qui changent tout.</p>
      <h3>1. Priority Notifications</h3><p>L'IA analyse tes habitudes et trie les notifications importantes. <em>Réglages → Notifications</em></p>
      <h3>2. Isolation de la voix en appel</h3><p>Supprime le bruit de fond en temps réel. <em>Réglages → FaceTime</em></p>
      <h3>3. Smart Reply dans Mail</h3><p>Propose 3 réponses complètes et contextuelles.</p>
      <h3>4. Résumé d'article Safari</h3><p>Résume tout article en 3-5 points clés en un clic.</p>
      <h3>5. Siri peut agir dans les apps</h3><p>"Envoie à Marie la dernière photo que j'ai prise ce matin" — ça marche vraiment.</p>
      <h3>6. Transcription automatique des mémos</h3><p>Tous tes enregistrements sont transcrits et résumés automatiquement.</p>
      <h3>7. Assistant de rédaction universel</h3><p>Sélectionne n'importe quel texte → Apple Intelligence → améliore, raccourcis, reformule.</p>
      <h3>8. Image Playground</h3><p>Génère des images depuis Messages, Notes ou Keynote. Pas besoin d'app tierce.</p>
      <p><strong>Compatibilité :</strong> iPhone 15 Pro / iPhone 16, iOS 18.1+</p>
    `,
    category: "tech", categoryLabel: "Tech & Innovation",
    readTime: 6, date: "12 Fév 2026", views: "33.5k", shares: "9.8k",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80",
    featured: false, tags: ["apple", "iphone", "ia"]
  },
  {
    id: 7, slug: "0-followers-10k-strategie-ia",
    title: "0 followers → 10 000€/mois : la stratégie IA de ce créateur",
    excerpt: "Kevin a commencé sans audience. 14 mois plus tard, il gagne 10k€/mois grâce à l'IA et au contenu automatisé.",
    content: `
      <p>Kevin avait 0 followers. Aujourd'hui : 10 000€/mois. Voici exactement comment.</p>
      <h3>La stratégie en 4 phases</h3>
      <h4>Phase 1 : Niche précise</h4>
      <p>Niche choisie avec Perplexity + ChatGPT : <strong>finance pour les 30-40 ans en reconversion professionnelle</strong>.</p>
      <h4>Phase 2 : Pipeline de contenu IA</h4>
      <ol><li>Perplexity → sujets trending</li><li>Claude → rédaction articles</li><li>Canva AI → visuels</li><li>Buffer → publication automatique</li></ol>
      <p><strong>Résultat :</strong> 1 article + 7 posts/semaine en 2h de travail</p>
      <h4>Phase 3 : Monétisation</h4>
      <ul><li>Coaching 300€/session → 1 200€/mois</li><li>Programme en ligne 497€ × 15 = 7 455€/mois</li><li>Affiliation : 800€/mois</li></ul>
      <h4>Phase 4 : Croissance organique</h4>
      <p>12 000 abonnés newsletter · 28 000 followers LinkedIn après 14 mois.</p>
      <blockquote>"Crée 90 jours de contenu avant de penser à monétiser." — Kevin</blockquote>
    `,
    category: "marketing", categoryLabel: "Marketing",
    readTime: 8, date: "10 Fév 2026", views: "56.2k", shares: "20.4k",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80",
    featured: false, tags: ["créateur", "audience", "stratégie"]
  },
  {
    id: 8, slug: "methode-4-heures-deep-work",
    title: "La méthode des 4 heures : travailler moins, gagner beaucoup plus",
    excerpt: "La méthode que les entrepreneurs IA utilisent pour concentrer leur productivité sur 4 heures de travail profond par jour.",
    content: `
      <p>Le cerveau humain ne peut maintenir un travail profond que 3 à 4 heures par jour. Voici comment les utiliser au maximum.</p>
      <h3>La méthode en 5 étapes</h3>
      <h4>1. Identifier tes 20% de tâches à 80% de résultats</h4>
      <p>Trace tout pendant 1 semaine. 2-4 types de tâches génèrent l'essentiel de tes résultats.</p>
      <h4>2. Automatiser avec l'IA</h4>
      <ul><li>Emails → Claude rédige, tu valides</li><li>Rapports → Make automatise</li><li>Recherches → Perplexity résume</li><li>Notes → Otter transcrit</li></ul>
      <h4>3. Protéger 4 blocs de deep work</h4>
      <p>4 plages de 3h/semaine. Zero notification, zero email, zero réunion pendant ces blocs.</p>
      <h4>4. Batching</h4>
      <p>Emails uniquement à 9h et 17h · Réunions le mardi et jeudi · Contenu le lundi matin.</p>
      <h4>5. La règle des 2 minutes</h4>
      <p>Moins de 2 min → fais-le maintenant. Sinon → automatise, planifie ou délègue.</p>
    `,
    category: "productivite", categoryLabel: "Productivité",
    readTime: 7, date: "8 Fév 2026", views: "27.3k", shares: "10.2k",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
    featured: false, tags: ["deep work", "méthode", "efficacité"]
  },
  {
    id: 9, slug: "sora-2-videos-realistes",
    title: "Sora 2 : l'IA génère des vidéos indiscernables du réel",
    excerpt: "Les vidéos de Sora 2 sont si réalistes qu'il est impossible de les distinguer du vrai. Ce que ça change pour les créateurs.",
    content: `
      <p>Sora 2 franchit un cap : les vidéos générées sont <strong>indiscernables de vidéos filmées pour l'œil humain</strong>.</p>
      <h3>Capacités</h3>
      <ul><li>Vidéos jusqu'à 2 minutes en 4K</li><li>Cohérence physique parfaite</li><li>Extension de vidéos existantes</li><li>Inpainting vidéo</li><li>Synchronisation labiale automatique</li></ul>
      <h3>Impact sur les créateurs</h3>
      <h4>YouTubers</h4><p>B-roll, animations, reconstitutions historiques sans équipe. <strong>Économie : 5 000-50 000€ par production</strong></p>
      <h4>Agences pub</h4><p>Spots publicitaires en quelques heures. Réduction des coûts de 60-80%.</p>
      <h4>Freelances</h4><p>Qualité studio en solo. Nouveau métier : "AI Video Producer".</p>
      <h3>Limites</h3>
      <ul><li>Mains parfois problématiques</li><li>Textes souvent incorrects</li><li>Accès limité · Prix : 200$/mois Pro</li></ul>
      <blockquote>"Nous entrons dans une ère où voir ne signifie plus nécessairement croire." — Sam Altman</blockquote>
    `,
    category: "ia", categoryLabel: "Intelligence Artificielle",
    readTime: 6, date: "5 Fév 2026", views: "71.9k", shares: "28.3k",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    featured: false, tags: ["sora", "vidéo", "openai"]
  }
];

// ===================================================
// State
// ===================================================
let currentFilter = "all";
let currentSearch = "";
let isDark = true;

// ===================================================
// Utilities
// ===================================================
function getFiltered() {
  return articles.filter(a => {
    const okCat = currentFilter === "all" || a.category === currentFilter;
    const q = currentSearch.toLowerCase();
    const okSearch = !q ||
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q));
    return okCat && okSearch;
  });
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3000);
}

function getUrl(id) {
  const a = articles.find(x => x.id === id);
  return window.location.origin + window.location.pathname + "?article=" + a.slug;
}

// ===================================================
// Share
// ===================================================
function shareToTwitter(id) {
  const a = articles.find(x => x.id === id);
  window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(a.title + " 🔥") + "&url=" + encodeURIComponent(getUrl(id)), "_blank");
}
function shareToLinkedIn(id) {
  window.open("https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(getUrl(id)), "_blank");
}
function shareToWhatsApp(id) {
  const a = articles.find(x => x.id === id);
  window.open("https://wa.me/?text=" + encodeURIComponent(a.title + " → " + getUrl(id)), "_blank");
}
function copyLink(id) {
  navigator.clipboard.writeText(getUrl(id)).then(() => showToast("🔗 Lien copié !"));
}

// ===================================================
// Modal
// ===================================================
function openArticle(id) {
  const a = articles.find(x => x.id === id);
  if (!a) return;

  const shareBtns = `
    <button onclick="shareToTwitter(${id})" class="share-btn share-twitter">𝕏 Twitter</button>
    <button onclick="shareToLinkedIn(${id})" class="share-btn share-linkedin">LinkedIn</button>
    <button onclick="shareToWhatsApp(${id})" class="share-btn share-whatsapp">WhatsApp</button>
    <button onclick="copyLink(${id})" class="share-btn share-copy">🔗 Copier</button>
  `;

  document.getElementById("modalContent").innerHTML = `
    <div class="modal-hero" style="background-image:url('${a.image}')">
      <div class="modal-hero-overlay"></div>
      <div class="modal-hero-content">
        <span class="badge badge-${a.category}">${a.categoryLabel}</span>
        <h1>${a.title}</h1>
        <div class="modal-meta">
          <span>📅 ${a.date}</span>
          <span>⏱ ${a.readTime} min de lecture</span>
          <span>👁 ${a.views} vues</span>
          <span>🔁 ${a.shares} partages</span>
        </div>
      </div>
    </div>
    <div class="modal-body">
      <div class="modal-share-bar"><span>Partager :</span>${shareBtns}</div>
      <div class="article-content">${a.content}</div>
      <div class="article-tags">${a.tags.map(t => `<span class="tag-large">#${t}</span>`).join("")}</div>
      <div class="modal-share-bar bottom"><span>Tu as aimé ? Partage !</span>${shareBtns}</div>
    </div>
  `;

  document.getElementById("modalOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modalOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

// ===================================================
// Render
// ===================================================
function renderHero() {
  const a = articles.find(x => x.featured) || articles[0];
  document.getElementById("heroSection").innerHTML = `
    <div class="hero-bg" style="background-image:url('${a.image}')"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <span class="badge badge-${a.category}">${a.categoryLabel}</span>
      <h1 class="hero-title">${a.title}</h1>
      <p class="hero-excerpt">${a.excerpt}</p>
      <div class="hero-meta">
        <span>📅 ${a.date}</span>
        <span>⏱ ${a.readTime} min de lecture</span>
        <span>👁 ${a.views} vues</span>
      </div>
      <div class="hero-actions">
        <button class="btn-primary" onclick="openArticle(${a.id})">Lire l'article →</button>
        <button class="btn-ghost" onclick="shareToTwitter(${a.id})">Partager</button>
      </div>
    </div>
  `;
}

function renderArticles() {
  const grid = document.getElementById("articlesGrid");
  const list = getFiltered().filter(a => !a.featured);

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <p>🔍 Aucun article trouvé pour "${currentSearch}"</p>
        <button class="btn-secondary" onclick="clearSearch()">Voir tous les articles</button>
      </div>`;
    return;
  }

  grid.innerHTML = list.map(a => `
    <article class="card" onclick="openArticle(${a.id})">
      <div class="card-image">
        <img src="${a.image}" alt="${a.title}" loading="lazy">
        <span class="card-badge badge badge-${a.category}">${a.categoryLabel}</span>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>📅 ${a.date}</span>
          <span>⏱ ${a.readTime} min</span>
        </div>
        <h2 class="card-title">${a.title}</h2>
        <p class="card-excerpt">${a.excerpt}</p>
        <div class="card-footer">
          <div class="card-stats"><span>👁 ${a.views}</span><span>🔁 ${a.shares}</span></div>
          <div class="card-tags">${a.tags.slice(0,2).map(t => `<span class="tag">#${t}</span>`).join("")}</div>
        </div>
      </div>
    </article>
  `).join("");
}

// ===================================================
// Filter & Search
// ===================================================
function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll(".tab, .nav-link").forEach(el => {
    el.classList.toggle("active", el.dataset.filter === filter);
  });
  renderArticles();
}

function clearSearch() {
  currentSearch = "";
  document.getElementById("searchInput").value = "";
  renderArticles();
}

// ===================================================
// Init — charge d'abord les articles générés par IA
// ===================================================
function initApp() {
  renderHero();
  renderArticles();

  document.getElementById("categoryTabs").addEventListener("click", e => {
    const el = e.target.closest("[data-filter]");
    if (el) setFilter(el.dataset.filter);
  });

  document.querySelectorAll(".nav-link[data-filter]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      setFilter(link.dataset.filter);
      document.querySelector(".container").scrollIntoView({ behavior: "smooth" });
    });
  });

  document.getElementById("searchInput").addEventListener("input", e => {
    currentSearch = e.target.value;
    renderArticles();
  });

  document.getElementById("themeToggle").addEventListener("click", () => {
    isDark = !isDark;
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    document.getElementById("themeToggle").textContent = isDark ? "🌙" : "☀️";
  });

  document.getElementById("modalClose").addEventListener("click", closeModal);
  document.getElementById("modalOverlay").addEventListener("click", e => {
    if (e.target === document.getElementById("modalOverlay")) closeModal();
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  document.getElementById("newsletterForm").addEventListener("submit", e => {
    e.preventDefault();
    showToast("✅ " + e.target.querySelector("input").value + " ajouté à la newsletter !");
    e.target.reset();
  });

  const slug = new URLSearchParams(window.location.search).get("article");
  if (slug) {
    const a = articles.find(x => x.slug === slug);
    if (a) openArticle(a.id);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Charger les articles générés par l'IA, puis initialiser
  fetch("data/generated.json")
    .then(r => r.json())
    .then(generated => {
      if (generated.length > 0) {
        // Fusionner : articles générés en premier (les plus récents)
        articles = [...generated, ...articles];
      }
    })
    .catch(() => {})
    .finally(() => initApp());
});
