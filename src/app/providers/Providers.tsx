import { RouterProvider } from './RouterProvider';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@/shared/config';

export function Providers() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider />
    </ThemeProvider>
  );
}
