import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Whatsapp, GeoAlt } from 'react-bootstrap-icons'

const Footer = () => {
    return (
        <div expand='lg' className='py-1 mt-3' style={{ background: '#AD8B73' }} >
            <Container className='mt-1' >
                <Row>
                    <Col className='sm-12 md-4' >
                        <h3 className='mb-2'>PT. Jimmy Sriwijaya Sarana Muda Sejahtera Sentosa</h3>
                        <p>We are manufacturer and supplier of wood pellets from Jambi - Indonesia</p>
                    </Col>
                    <Col className='sm-12 md-4'>
                        <h3 className='mb-2'>Our Office</h3>
                        <p>Jl. Lingkar Timur II RT.05 No 166 Kel. Payo Selincah Kec. Paalmerah Kota Jambi Kode Pos 36138 Indonesia</p>
                        <Whatsapp /><strong> 081122334455</strong>
                    </Col>
                    <Col className='sm-12 md-4'>
                        <h3 className='text-center mb-2'>Visit Us</h3>
                        <a href="https://goo.gl/maps/ogexgMCBAyR4hfcU9" target="_blank" rel="noopener noreferrer" className='text-center '>
                            <GeoAlt width={80} height={80} className='d-block mx-auto text-dark' />
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;