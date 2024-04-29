import React, { Component } from "react";
import "./Hero.css";
import heroImg from "../../assets/images/hero__img.png";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="hero__start">
            <div className="hero__card">
              <h1 className="hero__title">
                Making time a good time by making food the good food.
              </h1>
              <p className="hero__text">
                There are many things are needed to start the Fast Food
                Business. You need not only Just Food Stalls with Persons but
                also specialized equipment,
              </p>
              <div className="hero__group">
                <button className="hero__btn">Order Now</button> <br className="br" /><br className="br" />
                <a className="hero__link" href="#">
                  Food Details
                </a>
              </div>
            </div>
            <img className="hero__img" src={heroImg} alt="" />
          </div>
        </div>
      </section>
    );
  }
}
