import { Button, Col, Container, Form, InputGroup, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MySideBar = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <Navbar expand="lg" className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
            <Container className="flex-column align-items-start">
              <Navbar.Brand href="#home">
                <img src="/src/assets/logo/logo.png" alt="logo spotify" width="131" height="40" />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="d-flex flex-column ">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Your Library</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <InputGroup className="mb-3 w-75" size="sm">
                <Form.Control
                  aria-label="Example text with button addon"
                  aria-describedby="basic-addon1"
                  placeholder="Search"
                />
                <Button variant="outline-secondary" id="button-addon1">
                  Go
                </Button>
              </InputGroup>
            </Container>
            <div className="nav-btn">
              <Button className="signup-btn" type="button">
                Sign Up
              </Button>
              <Button className="login-btn" type="button">
                Login
              </Button>
              <div>
                <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
              </div>
            </div>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default MySideBar;
