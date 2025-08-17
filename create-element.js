
const reactElement = React.createElement(
  "div",
  { style: { backgroundColor: "yellow" } },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h2", { style: { color: "green" } }, "HI"),
      React.createElement("h3", { style: { color: "blue" } }, [
        "HiDuu ",
        React.createElement("span", { style: { color: "pink" } }, "Hello span"),
      ]),
    ]),
    React.createElement("div", { id: "child", style: { backgroundColor: "lightcoral" } }, [
      React.createElement("h2", { style: { color: "green" } }, "HI"),
      React.createElement("h3", { style: { color: "blue" } }, [
        "HiDuu ",
        React.createElement("span", { style: { color: "pink" } }, "Hello span"),
      ]),
    ]),
  ]
);
console.log(reactElement)
const reactDom = ReactDOM.createRoot(document.getElementById("react-heading"));
reactDom.render(reactElement);

const element = React.createElement(
  React.Fragment,
  null,
  React.createElement("h2", null, "Title"),
  React.createElement("p", null, "This is a paragraph."),
  React.createElement("span", null, ["This is a span.", React.createElement("strong", null, "Bold text")]),
);

// Usage:
ReactDOM.createRoot(document.getElementById("fragment-div")).render(element);
