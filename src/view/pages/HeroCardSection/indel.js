import React from 'react'
import { Row, Col } from 'react-bootstrap'
import hero2 from "../../../assets/img/hero2.svg";
import hero3 from "../../../assets/img/hero3.svg";
import hero4 from "../../../assets/img/hero4.svg";

export default function HeroCard() {
    return (
        <div className='section-3'>
            <Row className='Z-card hero'>
                <Col xs={12} md={6}
                >
                    <div className=''>
                        <p className='sub-title'>Effortless Validation for</p>
                        <p className='title'>Intelligent Answers
                            at Your Fingertips.</p>
                        <p className='content'>Experience the pinnacle of AI-powered knowledge with
                            our cutting-edge solution</p>
                        <p className='content'>Our intelligent system diligently learns every detail of your website, equipping it with the ability to provide precise answers to any user inquiry.
                            Say goodbye to uncertainty and embrace seamless customer interactions with our unparalleled accuracy and unrivaled expertise.</p>
                    </div>
                </Col>
                <Col xs={12} md={6}><img src={hero2}></img></Col>
            </Row>
            <Row className='Z-card hero'>
                <Col xs={12} md={6}><img src={hero3}></img></Col>

                <Col xs={12} md={6}
                >
                    <div className=''>
                        <p className='sub-title'>Easier decision making </p>
                        <p className='title'>Masters Your Business
                            Through the Vastness
                            of the Internet.</p>
                        <p className='content'>Unlock the power of comprehensive knowledge with Zingg AI Assistance. It transcends the limitations of your website and dives deep into the vast expanse of the internet to train itself on every aspect of your business. Harnessing this extensive training, Zingg delivers accurate and informed responses to propel your customer experience to new heights.</p>
                    </div>
                </Col>
            </Row>
            <Row className='Z-card hero'>
                <Col xs={12} md={6}
                >
                    <div className=''>
                        <p className='sub-title'>Optimisation for </p>
                        <p className='title'>Empowering Customers with
                            Information Beyond Expectations.</p>
                        <p className='content'>Our solution enables customers to effortlessly obtain the information they seek about your business, long after their initial interaction. Say goodbye to time limitations and embrace a seamless customer journey where answers are readily available whenever and wherever they're needed, fostering engagement and satisfaction.</p>
                    </div>
                </Col>
                <Col xs={12} md={6}><img src={hero4}></img></Col>
            </Row>
        </div>
    )
}
