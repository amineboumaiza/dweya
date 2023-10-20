//AMINE
import Card from "./Card";
import Title from "./Title";

import card1 from "../images/card1.svg";
import card2 from "../images/card2.svg";
import card3 from "../images/card3.svg";
import card4 from "../images/card4.svg";
import deliveryGirl from "../images/delivery_girl.svg";

import styles from "../styles/Homesection3.module.css";


function Homesection3() {
  return <div className={styles.section3container}> 
  <img src={deliveryGirl} className={styles.deliverygirl} alt=""></img>
  <div className={styles.titlecontainer}>
  <Title top="-50px" text1="Pourquoi " color1="white" text2="Dweya?" color2="#225276" linecolor="#225276"></Title>
  </div>
  <div className={styles.cardscontainer}>
    <Card cardImg={card1} cardTitle="Service Rapide" cardParagraph="Livraison de vos médicaments en moins de 30min." borderColor="#7DE596"
    type={true}></Card>
    <Card cardImg={card2} cardTitle="Facile à utiliser" cardParagraph="Vous pouvez passer votre commande par un seul clic." borderColor="#55C597"
    ></Card>
    <Card cardImg={card3} cardTitle="Bien sécurisé" cardParagraph="On respecte votre confidentialité 
et on vous garanti la sécurité des transactions. " borderColor="#369E9F" type={true}>
    </Card>
    <Card cardImg={card4} cardTitle="Frais réduits" cardParagraph="Les frais de paiement et de transport sont ainsi minimisés." borderColor="#225276"></Card>
  </div>
  </div>;
}

export default Homesection3;
