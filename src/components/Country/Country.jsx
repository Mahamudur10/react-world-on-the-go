import React from 'react';
import './Country.css'
const Country = ({ country }) => {
    // console.log(country.region.region)
    const handleVisited = () =>{
        console.log('button Clicked')
    }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            {/* <h3>Capital: {country.capital.capital}</h3>
            <h3>Region: {country.region.region}</h3> */}
            <h3>Population: {country.population.population}</h3>
            <p>Area: {country.area.area}{country.area.area > 300000 ? "Big Country" : 'Small country'}</p>
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;