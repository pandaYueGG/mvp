import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Button } from 'react-native';
import Category from './Category';

const categories = ['League of Legends', 'Grand Theft Auto V', 'New World', 'VALORANT', 'Minecraft', 'Fortnite', 'Call of Duty: Warzone',
                    'PUBG: BATTLEGROUNDS', 'More...'
                  ];

const Categories = ({isClick, setIsClick}) => {
  return (
    <View>
      <ScrollView vertical={true} style={{marginTop: 100, marginBottom: 50, marginLeft: 'auto', marginRight: 'auto'}}>
        {categories.map((category, index) => (
          <View key={index}>
            <Category category={category}/>
          </View>
        ))}
      </ScrollView>
      <Button style={{paddingBottom: 200, borderWidth: 1, borderColor: 'black', borderRadius: 10}}
        title="LET'S GO"
        onPress={() => {setIsClick(true)}}
      />
    </View>
  );
};


export default Categories;