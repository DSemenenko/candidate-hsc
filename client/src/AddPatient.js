import React, { Fragment } from 'react';
import { motion } from 'framer-motion';
import './App.css';

//components
import InputPatient from "./components/InputPatient";

//page transition routing
const PageTransition = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

function AddPatient() {
  return (
    <Fragment>
      <motion.div 
        className="container"
        initial="out"
        animate="in"
        exit="out"
        variants={PageTransition}
      >
        <InputPatient />
      </motion.div>
    </Fragment>
  ); 
}

export default AddPatient;
