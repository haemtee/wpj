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
      <div expand='lg' className='.d-sm-none .d-md-block bg-black' >
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
          <Navbar.Brand href="#home"> <Image src='/img/wp.jpeg' width='30' height='30' roundedCircle className='mr-3' /><strong> Wood Pellet Jambi - Indonesia </strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav >
              <Nav.Link href="#product"><strong>Products</strong></Nav.Link>
              <Nav.Link href="https://api.whatsapp.com/send?phone=6281294282678&text=Hello%21%20I%27m%20interested%20in%20your%20product."><strong> Contact Us </strong></Nav.Link>
              <Nav.Link href="#aboutus"><strong>About Us</strong></Nav.Link>
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