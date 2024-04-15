import { Container, Row, Col } from "react-bootstrap";
import AYG from '../assets/img/Logo.svg';
import LinkedIn from '../assets/img/LinkedIn.png';
import GitHub from '../assets/img/GitHuBW.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Footer = () => {
    return (
        <div className="thatFooter">
        <footer className="footer">
            <Container>
                <Row className="aling-items-center">
                <TrackVisibility>
            {({isVisible}) =>
            <div className={ isVisible ? "animate__animated animate__shakeX" : ""}>
                   <div className="footerContainer">
                   <Col sm={12} >
                    <img src={AYG} alt="logo" className='logoF'/>
                   </Col>
                   <Col sm={12} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/aranzazu-galvaliz-11bb87266/"><img src={LinkedIn} alt="LI" /></a>
                        <a href="https://github.com/aranza318"><img src={GitHub} alt="GH" /></a>
                    </div>
                    <p className="thisFooter">Copy Right 2024. All Right Reserved Aránzazu Galvaliz</p>
                   </Col>
                   </div>
                   </div>}
            </TrackVisibility>
                </Row>
            </Container>
        </footer>
        </div>
    )
}