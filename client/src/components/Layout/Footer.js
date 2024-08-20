import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">All Right Reserved &copy; By Mano</h1>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
        <br></br>
        <br></br>
        <a href="https://feedbacker-git-main-manoranjanheres-projects.vercel.app/u/Gocip_By_Mano">For feedback and reviews click here</a>
      </p>
    </div>
  );
};

export default Footer;