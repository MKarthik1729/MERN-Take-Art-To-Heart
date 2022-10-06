import React, { createContext, useState } from "react";
const UserContext = createContext();
const UserProvider = ({ children }) => {
    const [name, setName] = useState("John Doe");
    const [id,setId] = useState(1);
    // const happyBirthday = () => setAge(age + 1);
    return (
      <UserContext.Provider value={{ name, id,setName,setId}}>
        {children}
      </UserContext.Provider>
    );
  };

export { UserProvider , UserContext};