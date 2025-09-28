import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';
import { ROUTES } from '@/shared/config';
import { lazy } from 'react';
import { LazyWrapper } from '@/shared/ui';

const Layout = lazy(() =>
  import('@/app/Layout').then(module => ({ default: module.Layout })),
);
const LoginPage = lazy(() =>
  import('@/pages/LoginPage').then(module => ({ default: module.LoginPage })),
);
const NotFoundPage = lazy(() =>
  import('@/pages/NotFound').then(module => ({ default: module.NotFound })),
);

const routes = [
  {
    path: '/',
    element: (
      <LazyWrapper>
        <Layout />
      </LazyWrapper>
    ),
    children: [
      { 
        path: '', 
        element: (
          <LazyWrapper>
            <div>
              <h1>Home Page</h1>
              <p>Welcome to the home page!</p>
            </div>
          </LazyWrapper>
        ),
      },
      { 
        path: ROUTES.LOGIN, 
        element: (
          <LazyWrapper>
            <LoginPage />
          </LazyWrapper>
        ),
      },
      { 
        path: '*', 
        element: (
          <LazyWrapper>
            <NotFoundPage />
          </LazyWrapper>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export function createSSRRouter(url: string) {
  return createMemoryRouter(routes, {
    initialEntries: [url],
  });
}
