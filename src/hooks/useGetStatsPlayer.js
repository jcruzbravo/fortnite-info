import { useState } from "react";
import axios from "axios";
import { API_KEY_FORTNITE, endpoints } from "../data/endpoints";

const useGetStatsPlayer = () => {
  const [statsPlayer, setStatsPlayer] = useState([]);
  const [usernameInput, setUsernameInput] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${endpoints.STATS_PLAYER}?name=${usernameInput}`,
        {
          headers: {
            Authorization: API_KEY_FORTNITE,
          },
        }
      );

      const data = response.data.data;
      setStatsPlayer(data);
    } catch (error) {
      if (error.response.status === 403) {
        setMessage("The requested account's stats are not public");
      }
      if (error.response.status === 400) {
        setMessage("Missing name");
      }

      if (error.response.status === 404) {
        setMessage("The requested profile didnt play any match yet");
      }
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
