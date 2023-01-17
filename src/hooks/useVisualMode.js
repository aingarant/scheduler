import { useState } from "react";

const useVisualMode = (initial) => {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);

    replace
      ? history.pop() && setHistory((prev) => [...prev, newMode])
      : setHistory((prev) => [...prev, newMode]);
  };

  const back = () => {
    if (history.length > 1) {
      history.pop();
      setMode(history[history.length - 1])
    }
  };

  return { mode, transition, back };
};

export default useVisualMode;
