import React, { useEffect, useState } from 'react';
import classes from './SeatingPlan.module.scss';

import { useAppSelector, useAppDispatch } from '../../hooks';
import { toggleSeatingPlan } from '../../features/seatingPlanSlice';
import { TfiClose } from 'react-icons/tfi';

import ShowtimesService from '../../services/showtimesServices/index'
import { Seats_getSeatsByShowtimeUuid_seats } from '../../services/showtimesServices/__generated__/Seats';

const Auditorium = () => {
  const dispatch = useAppDispatch();
  const showtimeUuid = useAppSelector((state) => state.seatingPlan.movieDetails.showtimeUuid);
  const [seats, setSeats] = useState<Seats_getSeatsByShowtimeUuid_seats[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const handleSelect = (row: number, seatNumber: number) => {
    const seatKey = `${row} ${seatNumber}`;
    if (selectedSeats.includes(seatKey)) {
      setSelectedSeats(prev => prev.filter(seat => seat !== seatKey));
    } else {
      setSelectedSeats(prev => [...prev, seatKey]);
    }
  }

  const handleSubmit = () => {
    console.log(selectedSeats)
    // make a mutation request to Showtimes collection
  }

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const data = await ShowtimesService.fetchSeats(showtimeUuid);
        setSeats(data);
      } catch (error) {
        console.error('Error fetching seats:', error);
      }
    };
    fetchSeats();
  }, [showtimeUuid, dispatch])

  return (
    <>
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