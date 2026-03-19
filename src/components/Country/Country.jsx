import React, { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountries,handleVisitedFlag}) => {
    const [Visited, setVisited] = useState(false);
    // console.log(country.region.region)
    // console.log(handleVisitedCountries);
    const handleVisited = () =>{
        // 1st system
        // if(Visited){
        //     setVisited(false);
        // }else{
        //     setVisited(true);
        // }

        // 2nd system
        // setVisited(Visited ? false : true);

        // 3rd system
        setVisited(!Visited)
        handleVisitedCountries(country)
    }
    return (
        // <div className={`country border-lg text-center ${Visited ? 'country-visited' : 'country-not-visited'}`}>
        <div className={`country ${Visited && 'country-visited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            {/* <h3>Capital: {country.capital.capital}</h3>
            <h3>Region: {country.region.region}</h3> */}
            <h3>Population: {country.population.population}</h3>
            <p>Area: {country.area.area}{country.area.area > 300000 ? "Big Country" : 'Small country'}</p>
            <button onClick={handleVisited}>{Visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={() => { handleVisitedFlag(country?.flags?.flags?.png) }}>Add Visited Flag</button>
        </div>
    );
};

export default Country;