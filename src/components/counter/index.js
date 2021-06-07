import React from "react";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import "./style.css";

const Counter = ({
  handleIncrement,
  handleDecrement,
  changeDisplayFormStatus,
  currentValue,
  displayForm,
}) => (
  <div>
    <p>HTML был разработан британским учёным Тимом Бернерсом-Ли приблизительно в?</p>
    <Link className = "linkStyle1" to="/counter">1984</Link>
    <p>или</p>
    <Link className = "linkStyle2" to="/page4">1986</Link>
    <p>или</p>
    <Link className = "linkStyle3" to="/counter">1889</Link>
    <p></p>
    <div>{currentValue}</div>
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    <button onClick={changeDisplayFormStatus}>Change Form Status</button>
    {displayForm && (
      <form>
        <TextField label="Standard" />
        <TextField label="Filled" />
        <TextField label="Outlined" />
      </form>
    )}
  </div>  
);

export default Counter;
