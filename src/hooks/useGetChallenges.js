import { useState, useEffect } from "react";
import axios from "axios";
import { endpoints, API_KEY_FORTNITE_IO } from "../data/endpoints"

const useGetChallenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const loadData =  async () => {
      const response = await axios.get(endpoints.CHALLENGES, {
        headers: {
          Authorization: API_KEY_FORTNITE_IO
        }
      });
      const data = response.data;
      const bundles = data.bundles;
      setChallenges(bundles)
    }
    loadData();

  }, [])

  return challenges;
} 

export default useGetChallenges;