import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { IoMdHeartEmpty as EmptyHeart } from "react-icons/io";
import { IoMdHeart as Heart } from "react-icons/io";
import FavoriteContext from "./Context/FavoriteContext";
import { useNavigate } from "react-router-dom";

export default function Card({ movie }) {
  const { favorite, setFavorite } = useContext(FavoriteContext);
  const navigate = useNavigate()

  function handelClick(e) {
    if(['svg', 'path'].includes(e.target.tagName))
      return
    navigate(`/details/${movie.id}`)
  }
  function removeFromFavorite(id) {
    const targetIndex = favorite.findIndex((m) => m.id == id);
    if (targetIndex == -1) return;

    setFavorite((prev) => prev.filter((m) => m.id !== id));
  }

  function inFavorite(id) {
    return favorite.findIndex((m) => m.id == id) < 0 ? false : true;
  }

  return (
    <div  onClick={(e)=>handelClick(e)} className="card2">
      <div
        className="cover2"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
        }}
      >
        <div className="vote">{movie.vote_average ? movie.vote_average.toFixed(1) : '0'}</div>
      </div>
      <div>
        <h2 className="movie-title">{movie.original_title || movie.name }</h2>
        {inFavorite(movie.id) ? (
          <Heart
            className="i-con"
            style={{ fill: "red" }}
            onClick={() => removeFromFavorite(movie.id)}
          />
        ) : (
          <EmptyHeart
            className="i-con"
            onClick={() => setFavorite([...favorite, movie])}
          />
        )}
        <p className="release-date">
          {movie.release_date || movie.first_air_date}
        </p>
      </div>
    </div>
  );
}
