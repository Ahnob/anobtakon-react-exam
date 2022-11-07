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
      <h3 className="error">
        <span>404</span> page not found
      </h3>
      <div className="second-error-container">
        <h3>
          Looks like this page went on vacation.. Not to worry, everything is
          awesome!
        </h3>
      </div>
    </div>
  );
};

export default ErrorPage;
