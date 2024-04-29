import React, { Component } from "react";
import "./Products.css";
import { productsData } from "../../static/products";

export default class Products extends Component {
  render() {
    return (
      <section className="products">
        <div className="container">
          <div className="products__start">
            <span className="products__span">Menu</span>
            <h3 className="products__title">Food Full of treaty Love</h3>
            <p className="products__text">
              There are many things are needed to start the Fast Food Business.
              You need not only Just Food Stalls with Persons but also
              specialized equipment, Skills to manage Customers,
            </p>
            <ul className="products__list">
              {productsData?.map((e) => (
                <li key={e.id} className="products__list-item">
                  <img className="products__list-img" src={e.img} alt="" />
                  <div className="products__card">
                    <h4 className="products__list-title">{e.title}</h4>
                    <h4 className="products__list-title">{e.price}$</h4>
                  </div>
                  <p className="products__list-text">{e.text}</p>
                  <div className="products__card">
                    <span className="products__card-span">{e.span}</span>
                    <img src={e.icon} alt="" />
                  </div>
                </li>
              ))}
            </ul>
            <a className="products__link" href="#">Learn More</a>
          </div>
        </div>
      </section>
    );
  }
}
