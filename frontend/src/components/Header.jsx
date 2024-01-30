import styles from "./Header.module.css";
import Button from "./Button";

function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src="./src/assets/reservo_img.png" alt="logo" />
      <Button>Alice. M</Button>
    </div>
  );
}

export default Header;
