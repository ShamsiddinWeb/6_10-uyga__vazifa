import React, { Component } from "react";
import "./Food.css";
import { data } from "../../static/Food";

class Food extends Component {
  render() {
    return (
      <section className="food">
        <div className="container">
          <div className="food__start">
            <p className="food__text">Features</p>
            <h2 className="food__title">Food with a New Passion</h2>
            <ul className="food__list">
              {data?.map((e) => (
                <li key={e.id} className="food__list-item">
                  <div  className="food__list-img">
                    <img src={e.img} alt="" />
                  </div>
                  <h3 className="food__list-title">{e.title}</h3>
                  <p className="food__list-text">{e.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Food;
