import ShowtimesService from '../../services/showtimesServices/index'
import { Showtimes_getShowtimesByMovieId } from '../../services/showtimesServices/__generated__/Showtimes'
import { useEffect, useState } from 'react';
import { IShowtime } from '../../types/types';

const ShowTimes = ({ movieId, className }: { movieId: number, className: string }) => {
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
        showtimes.map((showtime: IShowtime) => (
          <li className='theme_btn' key={showtime._id}>
            {showtime.dateTime?.slice(11,16)}
          </li>
        ))
      }
    </ul>
  )
}

export default ShowTimes;