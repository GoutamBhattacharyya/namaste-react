import ReactDOM from "react-dom/client";
const MenuElement = (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
);
const Menu = () => (
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
);
console.log(<MenuElement />, <Menu />);
const Title = () => <h1 className="title">Hello World</h1>;
const Body = () => (
  <div className="body">
    {MenuElement}
    {<Footer />}
    {Footer()}
    <Menu />
    <p>This is the body content.</p>
    <Sidebar />
  </div>
);
const Sidebar = () => {
  return <div className="sidebar">This is the sidebar</div>;
};
function Footer() {
  return <span>This is footer</span>;
}
const App = () => (
  <div className="container">
    <Title />
    <Body />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
