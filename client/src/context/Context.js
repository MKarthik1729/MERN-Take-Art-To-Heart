import React, { createContext, useState } from "react";
const UserContext = createContext();
const UserProvider = (props) => {
  const [user, setUser] = useState({
    role: "admin",
    user: {
      
    }
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
