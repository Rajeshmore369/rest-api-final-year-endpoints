import React from 'react';
import { View, Text,Alert, StyleSheet , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Use the appropriate icon library

const Helpline = ({navigation}) => {

  const sendAlert = () => {
    Alert.alert('Sending Alert', 'Messages are being sent to contacts...');
  };
  return (
    <View style={styles.helplineContainer}>
      <View style={styles.helpline}>
      <TouchableOpacity onPress={sendAlert} style={styles.help}>
      <Icon name="exclamation-circle" size={20} color="white" style={styles.icon} />
      <Text style={styles.helpText}>Send Alert</Text>
    </TouchableOpacity>
        <View onPress={sendAlert} >
          <Text>In case of emergency, Shake the Device</Text>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  helplineContainer: {
    margin: 20,
    marginLeft: 45,
  },
  helpline: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 10,
  },
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
  },
  helpText: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '900',
    color: '#fff',
  },
  icon: {
    marginRight: 10,
  },
});

export default Helpline;
