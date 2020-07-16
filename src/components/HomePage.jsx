import React, { Component } from "react";
import "../css/Home.css";

//component for the home page
class HomePage extends Component {
  render() {
    return (
      <div className="container" id="container">
        <h1 id="title-header">Welcome to our campuses directory!</h1>
        <div className="card" id="card">
          <div className="card-body">
            <p>
              Our complete campuses directoy will grant access to all
              informations such as students enrolled at a campuses, all
              campuses, and much more. Please use this site at your own
              discretion and preserve no disclosure rights.
            </p>
          </div>
        </div>
        <div className="school-image">
          <img
            src="https://specials-images.forbesimg.com/imageserve/5d55764795808800097ce87e/960x0.jpg?fit=scale"
            width={750}
            height={300}
          />
        </div>
        <div className="social-links" id="social-icons">
          Follow us on social medias! <br />
          <button className="fa fa-facebook" id="fb-icon"></button>
          <button className="fa fa-twitter" id="twitter-icon"></button>
          <button className="fa fa-google" id="google-icon"></button>
        </div>
      </div>
    );
  }
}

export default HomePage;
