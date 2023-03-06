import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Slider from './Slider'
import Footer from './Footer'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      
      <Route path="/" exact component={Slider}></Route>
           <Route path="/Home"  component={Home}></Route>
         <Route path="/About" component={About}></Route>
         <Route path="/Services" component={Services}></Route>
         <Route path="/Contact" component={Contact}></Route>
         <Footer />

      </div>
      </Router>
  );
}

export default App;
