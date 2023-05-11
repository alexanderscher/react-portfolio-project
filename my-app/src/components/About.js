import React from "react";

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

function About() {
  return (
    <div className="right">
      <div style={styles.container}>
        <p style={styles.p}>PROGRAMMER</p>
        <p style={styles.p}>MUSICIAN</p>
        <p style={styles.p}>CREATIVE</p>
        <p style={styles.p}>BASED IN LOS ANGELES</p>
      </div>
    </div>
  );
}

export default About;
