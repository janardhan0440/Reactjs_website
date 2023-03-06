import "./Contact.css";
import React from "react";
import cn from '../images/cnt.jpg'

function template() {
  return (
    <section className="about_sec">
      <div className="container">
        <div className="row">
          <div className="col-4">
          <div className="frst">
              <figure>
                <img src={cn} width="100%"></img>
              </figure>
              
            </div>
          </div>
          <div className="col-8">
            <div className="rigt">
              <h2>Contact Us</h2>
              <h4>To Grow Your Business</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <a herf="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default template;
