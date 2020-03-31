import React, { useContext } from "react";
import context from "../context/context";
import NewsFeedCard from "./NewsFeedCard";
import "./NewsFeedCard.css";

function NewsFeed() {
  const { isFetching } = useContext(context);
  if (isFetching) return "Loading...";
  return (
    <div className="newsFeed-container">
      <span className="news-span">
        Notícias sobre o Covid-19 no Brasil
      </span>
      <div className="newsFeed">
        <NewsFeedCard />
      </div>
    </div>
  );
}

export default NewsFeed;
