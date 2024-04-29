import React, { Component } from "react";
import "./Admin.css"
import Catlogues from "../../components/Catlogues/Catlogues";
import "../../components/Header/Header.css";
import headerLogo from "../../assets/icons/header_logo.svg";
import { navList } from "../../static/HeaderNav";

import Food from "../../components/Food/Food";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import Making from "../../components/Making/Making";
import Form from "../../components/Form/Form";
import Footer from "../../components/footer/Footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      toogle: false,
      mode: false,
    };
  }
  render() {
    return (
      <div className={`store ${this.state.mode ? "active" : ""}`}>
        <header className={`header ${this.state.toogle ? "open" : ""}`}>
          <div className="container">
            <div className="header__start">
              <div className="header__navbar">
                <img className="header__logo" src={headerLogo} alt="" />
                <nav className="header__nav">
                  <ul className="header__list">
                    {navList?.map((val, inx) => (
                      <li key={inx} className="header__list-item">
                        <a className="header__list-link" href="#">
                          {val}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <button className="header__btns">Booking Now</button>
                </nav>
              </div>
              <div className="header__right">
                <button className="header__btn">Booking Now</button>
                <p
                  className="darks"
                  id="dark-change"
                  onClick={() => this.setState({ mode: !this.state.mode })}
                >
                  dark
                </p>
                <div className="header__menu-burgers">
                  <button
                    className="header__menu"
                    id="menu-burger"
                    onClick={() =>
                      this.setState({ toogle: !this.state.toogle })
                    }
                  >
                    <span className="header__menu-span"></span>
                    <span className="header__menu-span"></span>
                    <span className="header__menu-span"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Hero />
        <Food />
        <Catlogues />
        <Products />
        <Making />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default Admin;
