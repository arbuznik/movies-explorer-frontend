import React, { createContext, useState, useCallback } from "react";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const setUserContext = useCallback((user) => setUser(user), [setUser]);

  return (
    <UserContext.Provider value={{ user, setUserContext }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
