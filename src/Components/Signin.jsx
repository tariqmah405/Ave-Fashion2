import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Form  from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import "./Signin.css";
import { BsArrowRight } from "react-icons/bs"
import Backhero from './Commen/hero/Backhero';

const Signin = () => {
  return (
    <section>
    <Backhero span="WELCOME" title="TO AVE" subtitle="SIGN IN OR REGISTAR" />
      <Container>
        <Row>
            <Col md={5} className="mx-4">
                <Form>
                <h4 className='my-5'>SIGN IN</h4>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Your Email" className='my-5'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control className='form_control my-5' type='password' placeholder='Your Password'/>
                    </Form.Group>
                    <Row>
                        <Col md={3}>
                          <button className='btn_signin'>Sign in</button>
                        </Col>
                        <Col md={{offset:3}} className="mt-2">
                        <button className='btn_forgot'>Forgot your password<BsArrowRight/></button>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col md={5} className="mx-4">
            <Form>
                <h4 className='my-5'>REGISTER</h4>
                    <Form.Group>
                        <Form.Control type="email" placeholder="Your Email" className='my-5'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control className='form_control my-5' type='password' placeholder='Your Password'/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type='password' placeholder='password'/>
                    </Form.Group>
                    <Form.Group className='mt-3'>
                        <Form.Check type='checkbox' style={{fontSize:"13px"}} label="sign up for exclusive updates,discounts,new arrivels, contests,and more"/>
                    </Form.Group>
                    <Row>
                        <Col md={3} className="mt-3">
                          <button className='btn_creataccount'>create account</button>
                        </Col>
                        <Col md={{offset:2}} className="mt-3">
                        <button className='btn_privacy'><a href='#'>by clicking'creat account',you agree to our <span> Privacy Policy<BsArrowRight/></span> </a></button>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </Row>
    </Container>
    </section>
    
  )
}

export default Signin;
