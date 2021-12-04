import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import React, { Component } from "react";

function App() {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

  const [selected, setSelected] = useState(0);

  const [points, setPoints] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });
  const [key, setKey] = useState(0);

  function getRandomInt(max) {
    const random = Math.floor(Math.random() * Math.floor(max));
    setKey(random);
    return random;
  }

  const setVote = () => {
    const copy = { ...points };
    copy[key] += 1;
    setPoints(copy);
  };

  // function mostVote(){
  //   points.map((n)=> n.value>)
  // }

  return (
    <div className="App">
      <h2>Anecdotes of the Day</h2>
      {anecdotes[selected]} <br />
      has {points[key]} votes <br />
      <button onClick={setVote}>vote</button>
      <button onClick={() => setSelected(getRandomInt(anecdotes.length))}>
        next anecdote
      </button>
      <h2>Anecdotes with most votes</h2>
      {
        anecdotes[
          Object.keys(points).reduce((a, b) => (points[a] > points[b] ? a : b))
        ]
      }{" "}
      <br />
      has {Object.values(points).reduce((a, b) => (a > b ? a : b))} votes <br />
    </div>
  );
}

export default App;
