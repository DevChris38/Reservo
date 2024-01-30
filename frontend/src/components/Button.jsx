import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ children }) {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Button;
