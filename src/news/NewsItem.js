
import React from 'react';
import '../styles/_NewsItem.scss';

const NewsItem = props =>{
    return(
        <li>
        <a href={props.url} className="stock-news-item">
          <main>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </main>
          <img src={props.image} />
        </a>
        </li>
    );

};

export default NewsItem;