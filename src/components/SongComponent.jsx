import { useDispatch, useSelector } from "react-redux";
import { likeSong } from "../redux/reducers/songsReducer";
import { playSong } from "../redux/reducers/playerReducer";

const SongComponent = ({ song }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.songs.likedSongs);

  const handleLike = (e) => {
    e.stopPropagation();
    dispatch(likeSong(song));
  };

  const handlePlay = () => {
    dispatch(playSong(song));
  };

  return (
    <div className="song" onClick={handlePlay}>
      <p>{song.title}</p>
      <button onClick={handleLike}>{likedSongs[song.id] ? "Unlike" : "Like"}</button>
    </div>
  );
};

export default SongComponent;
