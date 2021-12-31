import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

const MyButton = ({buttonColor, onPressHandler, buttonStyle, buttonText}) => {
  return (
    <>
      <Pressable
        style={({pressed}) => [
          {backgroundColor: pressed ? '#299' : buttonColor},
          styles.button,
          buttonStyle,
        ]}
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        onPress={onPressHandler}>
        <Text style={styles.text}>{buttonText}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },

  button: {
    width: 150,
    padding: 15,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default MyButton;
