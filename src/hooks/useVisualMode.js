import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setValue] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function (trans, replace = false) {
    if (replace) {
      setHistory(curr => [...curr.slice(0, curr.length - 1), trans]);
    } else {
      setHistory([...history, trans]);
    }
    setValue(trans);
  };

  const back = function () {
    if (history.length > 1) {
      setValue(history[history.length - 2]);
      setHistory(curr => curr.slice(0, curr.length - 1));
    }
  };

  return {
    mode,
    transition,
    back
  };
}