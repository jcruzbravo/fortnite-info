import React from "react";
import "../styles/ItemShop.scss";

const ItemShop = ({ item }) => {

  return (
    <div className="ItemShop">
      <h3>{item.displayName}</h3>
      <div className="item-shop-image">
        <img
          src={item.displayAssets[0].full_background}
          alt={item.displayName}
        />
      </div>
    </div>
  );
};

export default ItemShop;
