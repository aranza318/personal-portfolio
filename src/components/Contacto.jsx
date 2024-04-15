import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Row, Col, Container } from "react-bootstrap";
import contactMe from "../assets/img/Contacto.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contacto = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ruz2tdc', 'template_fxl1iya', form.current, {
          publicKey: 'YrffKsSEKXpjJ-CtZ',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
      <div className='contactContainer'>
      <section id="connect" className="contact">
        <Container>
        <Row className="aling-items-center">
        <TrackVisibility>
            {({isVisible}) =>
            <div className={ isVisible ? "animate__animated animate__rubberBand" : ""}>
            <h2>Contact Zone</h2>
            </div>}
            </TrackVisibility>
        <Col md={6}>
            <img src={contactMe} alt="Contact" />
          </Col>
        <Col md={6}>
        <form ref={form} onSubmit={sendEmail} className="field" >
          <label>Name</label>
          <textarea type="text" name="user_name" />
          <label>Email</label>
          <textarea type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
        </Col>
        </Row>
        </Container>
      </section>
      </div>
      );
    };