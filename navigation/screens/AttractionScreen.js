import Octicons from '@expo/vector-icons/Octicons';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import MapView, { Marker } from 'react-native-maps';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useRef, useState, useEffect, useMemo } from "react";
import LottieView from 'lottie-react-native';
import { Animated, ActivityIndicator, Modal, Share, Platform, Linking, StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, TouchableOpacity, Image, ImageBackground, FlatList, TouchableWithoutFeedback } from 'react-native';
import { fetchAttractionById } from '../../components/backendapi.js';
import styles from './AttractionScreenStyles.js';
import { useTheme } from '../../components/ThemeContext.js';

export default function AttractionScreen({ navigation, route }) {
  const [attraction, setAttraction] = useState(route.params?.attraction || null);
  const [loading, setLoading] = useState(!route.params?.attraction);
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ShowComment, setShowModelComment] = useState(false);
  const [animateModal, setanimateModal] = useState(false);
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const images = attraction?.attractionPictures || [];
  const categories = attraction?.categories || [];
  const distance = route.params?.distance || "N/A";

  useEffect(() => {
    const loadAttraction = async () => {
      if (!attraction) {
        try {
          const data = await fetchAttractionById(route.params?.attractionId);
          setAttraction(data);
        } catch (error) {
          console.error("Fehler beim Laden der Attraktion:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadAttraction();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="white" style={{ marginTop: 20 }} />;
  }

  if (!attraction) {
    return <Text style={{ color: 'white', textAlign: 'center', marginTop: 20 }}>Keine Daten gefunden</Text>;
  }

  // Weitere Funktionen und Variablen
  const groupedCategories = categories.reduce((acc, category) => {
    if (!acc[category.categoryTitle]) {
      acc[category.categoryTitle] = [];
    }
    acc[category.categoryTitle].push(category);
    return acc;
  }, {});

  const uniqueTitles = Object.keys(groupedCategories);

  const removeDuplicates = (categories) => {
    const seen = new Map();
    return categories.filter(category => {
      const key = `${category.categoryLogo}-${category.categoryName}`;
      if (seen.has(key)) {
        return false;
      }
      seen.set(key, true);
      return true;
    });
  };

  const dealsCategories = {};
  const dishesCategories = {};


  uniqueTitles.forEach((title, index) => {
    if (index === 0) {
      dealsCategories[title] = removeDuplicates(groupedCategories[title]);
    } else {
      dishesCategories[title] = removeDuplicates(groupedCategories[title]);
    }
  });

  const initialLocation = {
    latitude: attraction.latitude,
    longitude: attraction.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  };

  const handleLocation = async () => {
    try {
      setLoading(true);
      const destinationName = encodeURIComponent(attraction.attractionName);
      const lat = attraction.latitude;
      const lon = attraction.longitude;

      const url = Platform.select({
        ios: `maps://?daddr=${lat},${lon}(${destinationName})&dirflg=d`,
        android: `google.navigation:q=${lat},${lon}(${destinationName})`,
        default: `https://www.google.com/maps/dir/?api=1&destination=${destinationName},${lat},${lon}&travelmode=driving`,
      });

      if (url) {
        await Linking.openURL(url);
      }
    } catch (error) {
      console.error('Failed to open URL:', error);
    } finally {
      setLoading(false);
    }
  };



  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Hier ist ein interessanter Link zu einer Attraktion: https://save-daily.app/share/deddad4c-7267-4f1b-b05b-fa9c0684e72d ',
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

  const handleNext = () => {
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  const scrollToIndex = (index) => {
    if (flatListRef.current) {
      try {
        flatListRef.current.scrollToIndex({ index, animated: true });
      } catch (error) {
        console.warn("scrollToIndex error:", error);
      }
    } else {
      console.warn("FlatList reference not found");
    }
  };

  const Header_Max_Height = 240;
  const Header_Min_Height = 120;
  const Scroll_Distance = Header_Max_Height - Header_Min_Height;

  const DynamicHeader = ({ value }) => {
    const animatedHeaderHeight = value.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: [Header_Max_Height, Header_Min_Height],
      extrapolate: 'clamp',
    });

    const animatedOpacity = value.interpolate({
      inputRange: [0, Scroll_Distance],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    const { colorScheme } = useTheme();
    const isDarkMode = colorScheme === 'dark'

    return (
      <Animated.View style={[styles.header]}>
        <Animated.View
          style={{ width: '100%', height: animatedHeaderHeight, position: 'absolute' }}
        >
          <View style={styles.smallheader}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.iconLeft}
            >
              <Octicons name="chevron-left" size={35} color={isDarkMode ? 'white' : 'black'} />
            </TouchableOpacity>
            <Text style={[styles.title, isDarkMode ? { color: 'white' } : { color: 'black' }]}>
              {attraction.attractionName}
            </Text>
            <TouchableOpacity
              onPress={handleShare}
              style={styles.iconRight}
            >
              <Octicons name="share" size={30} color={isDarkMode ? 'white' : 'black'} />
            </TouchableOpacity>
          </View>
        </Animated.View>

        <Animated.Image
          source={{ uri: attraction.bigLogo }}
          style={{ height: animatedHeaderHeight, opacity: animatedOpacity }}
        />

        <Animated.View
          style={{ width: '100%', height: animatedHeaderHeight, position: 'absolute', opacity: animatedOpacity }}
        >
          <View style={styles.bigheader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={[{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 45, width: 45, borderRadius: 90, marginHorizontal: 210 },
                isDarkMode ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' } : { backgroundColor: 'rgba(240, 240, 240, 0.8)' }
              ]}>
                <View style={{ alignSelf: 'center', marginVertical: 9 }}>
                  <Octicons name="chevron-left" size={24} color={isDarkMode ? 'white' : 'black'} />
                </View>
              </View>
            </TouchableOpacity>
            <View style={[
              { backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 45, width: 45, borderRadius: 90, marginHorizontal: 10 },
              isDarkMode ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' } : { backgroundColor: 'rgba(240, 240, 240, 0.8)' }
            ]}>
              <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                <View style={{ alignSelf: 'center', marginVertical: 10 }}>
                  <MaterialCommunityIcons name="shopping-outline" size={24} color={isDarkMode ? 'white' : 'black'} />
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleShare}>
              <View style={[{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 45, width: 45, borderRadius: 90 },
                isDarkMode ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' } : { backgroundColor: 'rgba(240, 240, 240, 0.8)' }
              ]}>
                <View style={{ alignSelf: 'center', marginVertical: 9 }}>
                  <Octicons name="share" size={24} color={isDarkMode ? 'white' : 'black'} />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.bigfooter}>
            <Image
              style={styles.logo}
              source={{ uri: attraction.smallLogo }}
            />
            <TouchableOpacity onPress={() => Linking.openURL(Platform.select({ ios: attraction.website, android: attraction.website }))}>
              <View style={[styles.infobutton, isDarkMode ? { backgroundColor: 'rgba(0, 0, 0, 0.5)' } : { backgroundColor: 'rgba(240, 240, 240, 0.8)' }]}>
                <Octicons name="globe" size={18} color={isDarkMode ? 'white' : 'black'} />
                <Text style={[styles.infolabel, isDarkMode ? { color: 'white' } : { color: 'black' }]}>Web</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Animated.View>
    );
  };
  const { colorScheme } = useTheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <View style={[styles.maincontainer, isDarkMode ? { backgroundColor: '#1C1D21' } : { backgroundColor: 'hsl(0,0%,85%)' }]}>
      <DynamicHeader value={scrollOffsetY} />
      <ScrollView
        scrollEventThrottle={5}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}>
        <View style={styles.companyinfo}>
          <Text style={[styles.companylabel, isDarkMode ? { color: 'white' } : { color: 'black' }]}>
            {attraction.attractionName.toUpperCase()}
          </Text>
          <View style={styles.headline}>
            <View style={[styles.dot, isDarkMode ? { backgroundColor: 'white' } : { backgroundColor: 'black' }]} />
            <Text style={[styles.headlinetext, isDarkMode ? { color: 'white' } : { color: 'black' }]}>
              <Octicons name="feed-star" size={16} color={isDarkMode ? 'white' : 'black'} /> {attraction.rating.toFixed(1)} ({attraction.ratingAmount.toLocaleString('de-DE')})
            </Text>
            <View style={[styles.dot, isDarkMode ? { backgroundColor: 'white' } : { backgroundColor: 'black' }]} />
            <Text style={[styles.headlinetext, isDarkMode ? { color: 'white' } : { color: 'black' }]}>
              <Octicons name="feed-rocket" size={16} color={isDarkMode ? 'white' : 'black'} /> {distance}
            </Text>
            <View style={[styles.dot, isDarkMode ? { backgroundColor: 'white' } : { backgroundColor: 'black' }]} />
            <Text style={[styles.headlinetext, isDarkMode ? { color: 'white' } : { color: 'black' }]}>
              <Octicons name="feed-tag" size={16} color={isDarkMode ? 'white' : 'black'} /> {attraction.averageOrderPrice}€ per Order
            </Text>
            <View style={[styles.dot, isDarkMode ? { backgroundColor: 'white' } : { backgroundColor: 'black' }]} />
          </View>
          <Text style={[styles.descriptionlabel, isDarkMode ? { color: 'white' } : { color: 'black' }]}>{attraction.description}</Text>
          <Text style={[styles.openinglabel, isDarkMode ? { color: 'white' } : { color: 'black' }]}>{attraction.openingTimes}</Text>
          <View style={styles.headlineactions}>
            <TouchableOpacity onPress={() => navigation.navigate('GroupOrderScreen')}>
              <View style={[styles.grouporderbutton, isDarkMode ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]}>
                <MaterialCommunityIcons name="account-multiple-plus" size={20} color={isDarkMode ? 'white' : 'black'} />
                <Text style={[styles.buttonlabel, isDarkMode ? { color: 'white' } : { color: 'black' }]}>Group order</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('QrCodeScreen')}>
              <View style={[styles.qrcodebutton, isDarkMode ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]}>
                <MaterialCommunityIcons name="qrcode-scan" size={20} color={isDarkMode ? 'white' : 'black'} />
                <Text style={[styles.buttonlabel, isDarkMode ? { color: 'white' } : { color: 'black' }]}> Show QR-Code</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.dealsinfo}>
          {Object.entries(dealsCategories).map(([title, categories]) => (
            <View key={title}>
              <View style={styles.line} />
              <Text style={[styles.deallabel, isDarkMode ? { color: 'white' } : { color: 'black' }]}>Top {title} Deals</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => (
                  <View key={index} style={styles.deal}>
                    <View style={[styles.cashbackcontainer, isDarkMode ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]}>
                      <Text style={[styles.cashbackpercentagelabel, isDarkMode ? { color: '#75f564' } : { color: 'hsl(113, 88%, 30%)' }]}>Save up to {attraction.discount}%</Text>
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('ProductScreen', {
                          imageUrl: category.categoryThumbnail,
                          title: category.categoryName,
                          text: category.categoryDescription,
                          averagePrice: category.categoryAveragePrice,
                          rating: category.categoryRating,
                          ratingAmount: category.categoryRatingAmount,
                          attractionId: attraction.attractionId
                        })
                      }
                    >
                      <Image style={styles.deallogo} source={{ uri: category.categoryLogo }} />
                    </TouchableOpacity>
                    <Text style={[styles.dealname, isDarkMode ? { color: 'white' } : { color: 'black' }]}>{category.categoryName}</Text>
                  </View>
                ))}
              </ScrollView>
              <View style={styles.line} />
            </View>
          ))}
        </View>
        {Object.keys(dishesCategories).length > 0 && (
          <View style={styles.dishesinfo}>
            {Object.entries(dishesCategories).map(([title, categories]) => (
              <View key={title}>
                <Text style={[styles.disheslabel, isDarkMode ? { color: 'white' } : { color: 'black' }]}>Top {title} Deals</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  {categories.map((category, index) => (
                    <View key={index} style={styles.dish}>
                      <View style={[styles.cashbackcontainer, isDarkMode ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]}>
                        <Text style={[styles.cashbackpercentagelabel, isDarkMode ? { color: '#75f564' } : { color: 'hsl(113, 88%, 30%)' }]}>Save up to {attraction.discount}%</Text>
                      </View>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('ProductScreen', {
                            imageUrl: category.categoryThumbnail,
                            title: category.categoryName,
                            text: category.categoryDescription,
                            averagePrice: category.categoryAveragePrice,
                            rating: category.categoryRating,
                            ratingAmount: category.categoryRatingAmount,
                            attractionId: attraction.attractionId
                          })
                        }
                      >
                        <Image style={styles.dishlogo} source={{ uri: category.categoryLogo }} />
                      </TouchableOpacity>
                      <Text style={[styles.dishname, isDarkMode ? { color: 'white' } : { color: 'black' }]}>{category.categoryName}</Text>
                    </View>
                  ))}
                </ScrollView>
                <View style={styles.line} />
              </View>
            ))}
          </View>
        )}
        <View style={styles.picturesinfo}>
          <Text style={[styles.pictureslabel, isDarkMode ? { color: 'white' } : { color: 'black' }]}>Pictures</Text>
          <FlatList
            ref={flatListRef}
            horizontal
            pagingEnabled
            data={images}
            style={styles.picturescontainer}
            keyExtractor={(item) => item.attractionPictureId.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.picturescontainer}
                  onPress={() => navigation.navigate('PictureScreen', {
                    images: images,
                    initialIndex: currentIndex
                  })}
                >
                  <Image style={styles.picture} source={{ uri: item.attractionPicture }} />
                  <View style={styles.swipebuttons}>
                    <TouchableOpacity onPress={handlePrevious}>
                      <Octicons name="chevron-left" size={45} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleNext}>
                      <Octicons name="chevron-right" size={45} color="white" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
            onMomentumScrollEnd={(event) => {
              const newIndex = Math.round(
                event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width
              );
              setCurrentIndex(newIndex);
            }}
          />
        </View>
        <View style={{ height: 2, width: '100%', backgroundColor: 'gray' }}></View>
        <View style={styles.locationinfo}>
          <Text style={[styles.locationlabel, isDarkMode ? { color: 'white' } : { color: 'black' }]}>Location</Text>
          <View style={styles.locationcontainer}>
            <TouchableOpacity onPress={() => setShowModelComment(true)}>
              <MapView
                style={styles.locationcontainer}
                initialRegion={initialLocation}
                zoomEnabled={false}
                zoomTapEnabled={false}
                zoomControlEnabled={false}
                rotateEnabled={false}
                pitchEnabled={false}
                scrollEnabled={false}
                userInterfaceStyle={'dark'}
              >
                <Marker onPress={(e) => e.stopPropagation()} coordinate={initialLocation} />
              </MapView>
            </TouchableOpacity>
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
                  <View style={styles.modalContainer}>
                    <MapView
                      style={styles.locationcontainerModal}
                      initialRegion={initialLocation}
                      zoomEnabled={true}
                      zoomTapEnabled={true}
                      zoomControlEnabled={true}
                      rotateEnabled={true}
                      pitchEnabled={false}
                      scrollEnabled={true}
                      showsUserLocation={true}
                      userInterfaceStyle={'dark'}
                    >
                      <Marker coordinate={initialLocation} title={'Astor Grand Cinema'} description={'Kino'} />
                    </MapView>
                  </View>
                </View>
              }
              HeaderContent={
                <View style={{ width: '100%' }}>
                  <View style={[styles.handleBar, isDarkMode ? { backgroundColor: 'gray' } : { backgroundColor: 'white' }]} />
                  <TouchableOpacity onPress={handleLocation}>
                    <View style={[styles.fowardbuttonContainer, isDarkMode ? { backgroundColor: 'black' } : { backgroundColor: 'white' }]}>
                      {loading ? (
                        <LottieView
                          source={require('../../assets/location.json')}
                          autoPlay
                          loop
                          style={{ width: 50, height: 50, backgroundColor: 'white', alignSelf: 'center', borderRadius: 50, marginTop: 5 }}
                        />
                      ) : (
                        <Text style={[styles.fowardbuttonlabel, isDarkMode ? { color: 'white' } : { color: 'black' }]}>Open route</Text>
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              }
              HeaderStyle={styles.modalHeader}
              onClose={() => {
                setShowModelComment(false);
                setanimateModal(false);
              }}
            />
          </View>
        </View>
        <View style={styles.line} />
      </ScrollView>
    </View>
  );
}
