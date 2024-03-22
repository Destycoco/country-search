/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from 'react';

const initialState = {
  countries: [],
  filteredCountries: [],
  status: 'loading',
  regions: ['', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'],
  currentRegion: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'getData':
      return {
        ...state,
        countries: action.payload,
        status: 'received',
      };
    case 'setRegion':
      return {
        ...state,
        currentRegion: action.payload,
      };
    case 'filter':
      return {
        ...state,
        filteredCountries: action.payload,
      };
    default:
      return state;
  }
}
const CountryContext = createContext();
export default function CountryProvider({ children }) {
  const [{ countries, regions, currentRegion, filteredCountries }, dispatch] =
    useReducer(reducer, initialState);
  console.log(filteredCountries);
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
  useEffect(() => {
    function filterData() {
      const newCountries = countries.filter((country) => {
        return country.region?.includes(currentRegion);
      });
      dispatch({ type: 'filter', payload: newCountries });
      // console.log(newCountries);
    }
    filterData();
  }, [countries, currentRegion]);
  return (
    <CountryContext.Provider
      value={{ countries, regions, currentRegion, filteredCountries, dispatch }}
    >
      {children}
    </CountryContext.Provider>
  );
}
// eslint-disable-next-line react-refresh/only-export-components
export function useCountry() {
  const value = useContext(CountryContext);
  return value;
}
