import { Container, Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CssImg from "../assets/img/CSS.png";
import GitImg from "../assets/img/Git.png";
import HTMLImg from "../assets/img/HTML.png";
import JSImg from "../assets/img/JS.png";
import MongoDBImg from "../assets/img/MDB.png";
import NodejsImg from "../assets/img/NodeJS.png";
import ReactjsImg from "../assets/img/React.png";
import SASSImg from "../assets/img/SassB.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: {
        max: 4000,
        min: 3000,
      },
      items: 5
    },
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
       <div className="container">
            <div className="row">
                <div className="col-12">
             <div className="skill-bx wow zoomIn">
             <TrackVisibility>
            {({isVisible}) =>
            <div className={ isVisible ? "animate__animated animate__pulse" : ""}>
              <h2>
                Skills
              </h2>
              <p>Te invito a que veas las tecnologias que manejo</p>
              </div>}
            </TrackVisibility>
              <Carousel responsive={responsive} infinit={true} className="owl-carousel owl-theme skill-slider">
              <div className="item">
                  <img src={CssImg} alt="Css" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={GitImg} alt="Git" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={HTMLImg} alt="Html" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={JSImg} alt="JS" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={MongoDBImg} alt="MDB" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={NodejsImg} alt="Node" />
                  <h5>Node js</h5>
                </div>
                <div className="item">
                  <img src={ReactjsImg} alt="React" />
                  <h5>React js</h5>
                </div>
                <div className="item">
                  <img src={SASSImg} alt="Sass" />
                  <h5>SASS</h5>
                </div>
              </Carousel>
             </div>
             </div>
            </div>
          </div>
    
    </section>
    
  )
};
