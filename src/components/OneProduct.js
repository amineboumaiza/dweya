import styles from "../styles/oneproduct.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";

function OneProduct({ price, name, img, idP, ajout }) {
  const scrollWithOffset = (el, offset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  const addItem = (idItem, ajout) => {
    let storedItems = [];
    let cart = localStorage.getItem("cart");
    console.log(cart);
    if (!cart) {
      storedItems = [];
    }
    storedItems = JSON.parse(cart);
    if (!storedItems) {
      storedItems = [];
    }
    storedItems.push(idItem);
    localStorage.setItem("cart", JSON.stringify(storedItems));
    ajout();
  };
  return (
    <div className={styles.productContainer}>
      <HashLink
        style={{ color: "inherit", textDecoration: "inherit" }}
        to={"/products/" + idP + "#product"}
        smooth
        scroll={(e1) => scrollWithOffset(e1, -120)}
      >
        <div className={styles.img}>
          <img
            src={img}
            alt="produit"
            style={{
              maxHeight: "150px",
              maxWidth: "200px",
              objectFit: "cover",
            }}
          />
        </div>
        <div className={styles.name}>{name}</div>
      </HashLink>
      <div className={styles.price}>{price} TND</div>
      <button className={styles.btn} onClick={() => addItem(idP, ajout)}>
        <RiShoppingCartLine />
        <span>Ajouter au panier</span>
      </button>
    </div>
  );
}

export default OneProduct;
