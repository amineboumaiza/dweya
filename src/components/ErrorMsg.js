import styles from "../styles/tools.module.css";

function ErrorMsg({ text, noborder, nodisplay }) {
  return (
    <div
      style={
        nodisplay ? { display: "none" } : noborder ? { border: "none" } : null
      }
      className={styles.error}
    >
      {text}
    </div>
  );
}

export default ErrorMsg;
