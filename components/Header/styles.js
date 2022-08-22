import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    position: 'absolute',
    top: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 50,
  },
  logo: {
    height: 25,
    width: 100,
    resizeMode: 'contain'
  },
  menu: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});

export default styles;
