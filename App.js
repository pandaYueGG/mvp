import React, { useState, useEffect } from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

import SearchBar from './app/components/SearchBar.js';
import Screen from './app/components/Screen.js';
import FeaturedNews from './app/components/FeaturedNews';
import RecNews from './app/components/RecNews';
import LeagueNews from './app/components/LeagueNews';
import Categories from './app/components/Categories';
import ValNews from './app/components/ValNews';
import OneNews from './app/components/OneNews';
import Login from './app/components/Login';
import data from './seeds';

export default function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [showCats, setShowCats] = useState(false);
  const [showNews, setShowNews] = useState(false);
  const [showOne, setShowOne] = useState(false)
  const [oneNews, setOneNews] = useState(null);

  const clickLogin = (e) => {
    setIsLogin(false);
    setShowCats(true);
  }

  const clickGo = (e) => {
    setShowNews(true);
    setShowCats(false);
  }

  const newsClick =(news) => {
    setShowNews(false);
    setShowOne(true);
    setOneNews(news);
  }

  const backClick = (e) => {
    setShowNews(true);
    setShowOne(false);
    setOneNews(null);
  }

  const recData = data.filter(item => item.recommend === true);
  const leagData = data.filter(item => item.category === 'league of legends');
  const valData = data.filter(item => item.category === 'valorant')
  // seconsole.log('league data: ', leagData);
  return (
    <Screen>
      {isLogin ? <Login onClick={clickLogin}/> : null}
      {showNews ?
      <>
      <SearchBar />
      <FeaturedNews
        item={{
          "id": "7",
          "title": "New World’s Steam reviews are now mostly positive",
          "thumbnail": "https://www.pcgamesn.com/wp-content/uploads/2021/10/new-world-steam-reviews-580x334.jpg",
          "category": "new world",
          "recommend": false,
          "like": 22
        }}
      />
      <RecNews data={recData} onClick={newsClick}/>
      <LeagueNews data={leagData} onClick={newsClick}/>
      <ValNews data={valData} onClick={newsClick}/>
      </>
      : null }
      {showCats ?
      <Categories
        setIsClick={clickGo}
        isClick={showCats}
      /> : null}
      {showOne ? <OneNews  handleBackClick={backClick} news={oneNews}/> : null }
    </Screen>
  );
}