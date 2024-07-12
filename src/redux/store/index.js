import { createStore, combineReducers } from "redux";
import songsReducer from "../reducers/songsReducer";
import playerReducer from "../reducers/playerReducer";
import playlistReducer from "../reducers/playlistReducer";

const rootReducer = combineReducers({
  songs: songsReducer,
  player: playerReducer,
  playlists: playlistReducer,
});

const store = createStore(rootReducer);

export default store;
