import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.json";
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
//   className: "test-class",
//   children: p,
// });

// const div = (
//   <div name="main" id="test" className="test-class">
//     {p}
//   </div>
// );

// console.log(div);

const card = (
  <div class="card" style={{ width: "18rem" }}>
    <img src={data[0].url} class="card-img-top" alt={data[0].title} />
    <div class="card-body">
      <h5 class="card-title">{data[0].title}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="http" class="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

ReactDOM.createRoot(root).render(card);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);
