/* eslint-disable no-console */
/* eslint-disable react/prop-types */
// import { formatNumber } from '../Utilities/ExternalFunc';
export default function CountryItem({ country }) {
  // console.log(country);
  return (
    <div className="w-[18rem] h-[22rem] shadow-md rounded-md overflow-hidden">
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className="w-[100%] h-[48%]"
      />
      <div className="ml-8 mt-6">
        <h1 className="font-bold mb-4">{country.name.common}</h1>

        <p>Population: {country.population.toLocaleString()}</p>
        <p>Region: {country?.region}</p>
        <p>Capital: {country?.capital?.[0]}</p>
      </div>
    </div>
  );
}
