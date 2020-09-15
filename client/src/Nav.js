import React, { Fragment } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

//components

function Nav() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img src="/images/logo.png" alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <Link  className="nav-link" to="/">
                      Home
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/addpatient">
                    Add patient
                  </Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/patients">
                      List patients
                  </Link> 
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/search">
                    Search
                  </Link>
              </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  ); 
}

export default Nav;
