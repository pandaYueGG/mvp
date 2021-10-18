import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Button, TextInput } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';

const OneNews = ({ news, onClick, handleBackClick }) => {
  const { thumbnail, title, content } = news;
  const [commentText, setCommentText] = useState('');

  const backBtnClick = (e) => {
    handleBackClick();
  }

  return (
    <View >
      <View style={[styles.container]} >
        <Image source={ {url: thumbnail} } style={styles.image}/>
        <View style={styles.contentContainer}>
          <Text numberOfLine='2' style={styles.titleContainer}>{title}</Text>
          <ScrollView vertical={true} style={styles.contentContainer}>
            <Text>{content}</Text>
          </ScrollView>
        </View>
        <Button style={styles.backBtnContainer} title="back" onPress={e => backBtnClick(e)}/>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="comment" color="#9D9D9D" size={20}/>
        <Icon name="heart" color="#9D9D9D" size={20}/>
        <Icon name="retweet" color="#9D9D9D" size={20}/>
        <Icon name="save" color="#9D9D9D" size={20}/>
      </View>
      <View style={styles.commentContainer}>
        <TextInput
          onChangeText = { commentText => setCommentText(commentText) }
          placeholder="Write comments here..."/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 45,
    width: '100%',
    height: 750,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '45%',
    borderRadius: 6,
  },
  contentContainer: {
    padding: 10,
    lineHeight: 25,
    height: '50%'
  },
  titleContainer: {
    justifyContent: 'center',
    padding: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    fontSize: 16,
    fontWeight: 'bold'
  },
  commentContainer: {
    borderWidth: 0.2,
    borderRadius: 15,
    marginLeft: 10,
    justifyContent:'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 50,
    height: 30,
    width: '45%',
  },
  iconContainer: {
    marginLeft: 180,
    justifyContent:'space-evenly',
    flexDirection: 'row',
    alignItems: 'flex-end',
    bottom: 25,
    height: 45,
    width: '50%',
  },
  backBtnContainer: {
    marginTop: 10,
    marginBottom: 30,
    backgroundColor:'#9D9D9D'
  }

})

export default OneNews;