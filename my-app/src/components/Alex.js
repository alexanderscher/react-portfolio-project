import React from "react";
import Body from "./Body";
import "../styles/styles.css";

const styles = {
  container: {
    marginLeft: "30px",
    marginTop: "30px",
  },
  p: {
    display: "block",
    marginBottom: "10px",
    color: "grey",
    fontSize: "20px",
  },
};

function Alex({
  handleAboutClick,
  handleContactClick,
  handleWorksClick,
  handleAlexClick,
  handleResumeClick,
}) {
  return (
    <div className="right">
      <div style={styles.container}>
        <p
          className="header-options"
          onClick={handleAlexClick}
          style={styles.p}
        >
          ALEX SCHER
        </p>
        <p
          className="header-options"
          style={styles.p}
          onClick={handleAboutClick}
        >
          ABOUT
        </p>
        <p
          className="header-options"
          style={styles.p}
          onClick={handleWorksClick}
        >
          WORKS
        </p>
        <p
          className="header-options"
          style={styles.p}
          onClick={handleContactClick}
        >
          CONTACT
        </p>
        <p
          className="header-options"
          style={styles.p}
          onClick={handleResumeClick}
        >
          RESUME
        </p>
      </div>
    </div>
  );
}

export default Alex;
