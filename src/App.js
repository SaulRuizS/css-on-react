import React from "react";
import Form from "./Form";
import { Title } from "./Title";
import { Theme } from "./Theme";

const movies = [
  {
    name: "Avengers",
    available: 5
  },
  {
    name: "Terminator",
    available: 3
  },
  {
    name: "StarWars",
    available: 7
  }
];

export default function App() {
  const [theme, setTheme] = React.useState("avengers");

  return (
    <Theme theme={theme}>
      <Title>Movies</Title>
      {movies.map((movie) => (
        <Form movie={movie} updateTheme={() => setTheme(movie.name)} />
      ))}
    </Theme>
  );
}
