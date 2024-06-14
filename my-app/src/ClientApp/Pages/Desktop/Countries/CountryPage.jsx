import React, { useState, useEffect } from 'react';
import CountryComponent from './CountryComponents/CountryComponent';
import styles from '../Countries/CountryPage.module.css';
import { Link } from 'react-router-dom';

const CountryPage = () => {
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Data/countryData.json');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        setCountryData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!countryData) return null;

  return (
    <div className={styles.cardsContainer}>
      <div className={styles.cardsWrapper}>
        {countryData.map((country) => (
            <Link key={country.alpha3Code} to={`/country/${country.alpha3Code}`} className={styles.countryLink}> 
                <CountryComponent countryData={country} />
            </Link>
        ))}
      </div>
    </div>
  );
};

export default CountryPage;
