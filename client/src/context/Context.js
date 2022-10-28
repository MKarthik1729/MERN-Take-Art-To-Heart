import React, { createContext, useState } from "react";
const UserContext = createContext();
const UserProvider = (props) => {
  const [user, setUser] = useState({
    role: "guest",
    user: {
      
    },
    loggedIn: false
  });
  const [pop, setPop] = useState('');
  return (
    <UserContext.Provider value={{ user, setUser, pop, setPop }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
