import React from "react";
import uniqid from "uniqid";

function News(props) {
  const news = props.news.map((oneNews) => (
    <a className="newsLine" key={uniqid()} href={oneNews.link}>
      <div className="newsImg">
        <img src="/who-emblem.png"></img>
      </div>
      <div>
        <h2>{oneNews.title}</h2>
        <p>{oneNews.content.substr(0, oneNews.content.indexOf("["))}</p>
        <p className="newsDate">Public date: {oneNews.pubDate.substr(0, 10)}</p>
      </div>
    </a>
  ));
  return <div className="news">{news}</div>;
}

export default News;
