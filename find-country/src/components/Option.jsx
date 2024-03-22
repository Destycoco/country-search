/* eslint-disable react/prop-types */
function Option({ region }) {
  return (
    <option value={region} hidden={!region ? true : false}>
      {!region ? 'Filter By Region' : region}
    </option>
  );
}

export default Option;
