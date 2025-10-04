import CardsContainer from "../CardContainer";
import Loader from "../Loader";
import  Pagination  from "../Pagination";
import { useSelector } from "react-redux";

export default function Products() {
  const {movies, isLoading } = useSelector(state => state.storeReducer)


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
