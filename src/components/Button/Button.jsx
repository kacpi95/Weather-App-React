import styles from './Button.module.scss';
import clsx from 'clsx';

export default function Button({ children, className }) {
  return <button className={clsx(styles.button, className)}>{children}</button>;
}
