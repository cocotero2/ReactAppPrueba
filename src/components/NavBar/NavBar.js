import { Container, Nav, Navbar } from "react-bootstrap";
import CardWidget from "../CardWidget/CardWidget";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="#home">Por-Definir</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Productos</Nav.Link>
            <Nav.Link href="#pricing">Ubicacion</Nav.Link>

            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
          <Nav>
            <CardWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
