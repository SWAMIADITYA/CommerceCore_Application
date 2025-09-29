import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
        <div className="logo">
          <ion-icon name="bag"></ion-icon>
          <h1>CommerceCore</h1>
        </div>
              <p>CommerceCore is your trusted destination for quality products, unbeatable deals, and seamless shopping. Discover the best in electronics, fashion, and home essentials—all in one place.</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About CommerceCore</h2>
              <ul>
                <li>Our Story</li>
                <li>Why Choose Us</li>
                <li>Partnerships</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Support</h2>
              <ul>
                <li>Help Center</li>
                <li>How to Shop</li>
                <li>Order Tracking</li>
                <li>Shipping & Delivery</li>
                <li>Returns & Refunds</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact CommerceCore</h2>
              <ul>
                <li>123 Commerce Ave, Pune Maharashtra</li>
                <li>Email: adityaswami.it@gmail.com</li>
                <li>Phone: +91 9999999999</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
