import { Text, StyleSheet, View, Pressable, TextInput } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export default function c() {
  return (
    <LinearGradient
      colors={['#C7F4F7', '#D1F4F6', '#E5F4F5', '#00CCF9']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}>
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.topText}>CODE</Text>
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.text}>VERIFICATION</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.descriptionText}>
          Enter ontime password sent on ++849092605798
        </Text>
      </View>
     <View style={styles.input}>
          <TextInput style={styles.textInput}/>
          <TextInput style={styles.textInput}/>
          <TextInput style={styles.textInput}/>
          <TextInput style={styles.textInput}/>
          <TextInput style={styles.textInput}/>
          <TextInput style={styles.textInput}/>
        </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
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
  topText: {
    fontSize: 60,
    fontWeight: 'bold',
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
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    width: 50,
    height: 50
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
