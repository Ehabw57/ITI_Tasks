import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdHeartEmpty as EmptyHeart } from "react-icons/io";
import { IoMdHeart as Heart } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, pushFavorite } from "./Store/FavoriteSlice";

export default function Card({ movie }) {
  const { favorite } = useSelector(state => state.storeReducer);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handelClick(e) {
    if(['svg', 'path'].includes(e.target.tagName))
      return
    navigate(`/details/${movie.id}`)
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
            onClick={() => dispatch(removeFavorite(movie.id))}
          />
        ) : (
          <EmptyHeart
            className="i-con"
            onClick={() => dispatch(pushFavorite(movie))}
          />
        )}
        <p className="release-date">
          {movie.release_date || movie.first_air_date}
        </p>
      </div>
    </div>
  );
}
