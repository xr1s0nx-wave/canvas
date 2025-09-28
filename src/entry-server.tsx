import { renderToString } from 'react-dom/server';
import App from '@/app/App';

export function render(url: string) {
  try {
    const html = renderToString(<App url={url} />);
    return { html };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('SSR render error:', error);
    // Fallback to empty HTML for client-side rendering
    return { html: '' };
  }
}
