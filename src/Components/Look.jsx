
import { Container, Row, Tabs, Col, Tab, Card } from "react-bootstrap";
import "./Look.css";

// imported img all this page 
import m1 from "../Components/images/p1.png";
import w2 from "../Components/images/p2.png";
import w6 from "../Components/images/8.png";
import mj1 from "../Components/images/photo3.png";
import m2 from "../Components/images/photo4.png";
import w2e from "../Components/images/photo5.png";
import w3 from "../Components/images/photo6.png";
import pic2 from "../Components/images/2.png";
import pic3 from "../Components/images/3.png";
import Backhero from "./Commen/hero/Backhero";
import Lookscards from "./Commen/Lookscards";




const Look = () => {
  return (
    <section>
      <Backhero span="OUR" title="LOOK BOOK" subtitle="LATEST POSTS - MENS AND WOMENS" />
    <Container>
        <Row>
          <Col md={12}>
          <Tabs defaultActiveKey={"tab-1"} className="main_tab mb-1 p-0 gap-1" style={{background:"#fff", border:"none", fontSize:"15px", fontWeight:"500"}}>
                    <Tab eventKey={"LATEST"} title={"LATEST"} style={{color:"black"}}>
                        <h4>Why do we use it?</h4>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </Tab>
                    <Tab eventKey={"MOST LIKED"} title={"MOST LIKED"}>
                        <h4>Why do we use it?</h4>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </Tab>
                    <Tab eventKey={"BEST SELLERS"} title={"BEST SELLERS"}>
                        <h4>Why do we use it?</h4>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </Tab>
                    <Tab eventKey={"PRICE LOW TO HIGH"} title={"PRICE LOW TO HIGH"}>
                        <h4>Why do we use it?</h4>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </Tab>
                    <Tab eventKey={"PRICE LOW TO HIGH"} title={"PRICE HIGH TO LOW"}>
                        <h4>Why do we use it?</h4>
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                    </Tab>
          </Tabs>        
          </Col>
          <Row>
            <Col md={12} sm={12}>
              <Row className='d-flex my-3'>
              <Col md={12} className="d-flex gap-2">
                <Col md={3}>
                 <img src={ m1 } alt="m1" />
                </Col>
                <Col md={3}>
                 <img src={ w2 } alt="w2" />
                </Col>
                <Col md={6}>
                 <img src={ w6 } alt="w6" />
                </Col>
              </Col>
              </Row>
              <Row className='d-flex my-3'>
              <Col md={12} className="d-flex gap-2">
                <Col md={3}>
                 <img src={  mj1 } alt=" mj1" />
                </Col>
                <Col md={3}>
                 <img src={ m2 } alt="m2" />
                </Col>
                <Col md={3}>
                 <img src={ w2e } alt="w2e" />
                </Col>
                <Col md={3}>
                 <img src={ w3 } alt="w3" />
                </Col>
              </Col>
              </Row>
              <Row className='d-flex my-3'>
              <Col md={12} className="d-flex gap-3">
                <Col md={9}>
                <div className="heading" style={{position:"relative",}}>
                <Card.Img src={pic3} alt="Cardimage" />
                <Card.ImgOverlay className="col-md-8" style={{height:"300px"}}>
                      <Card.Title className="mt-5 mx-3"style={{fontSize:"30px", fontWeight:"400", letterSpacing:"2px"}}><span style={{fontSize:"30px", fontWeight:"bold"}}>WIN</span> A NEW LOOK!</Card.Title>
                      <Card.Subtitle className="my-3 mx-3" style={{fontSize:"15px"}}>ADD LOOKS OR ITEMS TO YOUR LOOKBOOK FOR A CHANCE OF WINING</Card.Subtitle>
                      <Card.Text className="mx-3 my-3" style={{fontSize:"13px"}}>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.5 paragraphs words byteslists	Start with 'Lorem ipsum dolor sit amet...'
                      </Card.Text>
                      <Card.Text className="mx-3" style={{fontSize:"13px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Card.Text>
                      <button className="mx-3 mt-4 p-2" style={{background:"#fff", border:"solid 1px #000", lineHeight:"20px", fontSize:"12px", width:"120px", height:"45px", fontWeight:"500", letterSpacing:"2px"}}>VIEW NOW</button>
                      
                  </Card.ImgOverlay>
                  </div>
                </Col>
                <Col md={3}>
                 <img src={ pic2 } alt="pic2" />
                </Col>                 
              </Col>
              </Row>
            </Col>
          </Row>
        </Row>
    </Container>
    <Lookscards/>
    </section>

  );
};

export default Look;
