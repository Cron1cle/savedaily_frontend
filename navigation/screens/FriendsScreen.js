import React, { useState } from 'react';
import { Keyboard, View, Text, TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './FriendsScreenStyles.js';






export default function FriendsScreen({ navigation }) {
  const [viewType, setViewType] = useState('Add')


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>Friends</Text>
        </View>
        <View style={styles.toggleSection}>
          {['Add', 'Friends', 'Invite'].map((type, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.toggleButton, viewType === type && styles.activeButton]}
              onPress={() => setViewType(type)}
            >
              <Text style={[styles.toggleLabel, viewType === type && styles.activeLabel]}>{type}</Text>
              {type === 'Friends' ? (
                <MaterialCommunityIcons name="account-group" size={15} color={viewType === type ? 'black' : 'white'} style={{ marginLeft: 5 }} />
              ) : (
                <Octicons 
                  name={type === 'Invite' ? 'plus-circle' : 'person-add'} 
                  size={15} 
                  color={viewType === type ? 'black' : 'white'} 
                  style={{ marginLeft: 5 }}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.contentSection}>
          {viewType === 'Add' &&
            <View style={styles.searchbarbox}>
              <Octicons name="person-add" size={24} color="white" />

              <TextInput style={styles.searchbar}
                placeholder="Add a Friend"
                placeholderTextColor={'white'}
              />
              <Octicons name="arrow-right" size={30} color="white" />
            </View>}
          {viewType === 'Friends' &&
            <View style={styles.searchbarbox}>
              <MaterialCommunityIcons name="account-group" size={24} color="white" />
              <TextInput style={styles.searchbar}
                placeholder="Search a friend"
                placeholderTextColor={'white'}
              />
              <Octicons name="arrow-right" size={30} color="white" />
            </View>}
          {viewType === 'Invite' &&
            <View style={styles.searchbarbox}>
              <Octicons name="plus-circle" size={24} color="white" />
              <TextInput style={styles.searchbar}
                placeholder="Invite a friend"
                placeholderTextColor={'white'}
              />
              <Octicons name="arrow-right" size={30} color="white" />
            </View>}
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
}



