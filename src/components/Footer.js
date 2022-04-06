import React from "react";
import insta from "../images/instagram.svg";

const Footer = () => {
  return (
    <section className="footer" id="footer">
      <div className="footer__columns">
        <div className="footer__column footer__column_1">
          <h2 className="footer__header">Let's get in touch</h2>
          <p className="footer__text">Hello@AwesomeContaners.com</p>
          <p className="footer__text footer__text_small">Address: 71 UBI Road 1, #08-42,<br/>Oxley Bizhub, Singapore 408732</p>
        </div>
        <div className="footer__column footer__column_2">
          <h2 className="footer__header">Follow us</h2>
          <a className="footer__link">
            <img src={insta} alt="Instagram logo" className="footer__social" />
            <p className="footer__text footer__text_inline">AwesomeContainers</p>
          </a>

        </div>
        <div className="footer__column footer__column_3">
          <h2 className="footer__header">Where we work</h2>
          <p className="footer__text">We currently operate in:
  Singapore</p>
          <p className="footer__text">Planning to launch in 2022:<br/>UK, EU, OSEAN, China, Vietnam, Malaysia, Taiwan</p>
        </div>
      </div>
      <div className="footer__terms">
        <p className="footer__text footer__text_small">Awesome Container Company © 2022</p>
        <p className="footer__text footer__text_small">Terms of Use</p>
      </div>
    </section>
  )
}

export default Footer;