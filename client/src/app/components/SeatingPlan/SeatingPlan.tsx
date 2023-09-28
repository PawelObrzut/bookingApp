import React from 'react';
import classes from './SeatingPlan.module.scss';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { toggleSeatingPlan } from '../../features/seatingPlanSlice';

const SeatingPlan = () => {
  const isOpen = useAppSelector((state) => state.seatingPlan.isOpen)
  const dispatch = useAppDispatch();

  return (
    <aside className={`${classes.seatingPlan} ${isOpen ? classes.visible : null}`}>
      <button onClick={() => dispatch(toggleSeatingPlan())}>Close</button>

      <h2>Title</h2>
      <h3>Date & Time</h3>
      <table className='theme_btn'>
        <tbody>
          <tr>
            <td className={classes.selected}></td>
            <td className={classes.booked}></td>
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