import styles from "./Avis.module.css";

function Avis() {
  return (
    <div className={styles.Avis__container}>
      <img
        className={styles.Avis__image}
        src="/src/assets/etoiles.png"
        alt="etoiles"
      />
      <h2>sur 8 avis clients</h2>
      <div className={styles.Avis__liste}>
        <img
          className={styles.Avis__imagePetite}
          src="/src/assets/etoiles.png"
          alt="etoiles"
        />
        <p>le 23 décembre 2023</p>
        <img
          className={styles.Avis__imagePetite}
          src="/src/assets/etoiles.png"
          alt="etoiles"
        />
        <p>le 23 décembre 2023</p>
        <img
          className={styles.Avis__imagePetite}
          src="/src/assets/etoiles.png"
          alt="etoiles"
        />
        <p>le 23 décembre 2023</p>
        <img
          className={styles.Avis__imagePetite}
          src="/src/assets/etoiles.png"
          alt="etoiles"
        />
        <p>le 23 décembre 2023</p>
      </div>
    </div>
  );
}

export default Avis;
