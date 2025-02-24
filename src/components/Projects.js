import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/imdb.png";
import projImg2 from "../assets/img/aggroshield.jpg";
import projImg3 from "../assets/img/game.jpeg";
import projImg4 from "../assets/img/fintech.jpeg";
import projImg5 from "../assets/img/chatapp.png";
import projImg6 from "../assets/img/media.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ReactPaginate from "react-paginate";

export const Projects = () => {
  // Project Data
  const projects = [
    { title: "IMDB Clone", description: "Fullstack", imgUrl: projImg1, link: "https://github.com/Mariam22-hub/IMDB-Clone"},
    { title: "Aggroshield", description: "Fullstack & ML Integration", imgUrl: projImg2, link:"https://github.com/Mariam22-hub/AggroShield"},
    { title: "TapCash", description: "Fintech - Fullstack", imgUrl: projImg4, link:"https://github.com/Mariam22-hub/Fintech-Application-ODC"},
    { title: "ChatApp", description: "Realtime Chat - Fullstack", imgUrl: projImg5, link:"https://github.com/Mariam22-hub/Realtime-chat-application"},
    { title: "Chicken Invaders", description: "Shooter Game", imgUrl: projImg3, link:"https://github.com/Mariam22-hub/Space-Shooter-game"},
    { title: "Media Platform", description: "Fullstack", imgUrl: projImg6, link:"https://github.com/Mariam22-hub/Media-Platform"},
    // { title: "Business Startup", description: "Design & Development", imgUrl: projImg1, link:  },
    // { title: "Business Startup", description: "Design & Development", imgUrl: projImg2, link:  },
    // { title: "Business Startup", description: "Design & Development", imgUrl: projImg3, link:  },
  ];

  // Pagination State
  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 3;
  const pagesVisited = pageNumber * projectsPerPage;

  // Displayed projects based on pagination
  const displayProjects = projects.slice(pagesVisited, pagesVisited + projectsPerPage);

  // Total Pages
  const pageCount = Math.ceil(projects.length / projectsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Explore my projects featuring full-stack development, Ai Integration, and innovative problem-solving.
                  </p>
                  <Row>
                    {displayProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>

                    {/* Pagination Controls */}
                    <ReactPaginate
                      previousLabel={"← Previous"}
                      nextLabel={"Next →"}
                      pageCount={pageCount}
                      onPageChange={changePage}
                      containerClassName={"pagination"}
                      pageClassName={"pagination__item"}
                      pageLinkClassName={"pagination__link"}
                      previousClassName={"previous"} 
                      nextClassName={"next"} 
                      previousLinkClassName={"pagination__link previous"}
                      nextLinkClassName={"pagination__link next"}
                      disabledClassName={"pagination__disabled"}
                      activeClassName={"pagination__active"}
                    />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>  
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};


// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg1,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg2,
//     },
//     {
//       title: "Business Startup",
//       description: "Design & Development",
//       imgUrl: projImg3,
//     },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="second">Tab 2</Nav.Link>
//                     </Nav.Item>
//                     <Nav.Item>
//                       <Nav.Link eventKey="third">Tab 3</Nav.Link>
//                     </Nav.Item>
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="section">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }
