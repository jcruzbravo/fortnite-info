import React from "react";
import ItemChallenge from "../components/ItemChallenge";
import useGetChallenges from "../hooks/useGetChallenges";
import "../styles/Challenges.scss";

const Challenges = () => {
  const challenges = useGetChallenges();
  const challengesWithImageAndBundleName = challenges.filter(
    (challenge) => challenge.name != null && challenge.image != null
  );
  return (
    <section>
      <div className="Challenges">
        {challengesWithImageAndBundleName.map((challenge) => (
          <ItemChallenge key={challenge.tag} challenge={challenge} />
        ))}
      </div>
    </section>
  );
};

export default Challenges;
