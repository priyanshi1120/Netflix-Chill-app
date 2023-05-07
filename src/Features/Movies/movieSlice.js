import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    movies:{},
    favouriteMovies:{}
}
const movieSlice = createSlice({
    name: 'movies',
    initialState : initialState,
    reducers: {
      addMovies:(state,{payload})=>{
       
        state.movies = payload
       
      },
      addFavouriteMovies :(state,{payload})=>{
        // state.favouriteMovies[payload.id] = payload;
        // console.log(":)",payload)
        state.favouriteMovies = {
          ...state.favouriteMovies,
          [payload.id]: payload,
      };
    
      },
      deleteFavouriteMovies: (state, { payload }) => {
        delete state.favouriteMovies[payload.id];
      }
   
    }
});

export const {addMovies} = movieSlice.actions;
export const {addFavouriteMovies} = movieSlice.actions;
export const {deleteFavouriteMovies} = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllFavouriteMovies = (state) =>state.movies.favouriteMovies;
export default movieSlice.reducer;
