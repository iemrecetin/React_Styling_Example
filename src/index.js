import React from "react";
import ReactDom from "react-dom";

let greeting = "Hello";
const date = new Date(2022, 1, 1, 23);
const myTime = date.getHours();

let customStyle = {
  color: "blue"
};

if (myTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (myTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}
ReactDom.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {" "}
      {greeting}{" "}
    </h1>
  </div>,
  document.getElementById("root")
);
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
