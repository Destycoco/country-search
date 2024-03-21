/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from 'react';

const initialState = {
  countries: [],
  status: 'loading',
};

function reducer(state, action) {
  switch (action.type) {
    case 'getData':
      return {
        ...state,
        countries: action.payload,
        status: 'received',
      };
    default:
      return state;
  }
}
const CountryContext = createContext();
export default function CountryProvider({ children }) {
  const [{ countries }, dispatch] = useReducer(reducer, initialState);
  // console.log(countries);
  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch('https://restcountries.com/v3.1/all');
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await res.json();
        dispatch({ type: 'getData', payload: data });
      } catch (err) {
        dispatch({ type: 'errorReceived', payload: err.message });
      }
    }
    loadData();
  }, []);
  return (
    <CountryContext.Provider value={{ countries }}>
      {children}
    </CountryContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useCountry() {
  const value = useContext(CountryContext);
  return value;
}
