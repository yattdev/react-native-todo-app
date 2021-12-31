import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import MyButton from './MyButton';

const MyModal = ({showWarning, setShowWarning}) => {
  return (
    <>
      <Modal
        visible={showWarning}
        transparent
        onRequestClose={() => {
          setShowWarning(false);
        }}
        animationType="fade"
        hardwareAccelerated>
        <View style={styles.warning_modal}>
          <View style={styles.warning_modal_view}>
            <View style={styles.warning_title}>
              <Text style={styles.text}> WARNING </Text>
            </View>
            <View style={styles.warning_body}>
              <Text style={styles.text}>
                The name must be longer than 3 characters
              </Text>
            </View>
            <MyButton
              buttonColor="#1f1"
              onPressHandler={() => setShowWarning(false)}
              buttonStyle={styles.warning_button}
              buttonText="OK"
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

// StyleSheet
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
  },

  warning_modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099',
  },

  warning_modal_view: {
    backgroundColor: '#fff',
    width: 300,
    height: 300,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },

  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  warning_button: {
    height: 50,
    backgroundColor: '#1f1',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

export default MyModal;
