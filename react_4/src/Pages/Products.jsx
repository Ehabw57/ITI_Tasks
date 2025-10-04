import { useContext } from "react";
import FavoriteContext from "../Context/FavoriteContext";
import CardsContainer from "../CardContainer";
import Loader from "../Loader";
import  Pagination  from "../Pagination";

export default function Products() {
  const { movies, isLoading } = useContext(FavoriteContext);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : movies.length ? (
        <CardsContainer movies={movies} />
      ) : (
        <h1>Sorry No Movies Found !!</h1>
      )}
      <Pagination className='pagination'/>
    </>
  );
}
