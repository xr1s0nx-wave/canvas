import { AppBar, Toolbar, Typography } from '@mui/material';
import styles from './styles.module.scss';
import { ThemeToggle } from '@/shared/ui';

export function Header() {
  return (
    <div className={styles.headerWrap}>
      <AppBar
        classes={{
          root: styles.header ?? '',
        }}
        position='relative'
        color='primary'
      >
        <Toolbar className={styles.toolbar ?? ''}>
          <Typography variant='h6'>My App123</Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
    </div>
  );
}
