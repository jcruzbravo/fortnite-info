import React from "react";
import ItemShop from "../components/ItemShop";
import useGetFullShop from "../hooks/useGetFullShop";
import "../styles/Shop.scss";

const Shop = () => {
  const fullShop = useGetFullShop();

  return (
    <div className="Shop">
      <div className="shop-container">
        {fullShop.map((item) => (
          <ItemShop key={item.mainId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
