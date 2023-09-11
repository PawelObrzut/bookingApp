import React from 'react';
import classes from "./GradientBar.module.scss";
import { SlLocationPin } from "react-icons/sl";
import { BiSolidChevronDown } from "react-icons/bi"

const GradientBar = () => {
  return (
    <div className={classes.gradientBar}>
      <div className={`${classes.theaters} container`}>
        <div className={classes.theaters__dropdown}>
          <div className={`${classes.theaters__dropdown__activeLocation}`}>
            <span><SlLocationPin />  Stockholm</span>
            <BiSolidChevronDown style={{"color": "white"}} />
          </div>
          <ul className={classes.theaters__dropdown__locationsList}>
            <li>Stockholm</li>
            <li>Gothenburg</li>
            <li>Malmö</li>
            <li>Uppsala</li>
            <li>Luleå</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GradientBar