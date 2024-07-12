import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../reducers/songsReducer";
import playerReducer from "../reducers/playerReducer";
import playlistReducer from "../reducers/playlistReducer";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    player: playerReducer,
    playlists: playlistReducer,
  },
});

export default store;
