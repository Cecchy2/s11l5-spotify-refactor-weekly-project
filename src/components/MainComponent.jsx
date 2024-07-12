import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SongComponent from "./SongComponent";
import { setSearchResults, setStatus, setError } from "../redux/actions/actions";
import { Container, Row, Col } from "react-bootstrap";

const MainComponent = ({ initialGenre }) => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.songs.searchResults);
  const [title, setTitle] = useState(`${initialGenre} Classics`);

  useEffect(() => {
    const fetchSearchResults = async (query) => {
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

    fetchSearchResults("queen"); // Carica inizialmente il genere "rock"
  }, [dispatch]);

  useEffect(() => {
    if (searchResults.length > 0) {
      console.log(searchResults);
      setTitle(`Results for ${searchResults[0].artist.name}`);
    }
  }, [searchResults]);

  return (
    <Container>
      <Row>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <Row>
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="genre">
                <h2 className="text-white mt-5">{title}</h2>
                <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="genreSection">
                  {searchResults.map((song) => (
                    <SongComponent key={song.id} song={song} />
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainComponent;
