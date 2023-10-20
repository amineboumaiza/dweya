import styles from "../styles/Footer2.module.css";
import axios from "axios";
import { useState } from "react";
import mask from "../images/whitelogo.png";
import facebook from "../images/fa.png";
import instagram from "../images/insta.png";
import linkedIn from "../images/lin.png";
import tel from "../images/tel.png";
import emailIcon from "../images/email.svg";
import { NavHashLink } from "react-router-hash-link";
import { HashLink } from "react-router-hash-link";
import { TiTickOutline } from "react-icons/ti";

function Footer2() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subj, setsubj] = useState("");
  const [text, settext] = useState("");
  const [submitted, setsubmitted] = useState(false);

  const contact = async function (event) {
    event.preventDefault();
    await axios.post(`http://localhost:4000/messages/`, {
      id: `${Math.floor(Math.random() * 10000)}${Math.floor(
        Math.random() * 10000
      )}`,
      name: name,
      email: email,
      subject: subj,
      message: text,
    });
    setsubmitted(true);
    setname("");
    setemail("");
    setsubj("");
    settext("");
  };

  return (
    <footer id="contact" className={styles.footer}>
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
      <div className={styles.contactUsContainer}>
        <div className={styles.text}>
          <h3>Contactez-Nous</h3>
          <p>
            Avez-vous des questions ou voulez-vous collaborer avec nous ?
            N’hesitez pas de nous contacter :
          </p>
        </div>
        <div className={styles.formContainer}>
          {!submitted ? (
            <form onSubmit={(event) => contact(event)}>
              <input
                required
                type="text"
                className={styles.name}
                placeholder="Nom"
                value={name}
                onChange={(event) => setname(event.target.value)}
              ></input>
              <input
                required
                type="text"
                className={styles.email}
                placeholder="email"
                value={email}
                onChange={(event) => setemail(event.target.value)}
              ></input>
              <input
                required
                type="text"
                className={styles.subject}
                placeholder="sujet"
                value={subj}
                onChange={(event) => setsubj(event.target.value)}
              ></input>
              <textarea
                required
                row="5"
                className={styles.msg}
                placeholder="message"
                value={text}
                onChange={(event) => settext(event.target.value)}
              ></textarea>
              <button className={styles.submitBtn}>Envoyer</button>
            </form>
          ) : (
            <h6
              style={{ color: "white", fontSize: "20px", paddingTop: "20px" }}
            >
              Message envoyé avec succes
              <TiTickOutline color="white" fontSize="25px"></TiTickOutline>
            </h6>
          )}
        </div>
      </div>
      <div className={styles.actualFooter}>
        <HashLink to="/#">
          <img
            width="100px"
            src={mask}
            alt="Dweya logo"
            style={{ objectFit: "cover" }}
          ></img>
        </HashLink>
        <div className={styles.navbar}>
          <NavHashLink to="/#" className={styles.NavHashLink}>
            <span className={styles.navbarLink}>Acceuil</span>
          </NavHashLink>
          <NavHashLink to="/products#" className={styles.NavHashLink}>
            <span className={styles.navbarLink}>Produits</span>
          </NavHashLink>
          <NavHashLink to="/signup" className={styles.NavHashLink}>
            <span className={styles.navbarLink}>S'inscrire</span>
          </NavHashLink>
          <NavHashLink to="/login" className={styles.NavHashLink}>
            <span className={styles.navbarLink}>Se connecter</span>
          </NavHashLink>
        </div>
        <div className={styles.contactInfo}>
          <span>
            <img src={emailIcon} className={styles.tel} />
            contact@dweya.tn
          </span>
          <span>
            <img src={tel} className={styles.tel} />
            +216 54 389 306
          </span>
        </div>
        <div className={styles.socialMedia}>
          <a target="_blank" href="https://www.facebook.com/Dweya.tn">
            <img src={facebook} />
          </a>
          <a target="_blank" href="https://www.instagram.com/dweya_tn/">
            <img src={instagram} />
          </a>
          <a target="_blank" href="https://www.linkedin.com">
            <img src={linkedIn} />
          </a>
        </div>
        <h5 className={styles.madeWithlove}>Made with ♡ by INNOVAR</h5>
      </div>
    </footer>
  );
}
export default Footer2;
