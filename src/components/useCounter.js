import { useState } from "react";

function useCounter() {
  const [state, setState] = useState(0);
  const increase = () => setState(state + 1);
  const decrease = () => setState(state - 1);
  const reset = () => setState(0);
  const setnumber = () => setState(state + 5);
  return { increase, reset, decrease, setnumber, state };
}

export default useCounter;
