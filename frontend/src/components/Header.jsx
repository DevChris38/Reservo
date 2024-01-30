import styles from "./Header.module.css";
import ButtonReservo from "./ButtonReservo";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src="/src/assets/reservo_img.png" alt="logo" />
      <ButtonReservo>Alice. M</ButtonReservo>
    </div>
  );
}

export default Header;
