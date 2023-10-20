//MALEK

import Title from "./Title";
import styles from "../styles/Homesection5.module.css";
import img1 from "../images/partner1.png";

function Homesection5() {
  return (
    <div className={styles.section5container}>
      <div className={styles.titlecontainer}>
        <Title
          top="-40px"
          text1="Nos"
          color1="white"
          text2="Partenaires"
          color2="#225276"
          linecolor="#225276"
        ></Title>
      </div>
      <div className={styles.imagescontainer}>
        <div className={styles.malek}>
          <img className={styles.image1} src={img1} alt="img1"></img>
        </div>
      </div>
    </div>
  );
}
export default Homesection5;
