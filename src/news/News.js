import React, { Component, useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import NewsList from './NewsList';
import '../styles/_News.scss';

const News = () => {
  const [loadedArticles,setLoadedArticles] = useState();

  useEffect(()=>{
    axios
    
      .get('https://newsapi.org/v2/top-headlines?apiKey=43602355d68e4c1389f73906760ed98f&language=en&category=business&country=us')
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        setLoadedArticles(articles)
      })
      .catch(error => {
        console.log(error);
      });
  },[])
     
    return (
        <div className='news'>
        <h2>News</h2>
        <ul>
        <NewsList res = {loadedArticles}/>
        </ul>
        </div>
    );
  }


export default News;