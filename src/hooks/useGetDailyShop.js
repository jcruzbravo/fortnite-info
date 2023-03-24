import { useState, useEffect } from "react";
import axios from "axios";
import { endpoints, API_KEY_FORTNITE_IO } from "../data/endpoints";

const useGetDailyShop = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(endpoints.DAILY_SHOP, {
        headers: {
          Authorization: API_KEY_FORTNITE_IO,
        },
      });
      const data = response.data;
      const shop = data.shop;
      setItem(shop);
    };
    loadData();
  }, []);

  return item;
};

export default useGetDailyShop;