import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styles from "./Acces.module.css";

function Acces({ adresse }) {
  const [map, setMap] = useState();

  const mapFormattedAdresse = adresse.split(" ").join("+");

  const fetchMap = async () => {
    const fetched = await fetch(
      `https://maps.googleapis.com/maps/api/staticmap?center=${mapFormattedAdresse},FR&zoom=17&size=400x400&markers=${mapFormattedAdresse},FR&key=AIzaSyD4LsnD7w5TTYAL_zNXIu6eJOj7cg22WWI`
    );
    const blob = await fetched.blob();
    const url = URL.createObjectURL(blob);
    setMap(url);
  };

  useEffect(() => {
    fetchMap();
  }, []);

  return (
    <div>
      {map && <img className={styles.Acces__image} src={map} alt="Map" />}
      <p className={styles.Acces__adresse}>{adresse}</p>
    </div>
  );
}

Acces.propTypes = {
  adresse: PropTypes.string.isRequired,
};

export default Acces;
