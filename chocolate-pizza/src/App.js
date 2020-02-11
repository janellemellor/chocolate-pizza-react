import React, { Component } from 'react';
import './App.css';
import Header from "./Header.js";
import Footer from "./Footer.js";
import SectionOne from "./SectionOne.js";

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <Header /> 
      <SectionOne />
      <Footer />
      </div>
    );
  }
  }
  
  


