import React from "react";
import MemoryItem from "./MemoryItem";

const Memory = (props) => {
  let memo = props.memory;
  return (
    <div className="innerBlock">
      {memo.map((ele, ind) => {
        return (
          <MemoryItem
            key={ind}
            id={ind}
            val={ele}
            onDelete={props.onDelete}
            onMemAdd={props.onMemAdd}
            onMemSub={props.onMemSub}
          />
        );
      })}
    </div>
  );
};

export default Memory;
