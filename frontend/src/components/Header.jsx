import { useState } from "react";
import styles from "./Header.module.css";
import ButtonReservo from "./ButtonReservo";
import { useInfosContext } from "../services/UserContext";

function Header() {
  const { login } = useInfosContext();
  const { userData } = useInfosContext();
  const [displayHeader, setDisplayHeader] = useState("none");
  const [email, setEmail] = useState("mail");
  const [password, setPassword] = useState("password");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Appel à l'API pour créer un nouvel utilisateur
      const response = await fetch("http://localhost:3310/api/login", {
        method: "post",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: email,
          password,
        }),
      });

      if (response.status === 200) {
        const auth = await response.json();
        login(auth.user);
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };
  return (
    <div className={styles.headerContainer}>
      <img src="/src/assets/reservo_img.png" alt="logo" />
      {userData === null ? (
        <div>
          {displayHeader === "none" ? (
            <ButtonReservo handleFunction={() => setDisplayHeader("block")}>
              Se connecter
            </ButtonReservo>
          ) : (
            <ButtonReservo handleFunction={handleSubmit}>Valider</ButtonReservo>
          )}
          <div style={{ display: displayHeader }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </div>
        </div>
      ) : (
        <ButtonReservo>{userData.firstname}</ButtonReservo>
      )}
    </div>
  );
}

export default Header;
