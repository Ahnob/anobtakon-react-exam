import { ErrorBoundary } from "react-error-boundary";
import { Outlet } from "react-router-dom";
import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
const Bomb = () => {
  const [username, setUsername] = useState("");
  const usernameRef = useRef(null);

  function Bomb({ username }) {
    if (username === "bomb") {
      throw new Error("💥 CABOOM 💥");
    }
    return (
      <>
        <p className="bomb-message">{`Hi ${username}`}</p>
      </>
    );
  }

  return (
    <div className="cabon">
      <Helmet>
        <title>Custom hooks</title>
        <meta name="description" content="" />
        <link rel="canonical" href="/Bomb" />
      </Helmet>
      <label>
        <div className="small_div">
          {" "}
          <p> {/* <Navigation /> */}</p>
        </div>

        <p className="bomb">Username (don't type "bomb") </p>
        <input
          placeholder={`type "bomb"`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
      </label>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          setUsername("");
          usernameRef.current.focus();
        }}
        resetKeys={[username]}
      >
        <Bomb username={username} />
      </ErrorBoundary>
      <Outlet />
    </div>
  );
};

export default Bomb;
