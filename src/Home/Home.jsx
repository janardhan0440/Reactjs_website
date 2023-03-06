import "./Home.css";
import React from "react";
import f from '../images/g.jpg';
import f1 from '../images/g1.jpg';
import f2 from '../images/g2.jpg';
import { Link } from "react-router-dom";
import About from "../About";

function template() {
  return (
    
    <section className="hm">
      <About />
      <div className="container">
        <div className="row">
        <div className="title_hm">
            <h2>Welcome to Your sevices</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="frst">
              <figure>
                <img src={f} width="100%"></img>
              </figure>
              <h4>Personal Business</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <button type="button" className="btn btn-primary"> <Link to="/Services">
                Add to Card</Link></button>
            </div>
          </div>
          <div className="col-4">
          <div className="frst">
              <figure>
                <img src={f1} width="100%"></img>
              </figure>
              <h4>Personal Business</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <button type="button" className="btn btn-primary"> <Link to="/Services">
                Add to Card</Link></button>
            </div>
          </div>
          <div className="col-4">
          <div className="frst">
              <figure>
                <img src={f2} width="100%"></img>
              </figure>
              <h4>Personal Business</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
               <button type="button" className="btn btn-primary"> <Link to="/Services">
                Add to Card</Link></button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </section>
    
  );
};

export default template;
