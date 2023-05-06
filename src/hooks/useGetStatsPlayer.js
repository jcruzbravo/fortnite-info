import { useState } from "react";
import axios from "axios";
import { endpoints } from "../data/endpoints";

const useGetStatsPlayer = () => {
  const [statsPlayer, setStatsPlayer] = useState([]);
  const [usernameInput, setUsernameInput] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${endpoints.STATS_PLAYER}?name=${usernameInput}`);
      const data = response.data.data;
      setStatsPlayer(data);

    } catch (error) {
      setMessage(error.response.data.message);
      setStatsPlayer([]);
    }
    setIsLoading(false);
  };

  const handleInput = (event) => {
    setUsernameInput(event.target.value);
  };

  return {
    statsPlayer,
    message,
    isLoading,
    handleSearch,
    handleInput,
  };
};
export default useGetStatsPlayer;
