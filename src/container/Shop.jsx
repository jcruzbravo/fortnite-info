import React, { useState, lazy, Suspense } from "react";
const Countdown = lazy(() => import("../components/Countdown"));
const ItemShop = lazy(() => import("../components/ItemShop"));
const Paginator = lazy(() => import("../components/Paginator"));
import Spinner from "../components/Spinner";
import useGetFullShop from "../hooks/useGetFullShop";
import "../styles/Shop.scss";

const Shop = () => {
  const fullShop = useGetFullShop();
  const [page, setPage] = useState(1);
  const [byPage, setbyPage] = useState(6);

  const maximum = Math.ceil(fullShop.length / byPage);

  return (
    <Suspense fallback={<Spinner />}>
      <div className="Shop">
        <Countdown />
        <div className="shop-container">
          {fullShop
            .slice((page - 1) * byPage, (page - 1) * byPage + byPage)
            .map((item) => (
              <ItemShop key={item.mainId} item={item} />
            ))}
        </div>
        <Paginator page={page} setPage={setPage} maximum={maximum} />
      </div>
    </Suspense>
  );
};

export default Shop;
