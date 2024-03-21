/* eslint-disable no-console */
import { useCountry } from '../context/CountryProvider';
import CountryItem from './CountryItem';
function CountryList() {
  const { countries } = useCountry();
  console.log(countries);
  return (
    <div>
      {countries?.map((country) => (
        <CountryItem country={country} key={country.name.common} /> // Return the CountryItem component
      ))}
    </div>
  );
}

export default CountryList;
