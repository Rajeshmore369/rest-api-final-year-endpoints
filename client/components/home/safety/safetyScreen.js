import { Text, View,StyleSheet } from "react-native";
import Safety from "./safety";

const SafetyScreen = () =>{
    return(
        <>
        <Text  style={styles.help} >Safety Tips</Text>
        <>
        <Safety/>
        </>
        </>
    )
};

const styles = StyleSheet.create({
    help: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 2,
      borderColor: '#eee',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginVertical: 5,
      backgroundColor: '#c83564',
      color: '#fff',
      fontWeight: '900',
      borderRadius: 10,
      fontSize:20,
      margin:10,
      marginTop:15
    }
  });

export default SafetyScreen;