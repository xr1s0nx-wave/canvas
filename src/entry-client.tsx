import { hydrateRoot, createRoot } from 'react-dom/client';
import App from '@/app/App';

const container = document.getElementById('root')!;

// Check if the container has any content (SSR) or is empty (CSR)
if (container.hasChildNodes()) {
  // Hydrate if there's server-rendered content
  hydrateRoot(container, <App />);
} else {
  // Render from scratch if no server content
  const root = createRoot(container);
  root.render(<App />);
}
