import React from "react";
import { Card, Button } from "react-bootstrap";
import "../App.css";
const MovieCard = ({ item}) => {
  return (
    <div className="car">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="imgg" variant="top" src={item.posterUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>
            <p className="god">{"".padStart(item.rate, "⭐")}</p>
          </Card.Text>
          <Button variant="primary" className="but">Update</Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
