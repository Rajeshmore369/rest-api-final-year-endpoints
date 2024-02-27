import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const Safety = () => {
  return (
    <View style={styles.container}>
        <ScrollView
          horizontal
          contentContainerStyle={styles.sliderContainer}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.slider}>
            <Image
              source={require("../../../assets/image/s1.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.slider}>
            <Image
              source={require("../../../assets/image/s2.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.slider}>
            <Image
              source={require("../../../assets/image/s3.png")}
              style={styles.image}
            />
          </View>
          {/* Add more views for additional sliders */}
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign:'left',
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
