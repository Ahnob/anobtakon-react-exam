import React from "react";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div className="container">
      <Helmet>
        <title>History</title>
        <meta name="description" content="Showing error" />
        <link rel="canonical" href="/error" />
      </Helmet>
      <img
        src="https://previews.123rf.com/images/boians/boians1708/boians170802965/83284060-3d-repair-person-character-is-holding-the-spanner-and-laptop-.jpg"
        alt="error"
        className="error-image"
      />
      <div className="error">
        <div className="error-number">
          <h1>404</h1>
        </div>

        <div>
          <h2>Page not found</h2>
          <h2>Click on any of the above links to find something awesome</h2>
        </div>
      </div>
      {/* <div className="second-error-container">
        <h2>
          Looks like this page went on vacation.. Not to worry, everything is
          awesome!
        </h2>
      </div> */}
    </div>
  );
};

export default ErrorPage;
