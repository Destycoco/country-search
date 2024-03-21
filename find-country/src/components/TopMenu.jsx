import SearchBar from '../components/SearchBar';
import FilterRegion from './FilterRegion';

function TopMenu() {
  return (
    <div className="w-[85%] flex justify-between flex-wrap flex-grow  my-8 mx-auto mb-12">
      <SearchBar />
      <FilterRegion />
    </div>
  );
}

export default TopMenu;
