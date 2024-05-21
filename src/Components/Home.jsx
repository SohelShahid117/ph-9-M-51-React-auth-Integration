import React, { useContext } from "react";
import { AuthContext } from "../ContextProvider/Provider";

const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo);
  return (
    <div>
      <h2 className="text-3xl">This is home : I am {authInfo.name}</h2>
    </div>
  );
};

export default Home;
