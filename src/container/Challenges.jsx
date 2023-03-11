import React, { useState } from "react";
import ItemChallenge from "../components/ItemChallenge";
import Paginator from "../components/Paginator";
import useGetChallenges from "../hooks/useGetChallenges";
import "../styles/Challenges.scss";

const Challenges = () => {
  const challenges = useGetChallenges();
  const challengesWithImageAndBundleName = challenges.filter((challenge) => challenge.name != null && challenge.image != null);

  const [page, setPage] = useState(1);
  const [byPage, setbyPage] = useState(1);
  const maximum = Math.ceil(challengesWithImageAndBundleName.length / byPage);

  return (
    <section>
      <div className="Challenges">
        {challengesWithImageAndBundleName.slice((page - 1) * byPage, (page - 1) * byPage + byPage).map((challenge) => (
          <ItemChallenge key={challenge.tag} challenge={challenge} />
        ))}
      </div>
      <Paginator page={page} setPage={setPage} maximum={maximum} />
    </section>
  );
};

export default Challenges;
