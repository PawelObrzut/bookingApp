import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../../features/moviesSlice";
import { RootState } from "../../app/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import classes from "./Carousel.module.scss";
import { IMovie } from "../../types/types";
import { PiPlayCircleThin } from "react-icons/pi";

interface ICarouselCardProps {
  movie: IMovie
  id: number
}

const CarouselCard = ({ movie, id }: ICarouselCardProps) => {
  return (
    <li className={classes.frame} id={id.toString()}>
      <div className={classes.movie}>
        <img className={classes.movie__image} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <span className={classes.movie__tag}>Premiere</span>

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

  const [cardIndex, setCardIndex] = useState(0);
  const frameWidth = 100;

  const slideLeftHandler = () => {
    let newIndex = cardIndex;
    if (newIndex > 0) {
      newIndex -= 1;
    }
    translateFrame(newIndex);
    setCardIndex(newIndex);
  }

  const slideRightHandler = () => {
    let newIndex = cardIndex;
    if (newIndex < movies.length - 1) {
      newIndex += 1;
  }
    translateFrame(newIndex);
    setCardIndex(newIndex);
  }

  const translateFrame = (index: number) => {
    const toTranslate = -frameWidth * index;
    movies.forEach((_movie, index) => {
      const frameElement = document.getElementById(index.toString());
      if (frameElement) {
        frameElement.style.transform = `translateX(` + toTranslate +`%)`; 
      }
    })
  }

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
    <div>
      <div className={classes.carousel}>
        <span className={classes.carousel__leftArrow} onClick={slideLeftHandler}>
          ❰
        </span>
        <ul className={classes.carousel__frame}>
          {movies.map((movie, index) => <CarouselCard movie={movie} key={movie.id} id={index} />)}
        </ul>
        <span className={classes.carousel__rightArrow} onClick={slideRightHandler}>
          ❱
        </span>
      </div>
    </div>
  )
}

export default Carousel