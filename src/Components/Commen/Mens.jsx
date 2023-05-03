import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import heroimg from "../images/photo.png";

const Mens = () => {
  return (
    <>
    <section>
        <Container fluid>
            <Row>
                <Col md={12} sm={12} className='d-flex'>
                    <Col md={7}>
                        <img src={heroimg} alt="heroimg" style={{width:"100%", height:"500px", marginTop:"-65px"}}/>                                                                                       
                    </Col>
                    <Col md={5}>
                            <button style={{width:"200px", height:"70px"}}>SHOP MEN'S COLLECTION</button>
                    </Col>
                </Col>
            </Row>

        </Container>
    </section>
    </>
  )
}

export default Mens
