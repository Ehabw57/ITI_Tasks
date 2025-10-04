import { useContext } from "react";
import FavoriteContext from "../Context/FavoriteContext";
import CardsContainer from "../CardContainer";

export default function Favorite() {
  const { favorite } = useContext(FavoriteContext);

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
