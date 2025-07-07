import Loader from '../Loader/Loader';
import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';

export default function WeatherBox() {
  return (
    <section>
      <PickCity />
      <WeatherSummary />
      <Loader />
    </section>
  );
}
