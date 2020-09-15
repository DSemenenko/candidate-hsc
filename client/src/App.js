import React, { Fragment } from 'react';
import './App.css';
import Nav from './Nav';
import Patients from './Patients'
import Search from './Search'
import AddPatient from './AddPatient'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

//page transition routing
const PageTransition = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

//components
// import InputPatient from "./components/InputPatient";
// import ListPatient from "./components/ListPatient";
// import SearchPatient from "./components/SearchPatient";

function App() {
  return (
    // <Fragment>
    //   <div className="container">
    //     <InputPatient />
    //     <SearchPatient />
    //     <ListPatient />
    //   </div>
    // </Fragment>
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="menu col-md-12">
            <Nav />
            <AnimatePresence>
              <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/search" component={Search}/>
                <Route path="/patients" component={Patients}/>
                <Route path="/addpatient" component={AddPatient}/>
              </Switch> 
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Router>
  ); 
}

const Home = () => (
  <motion.div
   className="container-fluid"
   initial="out"
   animate="in"
   exit="out"
   variants={PageTransition}
  >
    <div className="row">
      <div className="col-md-12 main-page">
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">This page was created to welcome!</p>
          <hr className="my-4"/>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ab, maiores veritatis tempora quas nihil recusandae saepe repellat qui et voluptas, fugit cumque laudantium blanditiis modi dicta natus quis tempore.</p>
        </div> 
      </div>
    </div>
  </motion.div>
);

export default App;