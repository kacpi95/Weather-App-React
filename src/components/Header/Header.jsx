import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <h1 className={styles.title}>WeatherApp</h1>
    </header>
  );
}
