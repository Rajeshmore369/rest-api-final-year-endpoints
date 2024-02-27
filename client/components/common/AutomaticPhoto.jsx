import React, { useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { View, Text, Button, Alert, AppState } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as MediaLibrary from 'expo-media-library';

const TASK_NAME = 'photoCaptureTask';

TaskManager.defineTask(TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error('TaskManager Error:', error);
    return;
  }

  try {
    const { uri } = await capturePhoto();
    await saveToGallery(uri);
  } catch (captureError) {
    console.error('Photo capture error:', captureError);
  }
});

const capturePhoto = async () => {
  const camera = useRef(null);

  if (!camera.current) {
    return Promise.reject('Camera reference not available');
  }

  try {
    const { uri } = await camera.current.takePictureAsync();
    console.log('Photo captured:', uri);
    return { uri };
  } catch (error) {
    console.error('Error capturing photo:', error);
    return Promise.reject(error);
  }
};

const saveToGallery = async (uri) => {
  try {
    const asset = await MediaLibrary.createAssetAsync(uri);
    console.log('Photo saved to gallery:', asset);
  } catch (saveError) {
    console.error('Error saving photo to gallery:', saveError);
  }
};

export default function AutomaticPhoto() {
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      if (status === 'granted') {
        await Camera.getPermissionsAsync();
        await TaskManager.isTaskRegisteredAsync(TASK_NAME)
          ? console.log('Task is already registered')
          : await TaskManager.registerTaskAsync(TASK_NAME, {
              interval: 60000, // Task interval in milliseconds (e.g., every 60 seconds)
              allowWhileIdle: true,
              // This option is added to test if the task can run in the background even when the app is closed.
              // In practice, this might not work consistently.
              requiresDeviceIdle: false,
            });
      } else {
        Alert.alert('Camera permission not granted');
      }

      // Listen to app state changes to check when the app is in the background
      AppState.addEventListener('change', handleAppStateChange);
    })();

    // Clean up the background task when the component unmounts
    return async () => {
      await TaskManager.unregisterAllTasksAsync();
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'background') {
      // App is in the background, trigger the background task manually
      TaskManager.executeTaskAsync(TASK_NAME);
    }
  };

  return (
    <View>
      <Camera style={{ flex: 1 }} ref={cameraRef} type={Camera.Constants.Type.back} />
      <Button title="Capture Photo" onPress={() => TaskManager.executeTaskAsync(TASK_NAME)} />
    </View>
  );
}
