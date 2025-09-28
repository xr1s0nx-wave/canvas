import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';

export function LoginPage() {
  return <div className={styles.loginPage}><NavLink to='/asd'>Home</NavLink></div>;
}
