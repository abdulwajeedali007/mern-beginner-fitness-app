import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";

import Home from "./Components/Home";
import ExercisesList from "./Components/ExercisesList";
import EditExercise from "./Components/EditExercise";
import CreateExercise from "./Components/CreateExercise";
import CreateUser from "./Components/CreateUser";

import Footer from "./Components/Footer";

function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/exercises" component={ExercisesList}></Route>
          <Route exact path="/edit/:id" component={EditExercise}></Route>
          <Route exact path="/create" component={CreateExercise}></Route>
          <Route exact path="/user" component={CreateUser}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
