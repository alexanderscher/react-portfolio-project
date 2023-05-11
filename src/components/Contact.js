import React, { useState } from "react";

const styles = {
  right: {
    backgroundColor: "white",
    height: "100%",
    width: "50%",
    marginLeft: "50%",
  },
  input: {
    border: "none",
    borderBottom: "1px solid grey",
    outline: "none",
    display: "block",
    marginTop: "30px",
    minWidth: "90%",
    fontFamily: "Arial",
  },
  textarea: {
    minWidth: "10%",
    display: "block",
    marginTop: "30px",
    maxWidth: "90%",
    minWidth: "90%",
    height: "200px",
    resize: "none",
    fontFamily: "Arial",
    border: "1px solid grey",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: "10px",
    border: "1px solid grey",
    width: "60px",
    height: "26px",
    backgroundColor: "white",
    color: "grey",
  },
  errorStyle: {
    border: "none",
    borderBottom: "1px solid red",
    outline: "none",
    display: "block",
    marginTop: "30px",
    minWidth: "90%",
    fontFamily: "Arial",
  },
  textareaError: {
    minWidth: "10%",
    display: "block",
    marginTop: "30px",
    maxWidth: "90%",
    minWidth: "90%",
    height: "200px",
    resize: "none",
    fontFamily: "Arial",
    border: "1px solid red",
  },
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inputStyles, setInputStyles] = useState({
    name: styles.input,
    email: styles.input,
    message: styles.textarea,
  });

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }

    setInputStyles((prevState) => ({
      ...prevState,
      [inputType]: inputType === "message" ? styles.textarea : styles.input,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email || !name || !message) {
      alert("Please fill out all the forms");
      const newInputStyles = {};
      if (!name) {
        newInputStyles.name = styles.errorStyle;
      }
      if (!email) {
        newInputStyles.email = styles.errorStyle;
      }
      if (!message) {
        newInputStyles.message = styles.textareaError;
      }
      setInputStyles((prevState) => ({
        ...prevState,
        ...newInputStyles,
      }));
      return;
    } else {
      alert("Email sent");
      setName("");
      setMessage("");
      setEmail("");
      setInputStyles({
        name: styles.input,
        email: styles.input,
        message: styles.textarea,
      });
    }
  };

  return (
    <div className="right">
      <form style={styles.form}>
        <input
          style={inputStyles.name}
          name="name"
          type="name"
          onChange={handleInputChange}
          placeholder="NAME"
        />
        <input
          style={inputStyles.email}
          name="email"
          type="email"
          onChange={handleInputChange}
          placeholder="EMAIL"
        />
        <textarea
          style={inputStyles.message}
          name="message"
          type="message"
          onChange={handleInputChange}
          placeholder="MESSAGE"
        />
        <button
          className="btn"
          style={styles.button}
          onClick={handleFormSubmit}
          type="button"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
