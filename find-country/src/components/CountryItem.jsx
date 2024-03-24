/* eslint-disable no-console */
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { useCountry } from '../context/CountryProvider';

// import { formatNumber } from '../Utilities/ExternalFunc';
export default function CountryItem({ country }) {
  // eslint-disable-next-line no-unused-vars
  const { currentCountry } = useCountry();

  const name = country.name.common;
  // console.log(name);
  // console.log(country);
  return (
    <Link to={`/country/${name}`}>
      <div className="w-[18rem] h-[22rem] shadow-md rounded-md overflow-hidden">
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="w-[100%] h-[48%]"
        />
        <div className="ml-8 mt-6">
          <h1 className="font-bold mb-4">{country.name.common}</h1>

          <p>Population: {country.population.toLocaleString()}</p>
          <p>
            Region:{' '}
            {country?.region === 'Americas' ? 'America' : country?.region}
          </p>
          <p>Capital: {country?.capital?.[0]}</p>
        </div>
      </div>
    </Link>
  );
}
