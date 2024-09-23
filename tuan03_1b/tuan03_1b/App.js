import { Text, Image, StyleSheet, View, Pressable, TextInput } from 'react-native';

import Fontisto from '@expo/vector-icons/Fontisto';
import { LinearGradient } from 'expo-linear-gradient';

export default function b() {
  return (
    <LinearGradient
      colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#00CCF9']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}>
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require('./assets/lock-152879_1.png')} />
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.text}>FORGET</Text>
        <Text style={styles.text}>PASSWORD</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.descriptionText}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>
      <View>
        <Fontisto 
        name="email"
        size={24}
        color="black"
        style={styles.input}
        />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
          />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </Pressable>
      </View>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  topSection: {
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  middleSection:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  bottomSection: {
    flex: 1,
    width: 302,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    position: 'absolute', 
    marginTop: 10, 
    marginLeft: 8,
  },
  textInput: {
    width: 305,
    height: 45,
    borderWidth: 1,
    paddingLeft: 40,
    backgroundColor: '#C4C4C4',
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#E3C000',
    padding: 10,
    alignItems: 'center',
    width: 302,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
