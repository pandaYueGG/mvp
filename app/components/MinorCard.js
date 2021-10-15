import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import MainCard from './MainCard';

const {width} = Dimensions.get('window');

const MinorCard = ( { item, onClick } ) => {

  return (
    <MainCard
      onClick={onClick}
      item={item}
      style={styles.container}
      imageStyle={styles.image}
    />
  )
};

const styles = StyleSheet.create({
  container: {
    width: width/3,
    marginRight: 15,
    height: 150
  },

  image: {
    height: 60
  }
})

export default MinorCard;