#!/usr/bin/env node
/**
 * build-cities.js — MexiGuide static city-page generator (SEO pre-render)
 * --------------------------------------------------------------------------
 * Reads /data/cities/*.json + the existing city.html template, and emits one
 * fully static, indexable HTML page per city per language, plus sitemap.xml,
 * robots.txt and static destination index pages.
 *
 * Zero dependencies. Run: `node build-cities.js`
 * Wire into Netlify via netlify.toml [build] command.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT       = __dirname;
const DATA_DIR   = path.join(ROOT, 'data', 'cities');
const TEMPLATE   = path.join(ROOT, 'city.html');
const SITE_URL   = 'https://mexiguide.org';
const OUT_LANGS  = ['en', 'es', 'pt', 'fr'];     // generation order
const APP_URL    = 'https://apps.apple.com/app/id6761962437';
const YEAR       = new Date().getFullYear();
const OG_LOCALE  = { en: 'en_US', es: 'es_MX', pt: 'pt_BR', fr: 'fr_FR' };

// ── Extract the canonical <style> block from city.html so generated pages
//    inherit the exact visual identity (single source of truth for CSS). ──
const templateHtml = fs.readFileSync(TEMPLATE, 'utf8');
const STYLE = (templateHtml.match(/<style>[\s\S]*?<\/style>/i) || ['<style></style>'])[0];

// ── Localised UI strings ──
const UI = {
  en: {
    titleTpl: (c) => `Is ${c} Safe in ${YEAR}? Travel & Safety Guide | MexiGuide`,
    h1: (c) => `Is ${c} safe to visit?`,
    metaTpl: (c, s, lbl) => `${c}, ${s} safety rating: ${lbl}. Honest local tips — getting around, what to avoid, top sights, and where to eat. Updated ${YEAR}.`,
    introTpl: (c, s, lbl) => `As of ${YEAR}, ${c} in ${s} has an overall traveler safety rating of "${lbl}". Below is a practical, local breakdown of what to watch out for, how to get around, and what's actually worth your time.`,
    safetyHeading: (c) => `${c} safety: what to know`,
    sections: { getting_around: 'Getting Around', top_sights: 'Top Sights', museums: 'Museums', parks: 'Parks & Nature', eat_drink_work: 'Eat, Drink & Work' },
    viewMap: 'View on Map', allDest: 'All Destinations', back: '← Back to Destinations',
    destTitle: `Mexico Travel & Safety Guides by City (${YEAR}) | MexiGuide`,
    destH1: 'Mexico travel guides — by city',
    destIntro: 'Up-to-date safety ratings and local guides for every major destination in Mexico. Pick a city to see what to expect.',
    getApp: 'Get the App →', langName: 'EN',
    bestTime: '📅 Best Time', airport: '✈️ Airport', conn: '📶 Connectivity', rating: 'Safety rating',
    navDest: 'Destinations', navSafety: 'Safety Map', navTools: 'Tools', navEmergency: 'Emergency',
    pathWord: 'destinations',
  },
  es: {
    titleTpl: (c) => `¿Es seguro ${c} en ${YEAR}? Guía de viaje y seguridad | MexiGuide`,
    h1: (c) => `¿Es seguro viajar a ${c}?`,
    metaTpl: (c, s, lbl) => `Nivel de seguridad de ${c}, ${s}: ${lbl}. Consejos locales reales — cómo moverte, qué evitar, qué ver y dónde comer. Actualizado ${YEAR}.`,
    introTpl: (c, s, lbl) => `En ${YEAR}, ${c} (${s}) tiene una calificación general de seguridad para viajeros de "${lbl}". Abajo te dejamos un desglose práctico y local: qué cuidar, cómo moverte y qué vale realmente la pena.`,
    safetyHeading: (c) => `Seguridad en ${c}: lo que debes saber`,
    sections: { getting_around: 'Cómo moverse', top_sights: 'Atracciones principales', museums: 'Museos', parks: 'Parques y naturaleza', eat_drink_work: 'Comer, beber y trabajar' },
    viewMap: 'Ver en el mapa', allDest: 'Todos los destinos', back: '← Volver a destinos',
    destTitle: `Guías de viaje y seguridad de México por ciudad (${YEAR}) | MexiGuide`,
    destH1: 'Guías de viaje de México — por ciudad',
    destIntro: 'Calificaciones de seguridad actualizadas y guías locales para cada destino importante de México. Elige una ciudad para saber qué esperar.',
    getApp: 'Descarga la App →', langName: 'ES',
    bestTime: '📅 Mejor época', airport: '✈️ Aeropuerto', conn: '📶 Conectividad', rating: 'Nivel de seguridad',
    navDest: 'Destinos', navSafety: 'Mapa de seguridad', navTools: 'Herramientas', navEmergency: 'Emergencias',
    pathWord: 'destinos',
  },
  pt: {
    titleTpl: (c) => `${c} é seguro em ${YEAR}? Guia de viagem e segurança | MexiGuide`,
    h1: (c) => `${c} é seguro para visitar?`,
    metaTpl: (c, s, lbl) => `Nível de segurança de ${c}, ${s}: ${lbl}. Dicas locais reais — como se locomover, o que evitar, o que ver e onde comer. Atualizado ${YEAR}.`,
    introTpl: (c, s, lbl) => `Em ${YEAR}, ${c} (${s}) tem uma classificação geral de segurança para viajantes de "${lbl}". Abaixo, um resumo prático e local: o que observar, como se locomover e o que realmente vale a pena.`,
    safetyHeading: (c) => `Segurança em ${c}: o que saber`,
    sections: { getting_around: 'Como se locomover', top_sights: 'Principais atrações', museums: 'Museus', parks: 'Parques e natureza', eat_drink_work: 'Comer, beber e trabalhar' },
    viewMap: 'Ver no mapa', allDest: 'Todos os destinos', back: '← Voltar aos destinos',
    destTitle: `Guias de viagem e segurança do México por cidade (${YEAR}) | MexiGuide`,
    destH1: 'Guias de viagem do México — por cidade',
    destIntro: 'Classificações de segurança atualizadas e guias locais para cada destino importante do México. Escolha uma cidade para saber o que esperar.',
    getApp: 'Baixar o App →', langName: 'PT',
    bestTime: '📅 Melhor época', airport: '✈️ Aeroporto', conn: '📶 Conectividade', rating: 'Nível de segurança',
    navDest: 'Destinos', navSafety: 'Mapa de segurança', navTools: 'Ferramentas', navEmergency: 'Emergências',
    pathWord: 'destinos',
  },
  fr: {
    titleTpl: (c) => `${c} est-il sûr en ${YEAR} ? Guide voyage et sécurité | MexiGuide`,
    h1: (c) => `Est-il sûr de visiter ${c} ?`,
    metaTpl: (c, s, lbl) => `Niveau de sécurité de ${c}, ${s} : ${lbl}. Conseils locaux concrets — se déplacer, quoi éviter, sites à voir et où manger. Mis à jour ${YEAR}.`,
    introTpl: (c, s, lbl) => `En ${YEAR}, ${c} (${s}) affiche une note globale de sécurité pour les voyageurs de « ${lbl} ». Voici un aperçu pratique et local : ce à quoi faire attention, comment circuler et ce qui vaut vraiment le détour.`,
    safetyHeading: (c) => `Sécurité à ${c} : l'essentiel`,
    sections: { getting_around: 'Se déplacer', top_sights: 'Sites incontournables', museums: 'Musées', parks: 'Parcs et nature', eat_drink_work: 'Manger, boire et travailler' },
    viewMap: 'Voir sur la carte', allDest: 'Toutes les destinations', back: '← Retour aux destinations',
    destTitle: `Guides voyage et sécurité du Mexique par ville (${YEAR}) | MexiGuide`,
    destH1: 'Guides de voyage du Mexique — par ville',
    destIntro: 'Notes de sécurité à jour et guides locaux pour chaque grande destination du Mexique. Choisissez une ville pour savoir à quoi vous attendre.',
    getApp: "Télécharger l'app →", langName: 'FR',
    bestTime: '📅 Meilleure période', airport: '✈️ Aéroport', conn: '📶 Connectivité', rating: 'Niveau de sécurité',
    navDest: 'Destinations', navSafety: 'Carte sécurité', navTools: 'Outils', navEmergency: 'Urgences',
    pathWord: 'destinations',
  },
};

const SAFETY = {
  1: { color: '#2D9E5F', en: 'Very Safe',  es: 'Muy seguro',   pt: 'Muito seguro', fr: 'Très sûr' },
  2: { color: '#52C778', en: 'Safe',       es: 'Seguro',       pt: 'Seguro',       fr: 'Sûr' },
  3: { color: '#F0A500', en: 'Moderate',   es: 'Moderado',     pt: 'Moderado',     fr: 'Modéré' },
  4: { color: '#EF6C00', en: 'Use Caution',es: 'Precaución',   pt: 'Cautela',      fr: 'Prudence' },
  5: { color: '#C62828', en: 'High Risk',  es: 'Riesgo alto',  pt: 'Risco alto',   fr: 'Risque élevé' },
};

// ── Helpers ──
function slugify(name) {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
// Localised section getter, mirroring the template's fallback logic.
function localized(city, lang, key) {
  if (lang === 'en') return city[key];
  const t = city.translations && city.translations[lang];
  return (t && t[key] != null) ? t[key] : city[key];
}
function urlFor(lang, slug) {
  const word = UI[lang].pathWord;
  return lang === 'en' ? `/${word}/${slug}/` : `/${lang}/${word}/${slug}/`;
}

// ── Page builders ──
function buildNav(lang, alternates) {
  const t = UI[lang];
  const homeHref = lang === 'en' ? '/' : `/${lang}/`;
  const langLinks = OUT_LANGS.filter(l => alternates[l]).map(l => {
    const flag = { en: '🇺🇸', es: '🇲🇽', pt: '🇧🇷', fr: '🇫🇷' }[l];
    const active = l === lang ? ' style="opacity:1;font-weight:700;"' : '';
    return `<li><a href="${alternates[l]}" class="lang-switch"${active}><span class="lang-flag">${flag}</span> ${UI[l].langName}</a></li>`;
  }).join('\n        ');
  const dWord = t.pathWord;
  const dHref = lang === 'en' ? `/${dWord}/` : `/${lang}/${dWord}/`;
  return `<nav>
    <div class="nav-stripe"></div>
    <div class="nav-inner">
      <a href="${homeHref}" class="nav-logo">
        <img src="/logo.png" alt="MexiGuide" style="width:34px;height:34px;border-radius:10px;object-fit:contain;background:#1B4332;padding:3px;box-shadow:0 3px 10px rgba(27,67,50,0.25);">
        <div class="nav-wordmark">MexiGuide</div>
      </a>
      <ul class="nav-links" id="navLinks">
        <li><a href="${dHref}">${t.navDest}</a></li>
        <li><a href="${lang === 'en' ? '' : '/' + lang}/safety-map.html">${t.navSafety}</a></li>
        <li><a href="${lang === 'en' ? '' : '/' + lang}/tools.html">${t.navTools}</a></li>
        <li><a href="${lang === 'en' ? '' : '/' + lang}/emergency.html">${t.navEmergency}</a></li>
        ${langLinks}
      </ul>
      <a href="${APP_URL}" class="nav-pill" target="_blank" rel="noopener">${t.getApp}</a>
    </div>
  </nav>`;
}

function buildCard(item, t) {
  const btn = item.maps_url
    ? `<a href="${esc(item.maps_url)}" target="_blank" rel="noopener" class="card-button"><span>📍</span><span>${t.viewMap}</span></a>`
    : '';
  return `<div class="card">
          <span class="card-category">${esc(item.category)}</span>
          <h3 class="card-title">${esc(item.name)}</h3>
          <p class="card-description">${esc(item.description)}</p>
          ${btn}
        </div>`;
}

function buildSection(id, icon, title, cards) {
  if (!cards || !cards.length) return '';
  return `
      <section class="section" id="${id}">
        <div class="section-header"><span class="section-icon">${icon}</span><h2 style="font-size:inherit;font-weight:inherit;margin:0;display:inline;">${esc(title)}</h2></div>
        <div class="cards-grid">${cards.join('\n        ')}</div>
      </section>`;
}

function jsonLd(city, lang, canonical, label) {
  const t = UI[lang];
  const guide = localized(city, lang, 'detail_guide') || {};
  const dest = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: city.city_name,
    address: { '@type': 'PostalAddress', addressRegion: city.state, addressCountry: 'MX' },
    url: SITE_URL + canonical,
    description: t.metaTpl(city.city_name, city.state, label),
    isAccessibleForFree: true,
    publisher: { '@type': 'Organization', name: 'MexiGuide', url: SITE_URL },
  };
  const faq = [];
  faq.push({
    '@type': 'Question',
    name: t.h1(city.city_name),
    acceptedAnswer: { '@type': 'Answer', text: t.introTpl(city.city_name, city.state, label) },
  });
  if (guide.getting_around) {
    const q = { en: `How do you get around ${city.city_name}?`, es: `¿Cómo moverse en ${city.city_name}?`, pt: `Como se locomover em ${city.city_name}?`, fr: `Comment se déplacer à ${city.city_name} ?` }[lang];
    faq.push({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: guide.getting_around } });
  }
  const faqLd = faq.length ? { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq } : null;
  const out = [`<script type="application/ld+json">${JSON.stringify(dest)}</script>`];
  if (faqLd) out.push(`<script type="application/ld+json">${JSON.stringify(faqLd)}</script>`);
  return out.join('\n  ');
}

function buildPage(city, lang, alternates) {
  const t = UI[lang];
  const lvl = city.security.level;
  const label = SAFETY[lvl][lang];
  const color = SAFETY[lvl].color;
  const canonical = alternates[lang];
  const guide = localized(city, lang, 'detail_guide') || {};
  const warnings = localized(city, lang, 'quick_warnings') || [];
  const stats = city.quick_stats || {};

  // hreflang alternates
  const hreflang = OUT_LANGS.filter(l => alternates[l])
    .map(l => `<link rel="alternate" hreflang="${l}" href="${SITE_URL}${alternates[l]}" />`)
    .join('\n  ') + `\n  <link rel="alternate" hreflang="x-default" href="${SITE_URL}${alternates.en || canonical}" />`;

  const statBoxes = [
    `<div class="stat-box"><span class="stat-box-label">${t.bestTime}</span><div class="stat-box-value">${esc(stats.best_time || '—')}</div></div>`,
    stats.airport_iata ? `<div class="stat-box"><span class="stat-box-label">${t.airport}</span><div class="stat-box-value">${esc(stats.airport_iata)}</div></div>` : '',
    `<div class="stat-box"><span class="stat-box-label">${t.conn}</span><div class="stat-box-value">${esc(stats.connectivity || '—')}</div></div>`,
  ].join('');

  const warnHtml = warnings.map(w => `<div class="warning-alert">${esc(w)}</div>`).join('\n          ');

  const sections = [
    guide.getting_around ? `
      <section class="section">
        <div class="section-header"><span class="section-icon">🚗</span><h2 style="font-size:inherit;font-weight:inherit;margin:0;display:inline;">${esc(t.sections.getting_around)}</h2></div>
        <div class="section-description">${esc(guide.getting_around)}</div>
      </section>` : '',
    buildSection('sights', '🏛️', t.sections.top_sights, (guide.top_sights || []).map(i => buildCard(i, t))),
    buildSection('museums', '🖼️', t.sections.museums, (guide.museums || []).map(i => buildCard(i, t))),
    buildSection('parks', '🌳', t.sections.parks, (guide.parks || []).map(i => buildCard(i, t))),
    buildSection('eat', '🍽️', t.sections.eat_drink_work, (guide.eat_drink_work || []).map(i => buildCard(i, t))),
  ].join('\n');

  const dWord = t.pathWord;
  const dHref = lang === 'en' ? `/${dWord}/` : `/${lang}/${dWord}/`;

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <title>${esc(t.titleTpl(city.city_name))}</title>
  <meta name="description" content="${esc(t.metaTpl(city.city_name, city.state, label))}" />
  <link rel="canonical" href="${SITE_URL}${canonical}" />
  ${hreflang}
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${esc(t.titleTpl(city.city_name))}" />
  <meta property="og:description" content="${esc(t.metaTpl(city.city_name, city.state, label))}" />
  <meta property="og:url" content="${SITE_URL}${canonical}" />
  <meta property="og:image" content="${SITE_URL}/logo.png" />
  <meta property="og:site_name" content="MexiGuide" />
  <meta property="og:locale" content="${OG_LOCALE[lang]}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(t.titleTpl(city.city_name))}" />
  <meta name="twitter:description" content="${esc(t.metaTpl(city.city_name, city.state, label))}" />
  <meta name="twitter:image" content="${SITE_URL}/logo.png" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Merriweather:ital,wght@0,700;0,900;1,700&display=swap" rel="stylesheet" />
  ${jsonLd(city, lang, canonical, label)}
  ${STYLE}
</head>
<body>
  ${buildNav(lang, alternates)}
  <div class="page-container">
    <div>
      <div class="header-card">
        <div class="header-glow-1"></div>
        <div class="header-glow-2"></div>
        <div class="header-inner">
          <a href="${dHref}" class="breadcrumb"><span class="breadcrumb-arrow">←</span><span>${esc(t.allDest)}</span></a>
          <div class="header-title-row">
            <div class="header-title-group">
              <h1>${esc(t.h1(city.city_name))}</h1>
              <div class="state">${esc(city.city_name)} · ${esc(city.state)}</div>
            </div>
            <div class="safety-badge level-${lvl}" style="background:${color};" title="${esc(t.rating)}"><span>⚠️</span><span>${esc(label)}</span></div>
          </div>
          <p style="color:var(--text-inv);max-width:60ch;margin:14px 0 0;font-size:15px;">${esc(t.introTpl(city.city_name, city.state, label))}</p>
          <div class="quick-stats">${statBoxes}</div>
          ${warnings.length ? `<h2 style="color:var(--text-inv);font-size:15px;margin:18px 0 8px;">${esc(t.safetyHeading(city.city_name))}</h2><div class="quick-warnings">${warnHtml}</div>` : ''}
        </div>
      </div>
      <div class="deco-stripe"></div>
    </div>
    <main class="main-content">
      ${sections}
      <a href="${dHref}" class="back-button">${esc(t.back)}</a>
    </main>
  </div>
</body>
</html>`;
}

function buildDestIndex(lang, cities, alternates) {
  const t = UI[lang];
  const cards = cities.map(({ city, slug }) => {
    const lvl = city.security.level;
    const label = SAFETY[lvl][lang];
    return `<a href="${urlFor(lang, slug)}" class="dest-card" style="text-decoration:none;color:inherit;display:block;background:var(--card);border:1px solid var(--border);border-radius:14px;padding:18px;">
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
        <div><h2 style="font-size:18px;margin:0;color:var(--text-hi);">${esc(city.city_name)}</h2><div style="font-size:13px;color:var(--text-mid);">${esc(city.state)}</div></div>
        <span style="background:${SAFETY[lvl].color};color:#fff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:999px;white-space:nowrap;">${esc(label)}</span>
      </div>
    </a>`;
  }).join('\n      ');

  const hreflang = OUT_LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="${SITE_URL}${alternates[l]}" />`).join('\n  ')
    + `\n  <link rel="alternate" hreflang="x-default" href="${SITE_URL}${alternates.en}" />`;
  const canonical = alternates[lang];

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <title>${esc(t.destTitle)}</title>
  <meta name="description" content="${esc(t.destIntro)}" />
  <link rel="canonical" href="${SITE_URL}${canonical}" />
  ${hreflang}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${esc(t.destTitle)}" />
  <meta property="og:description" content="${esc(t.destIntro)}" />
  <meta property="og:url" content="${SITE_URL}${canonical}" />
  <meta property="og:image" content="${SITE_URL}/logo.png" />
  <meta property="og:site_name" content="MexiGuide" />
  <meta property="og:locale" content="${OG_LOCALE[lang]}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(t.destTitle)}" />
  <meta name="twitter:description" content="${esc(t.destIntro)}" />
  <meta name="twitter:image" content="${SITE_URL}/logo.png" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Merriweather:ital,wght@0,700;0,900;1,700&display=swap" rel="stylesheet" />
  ${STYLE}
</head>
<body>
  ${buildNav(lang, alternates)}
  <div class="page-container">
    <div class="header-card"><div class="header-inner">
      <h1>${esc(t.destH1)}</h1>
      <p style="color:var(--text-inv);max-width:60ch;margin:12px 0 0;">${esc(t.destIntro)}</p>
    </div></div>
    <div class="deco-stripe"></div>
    <main class="main-content">
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:14px;">
      ${cards}
      </div>
    </main>
  </div>
</body>
</html>`;
}

// ── Main ──
function write(rel, content) {
  const full = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
}

const files = fs.readdirSync(DATA_DIR).filter(f => f.endsWith('.json'));
const cities = files.map(f => JSON.parse(fs.readFileSync(path.join(DATA_DIR, f), 'utf8')));

// slug map + collision guard
const slugs = new Map();
for (const c of cities) {
  let s = slugify(c.city_name);
  if ([...slugs.values()].includes(s)) s = `${s}-${slugify(c.state)}`;
  slugs.set(c.city_id, s);
}

const sitemap = [];
let pageCount = 0;

for (const city of cities) {
  const slug = slugs.get(city.city_id);
  const avail = ['en', ...Object.keys(city.translations || {})].filter(l => OUT_LANGS.includes(l));
  const alternates = {};
  avail.forEach(l => { alternates[l] = urlFor(l, slug); });

  for (const lang of avail) {
    const rel = (alternates[lang].replace(/\/$/, '') + '/index.html').replace(/^\//, '');
    write(rel, buildPage(city, lang, alternates));
    const lvl = city.security.level;
    const xAlt = avail.map(l => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}${alternates[l]}"/>`).join('');
    sitemap.push(`<url><loc>${SITE_URL}${alternates[lang]}</loc><priority>${lvl <= 2 ? '0.9' : '0.7'}</priority>${xAlt}</url>`);
    pageCount++;
  }
}

// Static destination index per language (kills the orphan-page problem)
for (const lang of OUT_LANGS) {
  const list = cities
    .filter(c => lang === 'en' || (c.translations && c.translations[lang]))
    .map(c => ({ city: c, slug: slugs.get(c.city_id) }))
    .sort((a, b) => a.city.security.level - b.city.security.level || a.city.city_name.localeCompare(b.city.city_name));
  const idxAlt = {}; OUT_LANGS.forEach(l => { idxAlt[l] = l === 'en' ? `/${UI[l].pathWord}/` : `/${l}/${UI[l].pathWord}/`; });
  const rel = (idxAlt[lang].replace(/\/$/, '') + '/index.html').replace(/^\//, '');
  write(rel, buildDestIndex(lang, list, idxAlt));
  sitemap.push(`<url><loc>${SITE_URL}${idxAlt[lang]}</loc><priority>0.8</priority></url>`);
}

// sitemap.xml + robots.txt
write('sitemap.xml',
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemap.join('\n')}
</urlset>`);

write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(`✅ Generated ${pageCount} city pages + ${OUT_LANGS.length} index pages across ${cities.length} cities.`);
console.log(`   sitemap.xml: ${sitemap.length} URLs · robots.txt written.`);
