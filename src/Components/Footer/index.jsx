import React from "react";
import { IoIosFitness } from "react-icons/io";
import { FaMailBulk, FaMobile, FaEnvelope } from "react-icons/fa";
import "./footer.scss";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function index() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="content">
              <h3>
                <IoIosFitness />
                FitnessPro
              </h3>
              <p>
                Its not about being good at something.Its about <br />
                being good to yourself.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="content">
              <p>
                <span>
                  <FaMailBulk />
                </span>
                PlotNo - 07, Abid koti, Hyderabad.
              </p>
              <p>
                <span>
                  <FaMobile />
                </span>
                +91 9133666188 +91 9505049170
              </p>
              <p>
                <span>
                  <FaEnvelope />
                </span>
                abdulwajeedali007@gmail.com
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row py-2">
          <div className="col-lg-6 col-sm-12">
            <p className="footer-para">2021 FitnessPro all right reserved</p>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="social__media">
              <a href="/#">
                <FaFacebookF />
              </a>
              <a href="/#">
                <FaInstagram />
              </a>
              <a href="/#">
                <FaTwitter />
              </a>
              <a href="/#">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
