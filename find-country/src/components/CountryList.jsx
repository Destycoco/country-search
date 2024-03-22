/* eslint-disable no-console */
import { useCountry } from '../context/CountryProvider';
import CountryItem from './CountryItem';
function CountryList() {
  const { countries, filteredCountries } = useCountry();
  const countryData =
    filteredCountries.length > 0 ? filteredCountries : countries;
  // console.log(countries);
  return (
    <div className="flex flex-wrap justify-center  sm:justify-between gap-8 mx-auto  w-[85%]  m-auto">
      {countryData.map((country) => (
        <CountryItem country={country} key={country.name.common} /> // Return the CountryItem component
      ))}
    </div>
  );
}

export default CountryList;
// `${filteredCountries ? filteredCountries : countries}`
