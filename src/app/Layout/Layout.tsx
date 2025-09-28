import { PageProgressBar, Header } from '@/shared/ui';
import { Outlet } from 'react-router-dom';
import styles from './styles.module.scss';

export function Layout() {
  return (
    <div className={styles.layout}>
      <PageProgressBar />
      <Header />
      <Outlet />
    </div>
  );
}
