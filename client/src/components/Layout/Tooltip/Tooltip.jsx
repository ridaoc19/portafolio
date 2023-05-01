import React from 'react';

function Tooltip({ children, text, color, position }) {

  switch (position) {
    case "left":
      position = { border: `1px solid ${color}`, top: "-5px", right: "105%" }
      break;
    case "right":
      position = { border: `1px solid ${color}`, top: "-5px", left: "105%" }
      break;
    case "top":
      position = { border: `1px solid ${color}`, width: "120px", bottom: "100%", left: "50%", marginLeft: "-60px" }
      break;
    case "bottom":
      position = { border: `1px solid ${color}`, width: "120px", top: "100%", left: "50%", marginLeft: "-60px", }
      break;
    default:
      break;
  }

  return (
    <>
      <div className="tooltip" >
        {children}
        <span className="tooltiptext" style={position}>{text}</span>
      </div>
    </>
  );
}

export default Tooltip;