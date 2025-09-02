/**
 * Header
 *   - Logo
 *   - Navigation
 * Body
 *   - Search
 *   - RestaurantContainer
 *   -   - RestaurantCard
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Container
 */
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};
const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(<AppLayout />);
