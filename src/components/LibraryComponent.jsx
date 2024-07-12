import { useSelector } from "react-redux";
import SongComponent from "./SongComponent";
import { Container, Row, Col } from "react-bootstrap";

const LibraryComponent = () => {
  const library = useSelector((state) => state.songs.library);

  return (
    <Container>
      <Row className="ms-5">
        <Col md={10} className="ms-5">
          <h2 className="ms-5 text-white">Your Library</h2>
          <Row className=" imgLinks py-3 ms-5 text-white">
            {library.map((song) => (
              <Col md={10} lg={4} xl={3} key={song.id}>
                <SongComponent song={song} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LibraryComponent;
