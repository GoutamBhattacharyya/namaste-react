const heading2 = React.createElement("h3", {}, "Hello from React JS");
const root = ReactDOM.createRoot(document.getElementById("reactroot"));
root.render(heading2);
const heading3 = React.createElement("p", {}, "Hi I'm Goutam");
const reactRoot = ReactDOM.createRoot(document.getElementById("reactDom"));
reactRoot.render(heading3);
const testHeading = React.createElement(
  "h5",
  { className: "test-class" },
  React.createElement("span", {}, "span text", [
    React.createElement("div", {}, "italic text",[React.createElement("i", {}, "i tag"),[React.createElement("br", {})]]),
    React.createElement("b", { className: "bold-class" }, "bold text"),
  ])
);
const testRoot = ReactDOM.createRoot(document.getElementById("test"));
testRoot.render(testHeading);
console.log(testHeading);
