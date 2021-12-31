import React from 'react';
import {StyleSheet} from 'react-native';

const GlobalStyleSheet = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#0ff',
  },

  text: {
    fontSize: 30,
  },

  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});
export default GlobalStyleSheet;
