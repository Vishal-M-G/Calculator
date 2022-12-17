import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import BackspaceIcon from "@mui/icons-material/Backspace";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Tooltip from "@mui/material/Tooltip";
import Block from "./Block";

const App = () => {
  let [exp, setExp] = useState("");
  let [blockBtn, invertBlock] = useState(false);
  let [hist, modifyHist] = useState([]);
  let [memory, modifyMemory] = useState([]);
  let que, ans;

  const clicked = (ele) => setExp(exp + ele.target.innerText);

  const evaluateMe = () => {
    try {
      que = exp;
      ans = eval(exp).toString();
      if (que === ans) return;
      setExp(ans);
      hist.unshift({ que: que, ans: ans });
    } catch {
      alert("Invalid Expression");
    }
  };

  return (
    <>
      <div className="calciBody">
        <div className="display">
          <input
            readOnly
            type="text"
            id="disp"
            value={exp}
            onChange={(ele) => setExp(ele.target.value)}
          />
        </div>
        <div className="btnContainer">
          <Tooltip title="Clear all Memory" arrow disableInteractive>
            <button className="special" onClick={() => modifyMemory([])}>
              MC
            </button>
          </Tooltip>
          <Tooltip title="Recall Memory" arrow disableInteractive>
            <button
              className="special"
              onClick={() => (memory.length > 0 ? setExp(memory[0]) : null)}
            >
              MR
            </button>
          </Tooltip>
          <Tooltip title="Memory Add" arrow disableInteractive>
            <button
              className="special"
              onClick={() => {
                if (memory.length < 1) return;
                let [x, ...rem] = memory;
                try {
                  var k = eval(exp);
                  if (exp === k.toString()) {
                    x = parseFloat(x) + parseFloat(exp);
                    modifyMemory([x.toString(), ...rem]);
                  } else {
                    throw Error;
                  }
                } catch {
                  alert("Invalid Function");
                }
              }}
            >
              M+
            </button>
          </Tooltip>
          <Tooltip title="Memory Substract" arrow disableInteractive>
            <button
              className="special"
              onClick={() => {
                if (memory.length < 1) return;
                let [x, ...rem] = memory;
                try {
                  var k = eval(exp);
                  if (exp === k.toString()) {
                    x = parseFloat(x) - parseFloat(exp);
                    modifyMemory([x.toString(), ...rem]);
                  } else {
                    throw Error;
                  }
                } catch {
                  alert("Invalid Function");
                }
              }}
            >
              M-
            </button>
          </Tooltip>
          <Tooltip title="Memory Store" arrow disableInteractive>
            <button
              className="special"
              onClick={() => {
                if (exp.length > 0) {
                  try {
                    var k = eval(exp);
                    if (exp === k.toString()) modifyMemory([exp, ...memory]);
                    else {
                      throw Error;
                    }
                  } catch {
                    alert("Invalid Function");
                  }
                }
              }}
            >
              MS
            </button>
          </Tooltip>

          <Tooltip title="Square root" arrow disableInteractive>
            <button
              onClick={() => {
                if (exp.length > 0) {
                  que = `sqrt(${exp})`;
                  ans = Math.sqrt(parseFloat(exp)).toString();
                  setExp(ans);
                  hist.unshift({ que: que, ans: ans });
                }
              }}
            >
              &radic;
            </button>
          </Tooltip>
          <Tooltip title="Square" arrow disableInteractive>
            <button
              onClick={() => {
                if (exp.length > 0) {
                  que = `sqr(${exp})`;
                  ans = (parseFloat(exp) ** 2).toString();
                  setExp(ans);
                  hist.unshift({ que: que, ans: ans });
                }
              }}
            >
              &#119909;
              <sup>2</sup>
            </button>
          </Tooltip>
          <Tooltip title="1 upon x" arrow disableInteractive>
            <button
              onClick={() => {
                if (exp.length > 0) {
                  que = `1/(${exp})`;
                  ans = (1 / parseFloat(exp)).toString();
                  setExp(ans);
                  hist.unshift({ que: que, ans: ans });
                }
              }}
            >
              1/&#119909;
            </button>
          </Tooltip>
          <Tooltip title="Clear" arrow disableInteractive>
            <button
              className="special"
              onClick={() => setExp("")}
              style={{ flexBasis: "38%" }}
            >
              C
            </button>
          </Tooltip>
          <button onClick={clicked}>9</button>
          <button onClick={clicked}>8</button>
          <button onClick={clicked}>7</button>
          <Tooltip title="BackSpace" arrow disableInteractive>
            <button
              className="special"
              onClick={() => {
                var s = exp.toString();
                setExp(s.substring(0, s.length - 1));
              }}
              style={{ flexBasis: "38%" }}
            >
              <BackspaceIcon />
            </button>
          </Tooltip>
          <button onClick={clicked}>6</button>
          <button onClick={clicked}>5</button>
          <button onClick={clicked}>4</button>
          <button onClick={() => setExp(exp + "*")}>
            <CloseIcon />
          </button>
          <button onClick={() => setExp(exp + "/")}>&#247;</button>
          <button onClick={clicked}>3</button>
          <button onClick={clicked}>2</button>
          <button onClick={clicked}>1</button>
          <button onClick={() => setExp(exp + "-")}>
            <RemoveIcon />
          </button>
          <button onClick={() => setExp(exp + "+")}>
            <AddIcon />
          </button>
          <button onClick={clicked}>.</button>
          <button onClick={clicked}>0</button>
          <button onClick={clicked}>00</button>
          <button
            className="special"
            onClick={evaluateMe}
            style={{ flexBasis: "38%" }}
          >
            =
          </button>
        </div>
        {blockBtn && (
          <Block
            closeBlock={() => invertBlock(!blockBtn)}
            hist={hist}
            memory={memory}
            send={(sent) => setExp(sent)}
            onDeleteHist={() => modifyHist([])}
            onDelete={(id) => {
              modifyMemory(() => {
                return memory.filter((ele, ind) => {
                  return ind !== id;
                });
              });
            }}
            onMemAdd={(id) => {
              let [x, ...rem] = memory;
              x = parseFloat(x) + parseFloat(memory[id]);
              modifyMemory([x.toString(), ...rem]);
            }}
            onMemSub={(id) => {
              let [x, ...rem] = memory;
              x = parseFloat(x) - parseFloat(memory[id]);
              modifyMemory([x.toString(), ...rem]);
            }}
          />
        )}
        {!blockBtn && (
          <>
            <Tooltip title="History/Memory" arrow disableInteractive>
              <button id="blockOpener" onClick={() => invertBlock(!blockBtn)}>
                <ArrowRightIcon id="arrowRight" />
              </button>
            </Tooltip>
          </>
        )}
      </div>
      <div
        style={{ position: "absolute", top: "0", left: "0", color: "white" }}
      >
        &copy;Copyright 2022, All Rights Reserved | Vishal M G
      </div>
    </>
  );
};

export default App;
