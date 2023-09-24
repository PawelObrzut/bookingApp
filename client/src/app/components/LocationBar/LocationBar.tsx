import React from 'react';
import classes from './LocationBar.module.scss';
import { SlLocationPin } from 'react-icons/sl';

const LocationBar = () => {
  return (
    <section className={classes.locationBar}>
      <span className={classes.locationBar__location}><SlLocationPin />  Stockholm</span>
    </section>

  )
}

export default LocationBar