import React, { useEffect, useState } from "react";
import axios from "axios";

const Get = () => {
  let [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => setJokes(response.data))
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <div>
      <h1>Jokes Length : {jokes.length}</h1>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <h4>{joke.content}</h4>
        </div>
      ))}
    </div>
  );
};

export default Get;
