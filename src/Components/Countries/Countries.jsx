import { useEffect } from "react"
import { useState } from "react"
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])
  const handleVisitedFlags = flag => {
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
  }



  return (
    <div>
      <h3>Countries: {countries.length} </h3>

      {/* visited country */}
      <div className="flag-container">
        {
          visitedFlags.map(flag => <img src={flag} ></img>)
        }

      </div>

      <div className="country-container" >
        {
          countries.map(country => <Country
            key={Country.cca3}
            handleVisitedFlags={handleVisitedFlags}
            country={country} ></Country>)

        }
      </div>

    </div>
  );
};

export default Countries;