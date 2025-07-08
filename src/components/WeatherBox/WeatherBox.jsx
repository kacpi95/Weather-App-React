import { useCallback } from 'react';
import Loader from '../Loader/Loader';
import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';

export default function WeatherBox() {
  const handleCityChange = useCallback((nameCity) => {
    console.log('name city:', nameCity);
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      <WeatherSummary />
      <Loader />
    </section>
  );
}
