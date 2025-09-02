import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantData from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container">
        <input type="text" placeholder="Search for restaurants..." />
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        {restaurantData.map((data) => {
          return (
            <RestaurantCard
              key={data.card.card.info.id}
              restaurantData={data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
