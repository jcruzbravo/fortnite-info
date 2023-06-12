import { useState, useEffect } from "react";
import axios from "axios";
import { endpoints } from "../data/endpoints";

const useGetSeasonInfo = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(endpoints.SEASON_INFO);
      const info = response.data;
      setInfo(info);
    };
    loadData();
  }, []);

  return info;
};

export default useGetSeasonInfo;
