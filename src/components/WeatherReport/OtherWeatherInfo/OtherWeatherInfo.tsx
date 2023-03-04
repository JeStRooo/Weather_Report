import React from 'react';

import classes from "./OtherWeatherInfo.module.scss";

type OtherInfoType = {
  name: string,
  value: string | number,
  image: string
}

const OtherWeatherInfo = ({value, name, image}: OtherInfoType) => {
  return (
    <div className={classes.weather_block}>
      <img src={image} alt="temp" className={classes.weather_block__image} />
      <div className={classes.weather_block__info}>
        <div className={classes.weather_block__info__value}>{value}</div>
        <div className={classes.weather_block__info__name}>{name}</div>
      </div>
    </div>
  );
};

export default OtherWeatherInfo;