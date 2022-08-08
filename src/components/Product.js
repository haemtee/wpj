import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

const Product = () => {
    return (
        <Row className="justify-content-md-center mt-3" id="product">
            <Col lg={4}>
                <Image src='/img/3.jpg' fluid rounded={5} />
            </Col>
            <Col lg={8}>
                <h3>Wood Pellet Biomass </h3>
                <p className='text-start'>
                    Wood Pellet Biomass is a new energy source that is clean and sustainable. It can be used for cooking and heating homes, generating electricity, and other industrial processes. <br /> It is also the greenest renewable fuel as it produces very small air pollution and has a high calorific value. Unlike fossil fuels, it does not produce any green-house gases when used. Wood Pellet Biomass is made from dried and compressed sawdust. <br />
                    We, as a manufacturer and supplier of wood pellets in Jambi - Indonesia, have a vision to become the largest wood pellet supplier in Southeast Asia and are ready to meet the needs of wood pellets for industrial needs both at home and abroad. <br />
                    For information and reservations, please contact us.
                </p>
            </Col>
        </Row>
    );
}

export default Product;