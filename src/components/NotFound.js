import { BiErrorAlt } from "react-icons/bi";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        flexDirection: "column",
      }}
    >
      <h1>
        Erreur <span style={{ color: "#00BFA6" }}>404</span> <BiErrorAlt />
      </h1>
      <h3>
        Page <span style={{ color: "#00BFA6" }}>non</span> trouvée
      </h3>
    </div>
  );
}

export default NotFound;
