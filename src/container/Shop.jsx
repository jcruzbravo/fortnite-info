import React, { useState } from "react";
import ItemShop from "../components/ItemShop";
import Paginator from "../components/Paginator";
import useGetFullShop from "../hooks/useGetFullShop";
import "../styles/Shop.scss";

const Shop = () => {
  const fullShop = useGetFullShop();
  const [page, setPage] = useState(1);
  const [byPage, setbyPage] = useState(4);

  const maximum = Math.ceil(fullShop.length / byPage);

  return (
    <div className="Shop">
      <div className="shop-container">
        {fullShop
          .slice((page - 1) * byPage, (page - 1) * byPage + byPage)
          .map((item) => (
            <ItemShop key={item.mainId} item={item} />
          ))}
      </div>
      <Paginator page={page} setPage={setPage} maximum={maximum} />
    </div>
  );
};

export default Shop;
