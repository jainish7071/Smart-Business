import { React } from "react";
import { Container, Form, FormControl, Nav, NavDropdown, Button, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          Smart Business
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
            <Link className="nav-link" to={"/"}>
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contactUs">
              Contact Us
            </Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Outlet />
    </Navbar>
  );
}

export default NavbarComponent;
