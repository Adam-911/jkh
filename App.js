import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from './assets/logo_test.png';
import imgChat from './assets/Chat.png';
import MenuBlock from './src/Components/MenuBlock.js';
import Logo from './src/Components/Logo';
import MainScreen from './src/screens/MainScreen';
import { AppNavigation } from './src/navigation/AppNavigation';

export default function App() {
  return <AppNavigation/>
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F9F5E7',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
