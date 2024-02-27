import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Adjust the image's appearance within the container
  },
  loginSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "15%",
  },
  loginContainer: {
    backgroundColor: "#fff",
    paddingVertical: 32,
    paddingHorizontal: 32,
    borderRadius: 5,
    margin: 80,
    marginTop: 10,
    opacity:0.8
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    marginVertical: 16,
    padding: 16,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "gray",
    width: 250,
  },
  button: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#c83564",
    fontWeight: "bold",
    color: "#fff",
    fontSize: 15,
    borderRadius: 5,
    textAlign: "center",
  },
  switch:{
    color:'red',
    textAlign:'center',
    marginTop:20
  }
  
});
