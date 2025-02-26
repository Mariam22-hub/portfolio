import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import api from "../assets/img/api.svg";
import fastapi from "../assets/img/fastapi.svg";
import kafka from "../assets/img/kafka.png";
import nextjs from "../assets/img/nextjs.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skills = [
    { name: "OOP", image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/OOP.svg" },
    { name: "SQL", image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Sql_data_base_with_logo.svg" },
    { name: "RESTful APIs", image: api },
    { name: "Java", image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" },
    { name: "NodeJS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "ExpressJS", image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
    { name: "ReactJS", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "MongoDB", image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Mongodb-icon.svg" },
    { name: "Spring Boot", image: "https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg" },
    { name: "Angular", image: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg" },
    { name: "Kafka", image: kafka },
    { name: "PostgreSQL", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { name: "Redis", image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Redis_logo.svg" },
    { name: "Docker", image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg" },
    { name: "TypeScript", image: "https://upload.wikimedia.org/wikipedia/commons/2/29/TypeScript_Logo_%28Blue%29.svg" },
    { name: "NextJS", image: nextjs},
    { name: "NestJS", image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg"},
    { name: "Database Design", image: "https://upload.wikimedia.org/wikipedia/commons/1/18/Database.svg" },
    { name: "MySQL", image: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" },
    { name: "Python", image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Python_logo_01.svg" },
    { name: "FastAPI", image: fastapi },
    { name: "Bash Scripting", image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Bash_Logo_White.svg" },
  ];
  const chunkArray = (arr, chunkSize) => {
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const skillSlides = chunkArray(skills, 6);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Technical skills acquired from various experiences, internships, and projects.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skillSlides.map((slide, index) => (
                  <div className="slide-container" key={index}>
                    <div className="row">
                      {slide.map((skill, i) => (
                        <div className="col-md-4 skill-item" key={i}>
                          <img src={skill.image} alt={`${skill.name} logo`} style={{ width: '100px', height: '100px' }} />
                          <h5>{skill.name}</h5>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
