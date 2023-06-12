import { useState, useEffect } from "react";
import axios from "axios";
import { endpoints } from "../data/endpoints";

const useGetBattlePassRewards = () => {
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(endpoints.BATTLEPASS);
      const rewards = response.data;
      setRewards(rewards);
    };
    loadData();
  }, []);

  return rewards;
};

export default useGetBattlePassRewards;
