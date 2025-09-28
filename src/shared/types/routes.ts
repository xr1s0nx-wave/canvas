import { ROUTES } from '@/shared/config';

export type RouteKeys = keyof typeof ROUTES;
export type RouteValues = (typeof ROUTES)[RouteKeys];
export type RouteObject = {
  path: RouteValues;
  component: React.ComponentType;
};
