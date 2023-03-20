import React, { useState, useEffect } from "react";
import useGetLastUpdateShop from "../hooks/useGetLastUpdateShop";

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState(0);
  const fortniteStoreLastUpdate = useGetLastUpdateShop();

  useEffect(() => {
    const now = new Date();
    const target = new Date(fortniteStoreLastUpdate);
    const hours1 = target.getHours();
    const minutes1 = target.getMinutes();
    const seconds1 = target.getSeconds();
    const miliseconds1 = target.getMilliseconds();
    target.setHours(hours1);
    target.setMinutes(minutes1);
    target.setSeconds(seconds1);
    target.setMilliseconds(miliseconds1);

    if (now > target) {
      target.setDate(target.getDate() + 1);
    }

    const intervalId = setInterval(() => {
      const difference = target - now;
      const hours = Math.floor(difference / 1000 / 60 / 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeRemaining(
        `Refreshes In ${hours} hours ${minutes} minutes ${seconds} seconds remaining until the Fortnite store updates.`
      );
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timeRemaining]);

  return (
    <div>
      <p>{`${timeRemaining}`}</p>
    </div>
  );
};

export default Countdown;
