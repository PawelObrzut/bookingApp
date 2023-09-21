import React, { useEffect, useState, useRef } from 'react'
import Slider from "react-slick";
import MoviesCollection from './UpcommingMovies.json';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from '../../../types/types';

const UpcommingMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

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
    setMovies(MoviesCollection as IMovie[])
  },[])
  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    arrows: true,
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
    <section>
      <h2>Upcomming Movies</h2>
      <Slider ref={sliderRef} {...settings}>
        { movies.map((movie: IMovie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div>
    </section>
  )
}

export default UpcommingMovies