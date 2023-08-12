import "./portfolio.css";

import IMG1 from "../../assets/edu.jpeg";
import IMG2 from "../../assets/seo2.jpeg";
import IMG3 from "../../assets/groc2.jpeg";
import IMG4 from "../../assets/exp.jpeg";
import IMG5 from "../../assets/meal3.jpeg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Edutech Site",
      img: IMG1,
      description:
        "Edutech site where students can ask doubts, join one-on-one classes with tutors, and much more.",
      technologies: "Pug Js | Node Js | MongoDB | AWS ",
      link: "https://ydvhitender-studious-journey-v9p494xw5x7f69p6-4000.preview.app.github.dev/",
      github: "https://github.com/ydvhitender/",
    },
    {
      id: 2,
      title: "Digital Services",
      img: IMG2,
      description:
        "A well-designed digital service provider site where clients can easily interact with the site.",
      technologies: "React Js | AWS ",
      link: "https://transcendent-sawine-24256a.netlify.app/",
      github: "https://github.com/ydvhitender/",
    },
    {
      id: 3,
      title: "Grocery Delivery",
      img: IMG3,
      description: "A fully functional grocery delivery application in Flutter with an admin and delivery panel.",
      technologies: "Flutter | Dart | Node Js | Firebase ",
      link: "https://github.com/ydvhitender/Grocery-App",
      github: "https://github.com/ydvhitender/Grocery-App",
    },
    {
      id: 4,
      title: "Expenses Calculator",
      img: IMG4,
      description:
        "An application for calculating daily personal expenses and generating a weekly chart report.",
      technologies: "Flutter | Dart ",
      link: "https://github.com/ydvhitender/Daily-Personal-Expenses",
      github: "https://github.com/ydvhitender/Daily-Personal-Expenses",
    },
    {
      id: 5,
      title: "Meal Recipes",
      img: IMG5,
      description:
        "An application that guides you in preparing your meals with a wide variety of recipes.",
      technologies: "Flutter | Dart ",
      link: "https://github.com/ydvhitender/Meal-Recipes",
      github: "https://github.com/ydvhitender/Meal-Recipes",
    },
    {
      id: 6,
      title: "Platform For Developers",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Flutter | Dart | Node Js | S3 | MongoDB ",
      link: "https://github.com/ydvhitender/",
      github: "https://github.com/ydvhitender/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
