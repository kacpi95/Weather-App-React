import styles from './PickCity.module.scss';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import Button from '../Button/Button';

export default function PickCity({ action }) {
  const [city, setCity] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    action(city);
    setCity('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.pickCityForm}>
      <label>
        <TextInput
          placeholder='Enter city name...'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <Button>Search</Button>
    </form>
  );
}
