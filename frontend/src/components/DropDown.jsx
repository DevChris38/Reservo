import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./DropDown.module.css";
import ButtonReservo from "./ButtonReservo";

function DropDown({ category, services, setChoice }) {
  const [display, setDisplay] = useState(true);

  const displayedStyle = display ? "none" : "block";

  const displayedButton = display ? "voire plus" : "voire moins";

  return (
    <div className={styles.dropDownContainer}>
      <div className={styles.dropDownContainer__title}>
        <h2>{category}</h2>
        <button
          className={styles.dropDownContainer__button}
          onClick={() => setDisplay((prevState) => !prevState)}
          type="button"
        >
          {displayedButton}
        </button>
      </div>
      <div
        style={{ display: displayedStyle }}
        className={styles.dropDownContainer__contenu}
      >
        {services.map((service) => {
          return (
            <div
              className={styles.dropDownContainer__contenu__map}
              key={service.service_name}
            >
              <p className={styles.dropDownContainer__contenu__name}>
                {service.service_name}
              </p>
              <div className={styles.dropDownContainer__contenu__reservation}>
                <p className={styles.dropDownContainer__contenu__price}>
                  {service.price} €
                </p>
                <ButtonReservo
                  handleFunction={() => {
                    setChoice(service.service_id);
                  }}
                >
                  Réserver
                </ButtonReservo>
                <p className={styles.dropDownContainer__contenu__duration}>
                  {service.duration} min
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

DropDown.propTypes = {
  category: PropTypes.string.isRequired,
  setChoice: PropTypes.func.isRequired,
  services: PropTypes.arrayOf(
    PropTypes.shape({
      duration: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      service_name: PropTypes.string.isRequired,
      category_name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DropDown;
