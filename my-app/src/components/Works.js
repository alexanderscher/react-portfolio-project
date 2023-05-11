import React, { useState } from "react";
import foody from "../img/foody.png";
import weather from "../img/weather.png";
import notetaker from "../img/notetaker.png";
import portfolio from "../img/portfolio.png";
import employee from "../img/employee.png";
import commerce from "../img/commerce.png";

const styles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  p: {
    padding: "50px",
  },
};

function Works() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <div className="right">
      <div style={styles.container}>
        <div
          className="img-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <picture>
            <img src={foody}></img>
            {isHovering && (
              <div className="hover-text">
                <p style={styles.p}>
                  FoodyConnect is an app created with Javascript, MySql,
                  Sequalize, CSS, Handlebars, Express and Javascript. Users can
                  create accounts, post and comment. Click{" "}
                  <a href="https://tranquil-anchorage-26220.herokuapp.com/">
                    here
                  </a>{" "}
                  to view the deployed app.
                </p>
              </div>
            )}
          </picture>
        </div>
        <div
          className="img-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <picture>
            <img src={weather}></img>
            {isHovering && (
              <div className="hover-text">
                <p style={styles.p}>
                  The Weather App is a simple application that displays the
                  current weather and forecast for a specified location. This
                  was created using OpenWeather API, HTML/CSS, JavaScript and
                  erikflowers. Click{" "}
                  <a href="https://github.com/alexanderscher/weather-app">
                    here
                  </a>{" "}
                  to view the github repo.
                </p>
              </div>
            )}
          </picture>
        </div>
        <div
          className="img-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <picture>
            <img src={notetaker}></img>
            {isHovering && (
              <div className="hover-text">
                <p style={styles.p}>
                  This is a simple note-taking application built with Express.js
                  that allows users to create, read, update, and delete notes.
                  Click{" "}
                  <a href="https://github.com/alexanderscher/note-take">here</a>{" "}
                  to view the github repo.
                </p>
              </div>
            )}
          </picture>
        </div>
        <div
          className="img-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <picture className="src">
            <img src={employee}></img>
            {isHovering && (
              <div className="hover-text">
                <p style={styles.p}>
                  This is a command-line application that allows you to manage
                  employees, roles, and departments using Inquirer and SQL. You
                  can add new employees, update existing ones, and view employee
                  information based on different criteria. Click{" "}
                  <a href="https://github.com/alexanderscher/employee-tracker">
                    here
                  </a>{" "}
                  to view the github repo.
                </p>
              </div>
            )}
          </picture>
        </div>
        <div
          className="img-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <picture>
            <img src={commerce}></img>
            {isHovering && (
              <div className="hover-text">
                <p style={styles.p}>
                  This project sets up CRUD routes to create an API using
                  Express, Node.js, and Sequelize for an e-commerce application.
                  Click{" "}
                  <a href="https://github.com/alexanderscher/E-commerce-back-end">
                    here
                  </a>{" "}
                  to view the github repo.
                </p>
              </div>
            )}
          </picture>
        </div>
        <div
          className="img-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <picture>
            <img src={portfolio}></img>
            {isHovering && (
              <div className="hover-text">
                <p style={styles.p}>
                  This was the first portfolio template I created only using
                  HTML/CSS/. Click{" "}
                  <a href="https://github.com/alexanderscher/professional-portfolio">
                    here
                  </a>{" "}
                  to view the github repo.
                </p>
              </div>
            )}
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Works;
