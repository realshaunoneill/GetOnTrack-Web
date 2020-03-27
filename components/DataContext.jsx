import React, {useReducer, useContext, useEffect} from 'react';

const DATA_STORE_KEY = 'dataStore';

export const DataStateContext = React.createContext(null);

const initialState = {dublinBusStops: '', irishRailStops: '', luasStops: '', dublinBikesStops: ''};
const transportData = {dublinBusStops: '', irishRailStops: '', luasStops: '', dublinBikesStops: ''};

export const ReducerKeys = {
  setDublinBus: 'setDublinBus', setIrishRail: 'setIrishRail', setLuas: 'setLuas', setDublinBikes: 'setDublinBikes'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ReducerKeys.setDublinBus:
      return {
        ...transportData,
        dublinBusStops: action.payload.dublinBusStops,
      };
    case ReducerKeys.setIrishRail:
      return {
        ...transportData,
        irishRailStops: action.payload.irishRailStops,
      };
    case ReducerKeys.setLuas:
      return {
        ...transportData,
        luasStops: action.payload.luasStops,
      };
    case ReducerKeys.setDublinBikes:
      return {
        ...transportData,
        dublinBikesStops: action.payload.dublinBikesStops,
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
