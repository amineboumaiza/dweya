//MALEK

import Title from "./Title";
import styles from "../styles/Homesection6.module.css";
import visage1 from "../images/wassim.jpg";
import visage2 from "../images/ons.jpg";
import visage3 from "../images/manar.jpg";
import guillemet1 from "../images/guillemet1.png";
import guillemet2 from "../images/guillemet2.png";

function Homesection6() {
  return (
    <div className={styles.section6container}>
      <div className={styles.titlecontainer}>
        <Title
          top="20px"
          text1="Avis"
          color1="#46EDA7"
          text2="des utilisateurs"
          color2="black"
          linecolor="#46EDA7"
        ></Title>
      </div>

      <div className={styles.imagescontainer}>
        <div className={styles.box}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img className={styles.image1} src={visage1} alt="img1"></img>
          </div>
          <h1 className={styles.champs}>Wassim Abdallah</h1>
          <img className={styles.guillemet1} src={guillemet1} alt=""></img>
          <p className={styles.commentaires}>on est ravis de votre service.</p>
          <img className={styles.guillemet2} src={guillemet2} alt=""></img>
        </div>

        <div className={styles.box}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img className={styles.image1} src={visage2} alt="img1"></img>
          </div>
          <h3 className={styles.champs}>Ons Mkawar</h3>
          <img className={styles.guillemet1} src={guillemet1} alt=""></img>
          <p className={styles.commentaires}>
            votre service est excellent. Bravo pour cette excellente idee et
            bonne continuation.
          </p>
          <img className={styles.guillemet2} src={guillemet2} alt=""></img>
        </div>

        <div className={styles.box}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img className={styles.image1} src={visage3} alt="img1"></img>
          </div>
          <h5 className={styles.champs}>Manar Fessi</h5>
          <img className={styles.guillemet1} src={guillemet1} alt=""></img>
          <p className={styles.commentaires}>
            j'ai bien apprecie l'idee et le design de ce site.
          </p>
          <img className={styles.guillemet2} src={guillemet2} alt=""></img>
        </div>
      </div>
    </div>
  );
}
export default Homesection6;
