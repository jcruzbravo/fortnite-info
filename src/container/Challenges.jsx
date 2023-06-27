import React, { Suspense, useState, lazy, useEffect } from "react";
const ItemChallenge = lazy(() => import("../components/ItemChallenge"));
const Paginator = lazy(() => import("../components/Paginator"));
import useGetChallenges from "../hooks/useGetChallenges";
import "../styles/Challenges.scss";
import Spinner from "../components/Spinner";

const Challenges = () => {
  const challenges = useGetChallenges();
  const [page, setPage] = useState(1);
  const [byPage, setByPage] = useState(1);
  const maximum = Math.ceil(challenges.length / byPage);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const simulateLoading = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };
    simulateLoading();
  });

  return (
    <Suspense fallback={<Spinner />}>
      {isLoading ? (
        <Spinner />
      ) : (
        <section>
          <div className="Challenges">
            {challenges
              .slice((page - 1) * byPage, (page - 1) * byPage + byPage)
              .map((challenge) => (
                <ItemChallenge
                  key={`${challenge.tag}-${challenge.name}`}
                  challenge={challenge}
                />
              ))}
          </div>
          <Paginator page={page} setPage={setPage} maximum={maximum} />
        </section>
      )}
    </Suspense>
  );
};

export default Challenges;
