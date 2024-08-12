//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

var name = "Besmella";
var year = new Date().getFullYear();

var html = (
  <div>
    <p>Created by {name}</p>
    <p>Copy right {year}</p>
  </div>
);

ReactDOM.render(html, document.getElementById("root"));
