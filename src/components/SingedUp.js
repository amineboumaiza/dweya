import { HashLink } from "react-router-hash-link";
import styles from "../styles/signedup.module.css";
import sucess from "../images/success.svg";
import Btn from "./Btn";

function SignedUp() {
  return (
    <div className={styles.SignedUpContainer}>
      <div className={styles.Message}>
        <h4>Succés!</h4>
      </div>
      <div className={styles.imgContainer}>
        <img src={sucess}></img>
      </div>
      <h3>Votre compte a été crée avec succes.</h3>
      <HashLink to="/login">
        {/* <button className={styles.btn}>Se connecter</button> */}
        <Btn>Se connecter</Btn>
      </HashLink>
    </div>
  );
}
export default SignedUp;
