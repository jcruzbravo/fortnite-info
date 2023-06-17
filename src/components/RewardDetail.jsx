import React, { useContext } from "react";
import { FortniteInformerContext } from "../context";
import vBuck from "../assets/vbuck.png";
import "../styles/RewardDetail.scss";

const RewardDetail = () => {
  const context = useContext(FortniteInformerContext);

  return (
    <aside
      className={`${context?.isOpenRewardDetail ? "RewardDetail" : "hidden"}`}
    >
      <div className="detail-container">
        <h2>Reward detail</h2>
        <div
          className="icon-close-container"
          onClick={() => context.closeRewardDetail()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="close-icon"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </div>
      </div>

      <div className="detail">
      <figure className="image-container">
        <img
          src={context?.rewardToShow?.item?.images?.full_background}
          alt={context?.rewardToShow?.item?.name}
        />
      </figure>

      <div className="info-container">
        <p className="description">Description: <span>{context?.rewardToShow?.item?.description}</span></p>
        <p>Rarity: <span>{context?.rewardToShow?.item?.rarity?.name}</span></p>
        <p>Type price: <span>{context?.rewardToShow?.price?.type}</span></p>
        <p className="price"> <img src={vBuck} alt="" style={{ width: "20px"}}/><span>{context?.rewardToShow?.price?.amount}</span></p>
        <p>Added: <span>{context?.rewardToShow?.item?.added?.date}</span></p>
        <p>Page: <span>{context?.rewardToShow?.item?.battlepass?.page}</span></p>
        <p>Type: <span>{context?.rewardToShow?.item?.battlepass?.type}</span></p>
      </div>
      </div>
    </aside>
  );
};

export default RewardDetail;
