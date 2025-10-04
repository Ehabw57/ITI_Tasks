import CardsContainer from "../CardContainer";
import { useSelector } from "react-redux";

export default function Favorite() {
  const {favorite } = useSelector(state => state.storeReducer)

  return (
    <>
      {favorite.length ? (
        <CardsContainer movies={favorite} />
      ) : (
        <h1>Your Favorite Cart Is Empty !!</h1>
      )}
    </>
  );
}
