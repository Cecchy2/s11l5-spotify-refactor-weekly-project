import { setSearchResults, setStatus, setError } from "../reducers/songsReducer";

export const fetchSearchResults = (query) => async (dispatch) => {
  dispatch(setStatus("loading"));
  try {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
    const data = await response.json();
    dispatch(setSearchResults(data.data));
    dispatch(setStatus("succeeded"));
  } catch (error) {
    dispatch(setError(error.toString()));
    dispatch(setStatus("failed"));
  }
};
