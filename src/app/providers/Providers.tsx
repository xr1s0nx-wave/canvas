import { RouterProvider } from './RouterProvider';
import { ThemeProvider } from '@/shared/lib';

export function Providers() {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
}
