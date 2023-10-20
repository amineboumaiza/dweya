import styles from "../styles/btn.module.css";

function Btn({ children }) {
  return (
    <div>
      <button className={styles.btn}>{children}</button>
    </div>
  );
}

export default Btn;
