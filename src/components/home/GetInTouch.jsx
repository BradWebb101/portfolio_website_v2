import React from "react"
import { Container } from 'react-bootstrap'
import { Jumbotron } from "./migration";

const GetInTouch = ({ heading, message1, message2, message3, email }) => {

  const bgStyle = { backgroundColor: "#f5f5f5" }
  return (
    <>
    <Jumbotron style={bgStyle} >
     <div style={bgStyle} className="mt-auto py-3 text-center ">
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message1}
        <br></br>
        {message2}
        <br></br>
        {message3}

        <a className="text-decoration-none" href={`mailto:${email}`}>{email}</a>
      </p>
      </div>
      </Jumbotron>
    </>
  );
};

export default GetInTouch;
