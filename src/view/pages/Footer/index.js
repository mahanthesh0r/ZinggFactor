import React from 'react'
import logo from "../../../assets/img/logo.svg";
import { Button, Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';


export default function Footer() {
    return (

        <div class="footer">
            <Row>
                <Col xs={12} sm={12}  md={4} className='footer-logo-section' >
                    <div href="#home" className='Header-logo-section' >
                        <img className='Header-logo' src={logo}></img>
                        <p className='Header-title'>Zingg Factor</p>
                    </div>
                </Col>
                <Col xs={12} sm={6}  md={2}>
                    <div className="col mt-3  mb-3">
                        <p>Quick Links</p>
                        <ul>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </Col>
                <Col  xs={12} sm={6}  md={2}>
                    <div className="col  mt-3  mb-3">
                        <p>Legal Stuff</p>
                        <ul>
                            <li>Disclaimer
                            </li>
                            <li>Financing
                            </li>
                            <li>Privacy Policy
                            </li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                </Col>
                <Col  xs={12} sm={12}  md={4} className='contact-us' >
                    <p>knowing you're always on the best energy deal.
                    </p>
                    <Form>
                        <Form.Group className="mt-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter your Email ID" />

                        </Form.Group>
                        <Button className='ZButton mt-4' type="submit">
                        Contact us
                        </Button>
                    </Form>

                </Col>
            </Row>

        </div>)
}
