import style from "../styles/Homesection4.module.css";

function Card2({ cardImg, title, text1, text2, text3, number }) {
  return (
    <div className={style.cardContainer}>
      <div className={style.bg}></div>
      <span className={style.spanNumber}>{number}</span>
      <div className={style.imgContainer}>
        <img src={cardImg} alt=""></img>
      </div>
      <h3 className={style.cardTitle}>{title}</h3>
      <p className={style.cardParagraph}>
        {text1}
        <span className={style.spanColor}>{text2}</span>
        {text3}
      </p>
    </div>
  );
}

export default Card2;
