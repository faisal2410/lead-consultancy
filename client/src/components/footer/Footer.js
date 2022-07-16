import React from "react";

import {
  FacebookOutlined,
  GoogleOutlined,  
  YoutubeOutlined,
  InstagramOutlined
} from "@ant-design/icons";

import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer container-fluid">
     
      <div className="row ">
        <div className="col-md-5 about">
          <h4 className="text-center">ABOUT US</h4>
          <p className="p-2">
            HF Consultancy is a firm of thriving entrepreneurs and professionals
            with promise of commitment and honesty assisting prospective
            students for higher studies in more than 500 universities from
            around the world offering assistance, counselling and coaching.
          </p>
        </div>

        <div className="col-md-3  menu text-center">
          <h4 className="text-center">QUICK MENU</h4>
          <div>
            <p className="mb-2 ">
              <NavLink to="/about">About Us</NavLink>
            </p>
            <p className="mb-2 ">
              <NavLink to="/contact">Contact Us</NavLink>
            </p>
            <p className="mb-2 ">
              <NavLink to="/mission">Mission & Vission</NavLink>
            </p>
            <p className="mb-2 ">
              <NavLink to="/privacy">Privacy Policy</NavLink>
            </p>
            <p className="mb-2 ">
              <NavLink to="/terms">Terms & Conditions</NavLink>
            </p>
            <p className="mb-2 ">
              <NavLink to="/refund">Refund & Return Policy</NavLink>
            </p>
          </div>
        </div>

        <div className="col-md-4  social text-center">
          <h4>SOCIAL LINK</h4>

          <a
            href="https://www.facebook.com/hfconsultancy586"
            target="_blank"
            rel="noopener noreferrer"
            className="me-3 social-icon"
          >
            <FacebookOutlined />{" "}
          </a>
          <a
            href="https://www.youtube.com/channel/UCXZ_Jd4L7FNxdZ-_7Cwc85Q"
            target="_blank"
            rel=" noopener noreferrer"
            className="me-3 social-icon"
          >
            <YoutubeOutlined />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?next=/hfconsultancy"
            target="_blank"
            rel=" noopener noreferrer"
            className="me-3 social-icon"
          >
           <InstagramOutlined />
          </a>

          <a
            href="https://goo.gl/maps/ApJNnxPca1gBFZfX7"
            target="_blank"
            rel=" noopener noreferrer"
            className="me-2 social-icon "
          >
            <GoogleOutlined />
          </a>
        </div>
      </div>
      <hr  />
      <div className="row">
        <div className="copyright col-md-12 ">
          <div className="p-1">All Rights Reserved by HF Consultancy @ 2022</div>
          <div className="p-1">
            Designed and Developed by{" "}
            <span>
              <a
                href="https://www.facebook.com/Faisalahmed2410"
                target="_blank"
                rel="noopener noreferrer"
              >
                Faisal Ahmed
              </a>
            </span>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Footer;
