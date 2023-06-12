import React from "react";
import "../styles/Reward.scss";

const Reward = ({ reward }) => {
  return (
    <div className="Reward">
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
