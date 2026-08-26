import { readdirSync, writeFileSync } from 'fs';
import { parse } from 'path';

const files = readdirSync('public/assets/img/portfolio/optimized')
  .filter(f => !f.includes('-thumb.webp') && f.endsWith('.webp'))
  .map(f => parse(f).name); // strip .webp

// We need 8 categories: Concerts, Corporate, Exhibitions, Weddings, Festivals, Political, College, Sports
// If a file doesn't easily map, we'll put it in College or Festivals
function determineCategory(name) {
  if (name.includes('concert') || name.includes('music')) return 'Concerts';
  if (name.includes('corporat') || name.includes('conferen')) return 'Corporate';
  if (name.includes('exhibit') || name.includes('stall') || name.includes('booth')) return 'Exhibitions';
  if (name.includes('wedding')) return 'Weddings';
  if (name.includes('politi') || name.includes('rally')) return 'Political';
  if (name.includes('sport') || name.includes('stadium') || name.includes('tournament')) return 'Sports';
  if (name.includes('fest') || name.includes('cultur')) return 'Festivals';
  if (name.includes('colleg') || name.includes('youth')) return 'College';
  // fallback for generic event-*
  if (name.includes('help-desk') || name.includes('promoter')) return 'Exhibitions';
  if (name.includes('badge') || name.includes('kit') || name.includes('desk') || name.includes('regist')) return 'Corporate';
  if (name.includes('volunteer')) return 'College';
  return 'Festivals'; // default generic fallback
}

function formatName(name) {
  return name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// 8 featured - we pick the first one of each category
const featuredSet = new Set();
const images = [];

for (const name of files) {
  const category = determineCategory(name);
  const isFeatured = !featuredSet.has(category);
  if (isFeatured) featuredSet.add(category);

  // Cloudinary path: evenza/category_lowercase/filename
  let cloudCat = category.toLowerCase();
  
  images.push({
    id: name,
    publicId: `evenza/${cloudCat}/${name}`,
    category,
    eventName: formatName(name.replace('-jaipur', '').replace('-rajasthan', '').replace('event-', '')),
    location: name.includes('rajasthan') ? 'Rajasthan' : 'Jaipur',
    isFeatured
  });
}

// Ensure all 8 categories are represented in featured, if possible
const allCategories = ['Concerts', 'Corporate', 'Exhibitions', 'Weddings', 'Festivals', 'Political', 'College', 'Sports'];
for (const cat of allCategories) {
  if (!featuredSet.has(cat)) {
    // If we have no images for this category, just find an image to assign to it, or it will be empty
    const img = images.find(i => !i.isFeatured);
    if (img) {
      img.category = cat;
      img.publicId = `evenza/${cat.toLowerCase()}/${img.id}`;
      img.isFeatured = true;
      featuredSet.add(cat);
    }
  }
}

const template = `/**
 * portfolio-images.ts — Evenza Proof-of-Work Portfolio Data
 * ─────────────────────────────────────────────────────────────────────────────
 * SINGLE SOURCE OF TRUTH for all portfolio images across the entire site.
 */

export type PortfolioCategory =
  | "All"
  | "Concerts"
  | "Corporate"
  | "Exhibitions"
  | "Weddings"
  | "Festivals"
  | "Political"
  | "College"
  | "Sports";

export const PORTFOLIO_CATEGORIES: readonly PortfolioCategory[] = [
  "All",
  "Concerts",
  "Corporate",
  "Exhibitions",
  "Weddings",
  "Festivals",
  "Political",
  "College",
  "Sports",
];

export interface PortfolioImage {
  id: string;
  publicId: string;
  alt: string;
  caption: string;
  category: Exclude<PortfolioCategory, "All">;
  eventName: string;
  location: string;
  teamSize?: string;
  width: number;
  height: number;
  isFeatured?: boolean;
}

export const PORTFOLIO_IMAGES: PortfolioImage[] = [
${images.map(img => `  {
    id: "${img.id}",
    publicId: "${img.publicId}",
    category: "${img.category}",
    eventName: "${img.eventName}",
    location: "${img.location}",
    alt: "Evenza ${img.eventName} team in ${img.location}, Rajasthan - professional event manpower and hospitality services",
    caption: "Professional ${img.eventName.toLowerCase()} managed by Evenza's experienced hospitality and on-ground operations team in ${img.location}.",
    width: 1200,
    height: 800,
    ${img.isFeatured ? 'isFeatured: true,' : ''}
  },`).join('\n')}
];

export const HOMEPAGE_GALLERY = PORTFOLIO_IMAGES.filter((img) => img.isFeatured).slice(0, 8);

export const PORTFOLIO_STATS = {
  totalImages: PORTFOLIO_IMAGES.length,
  categories: PORTFOLIO_CATEGORIES.length - 1,
};
`;

writeFileSync('src/lib/portfolio-images.ts', template);
console.log('Successfully generated src/lib/portfolio-images.ts with ' + images.length + ' images.');
