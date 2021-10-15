import React from 'react';
import { Text } from 'react-native';

const Title = ({children, numberOfLine = 2, size = 10}) => {
  return (
    <Text
      numberOfLine={numberOfLine}
      style={{ fontSize: size, fontWeight: 'bold' }}
    >
      {children}
    </Text>
  )
}

export default Title;