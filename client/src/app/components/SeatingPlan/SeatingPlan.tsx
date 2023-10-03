import React, { useEffect, useState } from 'react';
import classes from './SeatingPlan.module.scss';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { toggleSeatingPlan } from '../../features/seatingPlanSlice';
import { TfiClose } from 'react-icons/tfi';

import ShowtimesService from '../../services/showtimesServices/index'
import { Seats_getSeatsByShowtimeUuid_seats } from '../../services/showtimesServices/__generated__/Seats';
import { ApolloError } from '@apollo/client';

const Auditorium = () => {
  const dispatch = useAppDispatch();
  const showtimeUuid = useAppSelector((state) => state.seatingPlan.movieDetails.showtimeUuid);
  const [seats, setSeats] = useState<Seats_getSeatsByShowtimeUuid_seats[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');


  const handleSelect = (row: number, seatNumber: number) => {
    const seatKey = `${row} ${seatNumber}`;
    if (selectedSeats.includes(seatKey)) {
      setSelectedSeats(prev => prev.filter(seat => seat !== seatKey));
    } else {
      setSelectedSeats(prev => [...prev, seatKey]);
    }
  }

  const handleSubmit = async () => {
    try {
      const updateSeats = await ShowtimesService.setSeats(selectedSeats, showtimeUuid);
      setSuccessMessage('Congratulations on your purchase');
      setTimeout(() => {setSuccessMessage('')}, 2000);
      setSeats(updateSeats);
      setSelectedSeats([]);
    } catch (err) {
      if (err instanceof ApolloError) {
        setErrorMessage(err.message);
        setTimeout(() => {setErrorMessage('')}, 2000);
        setSelectedSeats([]);
        try {
          const seats = await ShowtimesService.fetchSeats(showtimeUuid);
          setSeats(seats);
        } catch (err) {
          if (err instanceof ApolloError) {
            console.log(err.message);
          }
        }
      }
    }
  }

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const data = await ShowtimesService.fetchSeats(showtimeUuid);
        setSeats(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSeats();
  }, [showtimeUuid, dispatch])

  return (
    <>
      {errorMessage && <span className={classes.message}>{errorMessage}</span>}
      {successMessage && <span className={classes.message}>{successMessage}</span>}
      <ul className={classes.audutorium}>
        <li className={classes.audutorium__screen}></li>
        {
          seats.map(seat => (
            <li
              key={`${seat.row} ${seat.seat}`}
              className={`
              ${classes.audutorium__seat} 
              ${seat.available ? null : classes.sold}
              ${selectedSeats.includes(`${seat.row} ${seat.seat}`) ? classes.selected : ''}
            `}
              onClick={() => handleSelect(seat.row, seat.seat)}
            >
            </li>
          ))
        }
      </ul>
      <div className={classes.order__wrapper}>
        <span 
          className={`${classes.buyTickets} theme_btn`}
          onClick={handleSubmit}
        >
          Buy Tickets</span>
      </div>
    </>
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

      {isOpen && <Auditorium />}
    </aside>
  )
}

export default SeatingPlan