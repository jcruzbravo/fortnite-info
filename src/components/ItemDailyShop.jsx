import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import useLoadingTimeout from "../hooks/useLoadingTimeout";
import "../styles/ItemDailyShop.scss";
import vbuck from "../assets/vbuck.png";

const ItemDailyShop = ({ item }) => {
  const isLoading = useLoadingTimeout(4000);
  if (isLoading) {
    return (
      <div className="ItemDailyShop">
        <div className="item-daily-shop-img">
          <Skeleton
            count={1}
            width={600}
            height={150}
            baseColor={"#222529"}
            highlightColor={"#42464c"}
          />
        </div>
        <div className="item-daily-shop-content">
          <h2 className="item-title">
            <Skeleton
              count={1}
              width={150}
              baseColor={"#222529"}
              highlightColor={"#42464c"}
            />
          </h2>
          <div className="item-price">
            <Skeleton
              count={1}
              width={150}
              baseColor={"#222529"}
              highlightColor={"#42464c"}
            />
          </div>
          <h4 className="item-description">
            <Skeleton
              count={1}
              width={150}
              baseColor={"#222529"}
              highlightColor={"#42464c"}
            />
          </h4>
        </div>
      </div>
    );
  } else {
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
  }
};

export default ItemDailyShop;
