import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <h1>Login Page</h1>
      <NavLink to="/">Home</NavLink>
    </div>
  );
}
