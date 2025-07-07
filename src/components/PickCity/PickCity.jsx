import styles from './PickCity.module.scss';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import Button from '../Button/Button';

export default function PickCity() {
  const [city, setCIty] = useState('');

  return (
    <form className={styles.pickCityForm}>
      <label>
        <TextInput
          placeholder='Enter city name...'
          value={city}
          onChange={(e) => setCIty(e.targer.value)}
        />
      </label>
      <Button>Search</Button>
    </form>
  );
}
