import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import SwipeModal, { SwipeModalPublicMethods } from '@birdwingo/react-native-swipe-modal';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';
import LottieView from 'lottie-react-native';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import * as Location from 'expo-location';
import { useTheme } from '../../components/ThemeContext.js';
import { fetchAttractions } from '../../components/backendapi.js';
import styles from './HomeScreenStyles.js';






export default function HomeScreen({ navigation }) {

  const [attractions, setAttractions] = useState([]);
  const [filteredAttractions, setFilteredAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [locationPermission, setLocationPermission] = useState(false);




  const { colorScheme, toggleTheme } = useTheme();
  const isDarkMode = colorScheme === 'dark'

  const toggleLike = (attractionId) => {
    const updatedAttractions = filteredAttractions.map((attraction) => {
      if (attraction.attractionId === attractionId) {
        return {
          ...attraction,
          liked: !attraction.liked,
        };
      }
      return attraction;
    });
    setFilteredAttractions(updatedAttractions);
  };


  useEffect(() => {
    const fetchData = async () => {
      await loadAttractions();
      await getUserLocation();
    };

    fetchData();
  }, []);

  const loadAttractions = async () => {
    try {
      const data = await fetchAttractions();
      const updatedData = data.map((attraction) => ({
        ...attraction,
        liked: false,
      }));
      setAttractions(updatedData);
      setFilteredAttractions(updatedData);
      console.log("Attraktionen geladen:", updatedData);
    } catch (error) {
      console.error("Fehler beim Laden der Attraktionen:", error);
    } finally {
      setLoading(false);
    }
  };

  const getUserLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error("Zugriff auf Standort verweigert");
        setLocationPermission(false);
        return;
      }

      setLocationPermission(true);
      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });

      console.log(`✅ Standort erfasst: ${location.coords.latitude}, ${location.coords.longitude}`);
    } catch (error) {
      console.error("❌ Fehler beim Abrufen der Benutzerposition:", error);
    }
  };

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    if (!lat1 || !lon1 || !lat2 || !lon2) {
      console.log("⚠️ Fehlende Koordinaten für Distanzberechnung:", { lat1, lon1, lat2, lon2 });
      return 'N/A';
    }

    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius der Erde in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1) + ' km'; // Distanz in km
  };




  const [activeButton, setActiveButton] = useState(null);
  const [distance, setDistance] = useState(10);
  const [activeEuroButton, setActiveEuroButton] = useState(null);


  let [ShowComment, setShowModelComment] = useState(false);
  let [animateModal, setanimateModal] = useState(false);




  const handleButtonPress = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
    } else {
      setActiveButton(buttonName);
    }
  };

  // Handle Euro button press
  const handleEuroButtonPress = (buttonName) => {
    if (activeEuroButton === buttonName) {
      setActiveEuroButton(null);
    } else {
      setActiveEuroButton(buttonName);
    }

  };

  const handleSearch = (text) => {
    setSearchQuery(text);

    if (text.trim() === '') {
      setFilteredAttractions(attractions);
      return;
    }

    const filteredData = attractions.filter(attraction =>
      attraction.attractionName.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredAttractions(filteredData);
    console.log("Suchergebnisse:", filteredData);
  };

  const applyFilters = () => {
    let filtered = attractions;


    if (activeButton) {
      filtered = filtered.filter((attraction) => attraction.category === activeButton);
    }

    // Filter nach Preisbereich
    if (activeEuroButton) {
      const priceRanges = {
        euro_1: [1, 5],
        euro_2: [5, 10],
        euro_3: [10, 15],
        euro_4: [20, Infinity],
      };
      const [minPrice, maxPrice] = priceRanges[activeEuroButton];
      filtered = filtered.filter(
        (attraction) => attraction.averageOrderPrice >= minPrice && attraction.averageOrderPrice <= maxPrice
      );
    }

    // Filter nach Entfernung
    filtered = filtered.filter((attraction) => {
      if (!userLocation || !attraction.latitude || !attraction.longitude) return true;
      const dist = parseFloat(
        calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          attraction.latitude,
          attraction.longitude
        )
      );
      return dist <= distance;
    });

    setFilteredAttractions(filtered);
    setShowModelComment(false);
  };

  const modalRef = useRef(null);
  const showModal = () => modalRef.current?.show();
  const hideModal = () => modalRef.current?.hide();

  const keyboardOffset = Platform.OS === 'ios' ? 150 : 0;




  return (
    <SafeAreaView style={[styles.container, isDarkMode ? { backgroundColor: '#1C1D21' } : { backgroundColor: 'hsl(0,0%,85%)' }]}>

      <View style={styles.header}>


        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
          <Octicons name="gear" size={28} color={isDarkMode ? 'white' : 'black'} />
        </TouchableOpacity>

        <Text style={[styles.title, isDarkMode ? { color: 'white' } : { color: 'black' }]}>SAVE DAILY</Text>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <MaterialCommunityIcons name="shopping-outline" size={30} color={isDarkMode ? 'white' : 'black'} />
        </TouchableOpacity>


      </View>






      <View style={[styles.searchbarbox, isDarkMode ? { backgroundColor: '#232229' } : { backgroundColor: 'white' }]}>
        <Octicons name="search" size={24} color={isDarkMode ? 'white' : 'black'} />

        <TextInput style={styles.searchbar}
          placeholder="What's around?"
          placeholderTextColor={isDarkMode ? 'white' : 'black'}
          value={searchQuery}
          onChangeText={handleSearch}

        />



        <TouchableOpacity onPress={() => setShowModelComment(true)}>
          <Octicons name="list-unordered" size={24} color={isDarkMode ? 'white' : 'black'} />
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
              <View style={styles.touchable}></View>
            </TouchableWithoutFeedback>

            <View style={[styles.modalContainer, isDarkMode ? { backgroundColor: '#1C1D21' } : { backgroundColor: 'white' }]}>
              <View style={[styles.categoryContainer]}>
                <TouchableOpacity
                  style={[styles.categoryButton, activeButton === 'restaurants' && styles.activeCategoryButton]}
                  onPress={() => handleButtonPress('restaurants')}
                >
                  <MaterialIcons name="fastfood" size={24} color={activeButton === 'restaurants' ? 'white' : 'white'} />

                  <Text style={[styles.filtertitle, { color: activeButton === 'restaurants' ? 'white' : 'white' }]}>
                    Restaurants
                  </Text>
                  <Octicons name={activeButton === 'restaurants' ? 'chevron-down' : 'chevron-right'} size={20} color="white" style={{ marginTop: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.categoryButton, activeButton === 'attractions' && styles.activeCategoryButton]}
                  onPress={() => handleButtonPress('attractions')}
                >
                  <MaterialIcons name="local-activity" size={24} color={activeButton === 'attractions' ? 'white' : 'white'} />
                  <Text style={[styles.filtertitle, { color: activeButton === 'attractions' ? 'white' : 'white' }]}>
                    Attractions
                  </Text>
                  <Octicons name={activeButton === 'attractions' ? 'chevron-down' : 'chevron-right'} size={20} color="white" style={{ marginTop: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.categoryButton, activeButton === 'bars' && styles.activeCategoryButton]}
                  onPress={() => handleButtonPress('bars')}
                >
                  <MaterialIcons name="local-bar" size={24} color={activeButton === 'bars' ? 'white' : 'white'} />
                  <Text style={[styles.filtertitle, { color: activeButton === 'bars' ? 'white' : 'white' }]}>Bars</Text>
                  <Octicons name={activeButton === 'bars' ? 'chevron-down' : 'chevron-right'} size={20} color="white" style={{ marginTop: 5 }} />
                </TouchableOpacity>
              </View>

              <View style={styles.sliderContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <Text style={styles.sliderLabel}>Radius</Text>
                  <Text style={styles.sliderLabel}>{distance} km</Text>
                </View>

                <Slider
                  style={styles.slider}
                  minimumValue={1}
                  maximumValue={100}
                  step={1}
                  value={distance}
                  onValueChange={(value) => setDistance(value)}
                  minimumTrackTintColor="white"
                  maximumTrackTintColor="#81858F"
                  thumbTintColor="#2e3038"
                />
              </View>

              <View style={styles.priceSection}>
                {['euro_1', 'euro_2', 'euro_3', 'euro_4'].map((buttonName, index) => {
                  const labels = ['1 to 5 €', '5 to 10 €', '10 to 15 €', '20+ €'];
                  return (
                    <TouchableOpacity
                      key={buttonName}
                      style={[styles.buttonEuro, activeEuroButton === buttonName && styles.activeButton]}
                      onPress={() => handleEuroButtonPress(buttonName)}
                    >
                      <Text style={styles.eurLabel}>{labels[index]}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              <TouchableOpacity onPress={applyFilters} style={styles.submitButton}>
                <Text style={styles.buttonText}>SEARCH</Text>
              </TouchableOpacity>
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





      {loading ? (
        <LottieView
          source={require('../../assets/attractionsLoading.json')}
          autoPlay
          loop
          style={{ width: 200, height: 200, backgroundColor: '#1C1D21', alignSelf: 'center', }}
        />
      ) : (
        <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          {filteredAttractions.length > 0 ? (
            filteredAttractions.map((attraction) => {
              if (!attraction.latitude || !attraction.longitude) {
                console.log(`⚠️ Fehlende Koordinaten für Attraction ${attraction.attractionName}`);
                return null;
              }

              const distance = userLocation
                ? calculateDistance(
                  userLocation.latitude,
                  userLocation.longitude,
                  attraction.latitude,
                  attraction.longitude
                )
                : 'Standort nicht verfügbar';

              console.log(`📍 Entfernung zu ${attraction.attractionName}: ${distance}`);

              return (
                <TouchableOpacity
                  key={attraction.attractionId}
                  onPress={() => navigation.navigate('AttractionScreen', { attraction, distance })}
                >
                  <View style={[styles.attractioncontainer, isDarkMode ? { backgroundColor: '#232229' } : { backgroundColor: 'hsl(0,0%,95%)' }]}>
                    <View style={styles.attractionimage}>
                      <Image
                        style={styles.bigLogo}
                        source={{
                          uri: attraction.bigLogo,
                        }}
                      />
                      <View style={styles.attractionLogo}>
                        <Image
                          style={styles.bigLogo}
                          source={{
                            uri: attraction.smallLogo,
                          }}
                        />
                      </View>
                      <View style={styles.attractioninput}>
                        <TouchableOpacity
                          onPress={() => toggleLike(attraction.attractionId)}
                          style={[styles.attractionheart, isDarkMode ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]}>
                          <MaterialCommunityIcons name={attraction.liked ? 'cards-heart' : 'cards-heart-outline'}
                            size={30}
                            color={attraction.liked ? 'red' : isDarkMode ? 'white' : 'black'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('QrCodeScreen')}>
                          <View style={[styles.attractionqrcode, isDarkMode ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]}>
                            <View style={{ marginVertical: 10 }}>
                              <MaterialCommunityIcons name="qrcode-scan" size={25} color={isDarkMode ? 'white' : 'black'} />
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>


                    <View style={styles.headline}>
                      <Text style={[styles.attractionlabel, isDarkMode ? { color: 'white' } : { color: 'black' }]}>{attraction.attractionName.toUpperCase()}</Text>

                      <View style={[styles.circleDeals, isDarkMode ? { backgroundColor: 'black', borderColor: 'white' } : { backgroundColor: 'white', borderColor: 'black' }]}>
                        <Text style={[styles.dealslabel, isDarkMode ? { color: 'white' } : { color: 'black' }]}>{attraction.discount}%</Text>
                      </View>
                    </View>
                    <View style={styles.headlineinfos}>
                      <View style={styles.infos}>
                        <Text style={[styles.headlinetext, isDarkMode ? { color: 'white' } : { color: 'black' }]}>
                          <Octicons name="feed-star" size={16} color={isDarkMode ? 'white' : 'black'} /> {attraction.rating.toFixed(1)} ({attraction.ratingAmount.toLocaleString('de-DE')})
                        </Text>
                      </View>
                      <View style={styles.infos}>
                        <Text style={[styles.headlinetext, isDarkMode ? { color: 'white' } : { color: 'black' }]}>
                          <Octicons name="feed-rocket" size={16} color={isDarkMode ? 'white' : 'black'} /> {distance}
                        </Text>
                      </View>
                      <View style={styles.infos}>
                        <Text style={[styles.headlinetext, isDarkMode ? { color: 'white' } : { color: 'black' }]}>
                          <Octicons name="feed-tag" size={16} color={isDarkMode ? 'white' : 'black'} /> {attraction.averageOrderPrice}€ per Order
                        </Text>
                        <Text style={[styles.openinghoursopen, isDarkMode ? { color: '#75f564' } : { color: 'hsl(113, 88%, 30%)' }]}>Currently open</Text>
                      </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.interactionSection}>
                      <TouchableOpacity onPress={showModal}>
                        <MaterialCommunityIcons name="comment-outline" size={24} color={isDarkMode ? 'white' : 'black'} />
                      </TouchableOpacity>
                      <Text style={[styles.interactionCounter, isDarkMode ? { color: 'white' } : { color: 'black' }]}>10</Text>
                      <TouchableOpacity onPress={() => toggleLike(attraction.attractionId)}>
                        <MaterialCommunityIcons
                          name={attraction.liked ? 'cards-heart' : 'cards-heart-outline'}
                          size={24} color={attraction.liked ? 'red' : isDarkMode ? 'white' : 'black'}
                          style={{ marginLeft: 5 }} />
                      </TouchableOpacity>
                      <Text style={[styles.interactionCounter, isDarkMode ? { color: 'white' } : { color: 'black' }]}>{attraction.liked ? 1 : 0}</Text>

                    </View>


                  </View>
                </TouchableOpacity>
              );
            })
          ) : (
            <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>Keine Attraktionen gefunden.</Text>
          )}
        </ScrollView>
      )}

      <SwipeModal bg='#1C1D22'
        ref={modalRef}
        maxHeight={800}
        defaultHeight={400}
        barColor='#cacfd6'
        barContainerStyle={styles.commentsHandleBar}
        style={{ borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
        <KeyboardAvoidingView
          behavior={'padding'}
          style={{ flex: 1 }}
          keyboardVerticalOffset={keyboardOffset} // Anpassen bei Bedarf
          enabled >
          <Text style={styles.commentTitle}>Comments</Text>
          <View style={styles.commentLine} />
          <ScrollView style={styles.commentSection}>
            <View style={styles.commentMessageContainer}>
              <View style={styles.profilePictureContainer}>
                <Image style={styles.profilePicture} source={require('../../assets/yordanicon.png')} />
              </View>
              <View style={styles.userSection}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.userName}>yordan.simeonov</Text>
                  <Text style={styles.commentDate}>2d</Text>
                </View>
                <Text style={styles.comment}>essen ist mega geil</Text>
              </View>
              <View style={styles.likeSection}>
                <MaterialCommunityIcons name='cards-heart-outline' size={24} color='hsl(0, 0%, 70%)' />
                <Text style={styles.commentLikes}>25</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.commentLine} />
          <View style={styles.commentContainer}>

            <View style={styles.profilePictureContainer}>
              <Image style={styles.profilePicture} source={require('../../assets/yordanicon.png')} />
            </View>
            <TextInput
              style={styles.messageContainer}
              placeholder='Add a comment for Astor Grand Cinema'
              placeholderTextColor='hsl(0, 0%, 45%)'
              
            >

            </TextInput>
          </View>
        </KeyboardAvoidingView>
      </SwipeModal>





    </SafeAreaView>

  );
}










