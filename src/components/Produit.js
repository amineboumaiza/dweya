//SABER
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import img1 from "../images/img1_.png";
import img2 from "../images/img2_.png";
import img3 from "../images/img3_.png";
import { useParams } from "react-router-dom";

import styles from "../styles/Produit.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

import { useEffect, useState } from "react";
import axios from "axios";

function Produit() {
  const { id } = useParams();
  const [prod, setProd] = useState({});
  const [numbercart, setNumbercart] = useState(0);
  const ajout = () => {
    document.getElementById("ajouter").style.display = "flex";
    document.getElementById("ajouter").style.opacity = "1";
    setTimeout(() => {
      document.getElementById("ajouter").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("ajouter").style.display = "none";
      }, 200);
    }, 1500);
  };
  const addToCart = () => {
    console.log("test");
    console.log(numbercart);
    if (numbercart !== 0) {
      console.log("test2");
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
      for (let i = 0; i < numbercart; i++) {
        storedItems.push(prod.id);
      }
      localStorage.setItem("cart", JSON.stringify(storedItems));
      ajout();
    }
  };
  useEffect(() => {
    const fetchmydata = async () => {
      const res = await axios.get(`http://localhost:4000/products/${id}`);
      const myprod = res.data;
      setProd({ ...myprod });
    };
    fetchmydata();
  }, []);

  let incNum = () => {
    if (numbercart < 10) {
      setNumbercart((num) => Number(num) + 1);
    }
  };
  let decNum = () => {
    if (numbercart > 0) {
      setNumbercart((num) => num - 1);
    }
  };
  let handleChange = (e) => {
    console.log("ahla");

    setNumbercart(e.target.value);
  };

  return (
    <div className={styles.container} id="product">
      <div className={styles.ajoute} id="ajouter">
        <div>Ajouté au panier avec succès.</div>
      </div>
      <Container style={{ padding: "50px" }}>
        <Row>
          <Col xs={12} xl={8}>
            <Card
              style={{
                padding: "20px",
              }}
            >
              <Row>
                <Col xs={12} sm={4}>
                  <img
                    src={prod.img && require("../images/" + prod.img)}
                    className="img-thumbnail"
                  />
                </Col>
                <Col xs={12} sm={7}>
                  <Card.Body style={{ flex: "6" }}>
                    <Card.Title style={{ fontSize: "25px", color: "#21AE95" }}>
                      {prod.name}
                    </Card.Title>
                    <p style={{ fontSize: "14px" }}>{prod.description}</p>
                    <h3 style={{ fontSize: "20px" }}>
                      Prix : {prod.price} TND{" "}
                    </h3>{" "}
                    <div>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <button
                            className="btn "
                            style={{ backgroundColor: "#E1E1E1" }}
                            type="button"
                            onClick={decNum}
                          >
                            -
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          style={{ maxWidth: "50px" }}
                          value={numbercart}
                          onChange={handleChange}
                        />
                        <div className="input-group-prepend">
                          <button
                            className="btn "
                            style={{ backgroundColor: "#E1E1E1" }}
                            type="button"
                            onClick={incNum}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className={styles.btncontainer}>
                      <button
                        type="button"
                        className={styles.btn1}
                        onClick={() => addToCart()}
                      >
                        Ajouter Au Panier{" "}
                        <MdAddShoppingCart></MdAddShoppingCart>
                      </button>
                      <HashLink smooth to="/products/#">
                        <button className={styles.btn2}>Retour</button>
                      </HashLink>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={12} xl={1}></Col>
          <Col xs={12} xl={3}>
            <Card>
              <Row>
                <Col xs={3}>
                  <img src={img1} style={{ paddingTop: "30px" }} />
                </Col>
                <Col xs={9}>
                  <Card.Body style={{ flex: "4", lineHeight: "1em" }}>
                    <h4 style={{ fontSize: "18px", lineHeight: "1em" }}>
                      Livraison à domicile
                    </h4>
                    <p style={{ fontSize: "16px", lineHeight: "1em" }}>
                      Frais de livraison : 7TND
                    </p>
                    <ul
                      style={{
                        fontSize: "10px",
                        lineHeight: "1em",
                      }}
                    >
                      <li>Grande Tunis</li>
                      <li>Nabeul</li>
                    </ul>
                  </Card.Body>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <img src={img2} style={{ padding: "30px 20px" }} />
                </Col>
                <Col xs={9}>
                  <Card.Body style={{ flex: "6", lineHeight: "normal" }}>
                    <h4 style={{ fontSize: "18px" }}>Facile à payer</h4>
                    <p style={{ fontSize: "10px", paddingLeft: "20px" }}>
                      Vous pouvez payer facilement en ligne avec une carte
                      bancaire ou une carte E-dinar
                    </p>
                  </Card.Body>
                </Col>
              </Row>
              <Row>
                <Col xs={3}>
                  <img src={img3} style={{ padding: "30px 20px" }} />
                </Col>
                <Col xs={9}>
                  <Card.Body style={{ lineHeight: "normal" }}>
                    <h4 style={{ fontSize: "18px" }}>
                      Suivre le livreur en temps réel
                    </h4>
                    <p style={{ fontSize: "10px", paddingLeft: "20px" }}>
                      Vous pouvez suivez vos medicaments du pharmacie jusqu’au
                      vous.
                    </p>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <h2 style={{ fontSize: "28px", marginTop: "30px" }}>Détails</h2>
        <hr></hr>
        <div style={{ paddingLeft: "40px" }}>
          <p style={{ fontSize: "16px" }}>Aucun détail supplémentaire.</p>
        </div>

        <h2 style={{ fontSize: "28px", marginTop: "40px" }}>INDICATIONS:</h2>
        <hr></hr>
        <div style={{ paddingLeft: "40px" }}>
          <p style={{ fontSize: "16px" }}>Aucune indication.</p>
        </div>
      </Container>
    </div>
  );
}

export default Produit;
