import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple render function for SSR
async function render() {
  // For now, return empty HTML to let client-side rendering handle everything
  // This avoids the complexity of bundling the entire React app in Netlify Functions
  return { html: '' };
}

export default async request => {
  try {
    // eslint-disable-next-line no-undef
    const url = new URL(request.url);
    const pathname = url.pathname;

    // eslint-disable-next-line no-undef
    console.log('SSR rendering for path:', pathname);

    // Read the HTML template
    const templatePath = path.join(__dirname, '../../dist/client/index.html');
    const template = await fs.readFile(templatePath, 'utf-8');

    // Render the app
    const rendered = await render(pathname);

    // Replace placeholders in template
    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? '')
      .replace(`<!--app-html-->`, rendered.html ?? '');

    // eslint-disable-next-line no-undef
    return new Response(html, {
      status: 200,
      headers: {
        'Content-Type': 'text/html',
        'Cache-Control': 'public, max-age=0, must-revalidate',
      },
    });
  } catch (error) {
    // eslint-disable-next-line no-undef
    console.error('SSR Error:', error);

    // Fallback to client-side rendering
    try {
      const templatePath = path.join(__dirname, '../../dist/client/index.html');
      const template = await fs.readFile(templatePath, 'utf-8');

      // eslint-disable-next-line no-undef
      return new Response(template, {
        status: 200,
        headers: {
          'Content-Type': 'text/html',
        },
      });
    } catch (fallbackError) {
      // eslint-disable-next-line no-undef
      console.error('Fallback Error:', fallbackError);

      // eslint-disable-next-line no-undef
      return new Response('Internal Server Error', {
        status: 500,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
  }
};
