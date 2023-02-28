import PropTypes from "prop-types";

import styles from "./styles.module.scss";

const CounterView = ({
  counterValue,
  valueDescription,
  handleIncrement,
  handleReset,
  handleDecrement,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.display}>{counterValue}</div>
      <div className={styles.description}>{valueDescription}</div>
      <div className={styles.controlButtons}>
        <button className={styles.controlButton} onClick={handleDecrement}>
          -
        </button>
        <button
          className={`${styles.controlButton} ${styles.reset}`}
          onClick={handleReset}
        >
          Reset
        </button>
        <button className={styles.controlButton} onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

CounterView.propTypes = {
  counterValue: PropTypes.number.isRequired,
  valueDescription: PropTypes.string.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
};

export default CounterView;
