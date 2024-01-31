import PropTypes from "prop-types";
import styles from "./Calendrier.module.css";
import DropDownTime from "./DropDownTime";

function Calendrier({ idPro, idService }) {
  const arrayDate = [];
  const arrayEnglish = [];

  for (let i = 0; i < 6; i += 1) {
    const newDate = new Date(Date.now() + i * (60 * 60 * 24 * 1000));
    const formattedDate = newDate.toLocaleString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const englishDate = newDate.toDateString();
    arrayDate.push(formattedDate);
    arrayEnglish.push(englishDate);
  }

  const arrayTime = [];

  for (let i = 0; i < 9; i += 1) {
    const time = 9 + i;
    arrayTime.push(time);
  }

  const dates = arrayDate.map((date, index) => {
    return (
      <DropDownTime
        key={date}
        category={date}
        services={arrayTime}
        english={arrayEnglish[index]}
        idPro={idPro}
        idService={idService}
      />
    );
  });

  return <div className={styles.serviceCalendrier}>{dates}</div>;
}

Calendrier.propTypes = {
  idPro: PropTypes.number.isRequired,
  idService: PropTypes.number.isRequired,
};

export default Calendrier;
