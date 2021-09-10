import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import "./Navbar.scss";
import { IoIosFitness } from "react-icons/io";
function Index() {
  const [menu, setMenu] = useState("false");

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className="menu">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="navbar__container">
              <div className="logo">
                <h1>
                  <IoIosFitness />
                  FitnessPro
                </h1>
              </div>
              <div className="menu__icon" onClick={handleChange}>
                <BiMenuAltRight />
              </div>
              <div className="menu__desktop">
                <ul className="ul__nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/exercises">
                      Exercisers List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/create">
                      Create Exercise
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user">
                      Create User
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={menu ? `menu__mobile` : "menu__mobile active"}>
                <ul className="ul__nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      onClick={handleChange}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={handleChange}
                      to="/exercises"
                    >
                      Exercisers List
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={handleChange}
                      to="/create"
                    >
                      Create Exercise
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      onClick={handleChange}
                      to="/user"
                    >
                      Create User
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
