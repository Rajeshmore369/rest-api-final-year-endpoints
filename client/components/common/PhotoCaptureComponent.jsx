import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import axios from "axios";

export default function PhotoCaptureComponent() {
  let cameraRef = useRef();
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [incre,setIncre] = useState(0);
  const uploadToCloudinary = async (base64) => {
    try {
      setLoading(true);

      let cloudName = "diiljsias";
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

      const response = await axios.post(api, {
        file: `data:image/jpg;base64,${base64}`,
        upload_preset: "images_preset", // your Cloudinary upload preset for images
      });

      const imageUrl = response.data.secure_url;
      console.log("Image uploaded to Cloudinary:", imageUrl);

      setLoading(false);
      // Do whatever you want with the Cloudinary image URL
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>;
  } else if (!hasCameraPermission) {
    return (
      <Text>
        Permission for camera not granted. Please change this in settings.
      </Text>
    );
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
    
    // Upload to Cloudinary
    uploadToCloudinary(newPhoto.base64);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.preview}
          source={{ uri: `data:image/jpg;base64,${photo.base64}` }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={sharePic}>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
          {hasMediaLibraryPermission ? (
            <TouchableOpacity style={styles.button} onPress={savePhoto}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          ) : undefined}
          <TouchableOpacity
            style={styles.button}
            onPress={() => setPhoto(undefined)}
          >
            <Text style={styles.buttonText}>Discard</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.takePicButtonContainer}>
        <TouchableOpacity style={styles.takePicButton} onPress={takePic}>
          <Text style={styles.takePicButtonText}>Take Pic</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c83564",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 10,
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
    borderRadius: 10,
  },
  takePicButtonContainer: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
  },
  takePicButton: {
    backgroundColor: "#c83564",
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  takePicButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
