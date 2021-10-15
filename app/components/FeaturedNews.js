import React from 'react';
import { View, StyleSheet } from 'react-native';

import MainCard from './MainCard';

const FeaturedNews = ({ item }) => {
  return (
    <MainCard
      item={item}
      style={{ marginVertical: 15 }}
    />
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default FeaturedNews;