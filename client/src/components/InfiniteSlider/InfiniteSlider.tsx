import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import sliderSettings from './sliderSettings';
import "./slick.scss";
import "./slick-theme.scss";
import classes from './InfiniteSlider.module.scss';

import { useQuery } from "@apollo/client";
import { LOAD_MOVIES } from "../../graphQL/Queries";
import { IMovie } from '../../types/types';
import { PiPlayCircleThin } from "react-icons/pi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Card = (movie : IMovie) => {
  return (
    <div>
      <div className={classes.card}>
        <img className={classes.card__image}  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <span >Premiere</span>

        <div >
          <div>
            <span className={`btn`}>Details</span>
          </div>
          <div >
            <PiPlayCircleThin size={60} />
          </div>
        </div>
      </div>
      <h1>{movie.title}</h1>
    </div>
  )
}

function SampleNextArrow(props) {
  const {onClick} = props;
  return <BsChevronRight  className={`${classes.arrow} ${classes.rightArrow}`} onClick={onClick} />
}

function SamplePrevArrow(props) {
  const {onClick} = props;
  return <BsChevronLeft className={`${classes.arrow} ${classes.leftArrow}`} onClick={onClick} />
}

const settings = {
  dots: false,
  infinite: true,
  swipeToSlide: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 641,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
  ]
};

const InfiniteSlider = (props) => {
  const {onClick} = props;
  const { data } = useQuery(LOAD_MOVIES)
  const [movies, setMovies] = useState<IMovie[] | undefined>();

  useEffect(() => {
    if (data && data.getMovies) {
      setMovies(data.getMovies);
    }
  }, [data])
  
  return (
    <div>
      <Slider {...settings} >
        {
          movies?.map((movie: IMovie) => (
            <Card {...movie} key={movie.id}/>
          ))
        }
      </Slider>
    </div>
  )
}

export default InfiniteSlider