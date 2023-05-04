import React from "react";
import { Accordion, Container } from "react-bootstrap";



const Blog = () => {
  return (
    <Container className="mt-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            The differences between uncontrolled and controlled components.
          </Accordion.Header>
          <Accordion.Body>
            In short, uncontrolled components let the DOM manage the form data,
            while controlled components manage the form data through React
            state. Uncontrolled components are simpler to write, but less
            flexible and harder to maintain, while controlled components are
            more flexible and easier to maintain, but can be more complex to
            write. Uncontrolled components are suitable for simple forms, while
            controlled components are better suited for complex forms or forms
            that require validation.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How to validate React props using PropTypes
          </Accordion.Header>
          <Accordion.Body>
            To validate React props using PropTypes, you need to install the
            PropTypes library, import it into your component file, define the
            propTypes object at the bottom of your component file, and then
            define the props you want to validate and their expected data type
            inside the propTypes object. PropTypes helps you catch errors early
            by checking that the correct type of data is being passed as props
            to your React components.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            The difference between nodejs and express js.
          </Accordion.Header>
          <Accordion.Body>
            In short, Node.js is a runtime environment that executes JavaScript
            code outside of a browser, while Express.js is a web development
            framework built on top of Node.js that simplifies the process of
            building web applications. Node.js provides the foundation for
            server-side JavaScript programming, while Express.js provides a set
            of tools and utilities that make it easier to build HTTP servers,
            handle requests, manage sessions, and more.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What is a custom hook, and why will you create a custom hook?
          </Accordion.Header>
          <Accordion.Body>
            In short, a custom hook is a reusable function that contains
            stateful logic and can be shared across multiple React components.
            Custom hooks are useful when you have logic that needs to be shared
            between components but can't be easily abstracted into a
            higher-order component or rendered prop. They allow you to
            encapsulate complex logic and state management into a single hook
            that can be reused across multiple components. You might create a
            custom hook when you find yourself duplicating logic across multiple
            components or when you have a complex stateful behavior that is
            difficult to manage in a single component. Custom hooks allow you to
            extract and reuse logic, making your code more modular, reusable,
            and easier to maintain.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Blog;
