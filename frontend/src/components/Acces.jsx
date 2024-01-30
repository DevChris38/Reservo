import { useEffect, useState } from "react";
import styles from "./Acces.module.css";

function Acces() {
  const [map, setMap] = useState();

  const fetchMap = async () => {
    const fetched = await fetch(
      "https://maps.googleapis.com/maps/api/staticmap?center=26+Rue+Chevalier+42380+Saint-Bonnet-le-Ch%C3%A2teau,FR&zoom=17&size=400x400&markers=26+Rue+Chevalier+42380+Saint-Bonnet-le-Ch%C3%A2teau,FR&key=AIzaSyD4LsnD7w5TTYAL_zNXIu6eJOj7cg22WWI"
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
      <p className={styles.Acces__adresse}>
        26 Rue Chevalier , 42380 Saint-Bonnet-le-Château
      </p>
    </div>
  );
}

export default Acces;
