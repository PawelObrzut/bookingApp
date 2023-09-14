import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../../features/moviesSlice";
import { RootState } from "../../app/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import classes from "./Carousel.module.scss";
import { IMovie } from "../../types/types";
import { PiPlayCircleThin } from "react-icons/pi";

interface ICarouselCardProps {
  movie: IMovie
}

const CarouselCard = ({ movie }: ICarouselCardProps) => {
  return (
    <li className={classes.card}>
      <div className={classes.movie}>
        <img className={classes.movie__image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <div className={classes.movie__tag}>Premiere</div>
        <div className={`${classes.movie__details}`}>
          <span className={`btn ${classes.movie__details__span}`}>Details</span>
        </div>
        <div className={classes.movie__trailer}>
          <PiPlayCircleThin size={50} />
        </div>
        <div className={classes.movie__bg}></div>
      </div>
      <h1 className={classes.movie__title}>{movie.title}</h1>
    </li>
  )
}


const Carousel = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const status = useSelector((state: RootState) => state.movies.status);
  const error = useSelector((state: RootState) => state.movies.error);
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadMovies());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={classes.carousel}>
      <ul className={`${classes.carousel__content} `}>
        {movies?.map((movie: IMovie) => <CarouselCard key={movie.id} movie={movie} />)}
      </ul>
    </div>
  )
}

export default Carousel