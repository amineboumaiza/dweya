import styles from "../styles/toppage.module.css";
import vector from "../images/Toppagevector.png";

function Toppage({ children, bgImg }) {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <p className={styles.text}>{children}</p>
      </div>
      {bgImg && <img src={vector} alt={vector} id={styles.vector} />}
    </div>
  );
}

export default Toppage;
