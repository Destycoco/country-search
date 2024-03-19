import { createContext, useContext, useState } from "react";

const CountryContext = createContext();
export default function CountryProvider({ children }) {
  return (
    <CountryContext.Provider value={{}}>{children}</CountryContext.Provider>
  );
}
export function useCountry() {
  const value = useContext(CountryContext);
  return value;
}
