import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import logo from "../../../assets/img/a1.svg";
export default function NeedForHero() {
    return (
        <div className='NeedForHero'>
            <div className='bg-container'>


                <div className='bg-radial-gradient-top '>

                    <div className='section-2 center' style={{ textAlign: 'center' }}>
                        <div className='box b1'>
                            <div className='pointer pointer-dot'>Give me information about
                                your recent project </div>
                            <img className='avatar' src={logo}></img>
                        </div>
                        <div className='box b2'>
                            <div className='pointer pointer-dot'>Tell me more about this product </div>
                            <img className='avatar' src={logo}></img>
                        </div>
                        <p className='title'>Get instant answers
                            with credibility</p>
                        <p style={{}} className='content' >Ask Zingg Assistance any question, and it will provide accurate responses along with the sources, ensuring transparency and trust in the information you receive.</p>
                        <Button className='ZButton' type='submit'>Contact our expert</Button>
                        <div className='box b3'>
                            <div className='pointer pointer-dot'>Brief information about the
                                recent comany board meeting. </div>
                            <img className='avatar' src={logo}></img>
                        </div>
                        <div className='box b4'>
                            <div className='pointer pointer-dot'>Brief me about the recent media
                                coverage in the new york times</div>
                            <img className='avatar' src={logo}></img>
                        </div>
                    </div>

                </div>


            </div></div>
    )
}
