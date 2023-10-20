import styles from "../styles/listeproduits.module.css";

function Offre({ image, pourcentage, link }) {
  return (
    <div>
      <a href={link} target="_blank" rel="noreferrer">
        <div className={styles.offre}>
          <img src={image} alt="offre" />
          <div className={styles.offrePourcentage}>{pourcentage}%</div>
        </div>
      </a>
    </div>
  );
}

export default Offre;
