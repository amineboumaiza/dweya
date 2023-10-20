import { useState } from "react";
function IncDecCounter({ setNumbercartbercart, numbercart }) {
  let [num, setNumbercart] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNumbercart(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNumbercart(num - 1);
    }
  };
  let handleChange = (e) => {
    console.log("ahla");

    setNumbercart(e.target.value);
  };
  return (
    <>
      <div>
        <div className="input-group">
          <div className="input-group-prepend">
            <button
              className="btn "
              style={{ backgroundColor: "#E1E1E1" }}
              type="button"
              onClick={decNum}
            >
              -
            </button>
          </div>
          <input
            type="text"
            className="form-control"
            style={{ maxWidth: "50px" }}
            value={numbercart}
            onChange={handleChange}
          />
          <div className="input-group-prepend">
            <button
              className="btn "
              style={{ backgroundColor: "#E1E1E1" }}
              type="button"
              onClick={incNum}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default IncDecCounter;
