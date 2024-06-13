import React, { useState, useEffect } from 'react';
import CountryComponent from './CountryComponents/CountryComponent';
import styles from '../Countries/CountryPage.module.css';
import Header from '../../../Components/Layout/Header/Header';
import ToggleColorMode from '../../../Components/Layout/Header/ToggleColorMode';

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
        console.log(jsonData);
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
     <ToggleColorMode/>
      <Header />
      <div className={styles.cardsWrapper}>
        {countryData.map((country) => (
          <CountryComponent key={country.alpha3Code} countryData={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryPage;
