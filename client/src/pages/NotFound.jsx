import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size={100} />
      <h1 className="text-danger">404</h1>
      <h2 className="text-danger"> Sorry,Page Does Not Exist</h2>
      <Link to="/" className="btn btn-danger">
        Go Home
      </Link>
    </div>
  );
};
