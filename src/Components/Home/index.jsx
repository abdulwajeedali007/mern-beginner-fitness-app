import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import imageMan from "../../Images/running-man.png";
import { FaRunning } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { IoFitnessSharp } from "react-icons/io5";
import { ImRadioChecked } from "react-icons/im";
function Index() {
  return (
    <div>
      <div className="home__container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="content__box">
                <h1>Stay healthy</h1>
                <h1> even if you stay </h1>
                <h1>at home.</h1>
                <p>
                  Here you can put your daily baise data of your fitness
                  programm. Explore the your dail chart fitness.
                </p>
                <br />
                <Link to="/exercises">Look our chart</Link>
                <Link to="/user">Add your self</Link>
                <div className="social__media">
                  <div className="one">
                    <p>
                      <FaRunning />
                    </p>
                    <h3>running</h3>
                  </div>
                  <div className="two">
                    <p>
                      <GiGymBag />
                    </p>
                    <h3>workout</h3>
                  </div>
                  <div className="three">
                    <p>
                      <IoFitnessSharp />
                    </p>
                    <h3>fitness</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fitness__section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="content">
                <p className="sub__title">Look no further</p>
                <h4 className="main__title">
                  <span>FitnessPro</span> is designed for people who want to
                  track their progress and reach tranining goals{" "}
                </h4>

                <ul className="list__points">
                  <li>
                    <span className="icon">
                      <ImRadioChecked />
                    </span>
                    Get more strength
                  </li>
                  <li>
                    <span className="icon">
                      <ImRadioChecked />
                    </span>
                    Improve your condition
                  </li>
                  <li>
                    <span className="icon">
                      <ImRadioChecked />
                    </span>
                    Lose excess weight
                  </li>
                  <li>
                    <span className="icon">
                      <ImRadioChecked />
                    </span>
                    Be healthier and feel better
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="image__container">
                <img src={imageMan} alt="" />
                <div className="box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
