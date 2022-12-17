import React from "react";
import HistoryItem from "./HistoryItem";
import DeleteIcon from "@mui/icons-material/Delete";

const History = (props) => {
  let ar = props.hist;
  return (
    <div className="innerBlock">
      {ar.map((ele, ind) => {
        return (
          <HistoryItem
            key={ind}
            que={ele.que}
            ans={ele.ans}
            send={props.send}
          />
        );
      })}
      <button id="deleteHist" onClick={props.onDeleteHist}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default History;
