import { HashLink } from "react-router-hash-link";
import styles from "../styles/signedup.module.css";
import sucess from "../images/success.svg";
import Btn from "./Btn";

function Bienvenue() {
  return (
    <div className={styles.SignedUpContainer}>
      <div className={styles.Message}>
        <h4 style={{ fontSize: "40px" }}>
          Bienvenue chez
          <br /> Dweya!
        </h4>
      </div>
      <div className={styles.imgContainer}>
        <img src={sucess}></img>
      </div>
      <h3>Aller à la page Produits</h3>
      <HashLink to="/products">
        {/* <button className={styles.btn}>Se connecter</button> */}
        <Btn>Nos Produits</Btn>
      </HashLink>
    </div>
  );
}

export default Bienvenue;
