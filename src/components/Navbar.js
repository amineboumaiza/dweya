//NADA
import panier from "../images/panier.png";
import DWEYA from "../images/logo_officiel.png";
import profil from "../images/profil.png";
import notific from "../images/notific.svg";
import profilicon from "../images/profilicon.svg";
import parametres from "../images/parametres.svg";
import deconnecter from "../images/deconnecter.svg";
import burger from "../images/menubar.svg";
import { GrLogin } from "react-icons/gr";
import styles from "../styles/Navbar.module.css";
import { NavHashLink } from "react-router-hash-link";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const [connected, setconnected] = useState(false);
  const scrollWithOffset = (el, offset) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = offset;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  const connect = useLocation().state?.connected;
  const [connect2, setconnect2] = useState(connect);
  useEffect(() => {
    if (connect2 === true) {
      setconnected(true);
    }
    if (localStorage.getItem("user")) {
      setconnected(true);
    }
  });

  const disconnect = function () {
    localStorage.removeItem("user");
    setconnected(false);
    setconnect2(false);
  };

  const resize = () => {
    const liste = document.querySelector("." + styles.itemss);
    if (window.innerWidth > 670) {
      liste.style.display = "";
    }
  };
  window.onresize = resize;

  const burgerDisplay = () => {
    const liste = document.querySelector("." + styles.itemss);
    if (!liste.style.display) {
      liste.style.display = "flex";
    } else {
      liste.style.display = "";
    }
  };

  document.onclick = function (e) {
    const liste = document.querySelector("#liste");

    if (liste.style.display === "flex" && e.target.id !== "liste") {
      liste.style.display = "";
    } else if (liste.style.display === "" && e.target.id === "profilpic") {
      liste.style.display = "flex";
    } else if (liste.style.display === "flex" && e.target.id === "profilpic") {
      liste.style.display = "";
    }
  };
  return (
    <div className={styles.main}>
      <header className={styles.container}>
        <HashLink smooth to="/#">
          <img className={styles.logo} src={DWEYA} />
        </HashLink>

        <nav className={styles.items}>
          <NavHashLink className={styles.navBarItem} smooth to="/#">
            Acceuil
          </NavHashLink>
          <NavHashLink className={styles.navBarItem} smooth to="/products/#">
            Produits
          </NavHashLink>
          <NavHashLink
            className={styles.navBarItem}
            smooth
            to="/#contact"
            scroll={(e1) => scrollWithOffset(e1, 100)}
          >
            Contacter nous
          </NavHashLink>
          <NavHashLink
            className={styles.navBarItem}
            smooth
            to="/#apropos"
            scroll={(e1) => scrollWithOffset(e1, -160)}
          >
            A propos
          </NavHashLink>
        </nav>
        <div className={styles.actions}>
          <div className={styles.boss}>
            <img src={profil} className={styles.profilePic} id="profilpic" />
            <div className={styles.liste} id="liste">
              {connected && (
                <div className={styles.listeLine}>
                  <HashLink className={styles.ecriture} smooth to="/#">
                    Notifications
                  </HashLink>
                  <img className={styles.photo} src={notific} />
                </div>
              )}
              {connected && (
                <div className={styles.listeLine}>
                  <a className={styles.ecriture} href="#">
                    Profile
                  </a>
                  <img className={styles.photo} src={profilicon} />
                </div>
              )}
              {connected && (
                <div className={styles.listeLine}>
                  <a className={styles.ecriture} href="#">
                    Paramètres
                  </a>
                  <img className={styles.photo} src={parametres} />
                </div>
              )}
              {connected ? (
                <div className={styles.listeLine}>
                  <HashLink
                    className={styles.ecriture}
                    smooth
                    to="/login"
                    onClick={disconnect}
                  >
                    Se déconnecter
                  </HashLink>
                  <img className={styles.photo} src={deconnecter} />
                </div>
              ) : (
                <div className={styles.listeLine}>
                  <Link className={styles.ecriture} to="/login">
                    Se Connecter
                  </Link>
                  <GrLogin className={styles.photo} />
                </div>
              )}
            </div>
          </div>
          <div className={styles.panier}>
            <HashLink
              smooth
              to="/cart#cart"
              scroll={(e1) => scrollWithOffset(e1, -120)}
            >
              <img src={panier} />
            </HashLink>
          </div>
          <img className={styles.burger} src={burger} onClick={burgerDisplay} />
        </div>
      </header>
      <nav className={styles.itemss}>
        <NavHashLink className={styles.navBarItem} smooth to="/#">
          Acceuil
        </NavHashLink>
        <NavHashLink className={styles.navBarItem} smooth to="/products/#">
          Produits
        </NavHashLink>
        <NavHashLink
          className={styles.navBarItem}
          smooth
          to="/#contact"
          scroll={(e1) => scrollWithOffset(e1, 100)}
        >
          Contacter nous
        </NavHashLink>
        <NavHashLink
          className={styles.navBarItem}
          smooth
          to="/#apropos"
          scroll={(e1) => scrollWithOffset(e1, -160)}
        >
          A propos
        </NavHashLink>
      </nav>
    </div>
  );
}

export default Navbar;
