import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedSongs: {},
  searchResults: [],
  currentSong: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    likeSong: (state, action) => {
      const id = action.payload.id;
      state.likedSongs[id] = !state.likedSongs[id];
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
  },
});

export const { likeSong, setSearchResults, setStatus, setError, setCurrentSong } = songsSlice.actions;

export default songsSlice.reducer;
