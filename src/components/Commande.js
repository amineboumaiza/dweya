//NOUR
import Toppage from "./Toppage";
import Oneprod from "./Oneprod";
import Title from "./Title";
import styles from "../styles/command.module.css";
import prod1 from "../images/prod1.png";
import prod2 from "../images/prod2.png";
import prod3 from "../images/prod3.png";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import ErrorMsg from "./ErrorMsg";
import axios from "axios";

let productList = [
  {
    id: 1,
    name: "test1",
    price: 15,
    img: "exempleproduit.png",
    description: "test ttttt ttttt tttt tttttt ttt",
  },
  {
    id: 2,
    name: "test2",
    price: 20,
    img: "exempleproduit.png",
    description: "testttttttttttttttttttttttt",
  },
  {
    id: 3,
    name: "test3",
    price: 20.15,
    img: "exempleproduit.png",
    description: "testttttttttttttttttttttttt",
  },
  {
    id: 4,
    name: "test4",
    price: 20.15,
    img: "exempleproduit.png",
    description: "testttttttttttttttttttttttt",
  },
  {
    id: 5,
    name: "test5",
    price: 20.15,
    img: "exempleproduit.png",
    description: "testttttttttttttttttttttttt",
  },
  {
    id: 6,
    name: "test6",
    price: 20.15,
    img: "exempleproduit.png",
    description: "testttt ttttttttttttt ttttttt",
  },
];

function Commande() {
  const location = useLocation();
  const [myItemsList, setMyItemsList] = useState([]);
  const [myQ, setMyQ] = useState([]);

  const [myname, setMyname] = useState("");
  const [numero, setNumero] = useState("");
  const [ville, setVille] = useState("");
  const [codepostal, setCodepostal] = useState("");
  const [adress, setAdress] = useState("");

  const [totalQte, setTotalQte] = useState(0);
  const [totalPrix, setTotalPrix] = useState(0);

  const [canClick, setCanClick] = useState(false);

  const [verifnom, setVerifnom] = useState(false);
  const [verifnum, setVerifnum] = useState(false);
  const [verifville, setVerifville] = useState(false);
  const [verifcode, setVerifcode] = useState(false);
  const [verifad, setVerifad] = useState(false);

  useEffect(() => {
    const dataprod = async () => {
      let res = await axios.get("http://localhost:4000/products");
      productList = res.data;

      let prods = [];
      let items = location?.state?.items;
      if (items === undefined || items === null) {
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
              prods = [...prods, newProduct];
            }
          });
        }
      } else {
        console.log("test");

        prods = [...items];
      }
      console.log(prods);
      const uniqueProducts = [...new Set([...prods])];
      calculeQuantite([...uniqueProducts], prods);
      setMyItemsList(uniqueProducts);
    };
    dataprod();
  }, []);

  useEffect(() => {
    if (myname.length > 1) {
      setVerifnom(true);
    } else {
      setVerifnom(false);
    }
    if (numero.length > 7) {
      setVerifnum(true);
    } else {
      setVerifnum(false);
    }
    if (ville.length > 1) {
      setVerifville(true);
    } else {
      setVerifville(false);
    }
    if (codepostal.length === 4) {
      setVerifcode(true);
    } else {
      setVerifcode(false);
    }
    if (adress.length > 4) {
      setVerifad(true);
    } else {
      setVerifad(false);
    }
    if (verifnom && verifnum && verifville && verifcode && verifad) {
      setCanClick(true);
    } else {
      setCanClick(false);
    }
  }, [myname, numero, ville, codepostal, adress]);

  const scrollWithOffset = (el, offset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const calculeQuantite = (mesproduits, prods) => {
    let lesquantites = [];
    console.log(mesproduits);
    let totalQ = 0;
    let totalP = 0;
    for (let i = 0; i < mesproduits.length; i++) {
      lesquantites[i] = 0;
      for (let j = 0; j < prods.length; j++) {
        if (mesproduits[i].id === prods[j].id) {
          lesquantites[i] = lesquantites[i] + 1;
          totalQ++;
          totalP += mesproduits[i].price;
        }
      }
    }
    setTotalQte(totalQ);
    setTotalPrix(totalP.toFixed(3));
    setMyQ([...lesquantites]);
    console.log(lesquantites);
  };

  return (
    <div id="order">
      <Toppage bgImg={true}>COMMANDER MAINTENANT!</Toppage>
      <div className={styles.command1}>
        <Title
          text1="Details"
          text2="de votre commande"
          color1="#46EDA7"
          color2="#000000"
          linecolor="#46EDA7"
        />
        <div className={styles.prodcontainer}>
          {myItemsList.map((item, i) => (
            <Oneprod
              key={"itemMed" + i}
              proddesc={item.name}
              prodprice={item.price + " TND"}
              prodimg={item.img && require("../images/" + item.img)}
              quantite={myQ[i]}
            />
          ))}
          {myItemsList.length === 0 && <h6>aucun produit à commander..</h6>}
        </div>
        <div className={styles.nbrProduit}>Total de {totalQte} produits</div>
        <div className={styles.prixTotal}>
          <p>
            <span className={styles.word1}>Prix total:</span> {totalPrix} TND
          </p>
        </div>
      </div>

      <div className={styles.infoPersonnelles}>
        <Title
          text1="Informations"
          text2="personnelles"
          color1="#46EDA7"
          color2="#000000"
          linecolor="#46EDA7"
        />
        <div style={{ margin: "30px 0px" }}>
          <ErrorMsg
            text="Votre nom doit contenir au moins 2 caractères"
            noborder={true}
            nodisplay={verifnom}
          />
          <ErrorMsg
            text="Votre numero doit contenir au moins 8 chiffres"
            noborder={true}
            nodisplay={verifnum}
          />
          <ErrorMsg
            text="Votre ville doit contenir au moins 2 caractères"
            noborder={true}
            nodisplay={verifville}
          />
          <ErrorMsg
            text="Votre code postal doit contenir exactement 4 chiffres"
            noborder={true}
            nodisplay={verifcode}
          />
          <ErrorMsg
            text="Votre adresse doit contenir au moins 5 caractères"
            noborder={true}
            nodisplay={verifad}
          />
        </div>
        <div className={styles.formulaire}>
          <form name="form" method="post">
            <div className={styles.wrapper}>
              <div className={styles.box}>
                <label className={styles.label}>Nom et prénom:</label>
                <div className={styles.davdouv}>
                  <input
                    className={styles.input}
                    value={myname}
                    onChange={(event) => setMyname(event.target.value)}
                    id="name"
                    type="text"
                    name="name"
                    required
                  />
                </div>
              </div>

              <div className={styles.box}>
                <label className={styles.label}>Numero de télephone:</label>
                <div className={styles.davdouv}>
                  <input
                    className={styles.input}
                    value={numero}
                    onChange={(event) => setNumero(event.target.value)}
                    id="numero"
                    type="number"
                    name="numero"
                    required
                  />
                </div>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.box}>
                <label className={styles.label}>Ville:</label>
                <div className={styles.davdouv}>
                  <input
                    className={styles.input}
                    value={ville}
                    onChange={(event) => setVille(event.target.value)}
                    id="ville"
                    type="text"
                    name="ville"
                    required
                  />
                </div>
              </div>
              <div className={styles.box}>
                <label className={styles.label}>Code postal:</label>
                <div className={styles.davdouv}>
                  <input
                    className={styles.input}
                    value={codepostal}
                    onChange={(event) => setCodepostal(event.target.value)}
                    id="codePostal"
                    type="number"
                    name="codePostal"
                    required
                  />
                </div>
              </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.box}>
                <label className={styles.label}>Adresse:</label>
                <div className={styles.davdouv2}>
                  <input
                    className={styles.adress + " " + styles.input}
                    value={adress}
                    onChange={(event) => setAdress(event.target.value)}
                    type="text"
                    name="adress"
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.buttons}>
        <div className={styles.button1}>
          <HashLink
            to={"/cart#cart"}
            scroll={(e1) => scrollWithOffset(e1, -120)}
          >
            <button className={styles.retour}> {"<"} Retour</button>
          </HashLink>
        </div>
        <div className={styles.button2}>
          <HashLink
            style={!canClick ? { pointerEvents: "none", opacity: "0.3" } : null}
            smooth
            to="/ordersuccess#success"
            scroll={(e1) => scrollWithOffset(e1, -120)}
            state={{
              success: true,
              order: {
                myItemsList,
                myQ,
                myname,
                numero,
                ville,
                codepostal,
                adress,
                totalQte,
                totalPrix,
              },
            }}
          >
            <button className={styles.commander}>Commander {">"}</button>
          </HashLink>
        </div>
      </div>
    </div>
  );
}

export default Commande;
