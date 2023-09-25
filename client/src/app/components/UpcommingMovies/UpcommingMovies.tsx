import React, { useEffect, useState, useRef } from 'react'
import Slider from "react-slick";
import MoviesCollection from './UpcommingMovies.json';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from '../../../types/types';
import classes from './UpcomingMovies.module.scss';
import upcommingMoviesService from '../../services/upcommingMoviesService';

const UpcommingMovies = () => {
  const fetchUpcomingMovies = async () => {
    const upcomingMovies = await upcommingMoviesService.getAllMovies().catch(err => {
      console.log('Error ', err)
    });
    console.log('The movies: ', upcomingMovies);
  }

  const [movies, setMovies] = useState<IMovie[]>([]);

  const sliderRef = useRef(null);

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
    setMovies(MoviesCollection as IMovie[]);
    fetchUpcomingMovies();
  },[])
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section className={classes.slider}>
      <h2>Upcomming Movies</h2>
      <Slider ref={sliderRef} {...settings}>
        { movies.map((movie: IMovie) => (
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