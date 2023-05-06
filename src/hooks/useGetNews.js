import { useState, useEffect } from "react";
import axios from "axios";
import { endpoints } from "../data/endpoints";

const useGetNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(endpoints.NEWS);
      console.log(response);
      const data = response.data;
      setNews(data);
    };
    loadData();
  }, []);

  return news;
};

export default useGetNews;
