import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import AppData from "./data/appdata";
import { Provider } from 'react-redux';
import appStore from "./data/appStore";
import "./src/style.css";
const App = () => {
  const instruments = AppData();
  return (
    <Provider store={appStore}>
      <div className="w-full">
        <Header />
        <Body />
        <Footer />
      </div>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);