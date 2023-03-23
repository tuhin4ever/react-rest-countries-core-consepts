import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country.flags)

    const {area, population,name,region,flags} = props.country;

    return (
        <div className='country bg-warning'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p><small>Area: {area}</small></p>
            <p><small>region: {region }</small></p>
        </div>
    );
};

export default Country;