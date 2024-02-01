import PropTypes from "prop-types";
import styles from "./ButtonReservo.module.css";

function ButtonReservo({ handleFunction, children }) {
  return (
    <button className={styles.button} onClick={handleFunction} type="button">
      {children}
    </button>
  );
}

ButtonReservo.defaultProps = {
  handleFunction: () => {},
};

ButtonReservo.propTypes = {
  children: PropTypes.string.isRequired,
  handleFunction: PropTypes.func,
};
export default ButtonReservo;
