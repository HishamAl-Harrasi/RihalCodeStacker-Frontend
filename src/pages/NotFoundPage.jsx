import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../styles/NotFoundPage.css";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="NotFoundPageContainer">
        <FontAwesomeIcon icon={faFaceSadTear} className="fa-6x sadFace" />
        <br />
        <h1>Oops! Page not found!</h1>
        <h3 className="homePageLink">
          <Link to={"/"} className="homePageLink">
            Click here to go back to the home page
          </Link>
        </h3>
      </div>
    );
  }
}
