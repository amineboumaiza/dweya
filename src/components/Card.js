import styles from "../styles/Homesection3.module.css";

function Card({cardImg,borderColor,cardTitle,cardParagraph,type}){
    const classes= type?styles.type1:"";
    return <div style={{borderColor:borderColor}} className={styles.card + " " + classes}>

            <img className={styles.cardimg} src={cardImg} alt=""></img>
            <h3 className={styles.cardtitle}>{cardTitle}</h3>
        <div style={{width:"100%"}}>
            <p className={styles.cardparagraph}>{cardParagraph}</p>
        </div>
    </div>
}

export default Card;