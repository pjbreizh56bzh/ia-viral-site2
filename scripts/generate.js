// ===================================================
// ViraIA — Publie 1 article par jour depuis la queue
// Zéro coût, zéro API externe nécessaire
// ===================================================

const fs   = require('fs');
const path = require('path');

const ROOT      = path.join(__dirname, '..');
const QUEUE     = path.join(ROOT, 'data', 'queue.json');
const GENERATED = path.join(ROOT, 'data', 'generated.json');

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

function main() {
  const queue     = JSON.parse(fs.readFileSync(QUEUE, 'utf8'));
  const generated = JSON.parse(fs.readFileSync(GENERATED, 'utf8'));

  if (queue.length === 0) {
    console.log('⚠️  La queue est vide. Ajoutez des articles dans data/queue.json');
    process.exit(0);
  }

  // Prendre le premier article de la queue
  const [next, ...remaining] = queue;

  const maxId = generated.length > 0
    ? Math.max(...generated.map(a => a.id))
    : 100;

  const article = {
    id:            maxId + 1,
    slug:          slugify(next.title),
    title:         next.title,
    excerpt:       next.excerpt,
    content:       next.content,
    category:      next.category,
    categoryLabel: next.categoryLabel,
    readTime:      next.readTime || 6,
    date:          formatDate(),
    views:         String(Math.floor(Math.random() * 8000 + 2000)),
    shares:        String(Math.floor(Math.random() * 3000 + 500)),
    image:         next.image || pick(IMAGES[next.category] || IMAGES.ia),
    featured:      false,
    tags:          (next.tags || [next.category]).slice(0, 3)
  };

  // Ajouter en tête de generated.json (plus récent en premier)
  const updatedGenerated = [article, ...generated].slice(0, 50);

  // Sauvegarder les deux fichiers
  fs.writeFileSync(GENERATED, JSON.stringify(updatedGenerated, null, 2), 'utf8');
  fs.writeFileSync(QUEUE,     JSON.stringify(remaining, null, 2),        'utf8');

  console.log(`✅ Article publié : "${article.title}"`);
  console.log(`📋 Articles restants dans la queue : ${remaining.length}`);
}

main();
