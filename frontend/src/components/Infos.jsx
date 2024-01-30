import styles from "./Infos.module.css";

function Infos() {
  return (
    <div>
      <section>
        <p className={styles.homeInformations__p__description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maiores
          eveniet beatae asperiores sed ut nihil! Voluptatem esse ratione at
          expedita laboriosam tenetur dignissimos quidem accusantium, nemo sequi
          vel natus non quae molestiae nesciunt quas doloribus? Fugit est rerum
          modi eaque maxime.
        </p>
      </section>
      <section>
        <p className={styles.homeInformations__p__inline}>Site internet : </p>
        <p className={styles.homeInformations__p__inline__mail}>
          toto@totoland.fr
        </p>
      </section>
      <section>
        <p className={styles.homeInformations__p__inline}>Téléphone : </p>
        <p className={styles.homeInformations__p__inline__mail}>
          06 XX XX XX XX
        </p>
      </section>
    </div>
  );
}

export default Infos;
