import { useCountry } from '../context/CountryProvider';

function SearchBar() {
  const { searchCountry, dispatch } = useCountry();
  return (
    <input
      type="text"
      name="searchCountry"
      id="searchCountry"
      className="w-[30rem] h-12  drop-shadow-md cursor-pointer px-4"
      value={searchCountry}
      placeholder="Search Country"
      onChange={(e) => dispatch({ type: 'search', payload: e.target.value })}
    />
  );
}

export default SearchBar;
