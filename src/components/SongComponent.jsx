import { useDispatch, useSelector } from "react-redux";
import { addToLibrary, likeSong, setCurrentSong } from "../redux/actions/actions";

import { IoMdHeart } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";

const SongComponent = ({ song }) => {
  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.songs.likedSongs);

  const handleLike = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(likeSong(song));
    if (!likedSongs[song.id]) {
      dispatch(addToLibrary(song));
    }
  };
  const handlePlay = (event) => {
    event.preventDefault();
    dispatch(setCurrentSong(song));
  };

  return (
    <div className="song" onClick={handlePlay}>
      <img className="img-fluid" src={song.album.cover_medium} alt="track" />
      <p>{song.title}</p>
      <div onClick={handleLike} style={{ cursor: "pointer" }} id="heart">
        {likedSongs[song.id] ? <IoMdHeart /> : <IoMdHeartEmpty />}
      </div>
    </div>
  );
};

export default SongComponent;
