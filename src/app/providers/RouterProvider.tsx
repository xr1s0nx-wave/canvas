import { router } from '@/shared/lib/router';
import { RouterProvider as ReactRouterProvider } from 'react-router-dom';

export function RouterProvider() {
  return <ReactRouterProvider router={router} />;
}
