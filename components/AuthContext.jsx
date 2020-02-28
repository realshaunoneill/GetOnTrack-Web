import React, {createContext, useState, useCallback} from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [authUserID, setAuthUserID] = useState(null);
    const [authUserName, setAuthUserName] = useState(null);

    const testSave = (data) => {
        console.log(data)
        setAuthUser(data);
    }

    return (
        <AuthContext.Provider value={{
            authUserID,
            setAuthUserID,
            authUserName,
            setAuthUserName,
        }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;