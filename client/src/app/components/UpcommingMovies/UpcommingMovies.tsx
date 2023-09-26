import React, { useEffect, useState, useRef } from 'react'
// import Slider from "react-slick";
// import MoviesCollection from './UpcommingMovies.json';
// import MovieCard from '../MovieCard/MovieCard';
// import { IMovie } from '../../types/types';
import classes from './UpcomingMovies.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AnyAction } from '@reduxjs/toolkit';
import { fetchAllMovies } from '../../services/moviesServices'

const UpcommingMovies = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const status = useSelector((state: RootState) => state.movies.status);
  const error = useSelector((state: RootState) => state.movies.error);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  
  // const fetchUpcomingMovies = async () => {
  //   const upcomingMovies = await upcommingMoviesService.getAllMovies().catch(err => {
  //     console.log('Error ', err)
  //   });
  //   console.log('The movies: ', upcomingMovies);
  // }

  // const [movies, setMovies] = useState<IMovie[]>([]);

  // const sliderRef = useRef(null);

  // const next = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickNext();
  //   }
  // };

  // const previous = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickPrev();
  //   }
  // };

  const handleConsole = () => {
    console.log(movies)
  }

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllMovies());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={classes.slider}>
      <h2>Upcomming Movies</h2>
      <button onClick={handleConsole}>Console.log movies</button>
      {/* <Slider ref={sliderRef} {...settings}>
        { movies.map((movie: IMovie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Slider> */}
      {/* <div>
        <span className={`${classes.arrow} ${classes.arrow__left}`} onClick={previous}>
          &#10094;
        </span>
        <span className={`${classes.arrow} ${classes.arrow__right}`} onClick={next}>
          &#10095;
        </span>
      </div> */}
    </section>
  )
}

export default UpcommingMovies