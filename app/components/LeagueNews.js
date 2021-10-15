import React from 'react';
import { View, StyleSheet } from 'react-native';
import NewsList from './NewsList';

const LeagueNews = ( { data, onClick } ) => {
  return(
    <NewsList onClick={onClick} title= {data[0].category} data={data}/>
  )
}

const styles = StyleSheet.create({
  constainer:{}
})

export default LeagueNews;