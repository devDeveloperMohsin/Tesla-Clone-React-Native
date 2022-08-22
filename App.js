import {View, Text, StyleSheet, ImageBackground, Image, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import CarList from './components/CarList';
import Header from './components/Header';

export default App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Header />
      <CarList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
