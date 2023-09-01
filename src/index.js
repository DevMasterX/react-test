import React from "react";
import ReactDOM from "react-dom/client";
import { Card } from "./components/Card";

// import "./index.css";

// const div = document.createElement("div");

const root = document.getElementById("root");
// root.append(div);

// const paragraph = React.createElement("p", {
//   id: "test-P-ID",
//   children: ["I am P"],
// });

// const p = <p id="test-ID">I am P</p>;

// const div = React.createElement("div", {
//   name: "main",
//   id: "test-ID",
//   className: "test-className",
//   children: p,
// });

// const div = (
//   <div name="main" id="test" className="test-class">
//     {p}
//   </div>
// );

// console.log(div);

// console.log(Card);

ReactDOM.createRoot(root).render(<Card />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);
