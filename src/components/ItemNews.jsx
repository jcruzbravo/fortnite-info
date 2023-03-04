import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "../styles/ItemNews.scss";
import "react-loading-skeleton/dist/skeleton.css";

const ItemNews = ({ noticia }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return (
      <div className="ItemNews">
        <div className="item-new-image">
          <Skeleton
            count={1}
            width={500}
            height={260}
            baseColor={"#222529"}
            highlightColor={"#42464c"}
          />
        </div>
        <div className="item-new-content">
          <h3 className="new-title"><Skeleton
            count={1}
            width={420}
            height={115}
            baseColor={"#222529"}
            highlightColor={"#42464c"}
          /></h3>
          <h4 className="new-subtitle"><Skeleton
            count={1}
            width={420}
            height={24}
            baseColor={"#222529"}
            highlightColor={"#42464c"}
          /></h4>
          <p className="new-description"><Skeleton
            count={1}
            width={420}
            height={72}
            baseColor={"#222529"}
            highlightColor={"#42464c"}
          /></p>
          
        </div>
      </div>
    );
  } else {
    return (
      <div className="ItemNews">
        <div className="item-new-image">
          <img src={noticia.image} alt={noticia.tabTitle} />
        </div>
        <div className="item-new-content">
          <h3 className="new-title">{noticia.title}</h3>
          <h4 className="new-subtitle">{noticia.tabTitle}</h4>
          <p className="new-description">{noticia.body}</p>
        </div>
      </div>
    );
  }
};

export default ItemNews;
