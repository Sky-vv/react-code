import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const page4 = () => (
  <div>
    <p>Когда была издана первая рекомендация CSS1?</p>
    <Link className = "linkStyle1" to="/page5">1996</Link>
    <p>или</p>
    <Link className = "linkStyle2" to="/page4">1997</Link>
    <p>или</p>
    <Link className = "linkStyle3" to="/page4">1999</Link>
    <p></p>
  </div>
);

export default page4;