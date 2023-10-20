//eya
import styles from "../styles/Footer.module.css";
import mask from "../images/Mask group.png";
import fa from "../images/fa.png";
import insta from "../images/insta.png";
import lin from "../images/lin.png";
import tel from "../images/tel.png";

function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles["custom-shape-divider-top-1651879645"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles["shape-fill"]}
          ></path>
        </svg>
      </div>
      <div className={styles.iheb}>
        <div className={styles.jesser}>
          <h1 className={styles.co}> Contactez-Nous</h1>
          <p className={styles.p}>
            Avez-vous des questions ou voulez vous travailler avec nous ?<br />
            N’hesitez pas de nous contacter :
          </p>
        </div>

        <div className={styles.rami}>
          <form>
            <input
              className={styles.container1}
              type="text"
              name=""
              placeholder="Nom"
              required="required"
            />
            <input
              className={styles.container2}
              type="text"
              name=""
              placeholder="E-mail"
              required="required"
            />
            <br />
            <input
              className={styles.container3}
              type="text"
              name=""
              placeholder="Sujet"
              required="required"
            />
            <input
              className={styles.container4}
              type="text"
              name=""
              placeholder="Message"
              required="required"
            />
            <br />
            <button className={styles.container5} type="button">
              envoyer
            </button>
          </form>
        </div>
      </div>
      <div className={styles.zied}>
        <img src={mask} className={styles.amine} alt="" />
        <div className={styles.eya}>
          <a href="http://facebook.com/" className={styles.espace}>
            Accueil
          </a>
          <a href="http://facebook.com/" className={styles.espace}>
            Produits
          </a>
          <a href="http://facebook.com/" className={styles.espace}>
            s’inscrire
          </a>
          <a href="http://facebook.com/" className={styles.espace}>
            se connecter
          </a>
        </div>
        <div className={styles.contact}>
          @ contact@innovar.tn <span className={styles.span}>|</span>
          <img src={tel} alt="" />
          +216 22 222 222
        </div>
        <div className={styles.icons}>
          <img src={fa} className={styles.brands} alt="" />
          <img src={insta} className={styles.brands} alt="" />
          <img src={lin} className={styles.brands} alt="" />
        </div>
        <div className={styles.love}> made with ♡ by INNOVAR</div>
      </div>
    </div>
  );
}

export default Footer;
