import React, {useState} from 'react';
import { View, StyleSheet, Text, Button, TouchableOpacity} from 'react-native';

const Category = ({category}) => {
  const [isPressed, setIsPressed] = useState(false)

  return(
    <View >
      <TouchableOpacity
        style={isPressed ? styles.noPressContainer : styles.pressContainer}
        onPress={()=> setIsPressed(!isPressed)}
      >
      <Text
      >{category}
      </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  noPressContainer: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#D1E8E4',
  },
  pressContainer: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#EFEFEF',
  }
})

export default Category