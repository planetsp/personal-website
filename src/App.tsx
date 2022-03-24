import React from 'react';
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
  NavLink
} from "shards-react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import ResumeViewComponent from "./ResumeViewComponent";
import ContactComponent from "./ContactComponent";
import * as Firebase from "firebase/app"

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
const app = Firebase.initializeApp(config);

function App() {
  return (
    <div className={'App'}>
      <Router>
        <Nav>
          <Navbar type="dark" className={"navBar"}>
            <NavLink className={"navItem"} href="/">Home</NavLink>
            <NavLink className={"navItem"} href="/philosophy">Philosophy</NavLink>
            <NavLink className={"navItem"} href="/computer_science">Computer Science</NavLink>
            <NavLink className={"navItem"} href="/contact">Contact</NavLink>
          </Navbar>
        </Nav>
        <Switch>
          <Route path="/philosophy">
            <ResumeViewComponent path={'/philosophy'} app={app} />
          </Route>
          <Route path="/computer_science">
            <ResumeViewComponent path={'/computer_science'} app={app}/>
          </Route>
          <Route path="/contact">
            <ContactComponent />
          </Route>
          <Route path="/">
            <Card className = {"card"}>
              <CardHeader>Welcome to kevinkusi.dev!</CardHeader>
              <CardImg className={'cardImage'} src={"https://firebasestorage.googleapis.com/v0/b/personal-website-267321.appspot.com/o/IMG_0044.jpg?alt=media&token=4c0d63b5-7760-4b9b-940f-b148c32c3f7b"}></CardImg>
              <CardBody>
                <h4>About me</h4>
                <p>Hey there! My name is Kevin Kusi. I'm currently a senior at the University of Pittsburgh studying Computer Science and Philosophy. 
                  My main areas of interest concerning Computer Science are web development (especially front-end/UI-UX), data science, mobile development (especially iOS), and lower level development. 
                  My main areas of interest concerning Philosophy are ethics (especially normative and meta-ethics), metaphysics, social philosophy, and philosophy of mind.
                <br/><br/>
                My near future ambitions are to pursue software engineering full-time, while pursuing a part-time Masters in Philosophy. After working for several years in the tech world, I hope someday to be able to pursue a doctoral degree in Philosophy.
                <br/><br/>
                The purpose of this website is to give a more in-depth look at my academic and professional history in both philosophy and computer science, without having to abstract away details (as in the case of a resume). 
                <br></br>
                Feel free to browse around! This website was built using <a href={"https://reactjs.org/"}>React</a> with <a href={"https://www.typescriptlang.org/"}>TypeScript</a>.
                <br/><br/>
                You can download my computer science oriented resume (though this website functions as a sort of resume) as a PDF below:</p>
                <Button color={'#FFFFFF'}>
                  <a className={"navLink"} href={"https://drive.google.com/file/d/1cRwF-vHeNNmep_TFYMx_69eBFueK4zNX/view?usp=sharing"}>Download my resume ↓</a>
                  </Button>
              </CardBody>
            </Card>

          </Route>
        </Switch>
      </Router>

    </div>
  );
}


export default App;
