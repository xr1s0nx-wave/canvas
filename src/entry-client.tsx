import { hydrateRoot, createRoot } from 'react-dom/client';
import App from '@/app/App';

const initialUrl = window.location.pathname + window.location.search;
const container = document.getElementById('root')!;

// Check if the container has any content (SSR) or is empty (CSR)
if (container.hasChildNodes()) {
  // Hydrate if there's server-rendered content
  hydrateRoot(container, <App url={initialUrl} />);
} else {
  // Render from scratch if no server content
  const root = createRoot(container);
  root.render(<App url={initialUrl} />);
}
