// ===================================================
// ViraIA — Générateur d'articles via Claude API
// Utilise uniquement des modules Node.js natifs (pas de npm install)
// ===================================================

const https = require('https');
const fs = require('fs');
const path = require('path');

const CATEGORIES = [
  { key: 'ia',           label: 'Intelligence Artificielle' },
  { key: 'finance',      label: 'Finance & Revenus' },
  { key: 'productivite', label: 'Productivité' },
  { key: 'tech',         label: 'Tech & Innovation' },
  { key: 'marketing',    label: 'Marketing' }
];

const IMAGES = {
  ia:           ['https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
                 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
                 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80'],
  finance:      ['https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
                 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'],
  productivite: ['https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
                 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80'],
  tech:         ['https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80',
                 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'],
  marketing:    ['https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80']
};

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function formatDate() {
  return new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' });
}

function slugify(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    .substring(0, 60);
}

function callClaude(prompt) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 3000,
      messages: [{ role: 'user', content: prompt }]
    });

    const req = https.request({
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
        'content-length': Buffer.byteLength(body)
      }
    }, res => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          if (parsed.error) return reject(new Error(parsed.error.message));
          resolve(parsed.content[0].text);
        } catch (e) {
          reject(new Error('Parse error: ' + data.substring(0, 200)));
        }
      });
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('❌ ANTHROPIC_API_KEY manquante');
    process.exit(1);
  }

  const filePath = path.join(__dirname, '..', 'data', 'generated.json');
  const existing = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const cat = pick(CATEGORIES);
  const existingTitles = existing.map(a => a.title).join('\n');

  const prompt = `Tu es un expert en contenu viral francophone spécialisé dans le domaine : ${cat.label}.

Génère un article viral complet en français. Il doit être informatif, concret, avec des chiffres réels et des exemples pratiques.

${existingTitles ? `TITRES DÉJÀ PUBLIÉS (ne pas dupliquer le sujet) :\n${existingTitles}\n` : ''}

Réponds UNIQUEMENT avec du JSON valide, sans markdown, sans texte avant ou après :

{
  "title": "Titre accrocheur et viral, maximum 80 caractères, avec chiffres ou question",
  "excerpt": "Description courte et percutante qui donne envie de lire, maximum 200 caractères",
  "content": "Contenu HTML complet. Utilise uniquement : <h3>, <h4>, <p>, <ul>, <ol>, <li>, <strong>, <blockquote>. Minimum 500 mots. Sois très concret avec des exemples, des chiffres, des étapes précises.",
  "readTime": 7,
  "tags": ["tag1", "tag2", "tag3"]
}

Règles absolues :
- Le titre doit être viral et accrocheur (chiffres, question, révélation)
- Le contenu HTML doit être valide (pas de markdown, pas de backticks)
- Contenu informatif et utile, pas générique
- Tags en minuscules sans accents, max 20 caractères chacun`;

  console.log(`🤖 Génération d'un article "${cat.label}"...`);
  const text = await callClaude(prompt);

  // Extraire le JSON de la réponse
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('Pas de JSON dans la réponse:\n' + text.substring(0, 500));

  const generated = JSON.parse(match[0]);

  // Valider les champs requis
  if (!generated.title || !generated.content || !generated.excerpt) {
    throw new Error('Champs manquants dans la réponse JSON');
  }

  const maxId = existing.length > 0 ? Math.max(...existing.map(a => a.id)) : 100;

  const article = {
    id: maxId + 1,
    slug: slugify(generated.title),
    title: generated.title,
    excerpt: generated.excerpt,
    content: generated.content,
    category: cat.key,
    categoryLabel: cat.label,
    readTime: generated.readTime || 6,
    date: formatDate(),
    views: String(Math.floor(Math.random() * 8000 + 2000)),
    shares: String(Math.floor(Math.random() * 3000 + 500)),
    image: pick(IMAGES[cat.key] || IMAGES.ia),
    featured: false,
    tags: (generated.tags || [cat.key]).slice(0, 3)
  };

  // Ajouter au début (plus récent en premier), garder max 50
  const updated = [article, ...existing].slice(0, 50);
  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), 'utf8');

  console.log('✅ Article généré :', article.title);
  console.log('📁 Fichier mis à jour :', filePath);
}

main().catch(e => {
  console.error('❌ Erreur :', e.message);
  process.exit(1);
});
