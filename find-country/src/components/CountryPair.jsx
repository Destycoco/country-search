/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import { countries as countryData } from 'country-data';
function CountryPair({ details }) {
  const keys = Object.keys(details.name.nativeName);
  const nativeKey = keys[1] || keys[0];
  const nativeName = details.name.nativeName[nativeKey];
  const currencyKeys = Object.keys(details.currencies);
  const currencyKey = currencyKeys[0];
  const currency = details.currencies[currencyKey].name;
  const languageKeys = Object.keys(details.languages);
  const languageKey = details?.languages[languageKeys[0]];
  const languageKey1 = details?.languages[languageKeys[1]];
  const languageKey2 = details.languages[languageKeys[2]];
  console.log(countryData);
  function formatCountry(countryCode) {
    const country = countryCode.toUpperCase();
    return countryData[country].name;
  }

  return (
    <div className="sm:flex sm:flex-row items-start flex flex-col w-[100%] flex-wrap gap-12 border-red-400 border-solid border-2 sm:gap-16 md:gap-28- sm:items-center">
      <div className="flex-1 w-[100%] md:h-[19rem] sm:h-[23rem]">
        <img
          src={details.flags.png}
          alt={details.flags.alt}
          className="w-[100%] h-[100%] "
        />
      </div>
      <div className="flex-1 w-[100%] border-blue-400 border-solid border-2">
        <h1 className="font-bold text-3xl mb-8">{details.name.common}</h1>

        <div className="lg:flex justify-between mb-12 ">
          <div className="mb-10 sm:mb-0">
            <p className="mb-4 font-normal">
              <strong>Native name:</strong> {nativeName.common}
            </p>
            <p className="mb-4 font-normal">
              <strong>Population:</strong> {details.population.toLocaleString()}
            </p>
            <p className="mb-4 font-normal">
              <strong>Region:</strong>{' '}
              {details.region === 'Americas' ? 'America' : details.region}
            </p>
            <p className="mb-4 font-normal">
              <strong>Sub Region:</strong> {details.subregion}
            </p>
            <p className="mb-4 font-normal">
              <strong>Capital:</strong> {details.capital[0]}
            </p>
          </div>
          <div>
            <p className="mb-4 font-normal">
              <strong>Top Level Domain:</strong> {details.tld[0]}
            </p>
            <p className="mb-4 font-normal">
              <strong className="">Currency:</strong> {currency}
            </p>
            <p className="mb-4 font-normal">
              <strong>Languages:</strong> {languageKey}
              {languageKey1 ? ', ' : ''} {languageKey1}
              {languageKey2 ? ', ' : ''}
              {languageKey2}
            </p>
          </div>
        </div>
        <div className="md:flex md:flex-row md:space-x-4 sm:flex-col ">
          <h2 className=" mb-4 font-normal">
            <strong>Border Countries:</strong>{' '}
          </h2>
          <div className="flex flex-wrap ">
            {details.borders.map((border) => (
              <p key={border} className="border-solid border-2 px-4 py-1 mr-2">
                {formatCountry(border)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryPair;
