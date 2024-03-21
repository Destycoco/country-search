/* eslint-disable no-console */
/* eslint-disable react/prop-types */
export default function CountryItem({ country }) {
  console.log(country);
  return (
    <div>
      {country.name.common}
      <p>gfsg</p>
    </div>
  );
}
