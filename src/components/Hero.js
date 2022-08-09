import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/kunker1.jpeg"
          alt="Wood Pellet"
        />
        {/* <Carousel.Caption>
          <h3>Wood Pellet</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/kunker2.jpeg"
          alt="Wood Pellet 2"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/kunker3.jpeg"
          alt="Wood Pellet 3"
        />
     </Carousel.Item>
     <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/kunker4.jpeg"
          alt="Wood Pellet 4"
        />
     </Carousel.Item>

     <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/kunker5.jpeg"
          alt="Wood Pellet 5"
        />
     </Carousel.Item>

     <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/kunker6.jpeg"
          alt="Wood Pellet 6"
        />
     </Carousel.Item>

     <Carousel.Item>
        <img
          className="d-block w-100"
          src="/img/kunker7.jpeg"
          alt="Wood Pellet 7"
        />
     </Carousel.Item>

    </Carousel>
  );
}

export default Hero;