import styles from "../styles/ListProductBtn.module.css";

function ListProductBtn({
  number,
  setPage,
  elementsPerPage,
  productList,
  setMesProduits,
}) {
  return (
    <button
      type="button"
      className={styles.btn}
      style={{ width: "40px" }}
      onClick={() => {
        setPage(number);
        setMesProduits([
          ...productList.slice(number, number + elementsPerPage),
        ]);
      }}
    >
      {number / elementsPerPage + 1}
    </button>
  );
}

export default ListProductBtn;
