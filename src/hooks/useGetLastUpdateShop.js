import { useState, useEffect } from "react";
import axios from "axios";
import { endpoints, API_KEY_FORTNITE_IO } from "../data/endpoints";

const useGetLastUpdateShop = () => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(endpoints.FULL_SHOP, {
        headers: {
          Authorization: API_KEY_FORTNITE_IO,
        },
      });
      const data = response.data;
      const date = data.lastUpdate.date;
      setDate(date);
    };
    loadData();
  }, []);

  return date;
};

export default useGetLastUpdateShop;
