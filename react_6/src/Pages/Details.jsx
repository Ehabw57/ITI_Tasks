import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../Store/FavoriteSlice";
import { useState, useEffect } from "react";

export default function Details() {
  const { isLoading } = useSelector(state=> state.storeReducer);
  const dispatch = useDispatch()
  const [movie, setMovie] = useState({});
  const { id: movie_id } = useParams();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDAzZDFjMWFmNjY5MDA2Mjk0YzRkNDM5ODhhNWU3ZSIsIm5iZiI6MTc1NzUwMzE5Ni4xNzUsInN1YiI6IjY4YzE1ZWRjMzg4MWViNTg4Nzk0ODRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U13Sc8mokOGNn6IaH_ukXD3-0dNrU6ngdrpMf3TeaFs",
    },
  };

  useEffect(() => {
    dispatch(setLoading(true))
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setLoading(false))
        setMovie(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {!isLoading ? (
        <>
          <img
            className={"backdrop"}
            src={"https://image.tmdb.org/t/p/w300/" + movie.backdrop_path}
          />
          <h1>{movie.title}</h1>
          <small>{movie.release_date || movie.first_air_date}</small>
          <p>{movie.overview}</p>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}
