//MOHAMED AMINE
import styles from "../styles/Homesection1.module.css";
import vector_1 from "../images/searchvector.png";
import vector_2 from "../images/doctors.png";
import { BsSearch } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Homesection1() {
  const [dataa, setDataa] = useState("");

  const navigate = useNavigate();
  const Myfunction = (event) => {
    if (event.keyCode === 13) {
      navigate("/products", { state: { Data: dataa } });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img className={styles.vector} src={vector_1} alt={"doctors"} />
        <div className={styles.rel}>
          <div className={styles.text_1}>
            Obtenez vos médicaments en un seul clic
          </div>
          <div className={styles.text_2}>
            La première solution de livraison des médicaments en Tunisie
          </div>
          <div className={styles["search-box"]}>
            <div className={styles.input}>
              <BsSearch
                style={{ color: "#8D8D8D", width: "16px", height: "13.87px" }}
              />
              <input
                type="text"
                value={dataa}
                onChange={(event) => setDataa(event.target.value)}
                onKeyDown={(event) => Myfunction(event)}
              />
            </div>
            <HashLink to="/products#listeproducts" state={{ Data: dataa }}>
              <button className={styles.btn}>Rechercher</button>
            </HashLink>
          </div>
        </div>
      </div>

      <div className={styles.doctorsbox}>
        <img className={styles.doctors} src={vector_2} alt="doctors" />
      </div>
    </div>
  );
}

export default Homesection1;
