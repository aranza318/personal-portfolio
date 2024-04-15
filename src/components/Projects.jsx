import ProyectoHTML from "../assets/img/ProyectoHTML.png";
import ProyectoJavaScript from "../assets/img/ProyectoJavaScript.png";
import ProyectoReact from "../assets/img/ProyectoReact.png";
import ProyectoBackEnd from "../assets/img/ProyectoBackEnd.png";
import { Container, Nav, Row, Col, Tab } from 'react-bootstrap';
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Pagina de Arte",
      description: "Pagina con HTML, CSS y SASS",
      imgUrl: ProyectoHTML,
    },
    {
      title: "Pagina de Fotografia",
      description: "Pagina con JavaScript",
      imgUrl: ProyectoJavaScript,
    },
    {
      title: "Pagina de Comida libre de gluten",
      description: "Pagina con React",
      imgUrl: ProyectoReact,
    },
    {
      title: "Pagina de Kinesiologia y Relax",
      description: "Pagina con Back-End",
      imgUrl: ProyectoBackEnd,
    },
  ];
  return (
    <div className="proyectos">
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
          <TrackVisibility>
            {({isVisible}) =>
            <div className={ isVisible ? "animate__animated animate__fadeIn" : ""}>
           <div className="proyecto">
            <h2>Proyectos</h2>
            </div>
            <p>Te muestro un poco de mis proyectos</p>
            </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <div className="pillsContainer">
            <Nav variant="pills" className="nav-pills  mb-1 justify-content-center aling-items-center" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Proyectos terminados</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second"> Este es mi punto de vista </Nav.Link>
              </Nav.Item>
            </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Row className="first-tab">
                  {
                    projects.map((project, index)=>{
                      return(
                        <ProjectCard key={index} {...project}/>
                      )
                    })
                  }
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second"className="thatText">
              <TrackVisibility>
            {({isVisible}) =>
            <div className={ isVisible ? "animate__animated animate__flash" : ""}>
                Se enfoca en la utilización de una interfaz entretenida para el usuario, centrando la atención   
                en la experiencia de este, combinando colores en ambientes acogedores donde quieran permanecer
                y disfrutar de la visita al sitio, permitiendo así más oportunidades de venta del producto o 
                servicio a promocionar.
                </div>}
            </TrackVisibility>
              </Tab.Pane>
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
};
