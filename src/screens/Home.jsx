import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MyButton from '../utils/MyButton';

const Home = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('Camera');
  };
  return (
    <>
      <View style={styles.body}>
        <Text style={styles.text}>Tester la Camera</Text>
        <MyButton
          buttonStyle={styles.button}
          buttonText="Open Camera"
          buttonColor="#0080ff"
          onPressHandler={onPressHandler}
        />
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
