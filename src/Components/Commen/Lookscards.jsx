import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import img11 from "../images/REPLACE.png";
import img12 from "../images/REPLACE copy.png";
import img13 from "../images/photo silhouette.png";
import "./Lookscards.css"







const Lookscards = () => {
  return (
    <>
     <Container fluid>
              <Row>
                <Col md={12} sm ={10}  className="d-flex">
                  <Col md={4} className="d-flex">
                    <div className="d-flex " style={{height:"400px", width:"330px", textAlign:"right", alignContent:"right"}}>
                    <img src={img11} alt="img11" style={{ width:"38%", height:"100%"}}/>
                    <Col md={8} className="my-5 mx-4">
                      <Card.Title className="my-3" style={{fontSize:"35px", fontWeight:"400",}}><span style={{fontWeight:"700"}}>MEN'S</span><br></br> LOOK BOOK</Card.Title>
                      <Card.Text style={{fontSize:"14px"}}>first true generator on the Internet. It uses a dictionary of over 200 Latin words, sentence or non-characteristic words etc.</Card.Text>
                      <button className="mx-3 mt-4 p-2" style={{background:"#fff", border:"solid 1px #000", outline:"none", lineHeight:"20px", fontSize:"12px", width:"120px", height:"45px", fontWeight:"500", letterSpacing:"2px"}}>VIEW NOW</button>
                    </Col>
                    </div>
                  </Col>
                  <Col md={4} className="d-flex">
                    <div className="d-flex " style={{height:"400px", width:"330px", textAlign:"right", alignContent:"right"}}>
                    <img src={img12} alt="img11" style={{ width:"38%", height:"100%"}}/>
                    <Col md={8} className="my-5 mx-4">
                      <Card.Title className="my-3" style={{fontSize:"35px", fontWeight:"400",}}><span style={{fontWeight:"700"}}>WOMEN'S</span><br></br> LOOK BOOK</Card.Title>
                      <Card.Text style={{fontSize:"14px"}}>first true generator on the Internet. It uses a dictionary of over 200 Latin words, sentence or non-characteristic words etc.</Card.Text>
                      <button className="mx-3 mt-4 p-2" style={{background:"#fff", border:"solid 1px #000", outline:"none", lineHeight:"20px", fontSize:"12px", width:"120px", height:"45px", fontWeight:"500", letterSpacing:"2px"}}>VIEW NOW</button>
                    </Col>
                    </div>
                  </Col>
                  <Col md={4} className="d-flex">
                    <div className="d-flex " style={{height:"400px", width:"330px", textAlign:"right", alignContent:"right"}}>
                    <img src={img13} alt="img11" style={{ width:"38%", height:"100%"}}/>
                    <Col md={8} className="my-5 mx-4">
                      <Card.Title className="my-3" style={{fontSize:"35px", fontWeight:"400",}}><span style={{fontWeight:"700"}}>YOUR</span><br></br> LOOK BOOK</Card.Title>
                      <Card.Text style={{fontSize:"14px"}}>first true generator on the Internet. It uses a dictionary of over 200 Latin words, sentence or non-characteristic words etc.</Card.Text>
                      <button className="mx-3 mt-4 p-2" style={{background:"#fff", border:"solid 1px #000", outline:"none", lineHeight:"20px", fontSize:"12px", width:"120px", height:"45px", fontWeight:"500", letterSpacing:"2px"}}>VIEW NOW</button>
                    </Col>
                    </div>
                  </Col>
                </Col>
              </Row>
    </Container>
    </>
  )
}

export default Lookscards;
