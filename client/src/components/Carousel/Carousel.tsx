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
  index: number
}

const CarouselCard = ({ movie, index }: ICarouselCardProps) => {
  return (
    <li className={`${classes.frame} ${classes.initialPosition}`} id={`carouselitem` + index}>
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

  const carouselData = movies.length > 0 ? [movies[movies.length - 1], ...movies, ...movies] : [];

  const [cardIndex, setCardIndex] = useState(1);
  const frameWidth = 106.1;

  const slideLeftHandler = () => {
    const carouselItems = document.querySelectorAll(`.${classes.frame}`);
    carouselItems.forEach((item) => {
      (item as HTMLElement).style.transition = '';
    });

    const newIndex = cardIndex === 0 ? movies.length - 1 : cardIndex - 1;
    setCardIndex(newIndex);
    translateFrame(newIndex);

    if (newIndex === 0) {
      setTimeout(() => {
        carouselItems.forEach((item) => {
          (item as HTMLElement).style.transition = 'none';
        });
        translateFrame(movies.length);
      }, 600);
    }
  }

  const slideRightHandler = () => {
    const carouselItems = document.querySelectorAll(`.${classes.frame}`);
    carouselItems.forEach((item) => {
      (item as HTMLElement).style.transition = '';
    });

    const newIndex = cardIndex === movies.length + 1 ? 0 : cardIndex + 1;

    if (newIndex === movies.length) {
      translateFrame(newIndex);
      setCardIndex(newIndex);
      
      setTimeout(() => {
        carouselItems.forEach((item) => {
          (item as HTMLElement).style.transition = 'none';
        });

        const toTranslate = frameWidth;
        carouselItems.forEach((item) => {
          (item as HTMLElement).style.transform = `translateX(` + toTranslate + `%)`;
        });

      }, 600);
      
    } else {
      console.log("else")
      translateFrame(newIndex);
      setCardIndex(newIndex);
    }
  }

  const translateFrame = (index: number) => {
    const toTranslate = -frameWidth * index;
    const carouselItems = document.querySelectorAll(`.${classes.frame}`);
    carouselItems.forEach((item) => {
      (item as HTMLElement).style.transform = `translateX(` + toTranslate + `%)`;
    });
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
          <BsChevronLeft />
        </span>
        <ul className={classes.carousel__frame}>
          {
            carouselData?.map((movie, index) => (
              <CarouselCard movie={movie} index={index} key={movie.title + index.toString()} />
            ))
          }
        </ul>
        <span className={classes.carousel__rightArrow} onClick={slideRightHandler}>
          <BsChevronRight />
        </span>
      </div>
    </div>
  )
}

export default Carousel