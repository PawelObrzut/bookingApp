import React, { useEffect } from 'react';
import classes from './Repertoire.module.scss'
import { IMovie } from '../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchRepertoire } from '../../services/moviesServices';
import ShowTimes from '../Showtimes/Showtimes';

const Repertoire = () => {
  const repertoire = useSelector((state: RootState) => state.repertoire.repertoire);
  const status = useSelector((state: RootState) => state.repertoire.status);
  const error = useSelector((state: RootState) => state.repertoire.error);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRepertoire(true))
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <main>
      Repertoire
      {
        repertoire.map((movie: IMovie) => (
          <div className={classes.movie} key={movie.id}>

            <div className={classes.movie__poster}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </div>

            <div className={classes.movie__details}>
              <h2>{movie.title}</h2>
              <span>Buy ticket online and pay less!</span>
              <p className={classes.movie__overview}>{movie.overview}</p>
            </div>
            
            <ShowTimes movieId={movie.id} className={classes.movie__showtimes} />
          </div>
        ))
      }
    </main>
  )
}

export default Repertoire