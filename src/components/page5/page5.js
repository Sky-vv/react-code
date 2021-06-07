import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const page5 = () => (
  <div>
    <p>В каком году появился JavaScript?</p>
    <Link className = "linkStyle1" to="/page5">1994</Link>
    <p>или</p>
    <Link className = "linkStyle2" to="/page5">1998</Link>
    <p>или</p>
    <Link className = "linkStyle3" to="/page6">1995</Link>
    <p></p>
  </div>
);

export default page5;