import React from 'react';
import "./Backhero.css";
import { Container, Row, Col } from 'react-bootstrap';



const Backhero = (props) => {
  return (
    <Container fluid>
      <Row>
      <Col md={12} sm={12} className="p-0">
        <div className= "backimg">
        <div className="backtitle">
            <h1><span>{props.span}</span> {props.title}</h1>
            <p>{props.subtitle}<span>{props.spantow}</span></p>
        </div>

    </div>
    </Col>
    </Row>
    </Container>
  )
}

export default Backhero;
