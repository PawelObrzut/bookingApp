import React from 'react';
import classes from './MovieCard.module.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMovie } from '../../types/types';


const MovieCard = ({ movie }: { movie: IMovie }) => {

  return (
    <div className={classes.movieCard}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />

      {movie.title}
    </div>
  )
}

export default MovieCard