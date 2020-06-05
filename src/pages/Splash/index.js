import React from 'react';
import {ILLogo} from '../../assets/illustration/index';
import {View, StyleSheet, Text} from 'react-native';

const Splash = () => {
  return (
    <View style={Styles.page}>
      <ILLogo />
      <Text style={Styles.title}>Dokter Ku</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 20,
    color: '#333',
  },
});

export default Splash;
