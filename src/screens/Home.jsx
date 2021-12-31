import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Home = ({navigation}) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigation.navigate('todo');
    }, 2000);

    return () => clearTimeout(timeOut);
  }, [navigation]);

  return (
    <>
      <View style={styles.body}>
        <Text style={styles.text}>TODO APP</Text>
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
  button: {},
});

export default Home;
