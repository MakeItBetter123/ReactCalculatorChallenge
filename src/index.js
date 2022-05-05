import React from "react";
import ReactDOM from "react-dom";
import * as Math_ from "./calculator.js";

//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{Math_.add(1, 2)}</li>
    <li>{Math_.multiply(2, 3)}</li>
    <li>{Math_.subtract(7, 2)}</li>
    <li>{Math_.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
