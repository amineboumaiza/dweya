function Titresec2({ text1, text2, color1, color2}) {
    return (
        <div style={{fontSize: "40px", fontWeight: "bold" , marginBottom: "50px"}}>
            <span style={{ color: color1 }}>{text1}</span>
            <span style={{ color: color2 }}> {text2}</span>
        </div>
    );
  }
  
  export default Titresec2;
  