import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Keyboard, Alert, TouchableWithoutFeedback, ImageBackground, TextInput, Switch } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from './SettingsScreenStyles.js';
import BottomSheet from '@gorhom/bottom-sheet';
import Toast from 'react-native-toast-message';
import ToastStyles from '../../components/ToastStyles';
import { useMemo } from 'react';
import { approveLogin } from '../../components/backendapi.js';
import { registerUser } from '../../components/backendapi.js';
import { useTheme } from '../../components/ThemeContext.js';
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5.js';
import AntDesign from '@expo/vector-icons/AntDesign';
import { CartContext } from '../../components/CartContext.js';



export default function SettingsScreen({ navigation }) {

    const { colorScheme, toggleTheme, toggleSystemTheme, useSystemTheme } = useTheme();

    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');

    const {setShowToast, showToast} = useContext(CartContext);

    const handleToast = () => {
        setShowToast(!showToast)
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <SafeAreaView style={styles.container}>


                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Octicons name="chevron-left" size={40} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title}>SETTINGS</Text>

                </View>
                
                


                <TouchableOpacity style={styles.toastButton} onPress={handleToast} />



                {isRegister ? (
                    <>
                        <Text style={styles.loginTitle}>Register</Text>
                        <View style={styles.loginContainer}>
                            <MaterialIcons name="person-outline" size={24} color="white" />
                            <TextInput
                                placeholder={"Username"}
                                placeholderTextColor={'white'}
                                style={styles.loginLabel}
                                value={username}
                                onChangeText={setUsername}
                            />
                        </View>
                        <View style={styles.loginContainer}>
                            <MaterialIcons name="person-outline" size={24} color="white" />
                            <TextInput
                                placeholder={"First Name"}
                                placeholderTextColor={'white'}
                                style={styles.loginLabel}
                                value={firstName}
                                onChangeText={firstName}
                            />
                        </View>
                        <View style={styles.loginContainer}>
                            <MaterialIcons name="person-outline" size={24} color="white" />
                            <TextInput
                                placeholder={"Last Name"}
                                placeholderTextColor={'white'}
                                style={styles.loginLabel}
                                value={lastName}
                                onChangeText={setLastName}

                            />
                        </View>
                        <View style={styles.loginContainer}>
                            <FontAwesome name="transgender" size={24} color="white" />
                            <TextInput
                                placeholder={"Gender"}
                                placeholderTextColor={'white'}
                                style={styles.loginLabel}
                                value={gender}
                                onChangeText={setGender}

                            />
                        </View>
                        <View style={styles.loginContainer}>
                            <MaterialIcons name="cake" size={24} color="white" />
                            <TextInput
                                placeholder={"Birthday"}
                                placeholderTextColor={'white'}
                                style={styles.loginLabel}
                                value={birthday}
                                onChangeText={setBirthday}
                                mode="date"
                            />
                        </View>
                        <View style={styles.loginContainer}>
                            <MaterialCommunityIcons name="email-outline" size={24} color="white" />
                            <TextInput
                                placeholder={"Email address"}
                                placeholderTextColor={'white'}
                                style={styles.loginLabel}
                                value={email}
                                onChangeText={setEmail}

                            />
                        </View>
                        <View style={styles.loginContainer}>
                            <MaterialIcons name="password" size={24} color="white" />
                            <TextInput
                                placeholder={"Password"}
                                placeholderTextColor={'white'}
                                style={styles.loginLabel}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>
                        <TouchableOpacity style={styles.loginButton} onPress={() => registerUser(username, firstName, lastName, gender, birthday, email, password)}>
                            <Text style={styles.loginButtonText}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsRegister(false)}>
                            <Text style={styles.registerLabel}>Back to Login</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <Text style={styles.loginTitle}>Login</Text>
                        <View style={styles.loginContainer}>
                            <MaterialCommunityIcons name="email-outline" size={24} color="white" />
                            <TextInput
                                placeholder={"Email"}
                                placeholderTextColor={'white'}
                                style={styles.loginLabel}
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.loginContainer}>
                            <MaterialIcons name="password" size={24} color="white" />
                            <TextInput
                                placeholder={"Password"}
                                placeholderTextColor={'white'}
                                style={styles.loginLabel}
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry
                            />
                        </View>
                        <TouchableOpacity style={styles.loginButton} onPress={() => { approveLogin(email, password) }}>
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setIsRegister(true)}>
                            <Text style={styles.registerLabel}>Register</Text>
                        </TouchableOpacity>
                    </>
                )}

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colorScheme === 'dark' ? '#1C1D21' : '#fff' }}>
                    <Text style={{ color: colorScheme === 'dark' ? '#fff' : '#000', marginBottom: 20 }}>
                        Aktuelles Theme: {colorScheme}
                    </Text>

                    <TouchableOpacity onPress={toggleTheme} style={{ marginTop: 20, padding: 10, backgroundColor: 'gray', borderRadius: 5 }}>
                        <Text style={{ color: 'white' }}>Theme manuell wechseln</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <Switch value={useSystemTheme} onValueChange={toggleSystemTheme} />
                        <Text style={{ color: colorScheme === 'dark' ? '#fff' : '#000' }}>
                            System-Theme verwenden: {useSystemTheme ? 'Aktiviert' : 'Deaktiviert'}
                        </Text>
                    </View>
                </View>
            </SafeAreaView >
        </TouchableWithoutFeedback>
    );
}
