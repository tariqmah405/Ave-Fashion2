import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, CardGroup, Card,} from "react-bootstrap";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { GrGooglePlus } from "react-icons/gr";
import { BsArrowUpSquare } from 'react-icons/bs';
import { AiFillInstagram } from "react-icons/ai";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <Container fluid>
            <Row style={{ background:"#F5F5F5"}}>
                  <Col>
                    <Row style={{margin:"0px 50px"}}>
                        <Col>
                            <Card.Body>
                            <Card.Title className='my-5' style={{fontSize:"18px"}}>
                            INFORMATION
                            </Card.Title>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>the brand</Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>local stores</Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>customer services</Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>privacy & cookies</Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>site map</Card.Text>  
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>
                            <Card.Title  className='my-5'style={{fontSize:"18px"}}>
                            WHY BUY FROM US
                            </Card.Title>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>shipping & returns</Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>secure shopping</Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>testimonials</Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>award wining</Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>ethical trading</Card.Text> 
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>
                            <Card.Title className='my-5' style={{fontSize:"18px"}}>
                            YOUR ACCOUNT
                            </Card.Title>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>sign in </Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>register</Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>view cart</Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>view your look book</Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>track an order</Card.Text> 
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>update information</Card.Text> 
                            </Card.Body>
                        </Col>
                        <Col>
                            <Card.Body>
                            <Card.Title className='my-5' style={{fontSize:"18px"}}>
                            LOOK BOOK
                            </Card.Title>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>letest post</Card.Text> 
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>men's look book</Card.Text> 
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>women's look book</Card.Text> 
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>lookboooks RSS feed</Card.Text> 
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>view your look book</Card.Text> 
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>delete your look boook</Card.Text>
                            </Card.Body>
                        </Col>
                        <Col>
                        
                            <Card.Body>
                            <Card.Title className='my-5' style={{fontSize:"18px"}}>
                            CONTECT DETAILS
                            </Card.Title>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>head office: avenue fashion 180-182 regent street london</Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>telephone: 0123-456-789</Card.Text>
                            <Card.Text style={{fontSize:"15px", textTransform:"capitalize"}}>email: example222@gmail.com</Card.Text>
                              
                            </Card.Body>
                        
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center'>
                        <Col className='winner bg-dark p-4 text-center text-white m-3' md={5} sm={10}><h1>FASHION WINNER</h1>
                        <h3>FASHION AWARD WINNER 2016</h3>
                        </Col>
                        <Col  className='icons bg-info text-center align-item-center p-5 m-3'  md={5} sm={10}>
                        <FaFacebookF className='mx-3'/>
                        <AiFillInstagram className='mx-3'/>
                        <ImTwitter className='mx-3'/>
                        <GrGooglePlus className='mx-3'/>
                        <BsArrowUpSquare className='mx-3'/>
                        </Col>
                    </Row>
                  </Col>
            </Row>
        <Row className='bg-dark p-2'>
            <Col className='text-center text-white' md={3} sm={12}><BiCopyright/>
            2016 Avenue Fashion</Col>
            <Col className='text-center text-white offset-2' md={3} sm={12} >Design By RobbyDesigns.com</Col>
            <Col className='text-center text-white' md={3} sm={12}>Dev By Loremipusm.com</Col>
        </Row>                   
        </Container>
  )
}

export default Footer;
