/* eslint-disable no-console */
import { useCountry } from '../context/CountryProvider';
import CountryItem from './CountryItem';
function CountryList() {
  const { countries, filteredCountries, searchCountry } = useCountry();
  console.log(searchCountry);
  const countryData =
    filteredCountries.length > 0 ? filteredCountries : countries;
  // console.log(countries);
  return (
    <div className="flex flex-wrap justify-center sm:justify-between md:justify-center  gap-10 mx-auto  w-[85%]  m-auto">
      {countryData.map((country) => (
        <CountryItem country={country} key={country.name.common} /> // Return the CountryItem component
      ))}
    </div>
  );
}

export default CountryList;
// `${filteredCountries ? filteredCountries : countries}`
