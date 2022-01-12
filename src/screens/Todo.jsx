import React, {useCallback, useEffect} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setTasks, setTaskID} from '../redux/actions';

const Todo = ({navigation}) => {
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const getTasks = useCallback(() => {
    try {
      AsyncStorage.getItem('Tasks')
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
  }, [dispatch]);

  return (
    <>
      <View style={styles.body}>
        <View>
          <FlatList
            data={tasks}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  dispatch(setTaskID(item.ID));
                  console.log(item.ID);
                  navigation.navigate('Task');
                }}
                style={styles.item}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.Title}
                </Text>
                <Text style={styles.desc} numberOfLines={1}>
                  {item.Desc}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(setTaskID(tasks.length + 1));
            navigation.navigate('Task');
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
  title: {
    color: '#000',
    fontSize: 30,
    margin: 5,
  },
  desc: {
    color: '#999999',
    fontSize: 20,
    margin: 5,
  },
  item: {
    marginHorizontal: 10,
    marginVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 5,
  },
});

export default Todo;
