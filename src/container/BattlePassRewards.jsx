import React, { useState, useEffect } from "react";
import useGetBattlePassRewards from "../hooks/useGetBattlePassRewards";
import useGetSeasonInfo from "../hooks/useGetSeasonInfo";
import Reward from "../components/Reward";
import Paginator from "../components/Paginator";
import Spinner from "../components/Spinner";
import "../styles/BattlePassRewards.scss";
import RewardDetail from "../components/RewardDetail";

const BattlePassRewards = () => {
  const rewards = useGetBattlePassRewards();
  const info = useGetSeasonInfo();
  const [page, setPage] = useState(1);
  const [byPage, setbyPage] = useState(9);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const simulateLoading = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };
    simulateLoading();
  });

  const maximum = Math.ceil(rewards.length / byPage);

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const beginDate = new Date(info?.seasonDates?.begin);
  const begin = formatDate(beginDate);

  const endDate = new Date(info?.seasonDates?.end);
  const end = formatDate(endDate);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <article className="BattlePassRewards">
          <div className="info-season-container">
            <div className="dates">
              <p className="info-season">
                Season start: <span>{begin}</span>
              </p>
              <p className="info-season">
                Season end: <span>{end}</span>
              </p>
            </div>
          </div>
          <div className="battle-pass-rewards-container">
            {rewards
              ?.slice((page - 1) * byPage, (page - 1) * byPage + byPage)
              .map((reward, index) => (
                <Reward key={index} reward={reward} />
              ))}
          </div>
          <Paginator page={page} setPage={setPage} maximum={maximum} />
          {/* {info.videos &&
        info.videos.map((video, index) => (
          <a key={index} href={video.url} target="_blank" rel="noreferrer">
            View trailer
          </a>
        ))} */}
          <RewardDetail />
        </article>
      )}
    </>
  );
};

export default BattlePassRewards;
