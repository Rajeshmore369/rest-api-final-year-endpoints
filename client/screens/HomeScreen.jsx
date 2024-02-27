import { Text, View, StatusBar } from "react-native";
import SafetyScreen from "../components/home/safety/safetyScreen";
import FeatureScreen from "../components/home/features/featureScreen";
import Helpline from "../components/home/helpline/helpline";

const HomeScreen = ({navigation}) =>{
    return(
        <>
        <StatusBar
        backgroundColor="#c83564" // Change the background color of the status bar
        barStyle="light-content" // Change the text color of the status bar (light/dark)
      />
        <FeatureScreen/>
        <SafetyScreen/>
        <Helpline navigation={navigation} />
        </>
    )
};

export default HomeScreen;