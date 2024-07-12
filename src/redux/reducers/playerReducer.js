import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playSong: (state, action) => {
      state.currentSong = action.payload;
    },
  },
});

export const { playSong } = playerSlice.actions;

export default playerSlice.reducer;
