import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={8} md={6} >
      <div className="project-imgbx">
        <img src={imgUrl} className="thatImg" alt=""/>
        <div className="project-txt">
            <h4>{title}</h4>
            <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
