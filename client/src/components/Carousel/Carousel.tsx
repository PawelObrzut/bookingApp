import { useQuery } from "@apollo/client";
import { LOAD_MOVIES } from "../../graphQL/Queries";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "../../features/moviesSlice";
import { RootState } from "../../app/store";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";


const Carousel = () => {
  // const { data } = useQuery(LOAD_MOVIES)
  // const [movies, setMovies] = useState<Movie[] | undefined>();

  // useEffect(() => {
  //   if (data && data.getMovies) {
  //     console.log(data.getMovies);
  //     setMovies(data.getMovies);
  //   }
  // }, [data])

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
    <div>
      Carousel
      {movies?.length}
    </div>
  )
}

export default Carousel