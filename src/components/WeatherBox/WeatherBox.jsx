import { useCallback, useState } from 'react';
import Loader from '../Loader/Loader';
import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';

export default function WeatherBox() {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = 'a59cd3bff4fa19a9bc565a470325c635';
  const handleCityChange = useCallback((nameCity) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${apiKey}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newWeatherData = {
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].main,
        };
        setWeatherData(newWeatherData);
      });
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      <WeatherSummary weatherData={weatherData} />
      <Loader />
    </section>
  );
}
