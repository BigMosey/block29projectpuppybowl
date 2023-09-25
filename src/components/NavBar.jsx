import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Puppy Bowl</Navbar.Brand>
          <Navbar.Toggle aria-controls="react-puppy-bowl" />
          <Navbar.Collapse id="react-puppy-bowl">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="allplayers">All Players</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="newplayers">
                  Add New Players
                </NavDropdown.Item>
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default BasicExample;