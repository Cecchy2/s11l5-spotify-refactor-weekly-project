import { ADD_SONG_TO_PLAYLIST, REMOVE_SONG_FROM_PLAYLIST } from "../actions/actions";

const initialState = {
  playlists: {},
};

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG_TO_PLAYLIST: {
      const { playlistId, song } = action.payload;
      return {
        ...state,
        playlists: {
          ...state.playlists,
          [playlistId]: state.playlists[playlistId] ? [...state.playlists[playlistId], song] : [song],
        },
      };
    }
    case REMOVE_SONG_FROM_PLAYLIST: {
      const { playlistId, songId } = action.payload;
      return {
        ...state,
        playlists: {
          ...state.playlists,
          [playlistId]: state.playlists[playlistId].filter((song) => song.id !== songId),
        },
      };
    }
    default:
      return state;
  }
};

export default playlistReducer;
