import React, { useContext } from "react";
import { AuthContext } from "../ContextProvider/Provider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner loading-md"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login">Login</Navigate>;
};

export default PrivateRoute;
