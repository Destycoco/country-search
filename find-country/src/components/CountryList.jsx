/* eslint-disable no-console */
import { useCountry } from '../context/CountryProvider';
import CountryItem from './CountryItem';
function CountryList() {
  const { countries } = useCountry();
  console.log(countries);
  return (
    <div className="flex flex-wrap  justify-between gap-8 mx-auto  w-[85%]  m-auto">
      {countries?.map((country) => (
        <CountryItem country={country} key={country.name.common} /> // Return the CountryItem component
      ))}
    </div>
  );
}

export default CountryList;
