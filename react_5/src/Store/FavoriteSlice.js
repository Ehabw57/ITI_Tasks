import { createSlice } from "@reduxjs/toolkit";
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
