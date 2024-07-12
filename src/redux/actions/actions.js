// actions.js
export const LIKE_SONG = "LIKE_SONG";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const SET_STATUS = "SET_STATUS";
export const SET_ERROR = "SET_ERROR";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";

export const likeSong = (song) => ({
  type: LIKE_SONG,
  payload: song,
});

export const setSearchResults = (results) => ({
  type: SET_SEARCH_RESULTS,
  payload: results,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: status,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});
