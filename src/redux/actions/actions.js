export const LIKE_SONG = "LIKE_SONG";
export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export const SET_STATUS = "SET_STATUS";
export const SET_ERROR = "SET_ERROR";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const ADD_TO_LIBRARY = "ADD_TO_LIBRARY";
export const ADD_SONG_TO_PLAYLIST = "ADD_SONG_TO_PLAYLIST";
export const REMOVE_SONG_FROM_PLAYLIST = "REMOVE_SONG_FROM_PLAYLIST";

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

export const addToLibrary = (song) => ({
  type: ADD_TO_LIBRARY,
  payload: song,
});

export const addSongToPlaylist = (playlistId, song) => ({
  type: ADD_SONG_TO_PLAYLIST,
  payload: { playlistId, song },
});

export const removeSongFromPlaylist = (playlistId, songId) => ({
  type: REMOVE_SONG_FROM_PLAYLIST,
  payload: { playlistId, songId },
});
