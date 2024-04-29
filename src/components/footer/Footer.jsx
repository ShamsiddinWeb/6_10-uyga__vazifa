import React, { Component } from "react";
import "./Footer.css";
import footerImg from "../../assets/icons/header_logo.svg";
import { footerList } from "../../static/footerList";
import instagram from "../../assets/icons/instagram.svg"
import facebook from "../../assets/icons/facebook.svg"
import twitter from "../../assets/icons/twitter.svg"
import youtbe from "../../assets/icons/youtbe.svg"




export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__start">
            <div className="footer__left">
              <img src={footerImg} alt="" /> <br /> <br />
              <a className="footer__left-link" href="#">www.company name.com</a> <br /><br />
              <a className="footer__left-link" href="#">companyname@gmail.com</a> <br /><br />
              <a className="footer__left-link" href="tel: +74851180325">Phone: +7 485-118-03-25</a>
            </div>
            {footerList?.map((e) => (
              <div key={e.id} className="footer__card">
                <h3 className="footer__card-title">{e.title}</h3>
                <ul className="footer__list">
                  {e?.links?.map((val, inx) => (
                    <li className="footer__list-item" key={inx}>
                      <a className="footer__list-link" href="#">
                        {val}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="footer__right">
              <h3 className="footer__card-title">Company</h3>
              <ul className="footer__list">
                <li className="footer__list-item">
                  <a className="footer__list-link" href="#">
                    Landingpage
                  </a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__list-link" href="#">
                    Documentation
                  </a>
                </li>
                <li className="footer__list-item">
                  <a className="footer__list-link" href="#">
                    Referral Program
                  </a>
                </li>
              </ul>
              <a className="footer__icon" href="https://www.instagram.com/"  target="_blanc">
                <img src={instagram} alt="" />
              </a>
              <a className="footer__icon" href="https://www.facebook.com/?locale=ru_RU" target="_blanc">
                <img src={facebook} alt="" />
              </a>
              <a className="footer__icon" href="https://twitter.com/?lang=ru" target="_blanc">
                <img src={twitter} alt="" />
              </a>
              <a className="footer__icon" href="https://www.youtube.com/" target="_blanc">
                <img src={youtbe} alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
