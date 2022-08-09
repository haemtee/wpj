import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Facebook, Twitter, Youtube, Instagram } from 'react-bootstrap-icons'
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarKu() {
  return (
    <>
      <div expand='lg' className='d-none d-md-block bg-black py-1' >
        <Container>
          <Row>
            <Col className="welcome mr-auto text-white">Welcome to PT. Jimmy Sriwijaya Sarana Muda Sejahtera Sentosa</Col>
            <Col className="sosmed text-end">
              <Facebook className='mx-1 text-white' />
              <Twitter className='mx-1 text-white' />
              <Youtube className='mx-1 text-white' />
              <Instagram className='mx-1 text-white' />
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar collapseOnSelect expand="lg" variant="light" style={{ background: '#AD8B73' }}>
        <Container>
          <Link to="/" className='navbar-brand'> <Image src='/img/wp.jpeg' width='30' height='30' roundedCircle className='mr-3' /><strong> Wood Pellet Jambi - Indonesia </strong></Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav >
              <Link to='/product' className='nav-link'> <strong>Products</strong></Link>
              <Link to="/contact" className='nav-link'><strong> Contact Us </strong></Link>
              <Link to="/about" className='nav-link'><strong>About Us</strong></Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default NavbarKu;