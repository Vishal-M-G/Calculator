import React from "react";

const MemoryItem = (props) => {
  return (
    <div className="memBox">
      <div>
        <h5>{props.val}</h5>
      </div>
      <div className="memOptions">
        <button className="opt" onClick={() => props.onDelete(props.id)}>
          MC
        </button>
        <button className="opt" onClick={() => props.onMemAdd(props.id)}>
          M+
        </button>
        <button className="opt" onClick={() => props.onMemSub(props.id)}>
          M-
        </button>
      </div>
    </div>
  );
};

export default MemoryItem;
