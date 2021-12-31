import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Task = () => {
  return (
    <>
      <View style={styles.body}>
        <Text>Task Sreen</Text>
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
});

export default Task;
