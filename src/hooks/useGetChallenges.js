import { useState, useEffect } from "react";
import axios from "axios";
import { endpoints } from "../data/endpoints";

const useGetChallenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(endpoints.CHALLENGES);
      const bundles = response.data;
      setChallenges(bundles);
    };
    loadData();
  }, []);

  return challenges;
};

export default useGetChallenges;
