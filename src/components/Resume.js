import React from "react";
import ExampleDoc from "../pdf/mypdf.pdf";

const styles = {
  container: {
    marginLeft: "30px",
    marginTop: "30px",
  },
  p: {
    display: "block",
    marginBottom: "10px",
    color: "black",
    fontSize: "20px",
    color: "grey",
  },
  button: {
    marginTop: "10px",
    border: "1px solid grey",
    width: "100px",
    height: "26px",
    backgroundColor: "white",
    color: "grey",
  },
};

function About() {
  return (
    <div className="right">
      <div style={styles.container}>
        <p style={styles.p}>COMING SOON</p>
        <a href={ExampleDoc} download="BlankPdf" target="_blank">
          <button style={styles.button}>DOWNLOAD</button>
        </a>
      </div>
    </div>
  );
}

export default About;
