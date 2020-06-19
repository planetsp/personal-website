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
} from "react-router-dom";
import './App.css';
import ResumeViewComponent from "./ResumeViewComponent";
import ContactComponent from "./ContactComponent";
import Firebase from "firebase";
import ResumeItem from "./models/ResumeItem";
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};
Firebase.initializeApp(config);


function App() {
  return (
    <div >
      <Router>
        <Nav>
          <Navbar type="dark" theme="primary" className={"navBar"}>
            <NavLink className={"navItem"} href="/">Home</NavLink>
            <NavLink className={"navItem"} href="/philosophy">Philosophy</NavLink>
            <NavLink className={"navItem"} href="/computer_science">Computer Science</NavLink>
            <NavLink className={"navItem"} href="/contact">Contact</NavLink>
          </Navbar>
        </Nav>
        <Switch>
          <Route path="/philosophy">
            <ResumeViewComponent resumeItems={getCollection('/philosophy') || ["hello"]} />
          </Route>
          <Route path="/computer_science">
            <ResumeViewComponent resumeItems={getCollection('/computer_science')}/>
          </Route>
          <Route path="/contact">
            <ContactComponent />
          </Route>
          <Route path="/">
            <Card className = {"card"}>
              <CardHeader>Welcome to kevinkusi.dev!</CardHeader>
              <CardBody>
                <h4>About me</h4>
                <p>Hey there! My name is Kevin Kusi. I'm currently a senior at the University of Pittsburgh studying Computer Science and Philosophy. My main areas of interest concerning Computer Science are web development (especially front-end/UI-UX), data science, mobile development (especially iOS), and lower level development. My main areas of interest concerning Philosophy are ethics (especially normative and meta-ethics), metaphysics, social philosophy, and philosophy of mind.
                <br/><br/>
                My near future ambitions are to pursue software engineering full-time, while pursuing a part-time Masters in Philosophy. After working for several years in the tech world, I hope someday to be able to pursue a doctoral degree in Philosophy.
                <br/><br/>
                Feel free to browse around! Though keep in mind... this website is under construction... I'm trying get a better grasp of using React with TypeScript.
                <br/><br/>
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

const getCollection = ( path: string) => {
  let database = Firebase.firestore();
  let itemArray:Array<ResumeItem> = [];
  database.collection(path).onSnapshot(snapshot => {
    snapshot.docs.map(doc => {
      let resumeItem = doc.data() as ResumeItem
      itemArray.push(resumeItem);
    })
  });
  return itemArray;
}
export default App;
