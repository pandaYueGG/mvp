import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Button } from 'react-native';

const OneNews = ({ news, onClick }) => {
  const { thumbnail, title, content } = news;
  return (
    <>
    <TouchableOpacity style={[styles.container]} onPress={(e) => onClick(null)}>
      <Image source={ {url: thumbnail} } style={styles.image}/>
      <View style={styles.contentContainer}>
        <Text numberOfLine='2' style={styles.titleContainer}>{title}</Text>
        <ScrollView vertical={true}>
          <Text style={styles.contentContainer}>{content}</Text>
        </ScrollView>
      </View>
    </TouchableOpacity>
    <Button title='Write commit'></Button>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: '100%',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 420,
    borderRadius: 6,
  },
  contentContainer: {
    padding: 10,
    lineHeight: 22
  },
  titleContainer: {
    justifyContent: 'center',
    padding: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

export default OneNews;