import React, { useState, useEffect } from 'react';
import { json, useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from '../CountryDetails/CountryDetails.module.css'

const CountryDetails=()=>{

    const {countryCode}=useParams();
    const [country, setCountry] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchCountryDetails= async ()=>{
            try{
                const response= await fetch('/Data/countryData.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                  }
                  const jsonData = await response.json();
                  const countryDetails = jsonData.find((c) => c.alpha3Code === countryCode);
                  if (!countryDetails) {
                    throw new Error('Country not found');
                  }
                  console.log(countryDetails);
                  setCountry(countryDetails);
                  setLoading(false);
            }
            catch(error){
                setError(error.message);
                setLoading(false);   
            }
        };
        fetchCountryDetails();

    },[countryCode]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!country) return null;
  

    return(

        <div className={styles.card}>
         <Card sx={{ maxWidth: 600, margin: '0 auto', margin:5}}>
        <CardMedia
          component="img"
          height="240"
          image={country.flags.svg}
          alt={`Flag of ${country.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {country.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Region:</strong> {country.region}</p>
            {country.subregion && <p><strong>Subregion:</strong> {country.subregion}</p>}
            <p><strong>Population:</strong> {country.population}</p>
            {country.area && <p><strong>Area:</strong> {country.area} km²</p>}
            <p><strong>Demonym:</strong> {country.demonym}</p>
            {country.gini && <p><strong>Gini:</strong> {country.gini}</p>}
            {country.timezones && country.timezones.length > 0 && <p><strong>Timezones:</strong> {country.timezones.join(', ')}</p>}
            {country.borders && country.borders.length > 0 && <p><strong>Borders:</strong> {country.borders.join(', ')}</p>}
            <p><strong>Native Name:</strong> {country.nativeName}</p>
            {country.numericCode && <p><strong>Numeric Code:</strong> {country.numericCode}</p>}
            <p><strong>CIOC:</strong> {country.cioc}</p>
            <p><strong>Independent:</strong> {country.independent ? 'Yes' : 'No'}</p>
            {country.topLevelDomain && country.topLevelDomain.length > 0 && <p><strong>Top Level Domain:</strong> {country.topLevelDomain.join(', ')}</p>}
            <p><strong>Alpha2Code:</strong> {country.alpha2Code}</p>
            <p><strong>Alpha3Code:</strong> {country.alpha3Code}</p>
            {country.callingCodes && country.callingCodes.length > 0 && <p><strong>Calling Codes:</strong> {country.callingCodes.join(', ')}</p>}
            {country.currencies && country.currencies.length > 0 && <p><strong>Currency:</strong> {country.currencies.map(currency => `${currency.name} (${currency.symbol})`).join(', ')}</p>}
            {country.languages && country.languages.length > 0 && <p><strong>Languages:</strong> {country.languages.map(language => `${language.name} (${language.nativeName})`).join(', ')}</p>}
            {country.translations && Object.entries(country.translations).length > 0 && <p><strong>Translations:</strong> {Object.entries(country.translations).map(([key, value]) => `${key}: ${value}`).join(', ')}</p>}
            </Typography>    
        </CardContent>
      </Card>
      
        </div>
    )
}

export default CountryDetails