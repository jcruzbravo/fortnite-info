import { useState, useEffect } from "react";
import axios from "axios";
import { endpoints } from "../data/endpoints";

const useGetLastUpdateShop = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(endpoints.FULL_SHOP);
      const data = response.data;
      const date = data.lastUpdate.date;
      setDate(date);
    };
    loadData();
  }, [date]);

  return { date };
};

export default useGetLastUpdateShop;
