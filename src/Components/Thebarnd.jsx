import React from 'react';
import "./Thebarnd.css";
import { Container, Row, Col, Card} from "react-bootstrap";
import man from "../Components/images/6.png"
import gril from "../Components/images/5.png";
import sadi from "../Components/images/4.png";
import logs from "../Components/images/g.png";
import {BsArrowRight} from "react-icons/bs";
import Backhero from './Commen/hero/Backhero';




const Thebarnd = () => {
  return (
    <section>
      <Backhero span="THE" title="BRAND" subtitle="COMPANY SLOGAN GOAS HERE" />
    <Container>
    <Row>
        <Col md={6}>
          <img src={man} alt="man" />
          <img src={gril} alt="gril" className='mt-5'/>
          <Card.Title className='my-4'style={{ textTransform: "uppercase" }}>Our values,vision and starategy</Card.Title>
          <Card.Subtitle className='mb-3' style={{ textTransform: "uppercase", fontSize:"14px"}}>the above image would be a create place for an advertising video</Card.Subtitle>
          <Card.Text style={{ fontsize: "10px"}}>There are many variations of passages There are many variations of passages There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,</Card.Text>
        </Col>
        <Col md={6} className="p-3">
          <Card.Title className='mt-5'>HAND DESIGNED CLOTHING</Card.Title>
          <Card.Subtitle className='my-3' style={{fontSize:"14px"}}>ESTABLISHED IN 2013,AVENUE FASHION SED DICTUM ELIT VEL SAPIEN LUCTUS ERAS</Card.Subtitle>
          <Card.Text className='mb-5'>Contrary to popular belief, Lorem Ipsum is not from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Card.Text>
          <img src={sadi} alt="sadi" style={{ width:"100%", height:"300px"}}/>
          <Card.Title className='mt-4'>ETHICAL TRADING</Card.Title>
          <Card.Subtitle className='my-3' style={{fontSize:"13px"}}>WE OVERSEE THE WORKING CONDITIONS OF THE PEOPLE IN THE SUPPLY CHAIN</Card.Subtitle>
          <Card.Text>There are many variations of passages There are many variations of passages There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.<span><a href='#' style={{ textDecoration:"none", color:"#71c5af" }}>A link< BsArrowRight /></a></span></Card.Text>
          <img src={logs} alt="logs" className='mt-5' style={{width:"100%", height: "120px"}} />
        </Col>
    </Row>
</Container>
</section>
  )
}

export default Thebarnd;
