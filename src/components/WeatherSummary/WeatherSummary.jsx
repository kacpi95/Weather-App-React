import styles from './WeatherSummary.module.scss';

export default function WeatherSummary() {
  return (
    <section className={styles.WeatherSummary}>
      <img
        className={styles.weatherIcon}
        src='/images/weather-icons/13d.png'
        alt='Weather icon'
      />
      <div className={styles.weatherInfo}>
        <h2>London</h2>
        <p>
          <strong>Temp:</strong>20°C
        </p>
      </div>
    </section>
  );
}
