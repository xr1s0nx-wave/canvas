import { PageProgressBar } from '@/shared/ui';
import { Outlet, NavLink } from 'react-router-dom';
import { ROUTES } from '@/shared/config';
import { Box } from '@mui/material';

export function Layout() {
  return (
    <>
      <PageProgressBar />      
      <Box component="nav" sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <NavLink 
          to="/" 
          style={{ marginRight: '20px', textDecoration: 'none', color: 'inherit' }}
        >
          Home
        </NavLink>
        <NavLink 
          to={ROUTES.LOGIN}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          Login
        </NavLink>
      </Box>
      
      <Outlet />
    </>
  );
}
