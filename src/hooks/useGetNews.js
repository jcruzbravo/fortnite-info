import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "c347d320-0c236446-aaff81e9-9ecffd56";
const API_URL = "https://fortniteapi.io/v1/news?lang=en&type=br";

const useGetNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(API_URL, {
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
