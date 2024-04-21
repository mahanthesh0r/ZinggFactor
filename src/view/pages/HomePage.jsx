import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import hero1 from "../../assets/img/hero1.svg";
export default function HomePage() {
    return (
        <div className='section-1 hero-1'>
            <Row className='hero'>
                <Col xs={12} sm={12} md={12} lg={6} className='hero-typography'>
                    <Row className='h-100'>
                        <Col xs={12} className='title'>Unleashing Knowledge for Seamless Customer Engagement.</Col>
                        <Col xs={12} className='content'>Introducing Zingg AI Assistance, the ultimate business companion that possesses unparalleled knowledge about your enterprise.
                            With its comprehensive understanding of your operations,
                            Zingg has the power to effortlessly address any inquiries from your users. </Col>
                        <Col xs={12} className='hero-buttons'>
                            <Button className='ZButton  mr-3'>Get started</Button>
                            <Button variant="link" className='ZLink'><div class="triangle-right"></div>
                                <p className='m-0 p-0'>Watch the video</p></Button>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}><img src={hero1} className='hero-img' /></Col>
            </Row>
        </div>
    )
}
