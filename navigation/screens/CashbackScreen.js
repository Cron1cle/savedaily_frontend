import * as React from 'react';
import LottieView from 'lottie-react-native';
import { TouchableOpacity, Text, View, Image, TouchableWithoutFeedback, Modal, PanResponder, Animated, ImageBackground } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useState, useRef, useEffect } from 'react';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SpinningNumbers from '@birdwingo/react-native-spinning-numbers';
import * as Progress from 'react-native-progress';
import styles from './CashbackScreenStyles.js';


export default function CashbackScreen({ navigation }) {
  const [value, setValue] = useState(0);
  const targetValue = 25.00;

  useEffect(() => {

    const intervalDuration = 1000 / targetValue;
    const interval = setInterval(() => {
      setValue((prevValue) => {
        if (prevValue < targetValue) {
          return Math.min(prevValue + 10, targetValue);
        } else {
          clearInterval(interval);
          return prevValue;
        }
      });
    }, intervalDuration);

    return () => clearInterval(interval);
  }, []);

  const formattedValue = value.toFixed(2).replace('.', ',');

  let [ShowComment, setShowModelComment] = useState(false);
  let [animateModal, setanimateModal] = useState(false);

  return (

    <View style={styles.mainContainer}>
      <Text style={styles.title}>Cashback</Text>
      <View style={styles.earnContainer}>
        <LottieView
          source={require('../../assets/coinAnimation.json')}
          autoPlay
          loop
          style={{ width: '100%', height: '100%', alignSelf: 'center', top: 25 }}
        />

        <View style={styles.earningAmountContainer}>

          <SpinningNumbers
            style={{

              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center',
              color: 'white',
              fontStyle: 'italic',


            }}
            duration={1000}
          >
            {formattedValue} €
          </SpinningNumbers>
        </View>
      </View>




      <View style={styles.challengesSection}>
        <TouchableOpacity style={styles.challengeContainer} onPress={() => setShowModelComment(true)}>
          <Text style={styles.challengeTitle}>Astor Grand Cinema</Text>
          <View style={styles.challengeEarnContainer}>
            <Text style={styles.challengeEarnLabel}>Earn 5 EUR</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <Image
              style={styles.logo}
              source={{
                uri: 'https://www.kinowerbung.de/media/70/4f/72/1647602052/Logo_AstorGrandCinemaHannover.png',
              }}
            />
            <Text style={styles.challengeLabel}>Leave a Follow</Text>
            <View style={styles.progressCounter}>
              <View style={{ alignSelf: 'center' }}>
                <MaterialCommunityIcons name="instagram" size={45} color="white" />
              </View>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15, marginBottom: 15 }}>
            <Progress.Bar progress={0 / 1} width={250} borderColor="gray" color="#75f564" />
            <Text style={styles.progressLabel}>0/1</Text>
          </View>
        </TouchableOpacity>
      </View>

      <SwipeUpDownModal
        modalVisible={ShowComment}
        PressToanimate={animateModal}
        duration={375}
        fade={true}
        ContentModal={
          <View>
            <TouchableWithoutFeedback onPress={() => setanimateModal(true)}>
              <View style={styles.touchable} />
            </TouchableWithoutFeedback>

            <View style={styles.modalContainer}>

              <TouchableOpacity style={styles.closeButton} onPress={() => setanimateModal(true)}>
                <View style={{ alignSelf: 'center' }}>
                  <MaterialCommunityIcons name="window-close" size={25} color="white" />
                </View>
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Astor Grand Cinema</Text>
              <View style={styles.stepPathSection}>
                <TouchableOpacity style={styles.stepItem}>
                  <View style={styles.stepContainer}>
                    <Text style={styles.stepNumber}>1</Text>
                  </View>
                  <Text style={styles.stepLabel}>Link Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.stepItem}>
                  <View style={styles.stepContainer}>
                    <Text style={styles.stepNumber}>2</Text>
                  </View>
                  <Text style={styles.stepLabel}>Follow Watcher</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.stepItem}>
                  <View style={styles.stepContainer}>
                    <Text style={styles.stepNumber}>3</Text>
                  </View>
                  <Text style={styles.stepLabel}>Follow Astor</Text>
                </TouchableOpacity>
              </View>

              

            </View>

          </View>
        }
        HeaderContent={
          <View style={{ width: '100%' }}>
            <View style={styles.handleBar} />
          </View>

        }
        HeaderStyle={styles.modalHeader}
        

        onClose={() => {
          setShowModelComment(false);
          setanimateModal(false);
        }}
      />

    </View>

  );
}

