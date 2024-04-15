import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerBanner from "../assets/img/Header.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNumb, setLoop] = useState(0);
  const [isDeleting, setIsDeliting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "Front-End Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNumb % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeliting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeliting(false);
      setLoop(loopNumb + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligne-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
            {({isVisible}) =>
            <div className={ isVisible ? "animate__animated animate__bounce" : ""}>
            <span className="tagline">BIENVENIDOS A MI PORTFOLIO</span>
            <div className="containerPalabras">
            <h1>
              {`Hola soy Aránzazu `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Front-End Developer"]'>
              <span className="wrap">{text}</span></span>
            </h1>
            </div>
            <p>
              Como programadora full stack me interesa mas la experiencia del usuario
              dando asi incapie a la interaccion que este pueda llegar a tener 
              desde el punto de vista funcional como desde el estetico, ya que el desarrollo 
              Front-End se centra mas en este punto de vista es lo que mejor se me da y 
              donde mas me gusta invertir tiempo y esfuerzo, sin olvidar claramente que el sector 
              Back-End es el que permite a todo esto ser funcional y atendiendo por ende a todo
              lo que esto conlleva con el devido cuidado.
            </p>
            <a href="#connect"><button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button></a>  
            </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerBanner} alt="Header Img" className="imgBanner"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
