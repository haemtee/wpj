import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import NavbarKu from "./components/Navbar";
import Hero from './components/Hero';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <NavbarKu />
      <Container className='mt-3'>
        <Row className="justify-content-md-center" >
          <Col lg={10}>
            <Hero />
          </Col>
        </Row>

        <Product />

      </Container>
    </div>
  );
}

export default App;
