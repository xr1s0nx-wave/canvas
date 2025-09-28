import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/shared/config';
import { lazy } from 'react';

const LoginPage = lazy(() => import('@/pages/LoginPage').then(module => ({ default: module.LoginPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFound').then(module => ({ default: module.NotFound })));

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
