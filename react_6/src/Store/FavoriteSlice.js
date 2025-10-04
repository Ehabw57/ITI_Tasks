import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (_, thunkAPI) => {
    const options = {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDAzZDFjMWFmNjY5MDA2Mjk0YzRkNDM5ODhhNWU3ZSIsIm5iZiI6MTc1NzUwMzE5Ni4xNzUsInN1YiI6IjY4YzE1ZWRjMzg4MWViNTg4Nzk0ODRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U13Sc8mokOGNn6IaH_ukXD3-0dNrU6ngdrpMf3TeaFs",
      },
    };
    const {searchQuery, activePage} = thunkAPI.getState().storeReducer

    const url = searchQuery.trim()
      ? `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&query=${searchQuery.trim()}&page=${activePage}`
      : `https://api.themoviedb.org/3/trending/all/day?include_adult=false&language=en-US&page=${activePage}`;

    const response = await axios.get(url, options);
    return response.data;
  },
);

export const StoreSlice = createSlice({
  name: "store",
  initialState: {
    searchQuery: "",
    activePage: 1,
    favorite: [],
    isLoading: false,
    totalPages: 1,
    movies: [
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
    ],
  },
  reducers: {
    updateMoveis(state, action) {
      state.movies = action.payload;
    },

    setLoading(state, action) {
      state.isLoading = action.payload;
    },

    pushFavorite(state, action) {
      if (!state.favorite.find((m) => m.id === action.payload.id)) {
        state.favorite.push(action.payload);
      }
    },

    removeFavorite(state, action) {
      state.favorite = state.favorite.filter((m) => m.id != action.payload);
    },

    changeActive(state, action) {
      state.activePage = action.payload;
    },

    setSearch(state, action) {
      state.searchQuery = action.payload;
    },

    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload.results
        state.totalPages = action.payload.total_pages
        state.isLoading = false
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.movies = []
        console.error("sorry Smothing went wrong during fetching api", action.error.message)
      });
  },
});

export default StoreSlice.reducer;

export const {
  updateMoveis,
  setLoading,
  pushFavorite,
  removeFavorite,
  changeActive,
  setSearch,
  setTotalPages,
} = StoreSlice.actions;
