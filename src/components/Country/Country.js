import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props);
    const{name,population,region,flag} = props.country ;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="country-info">
            <h4>Country Name: {name}</h4>
            <img style={{height:"50px"}} src={flag} alt=""/>
            <p><small>Population: {population}</small></p>
            <p><small>Region: {region}</small></p>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;