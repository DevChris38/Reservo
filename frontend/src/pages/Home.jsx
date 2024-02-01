import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Button from "../components/Button";
import Infos from "../components/Infos";
import Acces from "../components/Acces";
import Avis from "../components/Avis";
import styles from "./Home.module.css";

function Home() {
  const [choice, setChoice] = useState("infos");
  const [dataPro] = useState(useLoaderData());

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeContainer__name}>{dataPro.name}</h1>
      <p>{dataPro.activity}</p>
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
          {choice === "infos" && (
            <Infos
              description={dataPro.description}
              website={dataPro.website}
              phone={dataPro.phone}
            />
          )}
          {choice === "acces" && <Acces adresse={dataPro.adresse} />}
          {choice === "avis" && <Avis />}
        </div>
      </div>
      <h2>Mes rendez-vous à venir</h2>
      <h2>Mes rendes-vous passés</h2>
    </div>
  );
}

export default Home;
