import React, { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types"; // ES6
import auth from "../Firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

//51-3 Create User Context For Shared Authentication
//51-5 Add Sign In User Using Context API
//51-7 Introduction To Private Route And Handle Loading State

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const authInfo = { name: "programmer Sohel" };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //observe auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user is ", currentUser);
      if (currentUser) {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    signInWithGoogle,
  };
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
