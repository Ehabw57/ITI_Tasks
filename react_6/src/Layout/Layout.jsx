import NavBar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchMovies,
  updateMoveis,
  setLoading,
  setTotalPages,
} from "../Store/FavoriteSlice";

import { useEffect } from "react";

function Layout() {
  const dispatch = useDispatch();
  const { activePage, totalPages, movies, searchQuery } = useSelector(
    (state) => state.storeReducer,
  );

  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDAzZDFjMWFmNjY5MDA2Mjk0YzRkNDM5ODhhNWU3ZSIsIm5iZiI6MTc1NzUwMzE5Ni4xNzUsInN1YiI6IjY4YzE1ZWRjMzg4MWViNTg4Nzk0ODRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U13Sc8mokOGNn6IaH_ukXD3-0dNrU6ngdrpMf3TeaFs",
    },
  };

  useEffect(() => {
    dispatch(fetchMovies())
 }, [activePage, searchQuery]);

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
