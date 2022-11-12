import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#FFFFFF" };

  return (
    <footer style={bgStyle} className="mt-auto py-1 text-center ">
      <Container>
        {props.children}
        <p>
        </p>
        <i className="fas fa-code" /> from
        {" "}
        <a
          rel="noopener"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Hashir Shoaib
          </span>
        </a>
        {" "}
        using <i className="fab fa-react" />
        {", "}
         modified by <a
          rel="noopener"
          href="https://github.com/bradwebb101"
          aria-label="My GitHub"
        >
        <span className="badge bg-dark">
            Brad Webb
          </span>
          </a>
       
      </Container>
    </footer>
  );
};

export default Footer;