import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../../features/moviesSlice";
import { RootState } from "../../app/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import classes from "./Carousel.module.scss";
import { IMovie } from "../../types/types";
import { PiPlayCircleThin } from "react-icons/pi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface ICarouselCardProps {
  movie: IMovie
}

const CarouselCard = ({ movie }: ICarouselCardProps) => {
  return (
    <li className={classes.card}>
      <div className={classes.movie}>
        <img className={classes.movie__image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <div className={classes.movie__tag}>Premiere</div>

        <div className={classes.movie__bg}>
          <div className={`${classes.movie__details}`}>
            <span className={`btn ${classes.movie__details__span}`}>Details</span>
          </div>
          <div className={classes.movie__trailer}>
            <PiPlayCircleThin size={60} />
          </div>
        </div>
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShiftLeft = () => {
    // console.log(movies.slice(-1).concat(movies.slice(0, movies.length - 1)));
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  }

  const handleShiftRight = () => {
    // console.log(movies.slice(1, movies.length).concat(movies.slice(0, 1)));
    setCurrentIndex((prevIndex) =>
      prevIndex === movies.length - 1 ? 0 : prevIndex + 1
    );
  };

  const looppedMovies = [...movies.slice(currentIndex), ...movies.slice(0, currentIndex)];

  if (status === "loading") {
    return <div>Loading...</div>;
  } else if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={classes.carousel}>
      <div className={classes.carousel__prev} onClick={handleShiftLeft}>
        <BsChevronLeft size={50} />
      </div>
      <ul className={`${classes.carousel__content} `}>
        {looppedMovies
          ?.map((movie: IMovie) => (
            <CarouselCard key={movie.id} movie={movie} />
          ))}
      </ul>
      <div className={classes.carousel__next} onClick={handleShiftRight}>
        <BsChevronRight size={50} />
      </div>
    </div>
  )
}

export default Carousel