import { configureStore } from "@reduxjs/toolkit";
import storeReducer from './FavoriteSlice'

export default configureStore({
  reducer:{storeReducer}
})
