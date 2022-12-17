import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import History from "./History";
import Memory from "./Memory";

const NavBar = (props) => {
  let [nav, setNav] = useState(true);

  return (
    <>
      <div className="navBar">
        <button className={nav ? "active" : null} onClick={() => setNav(true)}>
          History
        </button>
        <button
          className={!nav ? "active" : null}
          onClick={() => setNav(false)}
        >
          Memory
        </button>
        <button onClick={props.closeBlock}>
          <CloseIcon />
        </button>
      </div>
      {nav ? (
        <History
          hist={props.hist}
          send={props.send}
          onDeleteHist={props.onDeleteHist}
        />
      ) : (
        <Memory
          memory={props.memory}
          onDelete={props.onDelete}
          onMemAdd={props.onMemAdd}
          onMemSub={props.onMemSub}
        />
      )}
    </>
  );
};

export default NavBar;
