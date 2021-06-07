import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const page7 = () => (
  <div>
    <p>Вам понравились наши вопросы?</p>
    <Link className = "linkStyle1" to="/page7">Нет</Link>
    <p>или</p>
    <Link className = "linkStyle2" to="/page7">Возможно</Link>
    <p>или</p>
    <Link className = "linkStyle3" to="/">Да, супер, хотим еще!</Link>
    <p></p>
  </div>
);

export default page7;