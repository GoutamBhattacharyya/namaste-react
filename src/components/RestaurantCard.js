import React from "react";
import { RES_CARD_IMAGE_URL } from "../utils/constant";
const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    restaurantData?.card?.card?.info || {};
  console.log(restaurantData?.card?.card?.info);
  return (
    <div className="restaurant-card">
      <div className="restaurant-image">
        <img src={RES_CARD_IMAGE_URL + cloudinaryImageId} alt="Restaurant" />
      </div>
      <div className="restaurant-info">
        <h4>{name}</h4>
        <p>Cuisine: {cuisines.join(", ")}</p>
        <p>{avgRating} Star</p>
        <p>Delivery Time: {sla?.deliveryTime} mins</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
