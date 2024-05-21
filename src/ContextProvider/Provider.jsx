import React, { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types"; // ES6
import { createUserWithEmailAndPassword } from "firebase/auth";

//51-3 Create User Context For Shared Authentication

export const AuthContext = createContext(null);

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const authInfo = { name: "programmer Sohel" };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { user, createUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Provider;
Provider.propTypes = {
  children: PropTypes.node,
};

/*
1.createContext & export it
2.set provider with value
3.use the provider/AuthProvider file in main.jsx file
4.access main.jsx children in the provider/AuthProvider component as a children & use it in the middle of the provider

*/
