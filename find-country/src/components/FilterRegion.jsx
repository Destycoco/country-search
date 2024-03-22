import { useCountry } from '../context/CountryProvider';
import Option from './Option';

function FilterRegion() {
  const { regions, currentRegion, dispatch } = useCountry();
  return (
    <select
      name=""
      id=""
      value={currentRegion}
      onChange={(e) => dispatch({ type: 'setRegion', payload: e.target.value })}
      className="w-[12rem] h-12 drop-shadow-md cursor-pointer"
    >
      {Array.from({ length: 6 }, (item, i) => (
        <Option key={i} region={regions[i]} />
      ))}
    </select>
  );
}

export default FilterRegion;
{
  /* <option value="" hidden>
Filter By Region
</option>
<option value="africa">Africa</option>
<option value="america">America</option>
<option value="asia">Asia</option>
<option value="europe">Europe</option>
<option value="oceania">Oceania</option>
<option value=""></option> */
}
