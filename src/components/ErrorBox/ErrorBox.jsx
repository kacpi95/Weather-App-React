import styles from './ErrorBox.module.scss';
import PropTypes from 'prop-types';

export default function ErrorBox({ children }) {
  return (
    <div className={styles.errorBox}>
      <h1>
        <span className='fa fa-exclamation-triangle'>Error</span>
      </h1>
      <p>{children}</p>
    </div>
  );
}

ErrorBox.prototype = {
  children: PropTypes.string,
};
