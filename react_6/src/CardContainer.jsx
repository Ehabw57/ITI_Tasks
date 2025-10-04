import Card from "./Card";

export default function CardsContainer({ movies }) {
  return (
    <div className="containerr">
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
