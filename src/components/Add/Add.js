import React from 'react';

const Add = (props) => {
    const add = props.add
    let totalPopulation = 0;
    for (let i = 0; i < add.length; i++) {
        const country = add[i];
        totalPopulation = totalPopulation + country.population
        
    }
    return (
        <div>
            <h2>This is add: {add.length}</h2>
            <p>Total Population:{totalPopulation}</p>
        </div>
    );
};

export default Add;