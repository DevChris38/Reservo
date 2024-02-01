import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./DropDown.module.css";
import ButtonReservo from "./ButtonReservo";

function DropDownTime({ category, services, english, idService }) {
  const [display, setDisplay] = useState(true);

  const displayedStyle = display ? "none" : "block";

  const displayedButton = display ? "voire plus" : "voire moins";

  const handleReservation = async (horaire) => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/reservation`,
      {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          horaire,
          service: idService,
          customer: 1,
        }),
      }
    );
    return response.json();
  };

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
          const horaire = new Date(english);
          horaire.setHours(service, 0, 0);

          const heures = horaire.toLocaleDateString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
          });
          const splittedHeures = heures.split(" ");
          return (
            <div
              className={styles.dropDownContainer__contenu__map}
              key={horaire}
            >
              <ButtonReservo handleFunction={() => handleReservation(horaire)}>
                {splittedHeures[1]}
              </ButtonReservo>
            </div>
          );
        })}
      </div>
    </div>
  );
}

DropDownTime.propTypes = {
  category: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.string).isRequired,
  english: PropTypes.string.isRequired,
  idService: PropTypes.number.isRequired,
};

export default DropDownTime;
