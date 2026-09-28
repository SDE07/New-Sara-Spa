import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const routeMetadata = [
  { path: 'about', title: 'About Us — NEW SARA SPA | Our Heritage & Philosophy', canonical: 'https://saraspa.in/about', desc: 'Discover the heritage of Sara Spa — a luxury sanctuary uniting centuries-old Ayurvedic botanical rituals with modern restorative wellness in Wakad, Pune.' },
  { path: 'services', title: 'Treatments & Therapies — NEW SARA SPA Wakad Pune', canonical: 'https://saraspa.in/services', desc: "Explore New Sara Spa's complete menu of Dry Massages, Signature Massages, and Rejuvenating & Relaxing Rituals in Wakad, Pune." },
  { path: 'packages', title: 'Wellness Memberships & Pentagonal Spa Packages — NEW SARA SPA Wakad', canonical: 'https://saraspa.in/packages', desc: 'Explore exclusive wellness memberships and authentic spa therapy packages in Wakad, Pune.' },
  { path: 'gallery', title: 'Gallery & Luxury Facilities Tour — SARA SPA', canonical: 'https://saraspa.in/gallery', desc: 'Immerse yourself in our photo gallery: treatment suites, private Jacuzzi rooms, eucalyptus steam baths, and relaxation lounges.' },
  { path: 'contact', title: 'Contact Us | NEW SARA SPA Wakad Pune', canonical: 'https://saraspa.in/contact', desc: 'Get in touch with NEW SARA SPA in Wakad Pune for appointments, private couple jacuzzi suites, authentic Ayurvedic therapies, and wellness consultations.' },
  { path: 'thank-you', title: 'Thank You — NEW SARA SPA | Reservation Received', canonical: 'https://saraspa.in/thank-you', desc: 'Thank you for reaching out to NEW SARA SPA Wakad Pune. Your booking or inquiry has been received by our concierge team.' },
];

// Senior Developer Vite SEO Plugin: dynamically transforms canonical URL per route in dev & build
function canonicalHtmlPlugin() {
  return {
    name: 'vite-plugin-canonical-seo',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && !req.url.startsWith('/@') && !req.url.startsWith('/src') && !req.url.includes('.')) {
          req._spaRoute = req.originalUrl || req.url;
        }
        next();
      });
    },
    transformIndexHtml(html, ctx) {
      const reqUrl = ctx?.originalUrl || (ctx?.server && ctx?.req?._spaRoute) || ctx?.path || '/';
      const cleanUrl = reqUrl.split('?')[0].split('#')[0];
      const isRoot = cleanUrl === '/' || cleanUrl === '/index.html' || cleanUrl === '';
      const cleanPath = isRoot ? '' : (cleanUrl.endsWith('/') ? cleanUrl.slice(0, -1) : cleanUrl);
      const fullCanonical = cleanPath ? `https://saraspa.in${cleanPath}` : 'https://saraspa.in/';

      return html.replace(
        /<link\s+[^>]*rel=["']canonical["'][^>]*\/?>/i,
        `<link rel="canonical" id="canonical-tag" href="${fullCanonical}" />`
      );
    },
    closeBundle() {
      const distIndex = path.resolve(import.meta.dirname, 'dist/index.html');
      if (!fs.existsSync(distIndex)) return;

      const baseHtml = fs.readFileSync(distIndex, 'utf-8');

      routeMetadata.forEach(({ path: routePath, title, canonical, desc }) => {
        const outDir = path.resolve(import.meta.dirname, 'dist', routePath);
        if (!fs.existsSync(outDir)) {
          fs.mkdirSync(outDir, { recursive: true });
        }

        let routeHtml = baseHtml
          .replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`)
          .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${desc}" />`)
          .replace(/<link\s+[^>]*rel=["']canonical["'][^>]*\/?>/i, `<link rel="canonical" id="canonical-tag" href="${canonical}" />`)
          .replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${canonical}" />`)
          .replace(/<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/?>/i, `<meta name="twitter:url" content="${canonical}" />`);

        fs.writeFileSync(path.join(outDir, 'index.html'), routeHtml, 'utf-8');
      });
      console.log('✅ [Vite SEO]: Pre-rendered static HTML routes with accurate canonical tags for all pages!');
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
plugins: [
    tailwindcss(),
    react(),
    canonicalHtmlPlugin(),
  ],
  server: {
    port: 5174,
    open: false,
  },
  esbuild: {
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
    legalComments: 'none',
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1200,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('three') || id.includes('@react-three')) return 'vendor-three';
          if (id.includes('framer-motion') || id.includes('gsap')) return 'vendor-motion';
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) return 'vendor-react';
          if (id.includes('react-router')) return 'vendor-router';
          if (id.includes('lucide-react') || id.includes('react-icons')) return 'vendor-icons';
          if (id.includes('node_modules')) return 'vendor-misc';
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
