import React from "react";
import Form from "./Form";
import { Title } from "./Title";

const movies = [
  {
    name: "Avengers",
    available: 5
  },
  {
    name: "Terminator",
    available: 3
  }
];

export default function App() {
  return (
    <div>
      <h2>Movies</h2>
      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}
