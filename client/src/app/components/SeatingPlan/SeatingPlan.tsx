import React from 'react';
import classes from './SeatingPlan.module.scss';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { toggleSeatingPlan } from '../../features/seatingPlanSlice';
import { TfiClose } from 'react-icons/tfi';

const SeatingPlan = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.seatingPlan.isOpen);
  const movieId = useAppSelector((state) => state.seatingPlan.movieDetails.movieId);
  const time = useAppSelector((state) => state.seatingPlan.movieDetails.time);
  const movie = useAppSelector((state) => state.repertoire.repertoire.find(movie => movie.id === movieId));

  return (
    <aside className={`${classes.seatingPlan} ${isOpen ? classes.visible : null}`}>
      <span className={classes.seatingPlan__closeButton} onClick={() => dispatch(toggleSeatingPlan())}>
        <TfiClose />
      </span>

      <h2 className={classes.seatingPlan__title}>{movie?.title}</h2>
      <h3 className={classes.seatingPlan__time}>{time}</h3>

      <table>
        <thead>
          <tr>
            <td className={classes.screen} colSpan={4}>screen</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={classes.selected}></td>
            <td className={classes.booked}></td>
            <td className={classes.available}></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </aside>
  )
}

export default SeatingPlan