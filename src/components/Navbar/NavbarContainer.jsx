import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarContainer() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#inicio">Qué como hoy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Inicio">Inicio</Nav.Link>
            <Nav.Link href="Recetas">Recetas</Nav.Link>
            <Nav.Link href="Tips">Tips de Nutrición</Nav.Link>
            <NavDropdown title="Recetas" id="collasible-nav-dropdown">
              <NavDropdown.Item href="Veganas">Veganas</NavDropdown.Item>
              <NavDropdown.Item href="Vegetarianas">
                Vegetarianas
              </NavDropdown.Item>
              <NavDropdown.Item href="Mediterranea">
                Mediterranea
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href=""></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#OtraCosa">Otros</Nav.Link>
            <Nav.Link eventKey={2} href="#Contacto">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarContainer;
