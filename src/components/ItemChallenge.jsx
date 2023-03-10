import React from "react";
import "../styles/ItemChallenge.scss";

const ItemChallenge = ({ challenge }) => {
  return (
    <div className="ItemChallenge">
      <div className="item-challenge-container">
        <div className="info-container">
          <p>{challenge.name}</p>
          <button>See challenges</button>
        </div>
        <div className="img-container">
          <img src={challenge.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ItemChallenge;
