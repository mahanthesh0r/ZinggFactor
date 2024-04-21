import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Layout from '../components/Layout'

export default function Feature() {
    return (<>
        <Layout>
            <div className='section-2 feature'>
                <p className='feature-title'>We design tools to unveil your superpowers</p>
                <Row style={{ padding: '50px 20px' }}>
                    <Col xs={12} sm={12} md={3} lg={3}>
                        <div className='feature-card'>
                            <div className='icon icon1'></div>
                            <p className='title'>Intelligent Answers
                                at Your Fingertips.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className='feature-card'>
                            <div className='icon icon2'></div>
                            <p className='title px-5'>Masters Your Business Through the
                                Vastness of the Internet.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={3}>
                        <div className='feature-card'>
                            <div className='icon icon3'></div>
                            <p className='title'>Information Beyond Expectations.</p>
                        </div>
                    </Col>
                </Row>

            </div>
        </Layout>
        <div className='bg-container'>
            <div className='bg-radial-gradient-bottom'>
            <div className='section-2 center'>
                <Button className='ZButton'>Get Access</Button>
            </div>
            </div>


        </div>
    </>
    )
}
