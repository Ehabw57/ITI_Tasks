import Carousel from "react-bootstrap/Carousel";
import { useSelector } from "react-redux";

export default function Home() {
  const { movies } = useSelector((state) => state.storeReducer);
  const splitedMovies = movies.slice(0, 5)
  return (
    <Carousel>
      {splitedMovies.map((m) => (
        <Carousel.Item key={m.id}>
          <img src={`https://image.tmdb.org/t/p/w300/${m.backdrop_path}`} style={{width:"100%"}}/>
          <Carousel.Caption>
            <h3>{m.title || m.name}</h3>
            <p>{m.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
