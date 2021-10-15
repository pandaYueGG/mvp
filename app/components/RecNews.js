import React from 'react';
import { View, StyleSheet } from 'react-native';
import NewsList from './NewsList';

const RecNews = ( { data, onClick } ) => {
  return(
    <NewsList onClick={onClick} title= "Recommend For You" data={data}/>
  )
}

const styles = StyleSheet.create({
  constainer:{}
})

export default RecNews;