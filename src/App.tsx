import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieList from "./MovieList/MovieList";
import Movie from "./Movie/Movie";
import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={MovieList} />
        <Route path="/movie/:id" component={Movie} />
      </div>
    </Router>
  );
};

export default App;
