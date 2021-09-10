import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./exercises.scss";
function Index() {
  const [exercises, setExercises] = useState([]);

  // Fetching data
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/exercises/`)
      .then((res) => {
        if (res.data.length > 0) {
          setExercises(res.data);
        }
      })
      .catch((error) => console.log(error.message));
  }, []);

  // Delete exercise
  const deleteExercise = (id) => {
    axios
      .delete(`${process.env.REACT_APP_URL}/exercises/${id}`)
      .then((res) => console.log(res.data))
      .catch((error) => {
        console.log(error.message);
      });

    const newUserslist = exercises.filter((exercise) => exercise._id !== id);
    setExercises(newUserslist);
  };

  // Exercise
  const Exercise = ({ exercise }) => {
    return (
      <div className="col-lg-4 col-md-6 ">
        <div className="content__row">
          <div className="content">
            <span>Username: </span>
            {exercise.username}
          </div>
          <div className="content">
            <span>Description:</span> {exercise.description}
          </div>
          <div className="content">
            <span>Duration:</span> {exercise.duration} mints
          </div>
          <div className="content">
            <span>Date:</span> {exercise.date}
          </div>
          <div className="content__btn">
            <p>
              <Link to={`/edit/${exercise._id}`} className="btn  btn-warning">
                Edit
              </Link>
            </p>
            <p>
              <button
                className="btn btn-danger"
                onClick={() => deleteExercise(exercise._id)}
              >
                Delete
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="list__container">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Exercisers List</h2>
          </div>
        </div>
        <div className="row">
          {exercises.map((exercise) => (
            <Exercise exercise={exercise} key={exercise._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Index;
