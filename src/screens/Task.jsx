import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import MyButton from '../utils/MyButton';

const Task = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  return (
    <>
      <View style={styles.body}>
        <TextInput
          onChangeText={value => setTitle(value)}
          style={styles.input}
          placeholder="Title"
        />
        <TextInput
          onChangeText={value => setDesc(value)}
          style={styles.input}
          placeholder="Description"
          multiline
        />
        <MyButton
          buttonText="Save task"
          buttonColor="#1ebf00"
          buttonStyle={styles.button}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },

  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#bbbbbb',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    textAlign: 'left',
    fontSize: 20,
    margin: 10,
    paddingHorizontal: 10,
  },

  button: {
    width: '100%',
  },
});

export default Task;
