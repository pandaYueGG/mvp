import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

const Screen = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create ({
  constainer: {
    marginTop: StatusBar.currentHeight,
    paddingVertical: 15,
    backgroundColor: 'white',
    flex: 1,
  },
})

export default Screen;