import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles.js';
import StyledButton from '../StyledButton';

const CarItem = (props) => {
  const {name, tagline, img} = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={img}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type="primary"
          content={'Custom Order'}
          onPress={() => {
            console.log('Custom order was pressed');
          }}
        />

        <StyledButton
          type="secondary"
          content={'Existing Inventory'}
          onPress={() => {
            console.log('Existing Inventory was pressed');
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
