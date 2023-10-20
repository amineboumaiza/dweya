import React from "react";
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Btn from "./Btn";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

const productList = [
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

function SuccesCommande() {
  const location = useLocation();
  const [redirect, setRedirect] = useState(false);
  const [commande, setCommande] = useState({});
  useEffect(() => {
    if (!location?.state?.success) {
      setRedirect(true);
    }
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
      if (storedItems.length === 0) {
        setRedirect(true);
      }
      localStorage.setItem("cart", JSON.stringify([]));
    }
    if (!location?.state?.success) {
      setRedirect(true);
    }
    if (
      location?.state?.order !== undefined &&
      location?.state?.order !== null
    ) {
      let r = (Math.random() + 1).toString(36).substring(2);
      let r2 = (Math.random() + 1).toString(36).substring(2);
      let maCommande = {
        num: r + r2,
        myItemsList: [...location?.state?.order.myItemsList],
        myQ: [...location.state.order.myQ],
        myname: location.state.order.myname,
        numero: location.state.order.numero,
        ville: location.state.order.ville,
        codepostal: location.state.order.codepostal,
        adress: location.state.order.adress,
        totalQte: location.state.order.totalQte,
        totalPrix: location.state.order.totalPrix,
      };
      setCommande({ ...maCommande });
    }
  }, []);
  return (
    <>
      {redirect && <Navigate to="/error" replace />}
      <div style={{ textAlign: "center" }} id="success">
        <h3 style={{ margin: "100px 0px 50px 0px", color: "#00BFA6" }}>
          commande effectuée avec succès
        </h3>
        <h6 style={{ marginTop: "50px" }}>
          numero de commande:{" "}
          <span style={{ color: "red" }}>{commande.num}</span>
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HashLink to="/">
            <Btn>
              <span style={{ marginRight: "10px" }}>
                <AiOutlineArrowLeft />
              </span>{" "}
              retour
            </Btn>
          </HashLink>
        </div>
      </div>
    </>
  );
}

export default SuccesCommande;
