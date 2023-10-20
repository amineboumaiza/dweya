//AMINE
import Title from "./Title";
import Card from "./Card2";

import Card1 from "../images/Section4Card1.svg";
import Card2 from "../images/Section4Card2.svg";
import Card3 from "../images/Section4Card3.svg";
import Card4 from "../images/Section4Card4.svg";
import Card5 from "../images/Section4Card5.svg";

import styles from "../styles/Homesection4.module.css";


function Homesection4() {
  return <div>
    <Title text1="Comment " color1="#46EDA7" text2="ça marche?" color2="black" linecolor="#46EDA7"></Title>
    <div className={styles.cardsContainer}>
      <Card number="1" cardImg={Card1} title="S'inscrire" text1="Créer un compte en cliquant sur le bouton " text2="S’inscrire." text3=""></Card>
      <Card number="2"cardImg={Card2} title="Choisir le Produit" text1="" text2="Chercher " text3="le produit qui vous y avez besoin."></Card>
      <Card number="3" cardImg={Card3} title="Ajouter au panier" text1="Ajouter votre produit choisi au " text2="panier." text3=""></Card>
      <Card number="4" cardImg={Card4} title="Confirmer la commande" text1="Faites une " text2="commande " text3="de livraison."></Card>
      <Card number="5" cardImg={Card5} title="Livraison" text1="" text2="Livraison " text3="du produit dans un intervalle de temps précis"></Card>
    </div>
  </div>;
}

export default Homesection4;
