import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skills = [
    { name: "NodeJS", percentage: 73 },
    { name: "ExpressJS", percentage: 80 },
    { name: "ReactJS", percentage: 70 },
    { name: "Java", percentage: 90 },
    { name: "Spring Boot", percentage: 85 },
    { name: "Angular", percentage: 67 },
    { name: "Kafka", percentage: 80 },
    { name: "PostgreSQL", percentage: 88 },
    { name: "Redis", percentage: 85 },
    { name: "Microservices", percentage: 70 },
    { name: "OOP", percentage: 90 },
    { name: "Python", percentage: 92 },
    { name: "FastAPI", percentage: 86 },
    { name: "Docker", percentage: 60 },
    { name: "TypeScript", percentage: 87 },
    { name: "NestJS", percentage: 84 },
    { name: "NextJS", percentage: 83 },
    { name: "Bash Scripting", percentage: 50 },
    { name: "Flutter", percentage: 40 },
    { name: "C++", percentage: 70 },
    { name: "iOS", percentage: 60 },
    { name: "MongoDB", percentage: 82 },
    { name: "ExpressJS", percentage: 88 },
    { name: "MySQL", percentage: 85 },

  ];

  const chunkArray = (arr, chunkSize) => {
    let result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const skillSlides = chunkArray(skills, 6); // 6 skills per slide (3 per row, 2 rows)

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
                          <div className="circle-container">
                          <CircularProgressbar
                            value={skill.percentage}
                            text={`${skill.percentage}%`}
                            styles={buildStyles({
                              textSize: "16px",
                              pathColor: `url(#gradient-${skill.name.replace(/\s+/g, '')})`, 
                              textColor: "#fff",
                              trailColor: "rgba(255, 255, 255, 0.2)",
                              backgroundColor: "#121212",
                            })}
                          />
                          <svg width="0" height="0">
                            <defs>
                              <linearGradient id={`gradient-${skill.name.replace(/\s+/g, '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#AA37C7" />
                                <stop offset="100%" stopColor="#4A90E2" />
                              </linearGradient>
                            </defs>
                          </svg>
                          </div>
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



// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
// import colorSharp from "../assets/img/color-sharp.png"

// export const Skills = () => {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1
//     }
//   };

//   return (
//     <section className="skill" id="skills">
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                     <div className="skill-bx wow zoomIn">
//                         <h2>Skills</h2>
//                         <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
//                         <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>Web Development</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter2} alt="Image" />
//                                 <h5>Brand Identity</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter3} alt="Image" />
//                                 <h5>Logo Design</h5>
//                             </div>
//                             <div className="item">
//                                 <img src={meter1} alt="Image" />
//                                 <h5>Web Development</h5>
//                             </div>
//                         </Carousel>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <img className="background-image-left" src={colorSharp} alt="Image" />
//     </section>
//   )
// }
