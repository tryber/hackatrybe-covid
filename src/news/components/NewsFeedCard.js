import React, { useContext } from "react";
import context from "../context/context";
import "./NewsFeedCard.css";
function formatDate(lastDate) {
  const currentDate = lastDate.split("T");
  const currentTime = currentDate[1].substr(0, 8);
  const arrayOfDate = currentDate[0].split("-");
  const arrayOfTime = currentTime.split(":");
  return `${arrayOfDate[2]}/${arrayOfDate[1]}/${arrayOfDate[0]}  ${arrayOfTime[0]}h${arrayOfTime[1]}`;
}
function NewsFeedCard() {
  const { data } = useContext(context);
  return (
    <div className="NewsFeedCard">
      {data.map(article => (
        <div className="Card" key={article.title}>
          <h4>{article.title}</h4>
          <p className="date">{formatDate(article.published_at)}</p>
          <div className="img-description">
            <p>{article.description}</p>
            <img src={article.url_to_image} alt={article.title} />
          </div>
          <a target="blank" href={article.url_to_link}>
            Ler Notícia
          </a>
        </div>
      ))}
    </div>
  );
}

export default NewsFeedCard;
