import React, { useEffect, useState } from 'react';
import classes from './SeatingPlan.module.scss';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { toggleSeatingPlan } from '../../features/seatingPlanSlice';
import { TfiClose } from 'react-icons/tfi';

import ShowtimesService from '../../services/showtimesServices/index'
import { Seats_getSeatsByShowtimeId_seats } from '../../services/showtimesServices/__generated__/Seats';

const Lounge = () => {
  const dispatch = useAppDispatch();
  const showtimeId = useAppSelector((state) => state.seatingPlan.movieDetails.showtimeId);
  const [seats, setSeats] = useState<Seats_getSeatsByShowtimeId_seats[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSelect = (row: number, seatNumber: number) => {
    const seatKey = `${row} ${seatNumber}`;
    if (selectedSeats.includes(seatKey)) {
      setSelectedSeats(prev => prev.filter(seat => seat !== seatKey));
    } else {
      setSelectedSeats(prev => [...prev, seatKey]);
    }
  }

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const data = await ShowtimesService.fetchSeats(showtimeId);
        setSeats(data);
      } catch (error) {
        console.error('Error fetching seats:', error);
      }
    };

    fetchSeats();
  }, [showtimeId, dispatch])

  return (
    <ul className={classes.lounge}>
      <li className={classes.lounge__screen}></li>
      {
        seats.map(seat => (
          <li 
            key={`${seat.row} ${seat.seat}`}
            className={`
              ${classes.lounge__seat} 
              ${seat.available ? null : classes.sold}
              ${selectedSeats.includes(`${seat.row} ${seat.seat}`) ? classes.selected : ''}
            `}
            onClick={() => handleSelect(seat.row, seat.seat)}  
          >
          </li>
        ))
      }
    </ul>
  )
}

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

      {isOpen && <Lounge />}
    </aside>
  )
}

export default SeatingPlan