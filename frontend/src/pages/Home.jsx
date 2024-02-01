import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ButtonReservo from "../components/ButtonReservo";
import Services from "../components/Services";
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
        src="/src/assets/Elodie1.webp"
        alt=""
      />
      <ButtonReservo handleFunction={() => setChoice("services")}>
        Prendre Rdv
      </ButtonReservo>
      {choice === "services" ? (
        <div className={styles.homeInformations}>
          <Services id={dataPro.id} />
        </div>
      ) : (
        <div className={styles.homeInformations}>
          <nav className={styles.homeInformations__nav}>
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
      )}
      <h2 className={styles.rdvTitle}>Mes rendez-vous à venir</h2>
      <h2 className={styles.rdvTitle}>Mes rendes-vous passés</h2>
    </div>
  );
}

export default Home;
