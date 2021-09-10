import axios from "axios";
import React, { useState } from "react";
import "./user.scss";
function Index() {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userone = { username: user };
    axios
      .post("http://localhost:5000/users/add", userone)
      .then((res) => console.log(res.data));
    setUser("");
  };

  return (
    <div className="users__form">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="userinput" className="form-label">
                  User name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Inter user name"
                  name="username"
                  value={user}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <button type="submit" className="btnSubmit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
