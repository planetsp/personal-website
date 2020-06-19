import React from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Navbar,
  Nav,
  NavItem,
  NavLink
} from "shards-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import ResumeViewComponent from "./ResumeViewComponent";
import ContactComponent from "./ContactComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav pills>
          <Navbar type="dark" theme="primary" expand="md">
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/philosophy">Philosophy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/computer_science">Computer Science</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>
          </Navbar>
        </Nav>
        <Switch>
          <Route path="/philosophy">
            <ResumeViewComponent page={"philosophy"} />
          </Route>
          <Route path="/computer_science">
            <ResumeViewComponent page={"computer_science"}/>
          </Route>
          <Route path="/contact">
            <ContactComponent />
          </Route>
          <Route path="/">
            <Card>
              <CardHeader>Welcome to kevinkusi.dev!</CardHeader>
              <h1>About me</h1>
              <CardBody>
                <p>Hey there! My name is Kevin Kusi. I'm currently a senior at the University of Pittsburgh studying Computer Science and Philosophy. My main areas of interest concerning Computer Science are web development (especially front-end/UI-UX), data science, mobile development (especially iOS), and lower level development. My main areas of interest concerning Philosophy are ethics (especially normative and meta-ethics), metaphysics, social philosophy, and philosophy of mind.

                My near future ambitions are to pursue software engineering full-time, while pursuing a part-time Masters in Philosophy. After working for several years in the tech world, I hope someday to be able to pursue a doctoral degree in Philosophy.

                Feel free to browse around! Though keep in mind... this website is under construction... I'm trying get a better grasp of using React with TypeScript.

                You can download my resume (though this website functions as a sort of resume) as a PDF below:</p>
                <Button>Download my resume</Button>
              </CardBody>
            </Card>

          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
