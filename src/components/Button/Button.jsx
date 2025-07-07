import styles from './Button.module.scss';
import clsx from 'clsx';

export default function Button({ props }) {
  return <button className={clsx(styles.button, props.className)}></button>;
}
