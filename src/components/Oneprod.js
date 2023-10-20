import styles from "../styles/command.module.css";

function Oneprod({ prodimg, proddesc, prodprice, quantite }) {
  return (
    <div className={styles.oneprod}>
      <div className={styles.imgContainer}>
        <img
          className={styles.prodimg}
          src={prodimg}
          style={{ maxHeight: "100px", maxWidth: "200px", objectFit: "cover" }}
          alt=""
        ></img>
      </div>
      <p className={styles.proddesc}>{proddesc}</p>
      <h3 className={styles.prodprice}>{prodprice}</h3>
      <h4 className={styles.quantite}>{quantite}</h4>
    </div>
  );
}

export default Oneprod;
