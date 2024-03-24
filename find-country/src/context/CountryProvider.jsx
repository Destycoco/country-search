/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useCallback,
} from 'react';

const initialState = {
  countries: [],
  filteredCountries: [],
  searchCountry: '',
  status: 'loading',
  regions: ['', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'],
  currentRegion: '',
  currentCountryName: '',
  currentCountry: {},
};

function reducer(state, action) {
  switch (action.type) {
    case 'getData':
      return {
        ...state,
        countries: action.payload,
        status: 'active',
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
        status: 'active',
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
    case 'currentCountryName':
      return {
        ...state,
        currentCountryName: action.payload,
      };
    case 'currentCountry':
      return {
        ...state,
        currentCountry: action.payload,
        status: 'active',
      };
    case 'fetching':
      return {
        ...state,
        status: 'loading',
      };
    case 'error':
      return {
        ...state,
        status: 'active',
        errorMessage: action.payload,
      };
    case 'active':
      return {
        ...state,
        status: 'active',
      };
    default:
      return state;
  }
}
const CountryContext = createContext();
export default function CountryProvider({ children }) {
  const [
    {
      countries,
      regions,
      currentRegion,
      filteredCountries,
      searchCountry,
      status,
      currentCountryName,
      currentCountry,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  // console.log(searchCountry);
  // console.log(currentCountry);
  // console.log(countries);
  useEffect(() => {
    async function loadData() {
      dispatch({ type: 'fetching' });
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
      dispatch({ type: 'fetching' });
      const newCountries = countries.filter((country) => {
        return country.region?.includes(currentRegion);
      });
      dispatch({ type: 'filter', payload: newCountries });
      // console.log(newCountries);
    }
    filterData();
  }, [countries, currentRegion, dispatch]);

  const getCurrentCountry = useCallback(
    async (name) => {
      try {
        dispatch({ type: 'fetching' });
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        dispatch({ type: 'currentCountry', payload: data });
        return { data };

        // return data;

        // console.log(data);
      } catch (error) {
        // Handle errors
        console.error('Error fetching current country:', error);
        dispatch({ type: 'error', payload: error.message });
      } finally {
        dispatch({ type: 'active' });
      }
    },
    [dispatch],
  );
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
        currentCountryName,
        getCurrentCountry,
        currentCountry,
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
