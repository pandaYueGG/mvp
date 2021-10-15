import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.SearchbarInput} placeholder='Search News Here...'/>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    width: '100%',
    height: 90,
    backgroundColor: '#EFEFEF',
    borderRadius: 6,
    paddingTop: 20,
    justifyContent: 'center'
  },

  SearchbarInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 100,
    fontSize: 12
  }
})

export default SearchBar;