import { useState } from "react";
import { useEffect } from "react";
import FavoriteContext from "./Context/FavoriteContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import Products from "./Pages/Products";
import Favorite from "./Pages/Favorite";
import Details from "./Pages/Details";
import Layout from "./Layout/Layout";

function App() {
  const [active, setActive] = useState(1);
  const [search, setSearch] = useState("");
  const [favorite, setFavorite] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setLoading] = useState(false);
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

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: "/favorite",
          element: <Favorite />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
      ],
    },
    {
      path: "*",
      element:<h1>Sorry 404 page Not found</h1>
    }
  ]);

  return (
    <FavoriteContext.Provider
      value={{
        setSearch,
        setActive,
        totalPages,
        active,
        favorite,
        setFavorite,
        movies,
        isLoading,
        setLoading,
      }}
    >
      <RouterProvider router={Router} />
    </FavoriteContext.Provider>
  );
}

export default App;
