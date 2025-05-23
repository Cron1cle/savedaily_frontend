import styles from './QrCodeScreenStyles.js'
import * as Haptics from 'expo-haptics';
import Octicons from '@expo/vector-icons/Octicons';
import React, { useState, useEffect } from 'react';
import QRCode from 'react-native-qrcode-svg';
import {Text, View, TouchableOpacity} from 'react-native';



export default function QrCodeScreen({ navigation }) {
    const [timer, setTimer] = useState(60);
    const [qrValue, setQrValue] = useState(generateRandomValue());

    function generateRandomValue() {
        return Math.random().toString(36).substr(2, 10); 
    }

    

  useEffect(() => {
    if (timer === 0) {
      setTimer(60); 
      setQrValue(generateRandomValue()); 
            return;  
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, [timer]);

  const handleRefresh = () => {
    setTimer(60); 
    setQrValue(generateRandomValue()); 
};

    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Octicons name="chevron-left" size={45} color="white" />
                </TouchableOpacity>
                <Text style={styles.qrcodelabel}>Check-In</Text>
                <View style={styles.timercontainer}><Text style={styles.timerlabel}>{timer}s</Text></View>
            </View>
            <View style={styles.qrcodeContainer}>
            <QRCode 

                    value={qrValue} 
                    size={275} 
                    backgroundColor="white"
                    color="black"
                    
                />
            </View>
            <TouchableOpacity  onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy); handleRefresh()}}>
            <View style = {styles.refreshContainer}>
                <Text style = {styles.refreshlabel}>REFRESH</Text>
            </View>
            </TouchableOpacity>
            
        </View>

    );
}