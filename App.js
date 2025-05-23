
import Octicons from '@expo/vector-icons/Octicons';
import { SearchBar } from '@rneui/themed';
import Feather from '@expo/vector-icons/Feather';
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainContainer from './navigation/MainContainer';
import { ThemeProvider } from './components/ThemeContext';
import {CartProvider} from './components/CartContext'


function App() {
  return (
    <ThemeProvider>
      <CartProvider>
      <MainContainer />
      </CartProvider>
    </ThemeProvider>
  );


}



export default App;


