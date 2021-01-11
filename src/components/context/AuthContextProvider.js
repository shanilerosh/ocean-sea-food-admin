import React, { createContext, useState } from "react";

export const UserAuth = createContext();

const AuthContextProvider = (props) => {
  const [validatedUser, setValidatedUser] = useState(false);

  const toggleAuth = () => {
    setValidatedUser(true);
    console.log("Toggle Auth called");
  };

  return (
    <UserAuth.Provider value={{ validatedUser, toggleAuth }}>
      {props.children}
    </UserAuth.Provider>
  );
};

export default AuthContextProvider;
