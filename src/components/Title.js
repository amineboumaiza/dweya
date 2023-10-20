function Title({ text1, text2, color1, color2, linecolor, top }) {
  return (
    <div
      style={{
        position: "relative",
        top: top,
        textAlign: "center",
        fontSize: "36px",
        fontWeight: "bold",
        marginLeft: "20px",
        cursor: "default",
      }}
    >
      <span style={{ color: color1 }}>{text1}</span>
      <span style={{ color: color2 }}> {text2}</span>
      <div
        style={{
          width: "83px",
          height: "4px",
          margin: "5px auto",
          backgroundColor: linecolor,
        }}
      ></div>
      <div
        style={{
          width: "40px",
          height: "4px",
          margin: "0px auto",
          backgroundColor: linecolor,
        }}
      ></div>
    </div>
  );
}

export default Title;
