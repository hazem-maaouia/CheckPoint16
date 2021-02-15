import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList";
import { listMovie } from "./Asserts/Data";
import AddMovie from "./Components/AddMovie";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Description from "./Components/Description";
function App() {
  const [movietab, setMovietab] = useState(listMovie);
  const addMovie = (title, posterUrl, description, rate) => {
    setMovietab([
      ...movietab,
      {
        title: title,
        posterUrl: posterUrl,
        description: description,
        rate: rate,
      },
    ]);
  };

  return (
    <div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={(props)=><MovieList movietab={movietab} {...props} />} />
            <Route exact path='/' render={(props)=><AddMovie addMovie={addMovie} {...props} />} />
            <Route exact path='/description/:title' render={(props)=><Description movietab={movietab} {...props} />} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
