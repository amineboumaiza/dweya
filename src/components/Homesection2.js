//MOHAMED AMINE
import styles from "../styles/Homesection2.module.css";
import vector_1 from "../images/house.png";
import vector_2 from "../images/S2Vector.png";
import Title from "./Title";
import Btn from "./Btn";
import { HashLink } from "react-router-hash-link";
function Titresec2({ text1, text2, color1, color2 }) {
  return (
    <div style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "50px" }}>
      <span style={{ color: color1 }}>{text1}</span>
      <span style={{ color: color2 }}> {text2}</span>
    </div>
  );
}

function Textsec2({ color }) {
  return (
    <div style={{ color: "black", fontSize: "18px", marginBottom: "40px" }}>
      <span>assure la livraison à domicile des produits </span>
      <span style={{ color: color }}>pharmaceutiques</span>
      <span> et </span>
      <span style={{ color: color }}>parapharmaceutiques.</span>
    </div>
  );
}

function Homesection2() {
  return (
    <div id="apropos">
      <Title
        text1="Qui "
        color1="#46EDA7"
        text2="sommes-nous?"
        color2="black"
        linecolor="#46EDA7"
      ></Title>
      <div className={styles.container}>
        <div>
          <img className={styles.house} src={vector_1} alt={"house"} />
        </div>
        <div className={styles.box}>
          <img src={vector_2} alt="" />
          <div className={styles.rel}>
            <Titresec2
              text1="Plateforme "
              color1="#1E5772"
              text2="Dweya"
              color2="#21AEA6"
            ></Titresec2>
            <Textsec2 color="#46EDA7"></Textsec2>
            <HashLink  smooth to="/login/#" >
            <Btn>Commencer maintenant</Btn>
            </HashLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homesection2;
