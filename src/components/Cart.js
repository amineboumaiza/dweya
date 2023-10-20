import styles from "../styles/cart.module.css";
import { useEffect, useState } from "react";
import styles2 from "../styles/listeproduits.module.css";
import Title from "./Title";
import { HashLink } from "react-router-hash-link";
import axios from "axios";

let productList = [
  {
    id: 1,
    name: "test1",
    price: 15,
    img: "exempleproduit.png",
  },
  {
    id: 2,
    name: "test2",
    price: 20,
    img: "exempleproduit.png",
  },
  {
    id: 3,
    name: "test3",
    price: 20.15,
    img: "exempleproduit.png",
  },
  {
    id: 4,
    name: "test4",
    price: 20.15,
    img: "exempleproduit.png",
  },
  {
    id: 5,
    name: "test5",
    price: 20.15,
    img: "exempleproduit.png",
  },
  {
    id: 6,
    name: "test6",
    price: 20.15,
    img: "exempleproduit.png",
  },
];

function Cart() {
  const scrollWithOffset = (el, offset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const deleteItem = (itemId) => {
    let storedItems = [];
    let cart = localStorage.getItem("cart");
    if (!cart) {
      storedItems = [];
    }
    storedItems = JSON.parse(cart);
    if (!storedItems) {
      storedItems = [];
    }
    for (let i = 0; i < storedItems.length; i++) {
      if (storedItems[i] === itemId) {
        storedItems.splice(i, 1);
        let temporaryItems = [...myItemsList];
        temporaryItems.splice(i, 1);
        setMyItemsList(temporaryItems);
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(storedItems));
  };
  const [myItemsList, setMyItemsList] = useState([]);

  useEffect(() => {
    const dataprod = async () => {
      let res = await axios.get("http://localhost:4000/products");
      productList = res.data;

      setMyItemsList([]);
      let storedItems = [];
      let cart = localStorage.getItem("cart");
      if (!cart) {
        return;
      }
      storedItems = JSON.parse(cart);
      if (!storedItems) {
        storedItems = [];
      }
      if (Array.isArray(storedItems)) {
        storedItems.forEach((it) => {
          const newProduct = productList.find((prod) => prod.id === it);
          if (newProduct !== undefined && newProduct !== null) {
            setMyItemsList((myItems) => [...myItems, newProduct]);
          }
        });
      }
    };
    dataprod();
  }, []);

  return (
    <div>
      <div style={{ margin: "50px 0px" }} id="cart">
        <Title
          text1="mon"
          text2="panier"
          color1="#46EDA7"
          color2="#000"
          linecolor="#46EDA7"
        />
      </div>
      {myItemsList.length === 0 && (
        <div>
          <h3
            style={{
              marginTop: "50px",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            votre panier est vide...
          </h3>
          <div className={styles.btnContainer}>
            <HashLink
              smooth
              to={"/products#list"}
              scroll={(e1) => scrollWithOffset(e1, -120)}
              style={{ textDecoration: "none", marginBottom: "50px" }}
            >
              <div className={styles2.btn}>liste de produits</div>
            </HashLink>
          </div>
        </div>
      )}
      <div className={styles.container}>
        {myItemsList.map((product, id) => (
          <div key={"product" + id} className={styles.item}>
            <div>
              <HashLink
                className={styles.link}
                to={"/products/" + product.id + "#product"}
                scroll={(e1) => scrollWithOffset(e1, -120)}
              >
                <h3>{product.name}</h3>
              </HashLink>
              <h6 style={{ color: "gray" }}>{product.price} TND</h6>
            </div>
            <div
              className={styles.delete}
              onClick={() => deleteItem(product.id)}
            >
              x
            </div>
          </div>
        ))}
      </div>
      {myItemsList.length !== 0 && (
        <div className={styles.btnContainer}>
          <HashLink
            smooth
            to={"/order#order"}
            scroll={(e1) => scrollWithOffset(e1, -120)}
            style={{ textDecoration: "none" }}
            state={{ items: myItemsList }}
          >
            <div className={styles2.btn}>commander</div>
          </HashLink>
        </div>
      )}
    </div>
  );
}

export default Cart;
