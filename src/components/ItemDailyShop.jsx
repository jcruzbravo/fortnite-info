import React from "react";
import "../styles/ItemDailyShop.scss";
import vbuck from "../assets/vbuck.png";

const ItemDailyShop = ({ item }) => {
  return (
    <div className="ItemDailyShop">
      <div className="item-daily-shop-img">
        <img src={item.displayAssets[0].background} alt="" />
      </div>
      <div className="item-daily-shop-content">
        <h2 className="item-title">{item.displayName}</h2>
        <div className="item-price">
          <img src={vbuck} alt="" className="vBuck" />
          <h3 className="item-price">{item.price.finalPrice}</h3>
        </div>
        <h4 className="item-description">{item.displayDescription}</h4>
      </div>
    </div>
  );
};

export default ItemDailyShop;
