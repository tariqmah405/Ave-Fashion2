import React from 'react';
import "./Localstore.css";
import { Container, Row, Col, Card} from "react-bootstrap";
import { ImLocation } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillYoutube, AiOutlineMail } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { BsArrowUpSquare } from 'react-icons/bs';
import map from "../Components/images/map.png";
import Backhero from './Commen/hero/Backhero';

export const Localstore = () => {
  return (
    <section>
      <Backhero span="LOCAL" title="STORE" subtitle="FIND A STORE NEAR YOU" />
    <Container>
        <Row className='d-flex justify-content-center mb-5'>
            <Col md={4} className="gap-5">
                    <Card.Title className='my-3'>LONDON</Card.Title>
                    <Card.Subtitle className='mb-3'>180-182 RECENT STREET.LONDON.WEB.$BT</Card.Subtitle>
                    <Card.Text style={{ fontSize: "13px"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem  </Card.Text>
                    <button className='btn_view'>VIEW DETALIS</button>
            </Col>
            <Col md={4}>
                    <Card.Title className='my-3'>NEW YORK</Card.Title>
                    <Card.Subtitle className='mb-3'>190 COLUMBUS CRICLE, NEW YORK,NY 10023</Card.Subtitle>
                    <Card.Text style={{ fontSize: "13px"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem  </Card.Text>
                    <button className='btn_view'>VIEW DETALIS</button>
            </Col>
            <Col md={4}>
                    <Card.Title className='my-3'>PARIS</Card.Title>
                    <Card.Subtitle className='mb-3'>2133 RUE SAINT-HONORE75001 PARIS</Card.Subtitle>
                    <Card.Text style={{ fontSize: "13px"}}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
                       from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem  </Card.Text>
                    <button className='btn_view'>VIEW DETALIS</button>
            </Col>
        </Row>
        <Row>
        <Col md={7} className="p-0">
          <img src={map} alt="map"/>
        </Col>
        <Col md={5} className="p-4">
          <Card.Title>LONDON</Card.Title>
          <Card.Subtitle className="my-3" style={{ fontSize: "13px"}}>180-182 RECENT STREET.LONDON.WEB.$BT</Card.Subtitle>
          <Card.Text style={{ fontSize: "13px"}} className='mb-2'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years.</Card.Text>
          <Card.Text  style={{ fontSize: "13px"}} className="my-2"><ImLocation /> 180-182 RECENT STREET.LONDON.WEB.$BT</Card.Text>
          <Card.Text  style={{ fontSize: "13px"}} className="my-2"><FaPhoneAlt /> 0123-456-789</Card.Text>
          <Card.Text  style={{ fontSize: "13px"}} className="my-2"><AiFillYoutube/> www.youtube.com</Card.Text>
          <Card.Text  style={{ fontSize: "13px"}} className="my-2"><AiOutlineMail/> support@yourwebsite.com</Card.Text>
          <Card.Text  style={{ fontSize: "13px"}} className="my-2"><BiTimeFive/> Monday-Friday.9am to 5pm Saturday.10pm to 6pm Sanday.10am to 2pm</Card.Text>
          <Row>
           <Col md={4} style={{ width: "100%"}} className="mt-3">
                <FaFacebookF className='m-2 bg-dark' style={{ fontSize:"30px", color: "#fff", borderRadius: "50%"}}/>
                <AiFillInstagram className='m-2 bg-dark' style={{ fontSize:"30px", color: "#fff", borderRadius: "50%"}}/>
                <ImTwitter className='mx-3 bg-dark' style={{ fontSize:"30px", color: "#fff", borderRadius: "50%"}}/>
                <BsArrowUpSquare className='mx-2 bg-dark' style={{ fontSize:"30px", color: "#fff", borderRadius: "50%"}} />
           </Col>
           </Row>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Localstore;
