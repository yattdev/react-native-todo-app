import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyButton from '../utils/MyButton';
import {useSelector, useDispatch} from 'react-redux';
import {setTasks} from '../redux/actions';

const Task = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const {tasks, taskID} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  const getTask = useCallback(async () => {
    const existedTask = tasks.find(task => task.ID === taskID);
    console.log(existedTask);
    if (existedTask) {
      setTitle(existedTask.Title);
      setDesc(existedTask.Desc);
    }
  }, [tasks, taskID]);

  useEffect(() => {
    getTask();
  }, [getTask]);

  const setTask = async () => {
    if (title.length === 0) {
      Alert.alert('Warning!', 'Please write your task title.');
    }
    try {
      var Task = {
        ID: taskID,
        Title: title,
        Desc: desc,
      };
      let newTasks = [...tasks, Task];
      await AsyncStorage.setItem('Tasks', JSON.stringify(newTasks))
        .then(() => {
          dispatch(setTasks(newTasks));
          Alert.alert('Success !', 'Task Saved successfully');
          navigation.goBack();
        })
        .catch(err => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <View style={styles.body}>
        <TextInput
          onChangeText={value => setTitle(value)}
          style={styles.input}
          placeholder="Title"
          value={title}
        />
        <TextInput
          onChangeText={value => setDesc(value)}
          style={styles.input}
          placeholder="Description"
          multiline
          value={desc}
        />
        <MyButton
          buttonText="Save task"
          buttonColor="#1ebf00"
          buttonStyle={styles.button}
          onPressHandler={setTask}
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
