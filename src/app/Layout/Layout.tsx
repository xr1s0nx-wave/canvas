import { PageProgressBar } from '@/shared/ui';
import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <>
      <PageProgressBar />
      <Outlet />
    </>
  );
}
