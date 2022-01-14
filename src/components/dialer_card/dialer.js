import CallIcon from "@mui/icons-material/Call";
import StarBorderPurple500SharpIcon from "@mui/icons-material/StarBorderPurple500Sharp";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import { useState, useEffect } from "react";
function Dialer(params) {
  const [number, setNumber] = useState("");
  // Function for adding the number to string when you clik on any number.
  function handleAdd(num) {
    if (num != null) {
      setNumber(number.concat(num));
    }
  }
  // Function for removing the number from string when you clik on backkey.
  function handleRemove() {
    setNumber(number.slice(0, -1));
    console.log(number);
  }
  return (
    <div className="dialer_Background">
      <div className="dialer_card_inner">
        {/* dynamic number container */}
        <div className="diler_item_row number">{number}</div>

        {/* Five rows of numbers and btns*/}
        <div className="diler_item_row row1">
          <div className="diler_item">
            <div
              className="dialer_items_number"
              onClick={(e) => {
                handleAdd(e.target.innerHTML);
              }}
            >
              1
            </div>
            <div className="dialer_items_alphabate"></div>
          </div>
          <div className="diler_item">
            <div
              className="dialer_items_number"
              onClick={(e) => {
                handleAdd(e.target.innerHTML);
              }}
            >
              2
            </div>
            <div className="dialer_items_alphabate">ABC</div>
          </div>
          <div className="diler_item">
            <div
              className="dialer_items_number"
              onClick={(e) => {
                handleAdd(e.target.innerHTML);
              }}
            >
              3
            </div>
            <div className="dialer_items_alphabate">DEF</div>
          </div>
        </div>
        <div className="diler_item_row row2">
          <div className="diler_item">
            <div
              className="dialer_items_number"
              onClick={(e) => {
                handleAdd(e.target.innerHTML);
              }}
            >
              4
            </div>
            <div className="dialer_items_alphabate">HIJ</div>
          </div>
          <div className="diler_item">
            <div
              className="dialer_items_number"
              onClick={(e) => {
                handleAdd(e.target.innerHTML);
              }}
            >
              5
            </div>
            <div className="dialer_items_alphabate">KLM</div>
          </div>
          <div className="diler_item">
            <div
              className="dialer_items_number"
              onClick={(e) => {
                handleAdd(e.target.innerHTML);
              }}
            >
              6
            </div>
            <div className="dialer_items_alphabate">NOP</div>
          </div>
        </div>
        <div className="diler_item_row row3">
          <div className="diler_item">
            <div
              className="dialer_items_number"
              onClick={(e) => {
                handleAdd(e.target.innerHTML);
              }}
            >
              7
            </div>
            <div className="dialer_items_alphabate">QRS</div>
          </div>
          <div className="diler_item">
            <div
              className="dialer_items_number"
              onClick={(e) => {
                handleAdd(e.target.innerHTML);
              }}
            >
              8
            </div>
            <div className="dialer_items_alphabate">TVW</div>
          </div>
          <div className="diler_item">
            <div
              className="dialer_items_number"
              onClick={(e) => {
                handleAdd(e.target.innerHTML);
              }}
            >
              9
            </div>
            <div className="dialer_items_alphabate">XYZ</div>
          </div>
        </div>
        <div className="diler_item_row row4">
          <div className="diler_item">
            <div
              className="dialer_items_number"
              onClick={(e) => {
                handleAdd(e.target.innerHTML);
              }}
            >
              *
            </div>
            <div className="dialer_items_alphabate"></div>
          </div>
          <div className="diler_item">
            <div
              className="dialer_items_number"
              onClick={(e) => {
                handleAdd(e.target.innerHTML);
              }}
            >
              0
            </div>
            <div className="dialer_items_alphabate"></div>
          </div>
          <div className="diler_item">
            <div
              className="dialer_items_number"
              onClick={(e) => {
                handleAdd(e.target.innerHTML);
              }}
            >
              #
            </div>
            <div className="dialer_items_alphabate"></div>
          </div>
        </div>
        <div className="diler_item_row row5">
          <div className="diler_item">
            <StarBorderPurple500SharpIcon />
          </div>
          <div className="diler_item callItem">
            <CallIcon />
          </div>
          <div className="diler_item" onClick={handleRemove}>
            <KeyboardBackspaceSharpIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dialer;
