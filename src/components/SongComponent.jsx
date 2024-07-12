import { useDispatch, useSelector } from "react-redux";
import { likeSong, setCurrentSong } from "../redux/actions/actions";

const SongComponent = ({ song }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.songs.likedSongs);

  const handleLike = (event) => {
    event.preventDefault();
    event.stopPropagation(); // Previene la propagazione dell'evento
    dispatch(likeSong(song));
  };

  const handlePlay = () => {
    dispatch(setCurrentSong(song));
  };

  return (
    <div className="song" onClick={handlePlay}>
      <img className="img-fluid" src={song.album.cover_medium} alt="track" />
      <p>{song.title}</p>
      <button onClick={handleLike}>{likedSongs[song.id] ? "Unlike" : "Like"}</button>
    </div>
  );
};

export default SongComponent;
