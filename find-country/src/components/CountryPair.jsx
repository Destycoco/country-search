/* eslint-disable react/prop-types */
function CountryPair({ details }) {
  const keys = Object.keys(details.name.nativeName);
  const nativeKey = keys[1] || keys[0];
  const nativeName = details.name.nativeName[nativeKey];

  return (
    <div>
      <div>
        <img src={details.flags.png} alt={details.flags.alt} />
      </div>
      <div>
        <h1>{details.name.common}</h1>
        <p>Native name: {nativeName.common}</p>
        <p>Population: {details.population.toLocaleString()}</p>
        <p>
          Region: {details.region === 'Americas' ? 'America' : details.region}
        </p>
        <p>Sub Region: {details.subregion}</p>
      </div>
    </div>
  );
}

export default CountryPair;
