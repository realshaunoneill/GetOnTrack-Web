import React, { useReducer, useContext, useEffect } from 'react';

const USER_ID_KEY = 'userInfo';

export const AuthStateContext = React.createContext(null);

const initialState = { userID: '', userName: '' };
export const ReducerKeys = {
  setUser: 'setUser', removeUser: 'removeUser'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ReducerKeys.setUser:
      return {
        userID: action.payload.userID,
        userName: action.payload.userName
      };
    case ReducerKeys.removeUser:
      return {
        userID: initialState.userID,
        userName: initialState.userName
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const AuthProvider = ({ children }) => {
  let localState = null;
  if (typeof localStorage !== 'undefined' && localStorage.getItem(USER_ID_KEY)) {
    localState = JSON.parse(localStorage.getItem(USER_ID_KEY) || '');
  }
  const [state, dispatch] = useReducer(reducer, localState || initialState);

  if (typeof localStorage !== 'undefined') {
    useEffect(() => {
      localStorage.setItem(USER_ID_KEY, JSON.stringify(state));
    }, [state]);
  }

  return (
    <AuthStateContext.Provider value={[state, dispatch]}>
      {children}
    </AuthStateContext.Provider>
  );
};

export const useAuth = () => useContext(AuthStateContext);
