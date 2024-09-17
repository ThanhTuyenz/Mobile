import { Text, Image, StyleSheet, View, Pressable } from 'react-native';



export default function a() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={require('./assets/Ellipse1circle.svg')} />
      </View>
      <View style={styles.middleSection}>
        <Text style={styles.text}>GROW</Text>
        <Text style={styles.text}>YOUR BUSINESS</Text>
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.descriptionText}>
          We will help you to grow your business using on server online
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </Pressable>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.additionalText}>HOW WE WORK?</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCF9',
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
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#E3C000',
    padding: 10,
    alignItems: 'center',
    width: 119,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 1,
    alignItems:'center',
  },
  additionalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
