import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MinorCard from './MinorCard';
import Title from './Title';

const NewsList = ({ title, data, onClick }) => {

  return (
    <>
      <Title size={15}>
        {title}
      </Title>
      <FlatList onClick={onClick} data={data} keyExtractor={item => item.id}
        renderItem={({item}) => <MinorCard onClick={onClick} item={item} />}
        horizontal
        showVerticalScrollIndicator={true}
      />
    </>
  )
}

const style = StyleSheet.create({
  constainer: {

  }
})

export default NewsList;