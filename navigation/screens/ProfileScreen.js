import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import React, { useEffect, useState } from "react";
import { Modal, Text, View, TouchableOpacity, TextInput, Animated, Image, Linking, Platform, Share } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Picker } from '@react-native-picker/picker';
import LottieView from 'lottie-react-native';
import DateTimePicker from "@react-native-community/datetimepicker";
import Octicons from '@expo/vector-icons/Octicons';
import * as Haptics from "expo-haptics";
import * as ImagePicker from 'expo-image-picker';
import styles from './ProfileScreenStyles.js';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



export default function ProfileScreen({ navigation }) {
  const [cashoutVisible, setCashoutVisible] = useState(false);
  const [walletVisible, setWalletVisible] = useState(false);
  const [receiptVisible, setReceiptVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [inviteVisible, setInviteVisible] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);


  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activePayment, setActivePayment] = useState(null);

  const toggleDropdown = (dropdownId) => {
    setActiveDropdown(activeDropdown === "payment" ? null : "payment");
  };

  const selectPaymentMethod = (methodId) => {
    setActivePayment(methodId);
    setActiveDropdown(null);
  };


  const [instagramText, setInstagramText] = useState('No Instagram');
  const [googleText, setGoogleText] = useState('No Google');
  const [isInstagramClicked, setIsInstagramClicked] = useState(false);
  const [isGoogleClicked, setIsGoogleClicked] = useState(false);

  const handleInstagram = () => {
    setInstagramText('Instagram Account');
    setIsInstagramClicked(true);
    Linking.openURL(Platform.select({
      ios: 'https://www.instagram.com/',
      android: 'https://www.instagram.com/',
    }));
  };

  const handleGoogle = () => {
    setGoogleText('Google Account');
    setIsGoogleClicked(true);
    Linking.openURL(Platform.select({
      ios: 'https://www.google.com/',
      android: 'https://www.google.com/',
    }));
  };

  const paymentMethods = [
    {
      id: "paypal",
      label: "PayPal",
      icon: "paypal",
      info: "y_simeonov@yahoo.com",
      url: "https://www.paypal.com/de/signin"
    },
    {
      id: "card",
      label: "Card",
      icon: "credit-card",
      info: "Mastercard",
      url: null 
    },
    {
      id: "applePay",
      label: "Apple Pay",
      icon: require('../../assets/apple-pay.png'),
      info: "y.simeonov@icloud.com",
      url: "https://www.apple.com/apple-pay/"
    },
    {
      id: "klarna",
      label: "Klarna Pay",
      icon: require('../../assets/klarna-icon.png'),
      info: "y_simeonov",
      url: "https://www.klarna.com/de/"
    }
  ];

  const [viewType, setViewType] = useState('income');
  const toggleView = () => {
    setViewType(viewType === 'income' ? 'expense' : 'income');
  };

  const [birthdate, setBirthdate] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [activePicker, setActivePicker] = useState(null);



  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setBirthdate(selectedDate);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    setActivePicker(null); 
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Hier ist ein ref Link verdiene 10 EUR dabei :): https://save-daily.app/share/deddad4c-7267-4f1b-b05b-fa9c0684e72d ', // Dein zu teilender Link
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('Geteilt über:', result.activityType);
        } else {
          console.log('Link erfolgreich geteilt!');
        }
      } else if (result.action === Share.dismissedAction) {
        console.log('Teilen abgebrochen');
      }
    } catch (error) {
      console.error('Fehler beim Teilen:', error.message);
    }
  };

  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    console.log('pickImage called'); 
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, 
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log('ImagePicker result:', result); 

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      console.log('Image picked:', uri); 
      setProfilePicture(uri);
    } else {
      console.log('Image picking cancelled'); 
    }
  };

  const [activeGenderButton, setActiveGenderButton] = useState(null);

  handleButtonPress = (buttonName) => {
    if (activeGenderButton === buttonName) {
      setActiveGenderButton(null);
    } else {
      setActiveGenderButton(buttonName);
    }
  }



  return (
    <View style={styles.mainContainer}>

      <View style={styles.content}>
        <View style={styles.profileInfo}>
          <Text style={styles.greeting}>Hi there Yordan!</Text>
          <View style={styles.profileLogo}>
            {profilePicture && (
              <Image
                source={{ uri: profilePicture }}
                style={{ width: 70, height: 70, alignSelf: 'center', borderRadius: 100 }}
                onError={(error) => console.log('Image Load Error:', error.nativeEvent.error)}
              />
            )}
          </View>
        </View>
        <View style={styles.cashoutContainer}>
          <Fontisto name="wallet" size={24} color="white" />
          <Text style={styles.cashoutNumber}>0 EUR</Text>
          <TouchableOpacity style={styles.cashoutButton} onPress={() => setCashoutVisible(true)}>
            <Text style={styles.cashoutLabel}>Cashout</Text>
            <FontAwesome5 name="money-bill-wave" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => setWalletVisible(true)}>
            <View style={{ alignSelf: 'center', marginTop: 25 }}>
              <MaterialCommunityIcons name="wallet-outline" size={30} color="white" />
            </View>
            <Text style={styles.buttonLabel}>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => setReceiptVisible(true)}>
            <View style={{ alignSelf: 'center', marginTop: 25 }}>
              <MaterialIcons name="receipt-long" size={30} color="white" />
            </View>
            <Text style={styles.buttonLabel}>Receipts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => setEditVisible(true)}>
            <View style={{ alignSelf: 'center', marginTop: 25 }}>
              <MaterialIcons name="person" size={30} color="white" />
            </View>
            <Text style={styles.buttonLabel}>Edit</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.supportContainer} onPress={() => setInviteVisible(true)}>
          <View style={styles.supportRow}>
            <MaterialCommunityIcons name="gift-outline" size={35} color="white" />
            <Text style={styles.inviteLabel}>Invite a friend</Text>
            <MaterialIcons name="chevron-right" size={35} color="white" />
          </View>
          <Text style={styles.bonusLabel}>Earn a 10€ Bonus!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.supportContainer} onPress={() => setFeedbackVisible(true)}>
          <View style={styles.supportRow}>
            <MaterialCommunityIcons name="comment-text-outline" size={35} color="white" />
            <Text style={styles.inviteLabel}>Leave some feedback</Text>
            <MaterialIcons name="chevron-right" size={35} color="white" />
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={walletVisible}
        onRequestClose={() => setWalletVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.headlineContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setWalletVisible(false)}>
              <MaterialCommunityIcons name="window-close" size={36} color="white" />
            </TouchableOpacity>
            <Text style={styles.headlineLabel}>Wallet</Text>
          </View>
          <View style={styles.paymentSection}>
            <Text style={styles.headLabel}>Payment method</Text>
            <TouchableOpacity
              style={styles.paymentContainer}
              onPress={toggleDropdown}>
              <View style={styles.paymentRow}>

                {activePayment && paymentMethods.find((p) => p.id === activePayment)?.icon ? (
                  typeof paymentMethods.find((p) => p.id === activePayment)?.icon === "string" ? (
                    <MaterialIcons
                      name={paymentMethods.find((p) => p.id === activePayment)?.icon}
                      size={40}
                      color="white"
                    />
                  ) : (
                    <Image
                      source={paymentMethods.find((p) => p.id === activePayment)?.icon}
                      style={{ width: 40, height: 40 }}
                    />
                  )
                ) : (
                  <MaterialIcons name="payments" size={40} color="white" />
                )}
                <Text style={styles.paymentLabel}>
                  {activePayment
                    ? paymentMethods.find((p) => p.id === activePayment)?.label
                    : "No Payment"}
                </Text>

                <MaterialIcons name="chevron-right" size={35} color="white" />
              </View>
              {activePayment && (
                <Text style={styles.accountLabel}>
                  {paymentMethods.find((p) => p.id === activePayment)?.info}
                </Text>
              )}

            </TouchableOpacity>
          </View>
          <View style={styles.instagramSection}>
            <Text style={styles.headLabel}>Instagram Account</Text>
            <TouchableOpacity style={styles.instagramContainer} onPress={handleInstagram}>
              <View style={styles.instagramRow}>
                <MaterialCommunityIcons name="instagram" size={40} color="white" />
                <Text style={styles.paymentLabel}>{instagramText}</Text>
                <MaterialIcons name="chevron-right" size={35} color="white" />
              </View>
              {isInstagramClicked && (
                <Text style={styles.accountLabel}>yordansimeonov_</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.googleSection}>
            <Text style={styles.headLabel}>Google Account</Text>
            <TouchableOpacity style={styles.googleContainer} onPress={handleGoogle}>
              <View style={styles.googleRow}>
                <MaterialCommunityIcons name="google" size={40} color="white" />
                <Text style={styles.paymentLabel}>{googleText}</Text>
                <MaterialIcons name="chevron-right" size={35} color="white" />
              </View>
              {isGoogleClicked && (
                <Text style={styles.accountLabel}>yordan22064@gmail.com</Text>
              )}
            </TouchableOpacity>
          </View>
          {activeDropdown === "payment" && (
            <View style={styles.dropdownContainer}>
              <View style={styles.dropdownHeader}>
                <Text style={styles.dropdownLabel}>Choose your payment method:</Text>
              </View>

              {paymentMethods.map((method) => (
                <View style={styles.dropdownOption} key={method.id}>
                  <TouchableOpacity
                    key={method.id}
                    style={styles.optionRow}
                    onPress={() => {
                      selectPaymentMethod(method.id);
                      if (method.url) {
                        Linking.openURL(method.url);
                      }
                    }}
                  >
                    {typeof method.icon === "string" ? (
                      <MaterialIcons name={method.icon} size={35} color="white" />
                    ) : (
                      <Image source={method.icon} style={{ width: method.id === "klarna" ? 50 : 35, height: 35 }} />
                    )}
                    <Text style={styles.optionLabel}>{method.label}</Text>
                    <MaterialIcons name="chevron-right" size={35} color="white" />
                  </TouchableOpacity>
                  {method.id !== "klarna" && <View style={styles.lineOption} />}
                </View>
              ))}

            </View>
          )}
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={cashoutVisible}
        onRequestClose={() => setCashoutVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.headlineContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setCashoutVisible(false)}>
              <MaterialCommunityIcons name="window-close" size={36} color="white" />
            </TouchableOpacity>
            <Text style={styles.cashLabel}>Cashout</Text>
          </View>
          <Text style={styles.request}>Please provide your initials in the app so we can process your cashback payments.</Text>
          <View style={styles.rowCash}>
            <View style={styles.smallContainer}>
              <TextInput style={styles.nameLabel} placeholder="First Name *" placeholderTextColor={'white'} />
            </View>
            <View style={styles.smallContainer}>
              <TextInput style={styles.nameLabel} placeholder="Last Name *" placeholderTextColor={'white'} />
            </View>
          </View>

          <View style={styles.longContainer}>
            <TextInput style={styles.nameLabel} placeholder="Stree & number *" placeholderTextColor={'white'} />
          </View>
          <View style={styles.row}>
            <View style={styles.smallContainer}>
              <TextInput style={styles.nameLabel} placeholder="Post code *" placeholderTextColor={'white'} />
            </View>
            <View style={styles.smallContainer}>
              <TextInput style={styles.nameLabel} placeholder="City *" placeholderTextColor={'white'} />
            </View>
          </View>

          <Text style={styles.availableCashbackLabel}>Cashback bank account:</Text>
          <View style={styles.longContainer}>
            <TextInput style={styles.nameLabel} placeholder="IBAN *" placeholderTextColor={'white'} />
          </View>
          <Text style={styles.availableCashbackLabel}>Your available Cashback: 0 EUR</Text>
          <View style={styles.availableCashbackContainer}>
            <TextInput style={styles.nameLabel}{...{ right: 10 }} placeholder="Ammount *" placeholderTextColor={'white'} />
          </View>
          <TouchableOpacity onPress={() => setCashoutVisible(false)}>
            <View style={styles.cashoutContainerModal}>
              <Text style={styles.cashoutLabelModal}>Cashout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={receiptVisible}
        onRequestClose={() => setReceiptVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.headlineContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setReceiptVisible(false)}>
              <MaterialCommunityIcons name="window-close" size={36} color="white" />
            </TouchableOpacity>
            <Text style={styles.cashLabel}>Receipts</Text>
          </View>
          <View style={styles.toggleSection}>
            <TouchableOpacity style={[styles.toggleButton, viewType === 'income' && styles.activeButton]} onPress={() => setViewType('income')}>
              <Text style={[styles.toggleLabel, viewType === 'income' && styles.activeLabel]}>Income</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.toggleButton, viewType === 'expense' && styles.activeButton]} onPress={() => setViewType('expense')}>
              <Text style={[styles.toggleLabel, viewType === 'expense' && styles.activeLabel]}>Expenses</Text>
            </TouchableOpacity>
          </View>

          {viewType === 'income' ? (
            <View>
              <View style={styles.receiptContainer}>
                <Image style={styles.receiptIcon} source={{ uri: 'https://www.kinowerbung.de/media/70/4f/72/1647602052/Logo_AstorGrandCinemaHannover.png' }} />
                <View style={styles.receiptInfo}>
                  <Text style={styles.receiptTitle}>Astor Grand Cinema</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 40 }}>
                    <Text style={styles.receiptDate}>Jan 20</Text>
                    <View style={{ height: 3, width: 3, borderRadius: 100, backgroundColor: 'white', alignSelf: 'center' }} />
                    <Text style={styles.receiptDate}>17:55</Text>
                  </View>
                  <Text style={styles.receiptDescription}>Cashback</Text>
                </View>
                <Text style={styles.receiptAmount}>15,00 EUR</Text>
              </View>
              <View style={styles.receiptLine} />
              <View style={styles.receiptContainer}>
                <Image style={styles.receiptIcon} source={{ uri: 'https://play-lh.googleusercontent.com/5LuzpCE_FXX0cwCtu7fxKEVpbG5Xz52A4b_IfR9xy0JzoUvboDvIbB9VoFwC_R0dLhHS' }} />
                <View style={styles.receiptInfo}>
                  <Text style={styles.receiptTitle}>Heide Park Resort</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 40 }}>
                    <Text style={styles.receiptDate}>Jan 18</Text>
                    <View style={{ height: 3, width: 3, borderRadius: 100, backgroundColor: 'white', alignSelf: 'center' }} />
                    <Text style={styles.receiptDate}>13:44</Text>
                  </View>
                  <Text style={styles.receiptDescription}>Cashback</Text>
                </View>
                <Text style={styles.receiptAmount}>12,49 EUR</Text>
              </View>
              <View style={styles.receiptLine} />
              <View style={styles.receiptContainer}>
                <Image style={styles.receiptIcon} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Hannover_96_Logo.svg/1200px-Hannover_96_Logo.svg.png' }} />
                <View style={styles.receiptInfo}>
                  <Text style={styles.receiptTitle}>Hannover 96</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 40 }}>
                    <Text style={styles.receiptDate}>Jan 14</Text>
                    <View style={{ height: 3, width: 3, borderRadius: 100, backgroundColor: 'white', alignSelf: 'center' }} />
                    <Text style={styles.receiptDate}>18:45</Text>
                  </View>
                  <Text style={styles.receiptDescription}>Cashback</Text>
                </View>
                <Text style={styles.receiptAmount}>7,99 EUR</Text>
              </View>
              <View style={styles.receiptLine} />
              <View style={styles.receiptContainer}>
                <Image style={styles.receiptIcon} source={{ uri: 'https://play-lh.googleusercontent.com/CKaDf83KAt3b1UGNl6mqdDqlhQFvYRJCDuQK-DER3tqj-BoB77KXNBJIpeCeIKG6GA' }} />
                <View style={styles.receiptInfo}>
                  <Text style={styles.receiptTitle}>Zoo Hannover</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 40 }}>
                    <Text style={styles.receiptDate}>Jan 12</Text>
                    <View style={{ height: 3, width: 3, borderRadius: 100, backgroundColor: 'white', alignSelf: 'center' }} />
                    <Text style={styles.receiptDate}>16:00</Text>
                  </View>
                  <Text style={styles.receiptDescription}>Cashback</Text>
                </View>
                <Text style={styles.receiptAmount}>12,99 EUR</Text>
              </View>
              <View style={styles.receiptLine} />

            </View>
          ) : (
            <View>
              <View style={styles.receiptContainer}>
                <Image style={styles.receiptIcon} source={{ uri: 'https://www.kinowerbung.de/media/70/4f/72/1647602052/Logo_AstorGrandCinemaHannover.png' }} />
                <View style={styles.receiptInfo}>
                  <Text style={styles.receiptTitle}>Astor Grand Cinema</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 40 }}>
                    <Text style={styles.receiptDate}>Jan 20</Text>
                    <View style={{ height: 3, width: 3, borderRadius: 100, backgroundColor: 'white', alignSelf: 'center' }} />
                    <Text style={styles.receiptDate}>17:55</Text>
                  </View>
                  <Text style={styles.receiptExpenseDescription}>Normal Parquet</Text>
                </View>
                <Text style={styles.receiptExpenseAmount}>-15,00 EUR</Text>
              </View>
              <View style={styles.receiptLine} />
              <View style={styles.receiptContainer}>
                <Image style={styles.receiptIcon} source={{ uri: 'https://play-lh.googleusercontent.com/5LuzpCE_FXX0cwCtu7fxKEVpbG5Xz52A4b_IfR9xy0JzoUvboDvIbB9VoFwC_R0dLhHS' }} />
                <View style={styles.receiptInfo}>
                  <Text style={styles.receiptTitle}>Heide Park Resort</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 40 }}>
                    <Text style={styles.receiptDate}>Jan 18</Text>
                    <View style={{ height: 3, width: 3, borderRadius: 100, backgroundColor: 'white', alignSelf: 'center' }} />
                    <Text style={styles.receiptDate}>13:44</Text>
                  </View>
                  <Text style={styles.receiptExpenseDescription}>Day Ticket</Text>
                </View>
                <Text style={styles.receiptExpenseAmount}>-37,00 EUR</Text>
              </View>
              <View style={styles.receiptLine} />
            </View>
          )}

        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={editVisible}
        onRequestClose={() => setEditVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.headlineContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setEditVisible(false)}>
              <MaterialCommunityIcons name="window-close" size={36} color="white" />
            </TouchableOpacity>
            <Text style={styles.editTitle}>Edit</Text>
          </View>
          <View style={styles.editSection}>
            <View style={styles.profileLogo}{...{ alignSelf: 'center', height: 125, width: 125 }}>

              {profilePicture && (
                <Image
                  source={{ uri: profilePicture }}
                  style={{ width: 120, height: 120, alignSelf: 'center', borderRadius: 100 }}
                  onError={(error) => console.log('Image Load Error:', error.nativeEvent.error)}
                />
              )}
            </View>
          </View>
          <TouchableOpacity style={styles.editContainer} onPress={pickImage}>
            <Text style={styles.editLabel}>Edit picture</Text>
          </TouchableOpacity>


          <View style={styles.genderContent}>
            <Text style={styles.genderTitle}>Gender</Text>
            <View style={styles.genderButtons}>
              <TouchableOpacity style={[styles.genderCircle, activeGenderButton === 'male' && styles.activeGenderButton]} onPress={() => handleButtonPress('male')} />
              <TouchableOpacity onPress={() => handleButtonPress('male')}>
                <Text style={styles.genderButtonLabel}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.genderCircle, activeGenderButton === 'female' && styles.activeGenderButton]} onPress={() => handleButtonPress('female')} />
              <TouchableOpacity onPress={() => handleButtonPress('female')}>
                <Text style={styles.genderButtonLabel}>Female</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.genderCircle, activeGenderButton === 'diverse' && styles.activeGenderButton]} onPress={() => handleButtonPress('diverse')} />
              <TouchableOpacity onPress={() => handleButtonPress('diverse')}>
                <Text style={styles.genderButtonLabel}>Diverse</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.genderLine} />
          </View>








        </View>

      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={inviteVisible}
        onRequestClose={() => setInviteVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.headlineContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setInviteVisible(false)}>
              <MaterialCommunityIcons name="window-close" size={36} color="white" />
            </TouchableOpacity>
            <Text style={styles.inviteTitle}>Invite Friend</Text>
          </View>
          <LottieView
            source={require('../../assets/inviteanimation.json')} // Pfad zur Animation
            autoPlay
            loop
            style={{ width: 300, height: 300, alignSelf: 'center' }}
          />
          <Text style={styles.friendLabel}>Invite Friends & Earn a 10€ Bonus!</Text>
          <Text style={styles.friendInfo}>Share the love and save even more with SAVE DAILY! When you invite your friends to join, you get an exclusive €10 Bonus.</Text>

          <TouchableOpacity style={styles.referralButton} onPress={handleShare}>
            <Text style={styles.referralLabel}>Share referral link</Text>
          </TouchableOpacity>

        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={feedbackVisible}
        onRequestClose={() => setFeedbackVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.headlineContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setFeedbackVisible(false)}>
              <MaterialCommunityIcons name="window-close" size={36} color="white" />
            </TouchableOpacity>
            <Text style={styles.feedbackTitle}>Feedback</Text>
          </View>
          <LottieView
            source={require('../../assets/feedback-animation.json')}
            autoPlay
            loop
            style={{ width: 300, height: 300, alignSelf: 'center' }}
          />
          <Text style={styles.feedbackLabel}>Share Your Feedback - Help Us Improve SAVE DAILY!</Text>
          <Text style={styles.feedbackInfo}>We want to hear from you! Let us know what you think about SAVE DAILY and how we can make your experience even better.</Text>

          <TouchableOpacity style={styles.feedbackButton} onPress={() => Linking.openURL(Platform.select({ 'ios': 'https://docs.google.com/forms/d/e/1FAIpQLSdoYe5AoQ0E2unI-6sQLRKFg4Tp62PqhdkkOGMgldk2e7eDJg/viewform?usp=header', 'android': 'https://docs.google.com/forms/d/e/1FAIpQLSdoYe5AoQ0E2unI-6sQLRKFg4Tp62PqhdkkOGMgldk2e7eDJg/viewform?usp=header' }))}>
            <Text style={styles.feedbackLabel}>Leave Feedback</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>



  );
}




