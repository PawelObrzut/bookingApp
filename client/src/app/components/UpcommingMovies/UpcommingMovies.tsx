import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { fetchMoviesGtDate } from '../../services/moviesServices'
import settings from './sliderSettings';
import classes from './UpcomingMovies.module.scss';
import Slider from "react-slick";
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from '../../types/types';

const UpcommingMovies = () => {
  const sliderCollection = useSelector((state: RootState) => state.slides.slider);
  const status = useSelector((state: RootState) => state.slides.status);
  const error = useSelector((state: RootState) => state.slides.error);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();
  
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  useEffect(() => {
    const currentDate = new Date().toISOString().slice(0,10);
    if (status === "idle") {
      dispatch(fetchMoviesGtDate(currentDate));
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={`${classes.slider} container`}>
      <h2>Upcomming Movies</h2>
      <Slider ref={sliderRef} {...settings}>
        { sliderCollection.map((movie: IMovie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Slider>
      <div>
        <span className={`${classes.arrow} ${classes.arrow__left}`} onClick={previous}>
          &#10094;
        </span>
        <span className={`${classes.arrow} ${classes.arrow__right}`} onClick={next}>
          &#10095;
        </span>
      </div>
    </section>
  )
}

export default UpcommingMovies