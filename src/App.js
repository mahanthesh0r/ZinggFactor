import logo from './logo.svg';
import React from 'react'
import Layout from "./view/components/Layout";
import Header from './view/components/Header';
import HomePage from './view/pages/HomePage';
import Feature from './view/pages/Feature';
import HeroCard from './view/pages/HeroCardSection/indel';
import NeedForHero from './view/pages/Need a super hero';
import Footer from './view/pages/Footer';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Form from 'react-bootstrap/Form';
import { Button, Col, Row } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup';
import arrow from "./assets/icon/arrow.svg";
function App1() {
  return (
    <div>
      <Layout >
        <Header></Header>
        <HomePage></HomePage>
      </Layout>
      <Feature></Feature>
      <Layout >
        <HeroCard />
      </Layout>
      <NeedForHero />
      <Layout>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}
function App() {
  return (
    <div className='main'>
      <section className='header'>
        <nav >
          <ul>
            <li><a href="/contact-us/">Contact Us</a></li>
          </ul>
        </nav>
      </section>
      <section className='container1'>
        <div style={{
          width: '35vw',

        }}>
          <p className='title'>Hi There, What can I help you with today?</p>
          <div className='slider-container' style={{
          width: '30vw',

        }}>
            <Slide {...proprietes}>
              <div className="each-slide">
                <div className='imgs'>
                </div>
              </div>
              <div className="each-slide">
                <div className='imgs'>
                </div>
              </div>

            </Slide>
          </div>

          <div className='input-container'>
            <div class="form-group">
              <input class="form-field" type="text" placeholder="Ask a question" />
              <span className='form-button'><img src={arrow} /></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
