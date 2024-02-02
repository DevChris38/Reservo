import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ButtonReservo from "../components/ButtonReservo";
import Services from "../components/Services";
import Infos from "../components/Infos";
import Acces from "../components/Acces";
import Avis from "../components/Avis";
import styles from "./Home.module.css";
import Calendrier from "../components/Calendrier";

function Home() {
  const [choice, setChoice] = useState("infos");
  const [dataPro] = useState(useLoaderData());
  const [rdv, setRdv] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reservation/1`)
      .then((response) => response.json())
      .then((parsedResponse) => setRdv(parsedResponse));
  }, []);

  const handleDelete = async (date, customer) => {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/reservation`,
      {
        method: "DELETE",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date,
          customer,
        }),
      }
    );
    return response.json();
  };

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeContainer__name}>{dataPro.name}</h1>
      <p>{dataPro.activity}</p>
      <img
        className={styles.homeContainer__image}
        src="/src/assets/Elodie1.webp"
        alt=""
      />
      {choice === "infos" || choice === "acces" || choice === "avis" ? (
        <ButtonReservo handleFunction={() => setChoice("services")}>
          Prendre Rdv
        </ButtonReservo>
      ) : null}

      {typeof choice === "number" && (
        <div className={styles.homeInformations}>
          <Calendrier idPro={dataPro.id} idService={choice} />
        </div>
      )}

      {choice === "services" && (
        <div className={styles.homeInformations}>
          <Services id={dataPro.id} choice={choice} setChoice={setChoice} />
        </div>
      )}

      {choice === "infos" || choice === "acces" || choice === "avis" ? (
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
      ) : null}
      <h2 className={styles.rdvTitle}>Mes rendez-vous à venir</h2>
      {rdv &&
        rdv.map((reservation) => {
          const event = new Date(reservation.date_beginning);
          const formattedEvent = event.toLocaleDateString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
          });
          return (
            <div
              key={reservation.date_beginning}
              className={styles.homeInformations__rdv}
            >
              <p className={styles.homeInformations__rdv__name}>
                {reservation.service_name}
              </p>
              <p className={styles.homeInformations__rdv__event}>
                {formattedEvent}
              </p>
              <div className={styles.homeInformations__rdv__buttons}>
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(
                      reservation.date_beginning,
                      reservation.customer_id
                    );
                    window.location.reload();
                  }}
                >
                  supprimer
                </button>
                <button
                  onClick={() => {
                    handleDelete(
                      reservation.date_beginning,
                      reservation.customer_id
                    );
                    setChoice(reservation.service_id);
                  }}
                  type="button"
                >
                  modifier
                </button>
              </div>
            </div>
          );
        })}
      <h2 className={styles.rdvTitle}>Mes rendes-vous passés</h2>
    </div>
  );
}

export default Home;
