import React from "react";
import ItemNews from "../components/ItemNews";
import useGetNews from "../hooks/useGetNews";
import "../styles/News.scss";

const News = () => {
  const noticias = useGetNews();
  return (
    <div className="News">
      <article>
        <h2 className="news-title">News about battle royale</h2>
        <div className="news-container">
          {noticias.map((noticia) => (
            <ItemNews key={noticia.id} noticia={noticia} />
          ))}
        </div>
      </article>
    </div>
  );
};

export default News;
