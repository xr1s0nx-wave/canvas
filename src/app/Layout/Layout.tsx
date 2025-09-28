import { PageProgressBar } from '@/shared/ui';
import { Outlet, NavLink } from 'react-router-dom';
import { ROUTES } from '@/shared/config';

export function Layout() {
  return (
    <>
      <PageProgressBar />
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <NavLink 
          to="/" 
          style={{ marginRight: '20px' }}
        >
          Home
        </NavLink>
        <NavLink 
          to={ROUTES.LOGIN}
        >
          Login
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
