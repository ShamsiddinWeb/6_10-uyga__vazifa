import React, { Component } from "react";
import "./Header.css";
import headerLogo from "../../assets/icons/header_logo.svg";
import { navList } from "../../static/HeaderNav";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      toogle: false,
    };
  }
  render() {
    return (
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
            <div className="mmm">
              <button className="header__btn">Booking Now</button>
              <p
                className="darks"
                id="dark-change"
                onClick={() => setChecked(!checked)}
              >
                dark
              </p>
              <div className="header__menu-burgers">
                <button
                  className="header__menu"
                  id="menu-burger"
                  onClick={() => this.setState({ toogle: !this.state.toogle })}
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
    );
  }
}
