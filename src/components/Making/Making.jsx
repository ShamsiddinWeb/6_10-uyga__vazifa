import React, { Component } from "react";
import "./Making.css";
import makingImg from "../../assets/icons/makingImg.svg";
import makingIcon from "../../assets/icons/productIcon1.svg";

export default class Making extends Component {
  render() {
    return (
      <section className="making">
        <div className="container">
          <div className="making__start">
            <span className="making__span">Testimonial</span>
            <h3 className="making__title">Making Food great again and again</h3>
            <p className="making__text">
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc to make your.
            </p>
            <img src={makingImg} alt="" />
            <p className="making__text2">
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers, Effective
              Product catlogues etc very successful to make your.
            </p>
            <img src={makingIcon} alt="" />
            <p className="making__text3">Augusta W. Reynoso</p>
            <p className="making__text4">UI&UX DeSIGNER</p>
          </div>
        </div>
      </section>
    );
  }
}
