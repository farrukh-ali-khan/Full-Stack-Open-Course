import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Header = ({ title }) => <h2>{title}</h2>;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all > 0) {
    const average = (good - bad) / all;

    return (
      <table>
        <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={all} />
          <Statistic text="average" value={average} />
          <Statistic text="positive" value={(good * 100) / all + " %"} />
        </tbody>
      </table>
    );
  } else {
    return <div>No feedback given</div>;
  }
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const saveFeedback = (value, adder) => adder(value + 1);

  return (
    <div>
      <Header title="give feedback" />
      <Button onClick={() => saveFeedback(good, setGood)} text="good" />
      <Button
        onClick={() => saveFeedback(neutral, setNeutral)}
        text="neutral"
      />
      <Button onClick={() => saveFeedback(bad, setBad)} text="bad" />
      <Header title="statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
