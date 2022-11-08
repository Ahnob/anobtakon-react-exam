import { useReducer } from "react";
import { Helmet } from "react-helmet-async";

const ReducerRoutes = () => {
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <Helmet>
        <title>Custom hooks</title>
        <meta
          name="description"
          content="Incrementing, decrement and setting values using custom hooks"
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div>
        <p className="number">
          {" "}
          {state.counter < 0 ? (
            <p className="myred">{state.counter}</p>
          ) : (
            <p className="mygreen">{state.counter}</p>
          )}
        </p>
      </div>
      <button
        onClick={() => dispatch({ type: "decrease" })}
        className="btn-reducer"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "increase" })}
        className="btn-reducer"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn-reducer"
      >
        Reset
      </button>
      <button
        onClick={() => dispatch({ type: "setnumber" })}
        className="btn-reducer"
      >
        Setvalue
      </button>
    </div>
  );
};

export default ReducerRoutes;
