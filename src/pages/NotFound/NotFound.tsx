import styles from './styles.module.scss';

export function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Страница не найдена</p>
    </div>
  );
}
