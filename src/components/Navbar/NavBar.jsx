import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#quienessomos">Quienes somos</Nav.Link>
            <Nav.Link href="#productosdestacados">Productos destacados</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Celiacos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Vegetarianos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Veganos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Varios
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Menu;