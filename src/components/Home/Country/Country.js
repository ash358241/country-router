import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name, population, callingCodes} = props.country;
    const history = useHistory();

    const handleClick = (detail) => {
        const url = `/country/${detail}`
        history.push(url);
    }
    const countryStyle = {
        border: '1px solid black',
        width: '500px',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={countryStyle}>
            <h3>Country's name: {name}</h3>
            <p>Population: {population}</p>
            <p>
                <Link to={`/country/${name}`}>show details about {name}</Link> 
            </p>
            <button onClick={()=>handleClick(name)}>ClickHere</button>
        </div>
    );
};

export default Country;