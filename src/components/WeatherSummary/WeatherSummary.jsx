import styles from './WeatherSummary.module.scss';

export default function WeatherSummary({ weatherData }) {
  if (!weatherData) return null;
  const { city, icon, temp, description } = weatherData;
  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        src={`/images/weather-icons/${icon}.png`}
        alt={description}
      />
      <div className={styles.weatherInfo}>
        <h2>{city}</h2>
        <p>
          <strong>Temp: </strong>
          {temp} °C
        </p>
      </div>
    </section>
  );
}
