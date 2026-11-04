# Blog de MexiGuide: cómo publicar un artículo

El blog es HTML estático escrito a mano. Netlify corre `node build-cities.js` en cada deploy, que genera las páginas de ciudades y el `sitemap.xml`; el script agrega solo cada `.html` de `/blog` y `/es/blog` (excepto los que empiezan con `_`).

## Estructura

```
/blog/                      Índice en inglés (mexiguide.org/blog/)
/blog/<slug-en>.html        Artículos en inglés
/blog/blog.css              Estilos compartidos de todo el blog (ES + EN)
/blog/blog.js               Menú móvil + filtro por categoría del índice
/blog/_plantilla.html       Plantilla para artículos nuevos (noindex)
/es/blog/                   Índice en español (mexiguide.org/es/blog/)
/es/blog/<slug>.html        Artículos en español
/images/blog/<slug>/        Imágenes de cada artículo (WebP + og-<slug>.jpg)
```

## Pasos para publicar

1. **Copia la plantilla** `blog/_plantilla.html` a `es/blog/<slug>.html` (y la versión en inglés a `blog/<slug-en>.html`).
   Slugs cortos, en minúsculas, con guiones y con la palabra clave: `posadas-navidenas`, `las-posadas-mexico`.
2. **Reemplaza los `{{ }}`** y **borra** `<meta name="robots" content="noindex">`.
3. **Imágenes** en `images/blog/<slug>/`:
   - WebP de 1200 px de ancho (portada 1600 px), calidad ~78, menos de 250 KB.
   - Nombre descriptivo: `pinata-posada-navidena.webp`, no `IMG_1234.webp`.
   - `og-<slug>.jpg` de 1200×630 para redes sociales.
   - Siempre `alt` descriptivo, `width`/`height` y `loading="lazy"` (excepto la portada).
   - Si la foto es de Wikimedia Commons con licencia CC BY / CC BY-SA, el crédito (autor + licencia) en el pie de foto es obligatorio.
4. **Agrega la tarjeta al índice** (`es/blog/index.html` y `blog/index.html`): copia el `<a class="post-card">` existente y ponlo al inicio de `#postGrid`.
   - `data-cats` define en qué filtros aparece: `festividades`, `cultura`, `gastronomia`, `guias` (separadas por espacio).
   - Solo el artículo más reciente lleva la clase `featured`; quítasela al anterior.
   - Si el artículo estaba en "Próximamente", borra esa tarjeta.
   - Agrega el artículo al arreglo `blogPost` del JSON-LD del índice.
5. **Sitemap**: no hay que tocarlo; `build-cities.js` lo genera en el deploy y toma los `hreflang` de cada página.
6. **Enlaces internos**: enlaza a las guías de ciudad (`/es/destinos/<ciudad>/`, `/destinations/<city>/`) y a otros artículos del blog.

## Calendario editorial sugerido

| Publicar antes de | Tema | Slug sugerido (ES / EN) |
|---|---|---|
| 1 dic | Día de la Virgen de Guadalupe (12 dic) | `dia-de-la-virgen-de-guadalupe` / `virgin-of-guadalupe-day` |
| 5 dic | Las Posadas (16–24 dic) | `posadas-navidenas` / `las-posadas-mexico` |
| 10 dic | Noche de Rábanos, Oaxaca (23 dic) | `noche-de-rabanos-oaxaca` / `night-of-the-radishes-oaxaca` |
| 10 dic | Navidad en México (24–25 dic) | `navidad-en-mexico` / `christmas-in-mexico` |
| 15 dic | Año Nuevo a la mexicana (31 dic) | `ano-nuevo-tradiciones-mexico` / `new-years-eve-mexico` |
| 20 dic | Día de Reyes y Rosca (6 ene) + Candelaria (2 feb) | `dia-de-reyes-rosca` / `three-kings-day-mexico` |

Publica cada artículo **2–4 semanas antes** de la fecha para que Google alcance a indexarlo cuando sube la búsqueda.
