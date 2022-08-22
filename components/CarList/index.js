import {View, Text, FlatList, Dimensions} from 'react-native';
import React from 'react';
import CarItem from '../CarItem';

import styles from './styles';
import cars from './cars.js';

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => (
          <CarItem
            car={item}
          />
        )}
        
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'normal'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarList;
