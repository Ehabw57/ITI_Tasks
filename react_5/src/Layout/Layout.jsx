import NavBar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateMoveis, setLoading, setTotalPages} from "../Store/FavoriteSlice";
import { useEffect } from "react";

function Layout() {
  const dispatch = useDispatch();
  const { activePage, totalPages, movies, searchQuery} = useSelector(
    (state) => state.storeReducer,
  );

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDAzZDFjMWFmNjY5MDA2Mjk0YzRkNDM5ODhhNWU3ZSIsIm5iZiI6MTc1NzUwMzE5Ni4xNzUsInN1YiI6IjY4YzE1ZWRjMzg4MWViNTg4Nzk0ODRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U13Sc8mokOGNn6IaH_ukXD3-0dNrU6ngdrpMf3TeaFs",
    },
  };

  useEffect(() => {
    dispatch(setLoading(true));
    const url = searchQuery.trim()
      ? `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&query=${searchQuery.trim()}&page=${activePage}`
      : `https://api.themoviedb.org/3/trending/all/day?include_adult=false&language=en-US&page=${activePage}`;

    fetch(url, options)
      .then((res) => res.json())
      .then((res) => {
        dispatch(setTotalPages(res.total_pages))
        dispatch(setLoading(false));
        dispatch(updateMoveis(res.results));
      })
      .catch((err) => console.error(err));
  }, [activePage,searchQuery]);

  return (
    <>
      <NavBar />
      <div className="layout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
