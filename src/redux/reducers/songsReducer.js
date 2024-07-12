import {
  LIKE_SONG,
  SET_SEARCH_RESULTS,
  SET_STATUS,
  SET_ERROR,
  SET_CURRENT_SONG,
  ADD_TO_LIBRARY,
} from "../actions/actions";

const initialState = {
  likedSongs: {},
  searchResults: [],
  currentSong: null,
  library: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_SONG: {
      const id = action.payload.id;
      return {
        ...state,
        likedSongs: {
          ...state.likedSongs,
          [id]: !state.likedSongs[id],
        },
      };
    }
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    case ADD_TO_LIBRARY:
      return {
        ...state,
        library: [...state.library, action.payload],
      };
    default:
      return state;
  }
};

export default songsReducer;
