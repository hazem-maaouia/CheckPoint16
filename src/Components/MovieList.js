import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { starTab } from "../Asserts/Data";
import { Form } from "react-bootstrap";
const MovieList = ({ movietab }) => {
  const [search, setsearch] = useState("");
  const [starList, setStarList] = useState(starTab);
  const handleSearch = (e) => {
    setsearch(e.target.value);
  };
  const changeColor = (id) => {
    setStarList(
      starList.map((el) =>
        el.id === id
          ? { icon: el.icon, isColored: !el.isColored, id: el.id }
          : el
      )
    );
  };

  return (
    <div className="tes">
      <h1 className="titre">Movie App</h1>
      <div className="di">
        <Form.Control
          type="text"
          placeholder="Search..."
          onChange={handleSearch}
        />
        <div className="spa">
          {starList.map((el) => (
            <span
              key={el.id}
              className={el.isColored ? "starColor" : "star"}
              onClick={() => {
                changeColor(el.id);
              }}
            >
              {el.icon}
            </span>
          ))}
        </div>
      </div>
      <div className="ap">
        {movietab
          .filter(
            (el) =>
              el.rate >= starList.filter((el) => el.isColored === true).length
          )
          .filter((movie) =>
            movie.title.toUpperCase().includes(search.toUpperCase())
          )
          .map((item, index) => (
            <MovieCard item={item} key={index} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
