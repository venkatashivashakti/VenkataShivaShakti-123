import { build } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const routes = [
  {
    path: '/',
    title: 'Venkata Shiva Shakti Auto Mobiles | Bike Spare Parts Shop in Vizianagaram',
    description: 'Trusted bike spare parts shop in Vizianagaram. Find genuine two wheeler spare parts, chain sprocket sets, brake shoes, spark plugs, engine parts & motorcycle accessories.',
    canonical: 'https://www.venkatashivashakti.in/',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.venkatashivashakti.in/'
        }
      ]
    }
  },
  {
    path: '/products',
    title: 'Two Wheeler Spare Parts & Motorcycle Accessories in Vizianagaram | Products',
    description: 'Explore motorcycle spare parts & scooter spares in Vizianagaram: brake shoes, disc pads, chain & sprocket sets, spark plugs, clutch plates, bearings & electrical switches.',
    canonical: 'https://www.venkatashivashakti.in/products',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.venkatashivashakti.in/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Products',
            'item': 'https://www.venkatashivashakti.in/products'
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': 'https://www.venkatashivashakti.in/products#webpage',
        'url': 'https://www.venkatashivashakti.in/products',
        'name': 'Two Wheeler Spare Parts & Motorcycle Accessories Catalog',
        'description': 'Comprehensive catalog of motorcycle and scooter spare parts available at Venkata Shiva Shakti Auto Mobiles in Vizianagaram.'
      }
    ]
  },
  {
    path: '/about',
    title: 'About Us | Venkata Shiva Shakti Auto Mobiles - Vizianagaram Bike Spare Parts',
    description: 'Learn about Venkata Shiva Shakti Auto Mobiles in Vizianagaram. Your trusted local destination for genuine motorcycle spare parts, components, and customer care.',
    canonical: 'https://www.venkatashivashakti.in/about',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.venkatashivashakti.in/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'About Us',
            'item': 'https://www.venkatashivashakti.in/about'
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        '@id': 'https://www.venkatashivashakti.in/about#webpage',
        'url': 'https://www.venkatashivashakti.in/about',
        'name': 'About Venkata Shiva Shakti Auto Mobiles',
        'description': 'Learn about Venkata Shiva Shakti Auto Mobiles in Vizianagaram, offering trusted motorcycle spare parts, daily maintenance components, and dependable customer service.'
      }
    ]
  },
  {
    path: '/contact',
    title: 'Contact Venkata Shiva Shakti Auto Mobiles | Bike Parts Shop Vizianagaram',
    description: 'Contact Venkata Shiva Shakti Auto Mobiles beside Poornima Bakery, M.R.O. Office Road, Vizianagaram. Call or WhatsApp +91 6302830617 for bike parts availability.',
    canonical: 'https://www.venkatashivashakti.in/contact',
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://www.venkatashivashakti.in/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Contact Us',
            'item': 'https://www.venkatashivashakti.in/contact'
          }
        ]
      },
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': 'https://www.venkatashivashakti.in/contact#webpage',
        'url': 'https://www.venkatashivashakti.in/contact',
        'name': 'Contact Venkata Shiva Shakti Auto Mobiles',
        'description': 'Direct contact details and customer assistance for bike spare parts in Vizianagaram.'
      }
    ]
  }
];

async function prerender() {
  console.log('⚡ Starting SSG Prerendering...');

  // 1. Build SSR bundle
  const ssrOutDir = path.resolve('dist-ssr');
  await build({
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: ssrOutDir,
      emptyOutDir: true,
      logLevel: 'warn',
    },
  });

  // 2. Import server render function
  const serverEntryPath = path.join(ssrOutDir, 'entry-server.js');
  const { render } = await import(pathToFileURL(serverEntryPath).href);

  // 3. Read template
  const templatePath = path.resolve('dist', 'index.html');
  const template = fs.readFileSync(templatePath, 'utf-8');

  // 4. Prerender each route
  for (const route of routes) {
    console.log(`  -> Prerendering route: ${route.path}`);
    const appHtml = render(route.path);

    let html = template;

    // Inject app HTML into #root
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Replace Title
    html = html.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);

    // Replace Description
    html = html.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/,
      `<meta name="description" content="${route.description}" />`
    );

    // Replace Canonical
    html = html.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/,
      `<link rel="canonical" href="${route.canonical}" />`
    );

    // Replace Open Graph Tags
    html = html.replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/?>/,
      `<meta property="og:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/?>/,
      `<meta property="og:description" content="${route.description}" />`
    );
    html = html.replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/?>/,
      `<meta property="og:url" content="${route.canonical}" />`
    );

    // Replace Twitter Tags
    html = html.replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:title" content="${route.title}" />`
    );
    html = html.replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/?>/,
      `<meta name="twitter:description" content="${route.description}" />`
    );

    // Inject route-specific Schema.org JSON-LD
    if (route.schema) {
      const schemaTag = `<script id="route-schema" type="application/ld+json">${JSON.stringify(route.schema)}</script>\n  `;
      html = html.replace('</head>', `  ${schemaTag}</head>`);
    }

    // Determine target output file
    let targetFile;
    if (route.path === '/') {
      targetFile = templatePath;
    } else {
      const routeDir = path.resolve('dist', route.path.replace(/^\//, ''));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      targetFile = path.join(routeDir, 'index.html');
    }

    fs.writeFileSync(targetFile, html, 'utf-8');
    console.log(`     ✓ Wrote static HTML: ${path.relative(process.cwd(), targetFile)}`);
  }

  // 5. Clean up temporary SSR bundle
  fs.rmSync(ssrOutDir, { recursive: true, force: true });
  console.log('✨ SSG Prerendering complete for all canonical routes!\n');
}

prerender().catch((err) => {
  console.error('Error during prerendering:', err);
  process.exit(1);
});
