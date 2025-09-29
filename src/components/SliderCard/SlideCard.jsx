import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

const SlideCard = ({title,desc,cover}) => {
  return (
      <Container className='slide-card box'>
        <Row className="align-items-center">
          <Col md={6} className="slide-card-content">
            <h1>{title}</h1>
            <p>{desc}</p>
            <button className='slide-btn'>Visit Collections</button>
          </Col>
          <Col md={6} className="slide-card-img-col">
            <div className="slide-card-img-wrap">
              <img src={cover} alt="#" />
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default SlideCard
