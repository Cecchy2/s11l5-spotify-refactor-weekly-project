import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlists: {},
};

const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    addSongToPlaylist: (state, action) => {
      const { playlistId, song } = action.payload;
      if (!state.playlists[playlistId]) {
        state.playlists[playlistId] = [];
      }
      state.playlists[playlistId].push(song);
    },
    removeSongFromPlaylist: (state, action) => {
      const { playlistId, songId } = action.payload;
      if (state.playlists[playlistId]) {
        state.playlists[playlistId] = state.playlists[playlistId].filter((song) => song.id !== songId);
      }
    },
  },
});

export const { addSongToPlaylist, removeSongFromPlaylist } = playlistSlice.actions;

export default playlistSlice.reducer;
