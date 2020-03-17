import React, { createContext, useState, useCallback } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [userName, setUserName] = useState(null);

  const testSave = (data) => {
    console.log(data);
    setAuthUser(data);
  };

  return (
    <AuthContext.Provider value={{
      userID,
      setUserID,
      userName,
      setUserName
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
