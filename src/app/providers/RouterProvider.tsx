import { router, createSSRRouter } from '@/shared/lib/router';
import { RouterProvider as ReactRouterProvider } from 'react-router-dom';

export function RouterProvider({ url }: { url?: string | undefined } = {}) {
  const currentRouter = url ? createSSRRouter(url) : router;
  
  return <ReactRouterProvider router={currentRouter} />;
}
