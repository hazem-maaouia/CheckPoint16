import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList";
import { listMovie } from "./Asserts/Data";
import AddMovie from "./Components/AddMovie";
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
    <div className="tes">
      <div className="App-header">
        <MovieList movietab={movietab} />
        <AddMovie addMovie={addMovie} />
      </div>
    </div>
  );
}

export default App;
