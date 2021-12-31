import React from 'react';
import {StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import RNFS from 'react-native-fs';
import MyButton from '../utils/MyButton';

const Camera = () => {
  const [{cameraRef}, {takePicture}] = useCamera();

  const captureHandler = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri);
      const newFilePath = RNFS.ExternalDirectoryPath + '/picture.jpg';
      RNFS.moveFile(data.uri, newFilePath)
        .then(() => {
          console.log(
            'File moved from -- ' + data.uri + ' -- to --' + newFilePath,
          );
        })
        .catch(error => console.log(error));
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <RNCamera
        ref={cameraRef}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}>
        <MyButton
          buttonText="Capture"
          buttonColor="#0080ff"
          onPressHandler={captureHandler}
        />
      </RNCamera>
    </>
  );
};

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default Camera;
