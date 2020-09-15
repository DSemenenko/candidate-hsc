import React, { Fragment } from 'react';
import './App.css';
import { motion } from 'framer-motion';

//components
import ListPatient from "./components/ListPatient";

//page transition routing
const PageTransition = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

function Patients() {
  return (
    <Fragment>
      <motion.div 
        className="container"
        initial="out"
        animate="in"
        exit="out"
        variants={PageTransition}
      >
        <ListPatient />
      </motion.div>
    </Fragment>
  ); 
}

export default Patients;
