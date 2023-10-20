//AHMAD
import Toppage from "./Toppage";
import styles from "../styles/listeproduits.module.css";
import stylesBtn from "../styles/ListProductBtn.module.css";
import Title from "./Title";
import upload from "../images/upload.png";
import offre1 from "../images/offreexemple1.jpg";
import offre2 from "../images/sephora.jpg";
import offre3 from "../images/garnier.jpg";
import { FaSearch, FaBriefcaseMedical } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Offre from "./Offre";
import OneProduct from "./OneProduct";
import ListProductBtn from "./ListProductBtn";
import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { useLocation } from "react-router-dom";
import axios from "axios";

function Listeproduits() {
  let productList = [
    {
      id: 1,
      name: "test1",
      price: 15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Cardiologie",
    },
    {
      id: 2,
      name: "test2",
      price: 20,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Analgésiques",
    },
    {
      id: 3,
      name: "test3",
      price: 20.15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Analgésiques",
    },
    {
      id: 4,
      name: "test4",
      price: 20.15,
      img: "exempleproduit.png",
      type: "paramédicale",
      categorie: "Analgésiques",
    },
    {
      id: 5,
      name: "test5",
      price: 20.15,
      img: "exempleproduit.png",
      type: "paramédicale",
      categorie: "Antibiotiques",
    },
    {
      id: 1,
      name: "test6",
      price: 15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Antibiotiques",
    },
    {
      id: 2,
      name: "test7",
      price: 20,
      img: "exempleproduit.png",
      type: "paramédicale",
      categorie: "Antibiotiques",
    },
    {
      id: 3,
      name: "test8",
      price: 20.15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Antibiotiques",
    },
    {
      id: 4,
      name: "test9",
      price: 20.15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Antibiotiques",
    },
    {
      id: 5,
      name: "test10",
      price: 20.15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Antibiotiques",
    },
    {
      id: 1,
      name: "test11",
      price: 15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Cardiologie",
    },
    {
      id: 2,
      name: "test12",
      price: 20,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Cardiologie",
    },
    {
      id: 3,
      name: "test13",
      price: 20.15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Cardiologie",
    },
    {
      id: 4,
      name: "test14",
      price: 20.15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Cardiologie",
    },
    {
      id: 5,
      name: "test15",
      price: 20.15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Cardiologie",
    },
    {
      id: 1,
      name: "test16",
      price: 15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Cardiologie",
    },
    {
      id: 2,
      name: "test17",
      price: 20,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Cardiologie",
    },
    {
      id: 3,
      name: "test18",
      price: 20.15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Cardiologie",
    },
    {
      id: 4,
      name: "test19",
      price: 20.15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Cardiologie",
    },
    {
      id: 5,
      name: "test20",
      price: 20.15,
      img: "exempleproduit.png",
      type: "médicale",
      categorie: "Cardiologie",
    },
  ];
  useEffect(() => {
    const dataprod = async () => {
      let res = await axios.get("http://localhost:4000/products");
      productList = res.data;
      setProduits([...productList]);

      setMesProduits([...productList.slice(0, elementsPerPage)]);
      if (location.state) {
        setdata(Data);
      }
    };
    dataprod();
  }, []);
  const scrollWithOffset = (el, offset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };
  // search bar data
  const location = useLocation();
  const Data = location.state?.Data;

  const [data, setdata] = useState("");

  const [type1, setType1] = useState(true);
  const [type2, setType2] = useState(true);
  const [categorie1, setCategorie1] = useState(true);
  const [categorie2, setCategorie2] = useState(true);
  const [categorie3, setCategorie3] = useState(true);
  const [filtrer, setfiltrer] = useState(false);

  const [produits, setProduits] = useState([]);

  const elementsPerPage = 9;

  const [page, setPage] = useState(0); //page contains the index of the first element
  const [mesProduits, setMesProduits] = useState([
    ...productList.slice(0, elementsPerPage),
  ]);

  const arrowDownClick = () => {
    document.getElementById("arrowD").style.display = "none";
    document.getElementById("arrowU").style.display = "inline-block";
    document.getElementById("filters").style.borderBottomLeftRadius = "10px";
    document.getElementById("filters").style.borderBottomRightRadius = "10px";
    document.getElementById("sectionsFilterGroup").style.display = "block";
  };

  const arrowUpClick = () => {
    document.getElementById("arrowU").style.display = "none";
    document.getElementById("arrowD").style.display = "inline-block";
    document.getElementById("filters").style.borderBottomLeftRadius = "0px";
    document.getElementById("filters").style.borderBottomRightRadius = "0px";
    document.getElementById("sectionsFilterGroup").style.display = "none";
  };

  const clickFilter = () => {
    if (!filtrer) {
      arrowDownClick();
    } else {
      arrowUpClick();
    }
    setfiltrer((a) => !a);
  };

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

  return (
    <div className={styles.container} id="list">
      <div className={styles.ajoute} id="ajouter">
        <div>Ajouté au panier avec succès.</div>
      </div>
      {/* <Toppage bgImg={false}>
        Chercher vos médicaments ou scanner votre ordannance!
      </Toppage>
      <div className={styles.upload}>
        <div>
          <img src={upload} alt="upload" />
        </div>
        <div id="listeproducts">
          <button
            type="button"
            className={styles.btn}
            style={{ paddingRight: "60px", paddingLeft: "60px" }}
          >
            Ajouter une ordonnance médicale
          </button>
        </div> */}

      <div className={styles.container2}>
        <Toppage bgImg={false}>
          Chercher vos médicaments ou scanner votre ordannance!
        </Toppage>

        <div className={styles.upload}>
          <div>
            <img src={upload} alt="upload" />
          </div>
          <div>
            <button
              type="button"
              className={styles.btn}
              style={{ paddingRight: "60px", paddingLeft: "60px" }}
            >
              Ajouter une ordonnance médicale
            </button>
          </div>
        </div>
        <h4 className={styles.h4}>ou bien</h4>
        <div className={styles.search}>
          <div className={styles.inputContainer}>
            <div className={styles.medIcon}>
              <FaBriefcaseMedical />
            </div>
            <input
              type="text"
              placeholder="Chercher des Médicaments"
              value={data}
              onChange={(event) => {
                setdata(event.target.value);
              }}
            />
          </div>
          <div>
            <button type="button" className={styles.btn}>
              <FaSearch />
              <span>Chercher</span>
            </button>
          </div>
        </div>
        <div className={styles.searchSection}>
          <div className={styles.filters + " " + styles.boxShadow} id="filters">
            <h5 onClick={clickFilter} style={{ cursor: "pointer" }}>
              Filtrer par
              <div id="arrowD" className={styles.arrowDown}>
                <IoIosArrowDown />
              </div>
              <div id="arrowU" className={styles.arrowUp}>
                <IoIosArrowUp />
              </div>
            </h5>
            <div id="sectionsFilterGroup" className={styles.fltrGrp}>
              <section className={styles.filterSection}>
                <h4>Type:</h4>
                <div>
                  <div name="type" value="medicale" className={styles.checkBox}>
                    <input
                      type="checkbox"
                      checked={type1}
                      onChange={() => setType1((t) => !t)}
                    />
                  </div>
                  médicales
                </div>
                <div>
                  <div className={styles.checkBox}>
                    <input
                      name="type"
                      value="paramedicale"
                      type="checkbox"
                      checked={type2}
                      onChange={() => setType2((t) => !t)}
                    />
                  </div>
                  paramédicales
                </div>
              </section>
              <section className={styles.filterSection}>
                <h4>Catégories:</h4>
                <div>
                  <div className={styles.checkBox}>
                    <input
                      type="checkbox"
                      checked={categorie1}
                      onChange={() => setCategorie1((c) => !c)}
                    />
                  </div>
                  Analgésiques
                </div>
                <div>
                  <div className={styles.checkBox}>
                    <input
                      type="checkbox"
                      checked={categorie2}
                      onChange={() => setCategorie2((c) => !c)}
                    />
                  </div>
                  Antibiotiques
                </div>
                <div>
                  <div className={styles.checkBox}>
                    <input
                      type="checkbox"
                      checked={categorie3}
                      onChange={() => setCategorie3((c) => !c)}
                    />
                  </div>
                  Cardiologie
                </div>
              </section>
            </div>
          </div>
          <div className={styles.products + " " + styles.boxShadow}>
            <div className={styles.list}>
              {produits.map((product, i) => {
                if (product.name.toUpperCase().includes(data.toUpperCase())) {
                  if (
                    (type1 && product.type === "médicale") ||
                    (type2 && product.type === "paramédicale")
                  ) {
                    if (
                      (categorie1 && product.categorie === "Analgésiques") ||
                      (categorie2 && product.categorie === "Antibiotiques") ||
                      (categorie3 && product.categorie === "Cardiologie")
                    ) {
                      return (
                        <OneProduct
                          price={product.price}
                          name={product.name}
                          img={
                            product.img && require("../images/" + product.img)
                          }
                          key={"product" + i}
                          idP={product.id}
                          ajout={ajout}
                        />
                      );
                    }
                  }
                }
              })}
            </div>
            {/* <div className={styles.paging}>
            <button type="button" className={stylesBtn.btn}>
              précédente
            </button>

            {productList.map((product, i) => {
              if (i % elementsPerPage === 0) {
                return (
                  <ListProductBtn
                    number={i}
                    key={"btnpage" + i}
                    setPage={setPage}
                    page={page}
                    productList={productList}
                    setMesProduits={setMesProduits}
                    elementsPerPage={elementsPerPage}
                  />
                );
              }
              return "";
            })}

            <button type="button" className={stylesBtn.btn}>
              suivante
          <div>
            <button
              type="button"
              className={styles.btn}
              style={{ paddingRight: "60px", paddingLeft: "60px" }}
            >
              Ajouter une ordonnance médicale
            </button>
          </div> */}
          </div>
        </div>
        <div className={styles.monPanier}>
          <HashLink
            to={"/cart#cart"}
            smooth
            className={styles.panier}
            scroll={(e1) => scrollWithOffset(e1, -120)}
            style={{ textDecoration: "none" }}
          >
            <button type="button" className={styles.btn}>
              Mon Panier <HiOutlineShoppingCart /> <MdOutlineArrowForwardIos />
            </button>
          </HashLink>
        </div>
        <div className={styles.offres}>
          <Title
            text1="offres"
            text2="du mois"
            color1="#46EDA7"
            color2="#000000"
            linecolor="#46EDA7"
          />
          <div className={styles.offresListe}>
            <Offre image={offre1} pourcentage="10" link="http://facebook.com" />
            <Offre image={offre2} pourcentage="20" link="http://facebook.com" />
            <Offre image={offre3} pourcentage="30" link="http://facebook.com" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listeproduits;
