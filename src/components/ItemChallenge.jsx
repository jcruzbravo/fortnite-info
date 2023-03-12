import React from "react";
import "../styles/ItemChallenge.scss";

const ItemChallenge = ({ challenge }) => {
  const bundles = challenge.bundles;
  /*
   * Future use: const bundlesWithQuestActives = bundles.filter(bundle => bundle.quests.some(quest => quest.enabled === true));
   */
  return (
    <div className="ItemChallenge">
      <div className="item-challenge-container">
        <div className="info-header">
          <h3>{challenge.name}</h3>
        </div>
        <div className="info-content">
          {bundles.map((bundle) => (
            <div className="info-quests-content">
              <h4>{bundle.name}</h4>
              {bundle.quests.map((quest) => (
                <div className="info-quest">
                  {quest.name == "" ? null : (
                    <>
                      <h5>{quest.name}</h5>
                      {quest.enabled == true && (
                        <p
                          style={{ color: "#00FF00" }}
                        >{`Enabled: ${quest.enabled}`}</p>
                      )}
                      {quest.enabled == false && (
                        <p
                          style={{ color: "#FF0000" }}
                        >{`Enabled: ${quest.enabled}`}</p>
                      )}
                    </>
                  )}
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
