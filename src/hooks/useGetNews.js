import { useState, useEffect } from "react";
import axios from "axios";
import { endpoints,API_KEY } from "../data/endpoints";

const useGetNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(endpoints.NEWS, {
        headers: {
          Authorization: API_KEY,
        },
      });
      const data = response.data;
      const news = data.news;
      setNews(news);
    };
    loadData();
  }, []);

  return news;
};

export default useGetNews;
