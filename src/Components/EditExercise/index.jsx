import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "./editexercise.scss";
function Index() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState("");
  // useParams
  let { id } = useParams();

  // accessing users
  const [users, setUsers] = useState([]);

  // const [selectuser, setSelectuser] = useState("Select user name");

  let history = useHistory();

  const handleUser = (e) => {
    // console.log(e.target.value);
    setUsername(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleDuration = (e) => {
    setDuration(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  // onsubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username,
      description,
      duration,
      date,
    };
    axios
      .post(`http://localhost:5000/exercises/update/${id}`, exercise)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error.message);
      });

    window.location = "/exercises";
  };

  // Getting users from database
  useEffect(() => {
    // getting data of input after clicking on edit which is existing one
    // adding that to input elements of edit component

    axios.get(`http://localhost:5000/exercises/${id}`).then((res) => {
      setUsername(res.data.username);
      setDescription(res.data.description);
      setDuration(res.data.duration);
      setDate(new Date(res.data.date));
    });

    // this is accessing users for setting in user form select area;
    axios.get("http://localhost:5000/users").then((res) => {
      // console.log(res.data.allusers);
      if (res.data.allusers.length > 0) {
        const allusers = res.data.allusers.map((user) => user.username);
        setUsers(allusers);
      }
    });
  }, [id]);

  return (
    <div className="my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 ">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  User Name
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={(e) => handleUser(e)}
                  value={username}
                >
                  {users.map((user, index) => {
                    return (
                      <option name="username" value={user} key={index}>
                        {user}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Description
                </label>
                <input
                  type="text"
                  name="description"
                  value={description}
                  className="form-control"
                  onChange={(e) => handleDescription(e)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Duration (in minutes)
                </label>
                <input
                  type="text"
                  name="duration"
                  value={duration}
                  className="form-control"
                  onChange={(e) => handleDuration(e)}
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={date}
                  className="form-control"
                  onChange={(e) => handleDate(e)}
                />
              </div>
              <button type="submit" class="btnSubmit">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
