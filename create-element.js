import React from "react";
import ReactDOM from "react-dom/client";

const reactElement = React.createElement(
  "div",
  { style: { backgroundColor: "yellow" } },
  [
    React.createElement("div", { key: "child", id: "child" }, [
      React.createElement(
        "h2",
        { key: "child1", style: { color: "green" } },
        "HI"
      ),
      React.createElement("h3", { key: "child2", style: { color: "blue" } }, [
        "HiDuu ",
        React.createElement(
          "span",
          { key: "child3", style: { color: "pink" } },
          "Hello span"
        ),
      ]),
    ]),
    React.createElement(
      "div",
      { key: "child4", id: "child", style: { backgroundColor: "lightcoral" } },
      [
        React.createElement(
          "h2",
          { key: "child5", style: { color: "green" } },
          "HI"
        ),
        React.createElement("h3", { key: "child6", style: { color: "blue" } }, [
          "HiDuu ",
          React.createElement(
            "span",
            { key: "child7", style: { color: "pink" } },
            "Hello span"
          ),
        ]),
      ]
    ),
  ]
);
console.log(reactElement);
const reactDom = ReactDOM.createRoot(document.getElementById("react-heading"));
reactDom.render(reactElement);

const element = React.createElement(
  React.Fragment,
  null,
  React.createElement("h2", { key: "title" }, "Title"),
  React.createElement("p", { key: "paragraph" }, "This is a paragraph."),
  React.createElement("span", { key: "span" }, [
    "This is a span.",
    React.createElement("strong", { key: "bold" }, "Bold text"),
  ])
);

// Usage:
ReactDOM.createRoot(document.getElementById("fragment-div")).render(element);

function MyComponent(props) {
  return React.createElement(
    "div",
    { key: "my-component", style: props.style },
    props.children
  );
}
function MyChildComponent(props) {
  return React.createElement(
    "span",
    { key: "my-child", style: props.style },
    props.first + props.second,
    props.children
  );
}
function CreateAnEmptyDiv() {
  return React.createElement("div", { key: "empty-div" });
}

// Usage:
ReactDOM.createRoot(document.getElementById("react-body")).render(
  React.createElement(
    MyComponent,
    {
      key: "my-component",
      style: { backgroundColor: "lightblue", display: "inline-block" },
    },
    React.createElement(
      MyChildComponent,
      { key: "my-child", style: { color: "red" }, first: 50, second: 100 },
      [
        " Students",
        React.createElement(CreateAnEmptyDiv, { key: "empty-div" }, null),
      ]
    )
  )
);
