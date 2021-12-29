import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <>
      <View style={styles.body}>
        <Text style={styles.text}>Je suis dans le home</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 30,
  },
});

export default Home;
