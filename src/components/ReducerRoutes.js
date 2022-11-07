import { useReducer } from "react";

const ReducerRoutes = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialState = {
    counter: 0,
  };
  function reducer(state, action) {
    if (action.type === "increase") {
      return { counter: state.counter + 1 };
    }
    if (action.type === "decrease") {
      return { counter: state.counter - 1 };
    }
    if (action.type === "reset") {
      return { counter: 0 };
    }
    if (action.type === "setnumber") {
      return { counter: state.counter + 5 };
    }
    return state;
  }

  return (
    <div>
      {state.counter}
      <button onClick={() => dispatch({ type: "decrease" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "increase" })}>Increment</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "setnumber" })}>setnumber</button>
    </div>
  );
};

export default ReducerRoutes;
