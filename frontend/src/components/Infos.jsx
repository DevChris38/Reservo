import PropTypes from "prop-types";
import styles from "./Infos.module.css";

function Infos({ description, website, phone }) {
  return (
    <div>
      <section>
        <p className={styles.homeInformations__p__description}>{description}</p>
      </section>
      <section>
        <p className={styles.homeInformations__p__inline}>Site internet : </p>
        <p className={styles.homeInformations__p__inline__mail}>{website}</p>
      </section>
      <section>
        <p className={styles.homeInformations__p__inline}>Téléphone : </p>
        <p className={styles.homeInformations__p__inline__mail}>{phone}</p>
      </section>
    </div>
  );
}

Infos.propTypes = {
  description: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Infos;
