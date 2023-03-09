import React, { lazy, Suspense } from "react";
import "../styles/Home.scss";
import Spinner from "../components/Spinner";
const News = lazy(() => import("./News"))
const DailyShop = lazy(() => import("./DailyShop"));

const Home = () => {
  return (
    <Suspense fallback={<Spinner/>}>
      <div className="Home">
        <News />
        <DailyShop />
      </div>
    </Suspense>
  );
};

export default Home;
