import React from "react";

const HistoryItem = (props) => {
  return (
    <div className="historyItem" onClick={() => props.send(props.ans)}>
      <small>{props.que} =</small>
      <h5>{props.ans}</h5>
    </div>
  );
};

export default HistoryItem;
