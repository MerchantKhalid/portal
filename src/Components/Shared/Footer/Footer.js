import React from "react";
import { Link } from "react-router-dom";

import bgfoo from "../../../assets/images/bgfoo.png";

const Footer = () => {
  return (
    <footer
      className="footer p-10  text-dark"
      style={{ backgroundImage: `url(${bgfoo})` }}
    >
      <div>
        <span className="footer-title">Services</span>
        <Link to="link link-hover">Branding </Link>
        <Link to="link link-hover">Design </Link>
        <Link to="link link-hover">Marketing </Link>
        <Link to="link link-hover">Advertisement </Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <Link to="link link-hover">About us </Link>
        <Link to="link link-hover">Contact </Link>
        <Link to="link link-hover">Jobs </Link>
        <Link to="link link-hover">Press kit </Link>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <Link to="link link-hover">Terms of use </Link>
        <Link to="link link-hover">Privacy policy </Link>
        <Link to="link link-hover">Cookie policy </Link>
      </div>
    </footer>
  );
};

export default Footer;
