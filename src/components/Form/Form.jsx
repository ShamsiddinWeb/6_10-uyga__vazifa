import React, { Component } from "react";
import "./Form.css";

export default class Form extends Component {
  render() {
    return (
      <form className="Form">
        <div className="container">
          <span className="form__span">Contact </span>
          <h3 className="form__title">
            Food Stalls with Persons but also specialized equipment, Skills to
            manage.
          </h3>
          <label className="form__label" htmlFor="">
            <input
              className="form__inp"
              type="text"
              placeholder="Enter your message"
            />
            <button className="form__btn">Send</button>
          </label>
        </div>
      </form>
    );
  }
}
