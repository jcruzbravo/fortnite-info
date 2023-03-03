import React from "react";
import ItemDailyShop from "../components/ItemDailyShop";
import useGetDailyShop from "../hooks/useGetDailyShop";
import '../styles/DailyShop.scss';

const DailyShop = () => {
  const items = useGetDailyShop();
  const itemsDailyAndBuyAllowed = items.filter((item) => item.section.id == 'Daily' && item.buyAllowed == true);

  return (
    <div className="DailyShop">
      <aside>
        <h2 className="daily-shop-title">Daily Shop</h2>
        <div className="daily-shop-container">
          {itemsDailyAndBuyAllowed.map((item) => (
            <ItemDailyShop key={item.mainId} item={item} />
          ))}
        </div>
      </aside>
    </div>
  );
};

export default DailyShop;
