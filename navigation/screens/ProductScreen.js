import styles from './ProductScreenStyles.js';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useState, useEffect, useContext } from "react";
import { View, Image, TouchableOpacity, Text, ImageBackground, Share, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';
import { CartContext } from '../../components/CartContext.js';

export default function ProductScreen({ route, navigation }) {
  const { incrementCounter, addToCart, cartItems, addRecentlyViewedProduct } = useContext(CartContext);
  const [activeButton, setActiveButton] = useState(null);
  const [filteredPrices, setFilteredPrices] = useState([]);
  const [products, setProducts] = useState([]);
  const { imageUrl, title, text, rating, ratingAmount, averagePrice, attractionId } = route.params;

  const handleButtonPress = (buttonName) => {
    if (activeButton === buttonName) {
      setActiveButton(null);
      setFilteredPrices([]); 
    } else {
      setActiveButton(buttonName);
      const filtered = priceData.filter(item => item.filter === buttonName);
      setFilteredPrices(filtered); 
    }
  };



  useEffect(() => {
    // Fetch products for the given attraction ID
    fetch(`http://192.168.2.54:8080/attractions/${attractionId}/products`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Server Error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const filteredProducts = data.filter(product =>
          product.categories.some(category => category.categoryName === title)
        );
        setProducts(filteredProducts);
      })
      .catch(error => console.error('Error loading products:', error));
  }, [attractionId]);

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Hier ist ein interessanter Deal zu einen Film: https://save-daily.app/share/deddad4c-7267-4f1b-b05b-fa9c0684e72d', 
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



  const handleCart = (product) => {
    addToCart(product);
    incrementCounter();
    Toast.show({
      type: 'customCartToast',
      text1: 'Added to Cart 🛒',
      text2: 'View your cart',
      visibilityTime: 1250
    });
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.header}>
        <ImageBackground style={styles.deallogo} source={{ uri: imageUrl }}>
          
          <View style={styles.headerbuttons}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 45, width: 45, borderRadius: 90 }}>
                <View style={{ alignSelf: 'center', marginVertical: 9 }}>
                  <Octicons name="chevron-left" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 45, width: 45, borderRadius: 90, marginHorizontal: 10, marginLeft: 230 }}>
                <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
                  <View style={{ alignSelf: 'center', marginVertical: 10 }}>
                    <MaterialCommunityIcons name="shopping-outline" size={24} color="white" />
                    {cartItems.length > 0 && (
                      <View style={styles.badge}>
                        <Text style={styles.badgeText}>{cartItems.length}</Text>
                      </View>
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShare}>
              <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', height: 45, width: 45, borderRadius: 90 }}>
                <View style={{ alignSelf: 'center', marginVertical: 9 }}>
                  <Octicons name="share" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <Toast
          config={{
            customCartToast: ({ text1, text2 }) => (
              <View style={{
                backgroundColor: '#1C1D21',
                width: 300,
                borderRadius: 10,
                padding: 15,
                alignItems: 'center',
                borderLeftColor: 'white',
                borderLeftWidth: 5,
              }}>
                <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }} >
                  {text1 || 'Added to Cart 🛒'}
                </Text>
                <Text style={{ color: 'white', fontSize: 15, marginTop: 3, fontStyle: 'italic' }}>
                  {text2 || 'View your Cart'}
                </Text>
              </View>
            )
          }}
        />
      </View>
      <ScrollView>
        <View style={styles.infosection}>
          <Text style={styles.movietitle}>{title}</Text>
          <View style={styles.headline}>
            <View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginTop: 17, paddingLeft: 30 }} />
            <View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginTop: 12, marginTop: 17 }} />
            <Text style={styles.headlinetext}><Octicons name="feed-star" size={16} color="white" /> {rating} ({ratingAmount.toLocaleString('de-DE')}) </Text>
            <View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginTop: 12, marginTop: 17 }} />
            <Text style={styles.headlinetext}><Octicons name="feed-tag" size={16} color="white" /> {averagePrice} € per Order </Text>
            <View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginTop: 12, marginTop: 17 }} />
            <View style={{ height: 5, width: 5, borderRadius: 100, backgroundColor: 'white', marginTop: 17, paddingRight: 30 }} />
          </View>
          <Text style={styles.descriptionlabel}>{text}</Text>
          <View style={styles.headlineactions}>
            <TouchableOpacity onPress={() => navigation.navigate('GroupOrderScreen')}>
              <View style={styles.grouporderbutton}>
                <MaterialCommunityIcons name="account-multiple-plus" size={20} color="white" /><Text style={styles.buttonlabel}> Group order</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('QrCodeScreen')}>
              <View style={styles.qrcodebutton}>
                <MaterialCommunityIcons name="qrcode-scan" size={20} color="white" /><Text style={styles.buttonlabel}> Show QR-Code</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.line} />
        </View>

        {products.map(product => (
          <View key={product.productId}>
            <TouchableOpacity
              style={styles.productContainer}
              onPress={() => {
                addRecentlyViewedProduct(product);
                navigation.navigate('DealScreen', {
                  productName: product.productName,
                  productPrice: product.productPrice,
                  productInfo: product.productInfo,
                  productBanner: product.productBanner,
                  productId: product.productId
                });
              }}
            >
              <View style={styles.productRow}>
                <Text style={styles.productName}>{product.productName}</Text>
                <Text style={styles.productPrice}>{product.productPrice.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</Text>
              </View>
              <View style={styles.productRow}>
                <Text style={styles.productInfo}>{product.productInfo}</Text>

                <View style={styles.productBannerContainer}>
                  <Image
                    style={styles.productBanner}
                    source={{ uri: product.productBanner }}
                  />
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.line} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}