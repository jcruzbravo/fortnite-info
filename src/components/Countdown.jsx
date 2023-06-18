import React, { useState, useEffect } from "react";
import useGetLastUpdateShop from "../hooks/useGetLastUpdateShop";

const Countdown = () => {
  const [timeRemaining, setTimeRemaining] = useState("");
  const { date } = useGetLastUpdateShop();

  useEffect(() => {
    const now = new Date();
    const target = new Date(date || Date.now());

    target.setHours(target.getHours());
    target.setMinutes(target.getMinutes());
    target.setSeconds(target.getSeconds());

    if (now > target) {
      target.setDate(target.getDate() + 1);
    }

    const interval = setInterval(() => {
      const difference = target - now;
      const hoursDifference = Math.floor(difference / 1000 / 60 / 60);
      const minutesDifference = Math.floor((difference / 1000 / 60) % 60);
      const secondsDifference = Math.floor((difference / 1000) % 60);

      setTimeRemaining(
        `${hoursDifference} hours ${minutesDifference} minutes ${secondsDifference} seconds remaining until the Fortnite store updates.`
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining]);

  return (
    <div className="Countdown">
      <p>{`${timeRemaining}`}</p>
    </div>
  );
};

export default Countdown;
