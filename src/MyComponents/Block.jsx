import React from "react";
import NavBar from "./NavBar";

const Block = (props) => {
  return (
    <>
      <div className="blockHM">
        <NavBar
          closeBlock={props.closeBlock}
          hist={props.hist}
          memory={props.memory}
          send={props.send}
          onDeleteHist={props.onDeleteHist}
          onDelete={props.onDelete}
          onMemAdd={props.onMemAdd}
          onMemSub={props.onMemSub}
        />
      </div>
    </>
  );
};

export default Block;
