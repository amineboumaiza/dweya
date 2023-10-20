//AZIZ
import logo from "../images/GRP.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Auth.module.css";
import ErrorMsg from "./ErrorMsg";
import fb from "../images/fb.png";
import G from "../images/G.png";
import login from "../images/login.png";
import line from "../images/Line1.png";
import doc from "../images/signupdoc.png";
import Btn from "./Btn";
import axios from "axios";

const Auth = ({ signup }) => {
  const navigate = useNavigate();
  const [addclass, setaddclass] = useState("");
  useEffect(() => {
    if (signup) setaddclass(styles["right-panel-active"]);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [sname, setSname] = useState("");
  const [semail, setSemail] = useState("");
  const [spassword, setSpassword] = useState("");
  const [sconfirm, setSconfirm] = useState("");
  // usestate error
  const [error, seterror] = useState(false);
  const [sErrorConfirm, setsErrorConfirm] = useState(false);
  const [sErrorPassword, setsErrorPassword] = useState(false);
  const [sErrorEmail, setsErrorEmail] = useState(false);

  const loginUser = async (event) => {
    event.preventDefault();
    const res = await axios.get(`http://localhost:4000/users/`);
    const myusers = res.data;

    myusers.find((user) => {
      if (user.email === email && user.password === password) {
        localStorage.setItem("user", user.id);

        navigate("/bienvenue", { state: { connected: true } });
        return true;
      }
      return false;
    });
    seterror(true);
  };

  const signUpUser = async (event) => {
    event.preventDefault();
    const res = await axios.get(`http://localhost:4000/users/`);
    const myusers = res.data;
    let flag;
    flag = true;

    setsErrorConfirm(false);
    setsErrorEmail(false);
    setsErrorPassword(false);

    if (
      myusers.find((user) => {
        if (user.email === semail) {
          return true;
        }
        return false;
      })
    ) {
      setsErrorEmail(true);
      flag = false;
    }
    if (spassword !== sconfirm) {
      setsErrorConfirm(true);
      flag = false;
    }
    if (spassword.length < 6) {
      setsErrorPassword(true);
      flag = false;
    }

    if (flag) {
      await axios.post(`http://localhost:4000/users/`, {
        id: `${Math.floor(Math.random() * 10000)}${Math.floor(
          Math.random() * 10000
        )}`,
        name: sname,
        email: semail,
        password: spassword,
      });

      navigate("/signedup");
    } else {
      return console.log("no");
    }
  };

  return (
    <div className={`${styles.container} ${addclass}`} id="container">
      <div className={styles.formcontainer + " " + styles.signupcontainer}>
        <form onSubmit={(event) => signUpUser(event)} className={styles.form}>
          <img className="nav--logo" src={logo} alt="logo" />
          <h1 className={styles.h1}>Créer un nouveau compte</h1>
          <input
            required
            className={styles.input}
            type="text"
            placeholder="Nom et Prénom"
            value={sname}
            onChange={(event) => setSname(event.target.value)}
          />

          <input
            required
            className={styles.input}
            type="email"
            placeholder="E-mail"
            value={semail}
            onChange={(event) => setSemail(event.target.value)}
          />
          <ErrorMsg
            text={"E-mail déja utilisé"}
            nodisplay={!sErrorEmail}
            noborder
          ></ErrorMsg>
          <input
            required
            className={styles.input}
            type="password"
            placeholder="Mot de passe"
            value={spassword}
            onChange={(event) => setSpassword(event.target.value)}
          />
          <ErrorMsg
            text={"Votre mot de passe doit contenir au moin 6 caractères"}
            nodisplay={!sErrorPassword}
            noborder
          ></ErrorMsg>
          <input
            required
            className={styles.input}
            type="password"
            placeholder="Confirmer le mot de passe"
            value={sconfirm}
            onChange={(event) => setSconfirm(event.target.value)}
          />
          <ErrorMsg
            text={"Les mot de passes ne correspondnt pas"}
            nodisplay={!sErrorConfirm}
            noborder
          ></ErrorMsg>

          <Btn className={styles.mobileaffichetext} type="submit">
            S'inscrire
          </Btn>
          <h6
            className={styles.textforaziz}
            id="njarebaziz"
            onClick={() => setaddclass("")}
          >
            Se connecter{" >"}
          </h6>
        </form>
      </div>
      <div className={styles.formcontainer + " " + styles.signincontainer}>
        <form onSubmit={(event) => loginUser(event)} className={styles.form}>
          <img className="nav--logo" src={logo} alt="logo" />
          <h1 className={styles.h1}>Se connecter à votre compte</h1>
          <h2 className={styles.h2}>Se connecter avec</h2>
          <div className={styles.social}>
            <img className={styles.fbiconlogin} src={fb} alt="" />

            <img className={styles.googleiconlogin} src={G} alt="" />
          </div>
          <h2 className={styles.h2}>Ou utilisez votre mail</h2>
          <div>
            <ErrorMsg
              text="E-mail ou mot de passe invalide"
              nodisplay={!error}
            ></ErrorMsg>
          </div>
          <input
            className={styles.input}
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <Btn id="signUp">Se connecter</Btn>
          <br />

          <img className="nav--line" src={line} alt="line" />

          <h3 className={styles.h3}>mot de passe oublié?</h3>
          <h6
            className={styles.textforaziz}
            id="njarebaziz"
            onClick={() => setaddclass(styles["right-panel-active"])}
          >
            {"< "}S'inscrire
          </h6>
        </form>
      </div>
      <div className={styles.overlaycontainer}>
        <div className={styles.overlay}>
          <div classname={styles.overlaypanel + " " + styles.overlayleft}>
            <img className={styles.login} src={login} alt="login" />
            <br />
            <div className={styles.content}>
              <div className={styles.ha}>
                Avez-vous déja
                <br /> un compte?
              </div>{" "}
              <br />
              <div className={styles.hb}>accéder à votre compte</div>
              <br />
              <button
                className={styles.button + " " + styles.ghost2}
                id="signIn"
                onClick={() => setaddclass("")}
              >
                S'identifier
              </button>
            </div>
          </div>
          <div className={styles.overlaypanel + " " + styles.overlayright}>
            <img className={styles.document} src={doc} alt="doc" />
            <br />
            <h4 className={styles.h4}>Nouveau ici?</h4>
            <h5 className={styles.h5}>Créer votre compte</h5>
            <br />
            <button
              className={styles.button + " " + styles.ghost2}
              id="signUp"
              onClick={() => setaddclass(styles["right-panel-active"])}
            >
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
