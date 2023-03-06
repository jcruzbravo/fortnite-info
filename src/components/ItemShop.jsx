import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useLoadingTimeout from "../hooks/useLoadingTimeout";
import "../styles/ItemShop.scss";

const ItemShop = ({ item }) => {
  const isLoading = useLoadingTimeout(4000);

  if (isLoading) {
    return (
      <div className="ItemShop">
        <div className="item-shop-content">
          <h3>
            <Skeleton
              count={1}
              width={100}
              baseColor={"#222529"}
              highlightColor={"#42464c"}
            />
          </h3>
          <p>
            <Skeleton
              count={1}
              width={100}
              baseColor={"#222529"}
              highlightColor={"#42464c"}
            />
          </p>
        </div>
        <div className="item-shop-image">
          <Skeleton
            count={1}
            width={400}
            height={400}
            baseColor={"#222529"}
            highlightColor={"#42464c"}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="ItemShop">
        <div className="item-shop-content">
          <h3>{item.displayName}</h3>
          <p>{item.rarity.name}</p>
        </div>
        <div className="item-shop-image">
          <img
            src={item.displayAssets[0].full_background}
            alt={item.displayName}
          />
        </div>
      </div>
    );
  }
};

export default ItemShop;
