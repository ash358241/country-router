import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {nam} = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${nam}`
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    }, [])
    return (
        <div style={{textAlign:'center'}}>
            <h2>Country's name: {nam}</h2>
            <img style={{height: '300px'}} src={country.flag} alt=""/>
            <h3>{country.name}</h3>
            <p>{country.capital}</p>
        </div>
    );
};

export default CountryDetail;