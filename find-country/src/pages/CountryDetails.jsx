/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useParams } from 'react-router-dom';
import { useCountry } from '../context/CountryProvider';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import CountryPair from '../components/CountryPair';

function CountryDetails() {
  const [countryDetails, setCountryDetails] = useState({});
  const details = countryDetails[0];
  const { dispatch, getCurrentCountry, currentCountry, status } = useCountry();
  const { name } = useParams();
  useEffect(() => {
    getCurrentCountry(name);
  }, [name, getCurrentCountry]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch({ type: 'currentCountryName', payload: name });
  }, [name, dispatch]);
  console.log(status);
  // console.log(currentCountry);

  useEffect(() => {
    if (status === 'active' && currentCountry) {
      setCountryDetails(currentCountry);
    }
  }, [status, currentCountry]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  console.log({ countryDetails });
  if (countryDetails.length > 0) {
    return (
      <div>
        <NavBar />
        <div className="w-[85%] sm:w-[90%] m-auto">
          <Button>Back</Button>
          <CountryPair details={details} />
        </div>
      </div>
    );
  }
}

export default CountryDetails;
