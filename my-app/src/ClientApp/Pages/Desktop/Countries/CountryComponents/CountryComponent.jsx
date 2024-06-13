import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import styles from '../CountryComponents/CountryComponent.module.css'

const CountryComponent = ({ countryData }) => {
  return (
    <Card sx={{width:320}} className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={countryData.flags.svg}
          alt={`Flag of ${countryData.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {countryData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Population: {countryData.population}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Population: {countryData.region}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Population: {countryData.capital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CountryComponent;
