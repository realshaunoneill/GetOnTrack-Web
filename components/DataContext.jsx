import React, {useReducer, useContext, useEffect} from 'react';

const DATA_STORE_KEY = 'dataStore';

export const DataStateContext = React.createContext(null);

const initialState = {dublinBusStops: '', irishRailStops: '', luasStops: '', dublinBikesStops: ''};

export const ReducerKeys = {
  setStops: 'setStops', clearStops: 'clearStops'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ReducerKeys.setStops:
      return {
        dublinBusStops: action.payload.dublinBusStops,
        irishRailStops: action.payload.irishRailStops,
        luasStops: action.payload.luasStops,
        dublinBikesStops: action.payload.dublinBikesStops
      };
    case ReducerKeys.clearStops:
      return {
        dublinBusStops: initialState.dublinBusStops,
        irishRailStops: initialState.irishRailStops,
        luasStops: initialState.luasStops,
        dublinBikesStops: initialState.dublinBikesStops
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const DataProvider = ({children}) => {
  let localState = null;
  if (typeof localStorage !== 'undefined' && localStorage.getItem(DATA_STORE_KEY)) {
    localState = JSON.parse(localStorage.getItem(DATA_STORE_KEY) || '');
  }
  const [state, dispatch] = useReducer(reducer, localState || initialState);

  if (typeof localStorage !== 'undefined') {
    useEffect(() => {
      localStorage.setItem(DATA_STORE_KEY, JSON.stringify(state));
    }, [state]);
  }

  return (
    <DataStateContext.Provider value={[state, dispatch]}>
      {children}
    </DataStateContext.Provider>
  );
};

export const useData = () => useContext(DataStateContext);
