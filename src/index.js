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
//   className: "test-className",
//   children: p,
// });

// const div = (
//   <div name="main" id="test" className="test-class">
//     {p}
//   </div>
// );

// console.log(div);

const card = data.map((photo) => {
  return (
    <div
      key={photo.id}
      className="card mx-auto my-2"
      style={{ width: "18rem" }}
    >
      <img src={photo.url} className="card-img-top" alt={photo.title} />
      <div className="card-body">
        <h5 className="card-title">Card title: {photo.title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="http" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
});

console.log(card);

ReactDOM.createRoot(root).render(card);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<React.StrictMode></React.StrictMode>);
