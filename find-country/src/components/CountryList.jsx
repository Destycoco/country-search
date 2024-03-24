/* eslint-disable no-console */
import { useCountry } from '../context/CountryProvider';
import CountryItem from './CountryItem';
function CountryList() {
  const { countries, filteredCountries, searchCountry } = useCountry();
  const countryData =
    filteredCountries.length > 0 ? filteredCountries : countries;
  const displayCountry = countryData.filter((country) =>
    country.name.common.toLowerCase().includes(searchCountry.toLowerCase()),
  );
  // console.log(displayCountry);
  // console.log(searchCountry);

  // console.log(countries);

  return (
    <div className="flex flex-wrap justify-center sm:justify-between md:justify-start  gap-10 mx-auto  w-[85%]  m-auto">
      {displayCountry.map((country) => (
        <CountryItem country={country} key={country.name.common} /> // Return the CountryItem component
      ))}
    </div>
  );
}

export default CountryList;
// `${filteredCountries ? filteredCountries : countries}`
