import ShowtimesService from '../../services/showtimesServices/index'
import { Showtimes_getShowtimesByMovieId } from '../../services/showtimesServices/__generated__/Showtimes'
import { useEffect, useState } from 'react';
import { IShowtime } from '../../types/types';
import { useAppDispatch } from '../../hooks';
import { toggleSeatingPlan, setMovieDetails } from '../../features/seatingPlanSlice';

const ShowTimes = ({ movieId, className }: { movieId: number, className: string }) => {
  const dispatch = useAppDispatch();

  const [showtimes, setShowtimes] = useState<Showtimes_getShowtimesByMovieId[]>([]);

  useEffect(() => {
    const fetchShowtimes = async () => {
      try {
        const data = await ShowtimesService.fetchShowtimes(movieId)
        setShowtimes(data);
      } catch (error) {
        console.error('Error fetching showtimes:', error);
      }
    };

    fetchShowtimes();
  }, [movieId]);

  return (
    <ul className={className}>
      {
        [...showtimes]
          .sort((prev, next) => new Date(prev.dateTime).getTime() - new Date(next.dateTime).getTime())
          .map((showtime: IShowtime) => (
          <li 
            className='theme_btn' 
            key={showtime._id} 
            onClick={() => {
              dispatch(toggleSeatingPlan())
              dispatch(setMovieDetails({
                movieId: movieId,
                showtimeUuid: showtime.uuid,
                time: showtime.dateTime?.slice(11, 16)
              }))
            }}
          >
            {showtime.dateTime?.slice(11, 16)}
          </li>
        ))
      }
    </ul>
  )
}

export default ShowTimes;