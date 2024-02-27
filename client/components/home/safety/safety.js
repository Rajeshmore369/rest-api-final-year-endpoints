import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, Linking, TouchableOpacity } from "react-native";

const Safety = () => {
  const openYouTubeLink = (videoId) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
    Linking.openURL(youtubeUrl);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        contentContainerStyle={styles.sliderContainer}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity onPress={() => openYouTubeLink("jp3dptdzgNw")} style={styles.slider}>
          <Image
            source={{ uri: "https://img.youtube.com/vi/jp3dptdzgNw/maxresdefault.jpg" }}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openYouTubeLink("SNjA8HIFiOk")} style={styles.slider}>
          <Image
            source={{ uri: "https://img.youtube.com/vi/SNjA8HIFiOk/maxresdefault.jpg" }}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openYouTubeLink("J9lZ9OHdahg")} style={styles.slider}>
          <Image
            source={{ uri: "https://img.youtube.com/vi/J9lZ9OHdahg/maxresdefault.jpg" }}
            style={styles.image}
          />
        </TouchableOpacity>
        {/* Add more TouchableOpacity components for additional videos */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "left",
  },
  heading: {
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 0,
    fontSize: 24,
    fontWeight: "bold",
  },
  sliderContainer: {
    flexDirection: "row",
  },
  slider: {
    width: 320, // Adjust width of individual sliders
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180, // Adjust height of the image
    borderRadius: 10,
  },
});

export default Safety;
