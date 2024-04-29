import React, { Component } from "react";
import "./Catlogues.css";
import catloguesImg from "../../assets/images/CatloguesImg.png";

export default class Catlogues extends Component {
  render() {
    return (
      <section className="catlogues">
        <div className="container">
          <div className="catlogues__start">
            <img className="catlogues__img" src={catloguesImg} alt="" />
            <div className="catlogues__card">
              <span className="catlogues__span">About us</span>
              <h2 className="catlogues__title">
                Food Stalls with Persons but to Product marketing plane
                catlogues etc to.{" "}
              </h2>
              <p className="catlogues__text">
                There are many things are needed to start the Fast Food
                Business. You need not only Just Food Stalls with Persons but
                also equipment make your marketing plane Effective.
              </p>
              <button className="catlogues__btn">Read More</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
