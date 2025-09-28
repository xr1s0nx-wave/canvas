import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/shared/config';
import { lazy } from 'react';

const LoginPage = lazy(() => import('@/pages/LoginPage').then(module => ({ default: module.LoginPage })));

export const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
]);
