import { router } from '@/shared/lib/router';
import { RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { Suspense } from 'react';

export function RouterProvider() {
  return <Suspense fallback={<div>Loading...</div>}><ReactRouterProvider router={router} /></Suspense>;
}
