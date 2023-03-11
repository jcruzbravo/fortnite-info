import React from "react";
import "../styles/ItemChallenge.scss";

const ItemChallenge = ({ challenge }) => {
  const bundles = challenge.bundles;
  const bundlesWithQuestActives = bundles.filter(bundle => bundle.quests.some(quest => quest.enabled === true));
  console.log(bundlesWithQuestActives);

  return (
    <div className="ItemChallenge">
      <div className="item-challenge-container">
        <div className="info-header">
          <h3>{challenge.name}</h3>
          <div className="img-container">
            <img src={challenge.image} alt="" />
          </div>
        </div>
        <div className="info-content">
          {bundlesWithQuestActives.map((bundle) => (
            <div className="info-quests-content">
              <h4>{bundle.name}</h4>
              {bundle.quests.map((quest) => (
                <div>
                  <h5>{quest.name}</h5>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemChallenge;
