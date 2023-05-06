import { useState, useEffect } from "react";
import axios from "axios";
import { endpoints } from "../data/endpoints";

const useGetDailyShop = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(endpoints.DAILY_SHOP);
      console.log(response);
      const data = response.data;
      setItem(data);
    };
    loadData();
  }, []);

  return item;
};

export default useGetDailyShop;