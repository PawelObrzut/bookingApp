import React, { useState, useEffect } from 'react';
import RepertoireCollection from './Repertoire.json'
import classes from './Repertoire.module.scss'
import { IMovie } from '../../types/types';

const Repertoire = () => {
  const [repertoire, setRepertire] = useState<IMovie[]>([]);

  useEffect(() => {
    setRepertire(RepertoireCollection as IMovie[])
  }, [])

  return (
    <main>
      Repertoire
      {
        repertoire.map(movie => (
          <div className={classes.movie} key={movie.id}>

            <div className={classes.movie__poster}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </div>

            <div className={classes.movie__details}>
              <h2>{movie.title}</h2>
              <span>Buy ticket online and pay less!</span>
              <p className={classes.movie__overview}>{movie.overview}</p>
            </div>

            <ul className={classes.movie__showtimes}>
              <li className='theme_btn'>15:20</li>
              <li className='theme_btn'>18:00</li>
              <li className='theme_btn'>21:10</li>
            </ul>
          </div>
        ))
      }
    </main>
  )
}

export default Repertoire