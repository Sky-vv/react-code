import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const page6 = () => (
  <div>
    <p>Исходный код React открыт в?</p>
    <Link className = "linkStyle1" to="/page7">в мае 2013</Link>
    <p>или</p>
    <Link className = "linkStyle2" to="/page6">в феврале 2013</Link>
    <p>или</p>
    <Link className = "linkStyle3" to="/page6">в июне 2013</Link>
    <p></p>
  </div>
);

export default page6;