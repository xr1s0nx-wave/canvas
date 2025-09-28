import { renderToString } from 'react-dom/server';
import App from '@/app/App';

export function render(url: string) {
  // In development, return empty HTML to avoid hydration issues
  if (import.meta.env.DEV) {
    return { html: '' };
  }
  
  const html = renderToString(<App url={url} />);
  return { html };
}
