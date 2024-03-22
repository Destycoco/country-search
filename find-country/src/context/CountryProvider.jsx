/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useReducer } from 'react';

const initialState = {
  countries: [],
  filteredCountries: [],
  searchCountry: '',
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
    case 'search':
      return {
        ...state,
        searchCountry: action.payload,
      };
    case 'getSearch':
      return {
        ...state,
        searchedCountry: action.payload,
      };
    default:
      return state;
  }
}
const CountryContext = createContext();
export default function CountryProvider({ children }) {
  const [
    { countries, regions, currentRegion, filteredCountries, searchCountry },
    dispatch,
    status,
  ] = useReducer(reducer, initialState);
  console.log(searchCountry);
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
  }, [dispatch]);

  useEffect(() => {
    function filterData() {
      const newCountries = countries.filter((country) => {
        return country.region?.includes(currentRegion);
      });
      dispatch({ type: 'filter', payload: newCountries });
      // console.log(newCountries);
    }
    filterData();
  }, [countries, currentRegion, dispatch]);
  return (
    <CountryContext.Provider
      value={{
        countries,
        regions,
        currentRegion,
        filteredCountries,
        dispatch,
        searchCountry,
        status,
      }}
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
