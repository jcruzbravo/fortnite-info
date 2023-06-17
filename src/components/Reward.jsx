import React, { useContext } from "react";
import { FortniteInformerContext } from "../context";
import { FaEye } from "react-icons/fa";
import "../styles/Reward.scss";

const Reward = ({ reward }) => {

  const context = useContext(FortniteInformerContext);

  const showRewardDetail = (object) => {
    context.openRewardDetail();
    context.setRewardToShow(object);
  }

  return (
    <div className="Reward">
      <span className="view" onClick={() => showRewardDetail(reward)}>
        <FaEye />
      </span>
      <h2>{reward.item.name}</h2>
      <p>{reward.item.rarity.name}</p>
      <figure style={{ width: "150px" }}>
        <img
          style={{ width: "100%" }}
          src={reward.item.images.icon}
          alt={reward.item.name}
        />
      </figure>
    </div>
  );
};

export default Reward;
