import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setTasks, setTaskID} from '../redux/actions';

const Todo = ({navigation}) => {
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  const getTasks = async () => {
    try {
      await AsyncStorage.getItem('Tasks')
        .then(AllTask => {
          const parsedTasks = JSON.parse(AllTask);
          if (parsedTasks && typeof parsedTasks === 'object') {
            dispatch(setTasks(parsedTasks));
          }
        })
        .catch(err => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(setTaskID(tasks.length + 1));
            navigation.navigate('AllTask');
          }}>
          <Icon name="plus" size={20} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#0080ff',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    elevation: 10,
  },
});

export default Todo;
