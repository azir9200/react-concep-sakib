import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  }

  return (

    <div className={`country ${visited && 'visited'}`}>
      <h3>{name.common} </h3>
      <button onClick={handleVisited} >Visited</button>
      <img src={flags.png} alt="" />
      <button onClick={() => handleVisitedFlags(country.flags.png)} >Add Flag</button>
      <p> population: {population} </p>
      <p>area: {area} </p>
      <p><small>Code: {cca3} </small></p>
      {visited ? 'I have visited this Country.' : 'I have plan to visit.'}

    </div >
  );
};

export default Country;