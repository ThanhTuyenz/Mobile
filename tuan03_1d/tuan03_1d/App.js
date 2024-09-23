import { Text, StyleSheet, View, Pressable, TextInput } from 'react-native';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function d() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.text}>LOGIN</Text>
      </View>
      <View style={styles.middleSection}>
        <View style={styles.iconContainer}>
          <Fontisto style={styles.icon} />
          <TextInput placeholder="Email" style={styles.textInput} />
        </View>
        <View style={styles.iconContainer}>
          <Fontisto style={styles.icon} />
          <TextInput
            placeholder="Password"
            style={styles.textInput}
          />
          <Pressable
            style={styles.eyeIcon}
          >
            <Fontisto name='eye'
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <Text style={styles.textContent}> When you agree to terms and conditions</Text>
        <Text style={styles.textForgot}> For got your password?</Text>
        <Text style={styles.textContent}> Or login with</Text>
      </View>
      <View style={styles.bottomContainer}>
      <Pressable style={styles.loginFace}>
          <Fontisto name="facebook" size={24} color="white" />
        </Pressable>
        <Pressable style={styles.loginZalo}>
          <Text style={styles.textZalo}>Z</Text>
        </Pressable>
        <Pressable style={styles.loginGoogle}>
          <Fontisto name="google" size={30} color="#DB4437" />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0ecdc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    width: 330,
    height: 45,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    paddingLeft: 10,
    backgroundColor: '#C4C4C4',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
  buttonContainer: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#E53935',
    padding: 10,
    alignItems: 'center',
    width: 330,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content:{
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textContent: {
    marginBottom: 10,
  },
  textForgot: {
    color: '#5D25FA',
    marginBottom: 10,
  },
  bottomContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  loginFace: {
    borderWidth: 1,
    width: 100,
    height: 50,
    backgroundColor: '#285c8c',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#285c8c',
    borderRadius: 3,
  },
  loginZalo: {
    borderWidth: 1,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1894c4',
    borderColor: '#1894c4',
    borderRadius: 3,
  },
  loginGoogle: {
    borderWidth: 1,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#1894c4',
    borderRadius: 3,
  },
  textZalo: {
    fontSize:35,
    color:'white',
    fontWeight: 'bold',
  },
});