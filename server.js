import fs from 'node:fs/promises';
import express from 'express';

const isProduction = globalThis.process.env.NODE_ENV === 'production';
const port = globalThis.process.env.PORT ? globalThis.process.env.PORT : 5174;
const base = globalThis.process.env.BASE ? globalThis.process.env.BASE : '/';

const templateHtml = isProduction
  ? await fs.readFile('./dist/client/index.html', 'utf-8')
  : '';
const ssrManifest = isProduction
  ? await fs.readFile('./dist/client/.vite/ssr-manifest.json', 'utf-8')
  : undefined;

const app = express();

let vite;
if (!isProduction) {
  const { createServer } = await import('vite');
  vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import('compression')).default;
  const sirv = (await import('sirv')).default;
  app.use(compression());
  app.use(base, sirv('./dist/client', { extensions: [] }));
}

app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, '');

    let template;
    if (!isProduction) {
      // In development, just serve the HTML template without SSR
      template = await fs.readFile('./index.html', 'utf-8');
      template = await vite.transformIndexHtml(url, template);
      
      // Replace placeholders with empty content for client-side rendering
      const html = template
        .replace(`<!--app-head-->`, '')
        .replace(`<!--app-html-->`, '');
      
      res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
    } else {
      // In production, use SSR
      template = templateHtml;
      const render = (await import('./dist/server/entry-server.js')).render;
      const rendered = await render(url, ssrManifest);

      const html = template
        .replace(`<!--app-head-->`, rendered.head ?? '')
        .replace(`<!--app-html-->`, rendered.html ?? '');

      res.status(200).set({ 'Content-Type': 'text/html' }).send(html);
    }
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    res.status(500).end(e.stack);
  }
});

app.listen(port, () => {
  globalThis.console.log(`Server started at http://localhost:${port}`);
});