import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col md={4} className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} className="project-img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
