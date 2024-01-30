import { useState } from "react";
import Button from "../components/Button";
import Infos from "../components/Infos";
import Acces from "../components/Acces";
import Avis from "../components/Avis";
import styles from "./Home.module.css";

function Home() {
  const [choice, setChoice] = useState("infos");
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeContainer__name}>Elodie Beauté</h1>
      <p>Salon d'esthétique</p>
      <img
        className={styles.homeContainer__image}
        src="src/assets/Elodie1.webp"
        alt=""
      />
      <Button>Prendre Rdv</Button>
      <div className={styles.homeInformations}>
        <nav className={styles.homeInformations__nav}>
          <div>
            <button
              className={styles.homeInformations__button}
              type="button"
              onClick={() => setChoice("infos")}
            >
              Infos
            </button>
            <button
              className={styles.homeInformations__button}
              type="button"
              onClick={() => setChoice("acces")}
            >
              Accès
            </button>
            <button
              className={styles.homeInformations__button}
              type="button"
              onClick={() => setChoice("avis")}
            >
              Avis
            </button>
          </div>
        </nav>
        <div className={styles.homeInformations__contained}>
          {choice === "infos" && <Infos />}
          {choice === "acces" && <Acces />}
          {choice === "avis" && <Avis />}
        </div>
      </div>
      <h2>Mes rendez-vous à venir</h2>
      <h2>Mes rendes-vous passés</h2>
    </div>
  );
}

export default Home;
