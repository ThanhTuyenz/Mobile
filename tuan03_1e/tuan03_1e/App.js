import { Text, StyleSheet, View, Pressable, TextInput } from 'react-native';

import Fontisto from '@expo/vector-icons/Fontisto';
import React, { useState } from 'react';
export default function e() {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { id: 1, label: 'Male' },
    { id: 2, label: 'Female' },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.text}>REGISTER</Text>
      </View>
      <View style={styles.middleSection}>
        <View style={styles.iconContainer}>
          <Fontisto style={styles.icon} />
          <TextInput placeholder="Name" style={styles.textInput} />
        </View>
        <View style={styles.iconContainer}>
          <Fontisto style={styles.icon} />
          <TextInput placeholder="Phone" style={styles.textInput} />
        </View>
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
        <View style={styles.iconContainer}>
          <Fontisto style={styles.icon} />
          <TextInput placeholder="Birthday" style={styles.textInput} />
        </View>
        <View style={styles.gender}>
          {options.map(option => (
        <Pressable
          key={option.id}
          style={styles.option}
          onPress={() => setSelectedOption(option.id)}
        >
          <View style={[styles.radioCircle, selectedOption === option.id && styles.selectedRadio]} />
          <Text style={styles.optionText}>{option.label}</Text>
        </Pressable>
      ))}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </Pressable>
      </View>
      <View style={styles.content}>
        <Text style={styles.textContent}> When you agree to terms and conditions</Text>
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
    flex: 2,
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
  gender: {
    flexDirection: 'row',
  },
  option: {
    flexDirection: 'row',
    marginVertical: 10,
    marginRight: 40,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 10,
  },
  selectedRadio: {
    backgroundColor: '#E53935',
  },
  optionText: {
    fontSize: 16,
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
});