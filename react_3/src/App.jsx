import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import Loader from "./Loader";

import "./style.css";

function App() {
  const inputRef = useRef(null);
  const [active, setActive] = useState(1);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setLoading] = useState("ture");
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDAzZDFjMWFmNjY5MDA2Mjk0YzRkNDM5ODhhNWU3ZSIsIm5iZiI6MTc1NzUwMzE5Ni4xNzUsInN1YiI6IjY4YzE1ZWRjMzg4MWViNTg4Nzk0ODRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U13Sc8mokOGNn6IaH_ukXD3-0dNrU6ngdrpMf3TeaFs",
    },
  };
  const [movies, setMovies] = useState([
    {
      adult: false,
      backdrop_path: "/Q2OajDi2kcO6yErb1IAyVDTKMs.jpg",
      genre_ids: [27, 9648],
      id: 1078605,
      media_type: "movie",
      original_language: "en",
      original_title: "Weapons",
      overview:
        "When all but one child from the same class mysteriously vanish on the same night at exactly the same time, a community is left questioning who or what is behind their disappearance.",
      popularity: 300.5015,
      poster_path: "/cpf7vsRZ0MYRQcnLWteD5jK9ymT.jpg",
      release_date: "2025-08-04",
      title: "Weapons",
      video: false,
      vote_average: 7.5,
      vote_count: 899,
    },
  ]);

  useEffect(() => {
    setLoading(true);
    const url = search.trim()
      ? `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&query=${search.trim()}&page=${active}`
      : `https://api.themoviedb.org/3/trending/all/day?include_adult=false&language=en-US&page=${active}`;
    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        setTotalPages(res.total_pages);
        setLoading(false);
        setMovies(res.results);
      })
      .catch((err) => console.error(err));
  }, [active, search]);

  return (
    <>
      <div className="search-box ">
        <input ref={inputRef} onKeyDown={(e)=>  e.key === 'Enter' && setSearch(e.target.value)}placeholder="search.." />
        <button
          className="btn btn-primary mx-3"
          onClick={() => setSearch(inputRef.current.value)}
        >
          search
        </button>
      </div>
      <div className="containerr">
    { totalPages > 1 && <Pagination
          active={active}
          totalPages={totalPages}
          setActive={setActive}
        />
    }
      </div>

      {isLoading ? (
        <Loader />
      ) : (
        <div className="containerr">
          {movies.length ? (
            movies.map((movie) => (
              <Card
                key={movie.id}
                overView={movie.overview}
                cover={"https://image.tmdb.org/t/p/w300/" + movie.backdrop_path}
                title={movie.original_title || movie.name}
                rateing={movie.vote_average.toFixed(1)}
                image={"https://image.tmdb.org/t/p/w300/" + movie.poster_path}
                release={movie.release_date || movie.first_air_date}
              />
            ))
          ) : (
            <h1>Sorry no movies werer found!!</h1>
          )}
        </div>
      )}
    </>
  );
}

export default App;
