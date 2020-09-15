import React, { Fragment } from 'react';
import './App.css';
import { motion } from 'framer-motion';

//components
import SearchPatient from "./components/SearchPatient";

//page transition routing
const PageTransition = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

function Search() {
  return (
    <Fragment>
      <motion.div 
        className="container"
        initial="out"
        animate="in"
        exit="out"
        variants={PageTransition}
      >
        <SearchPatient />
      </motion.div>
    </Fragment>
  ); 
}

export default Search;
