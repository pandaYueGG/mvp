import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Title from './Title.js'

const MainCard = ({ style, imageStyle, item, onClick }) => {
  const { thumbnail, title } = item;

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={(e) => onClick(item)}>

      <Image source={ {url: thumbnail} } style={[styles.image, imageStyle]}/>
      <View style={styles.contentContainer}>
        <Title>{title}</Title>
      </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {

    width: '90%',
    height: 200,
    borderRadius: 9,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 180,
  },
  contentContainer: {
    padding: 5
  }
})

export default MainCard;