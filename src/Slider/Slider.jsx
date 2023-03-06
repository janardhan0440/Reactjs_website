import "./Slider.css";
import React from "react";
import About from '../About'
import ss from "../images/sldr.jpg"
import xu from "../images/ux.jpg"
// import $ from 'jquery';

function template() {
  return (
    <div className="slider">
     
     <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={xu} />
      </div>
      <div className="carousel-item">
      <img src={ss} /> 
        </div>
      <div className="carousel-item">
      <img src={ss} />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  <About />
    </div>
  );
};

export default template;
