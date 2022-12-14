import useCounter from "./useCounter";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { increase, decrease, reset, state, setnumber } = useCounter(0);
  return (
    <div>
      <Helmet>
        <title>Custom hooks</title>
        <meta
          name="description"
          content="Incrementing, decrement and setting values using useReducer"
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div>
        <p className="number">
          {" "}
          {state < 0 ? (
            <p className="myred">{state}</p>
          ) : (
            <p className="mygreen">{state}</p>
          )}
        </p>
      </div>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={setnumber}>Setvalue</button>
      </div>
    </div>
  );
};

export default Home;
