import React, { useState, useEffect, useContext } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, Keyboard, Alert, TouchableWithoutFeedback, ImageBackground, TextInput } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import styles from './DealScreenStyles.js';
import { CartContext } from '../../components/CartContext.js';

export default function DealScreen({ navigation, route }) {

    const { incrementCounter,addToCart } = useContext(CartContext);
    const [isPressedReview, setIsPressedReview] = useState(false);
    const [isPressedFollow, setIsPressedFollow] = useState(false);
    const [isPressedStory, setIsPressedStory] = useState(false);
    const [isPressedPhoto, setIsPressedPhoto] = useState(false);

    const BASE_DEAL_PRICE = 10;
    const numberOfSelected = [isPressedReview, isPressedFollow, isPressedStory, isPressedPhoto].filter(Boolean).length;
    const finalDealPrice = BASE_DEAL_PRICE - (numberOfSelected * 2);

    const { productName, productPrice, productInfo, productBanner, productId } = route.params;

    


    const handleCart = () => {
        const product = {productName, productPrice, productInfo, productBanner, productId, finalDealPrice};
        addToCart(product);
        navigation.goBack();
        incrementCounter();
        Toast.show({
            type: 'customCartToast',
            text1: 'Added to Cart 🛒',
            text2: 'View your cart',
            visibilityTime: 1200
        });
    };


    return (
        <View style={styles.mainContainer}>
            <View style={styles.handleBar} />
            <Text style={styles.productTitle}>{productName}</Text>
            <View style={styles.productBannerContainer}>
                <Image
                    style={styles.productBanner}
                    source={{ uri: productBanner }}
                />
            </View>
            <Text style={styles.productPrice}>{productPrice.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</Text>
            <Text style={styles.dealPrice}>
                {finalDealPrice.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
            </Text>
            <Text style={styles.dealInfo}>Get up to <Text style={styles.cashbackAmountOverall}>8 €</Text> cashback with Cashback Boost!</Text>
            <View style={styles.row}>

                <TouchableOpacity
                    style={[
                        styles.cashbackContainer,
                        {
                            backgroundColor: isPressedReview ? 'black' : '#25262f',
                            borderColor: isPressedReview ? 'white' : 'gray',
                            borderWidth: 1
                        }
                    ]}
                    onPress={() => setIsPressedReview(!isPressedReview)}
                >
                    <Text style={styles.cashbackLabel}>Leave Review</Text>
                    <View style={[
                        styles.cashbackLogoContainer,
                        {
                            backgroundColor: isPressedReview ? 'white' : 'black',
                        }
                    ]}>
                        <Image style={styles.logo} source={require('../../assets/google.png')} />
                    </View>
                    <Text style={[
                        styles.cashbackAmount,
                        { color: isPressedReview ? '#75f564' : 'white' }
                    ]}>2 €</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.cashbackContainer,
                        {
                            backgroundColor: isPressedFollow ? 'black' : '#25262f',
                            borderColor: isPressedFollow ? 'white' : 'gray',
                            borderWidth: 1
                        }
                    ]}
                    onPress={() => setIsPressedFollow(!isPressedFollow)}
                >
                    <Text style={styles.cashbackLabel}>Leave Follow</Text>
                    <View style={[
                        styles.cashbackLogoContainer,
                        {
                            backgroundColor: isPressedFollow ? 'white' : 'black',
                        }
                    ]}>
                        <Image style={styles.logo} source={require('../../assets/instagram(2).png')} />
                    </View>
                    <Text style={[
                        styles.cashbackAmount,
                        { color: isPressedFollow ? '#75f564' : 'white' }
                    ]}>2 €</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity
                    style={[
                        styles.cashbackContainer,
                        {
                            backgroundColor: isPressedStory ? 'black' : '#25262f',
                            borderColor: isPressedStory ? 'white' : 'gray',
                            borderWidth: 1
                        }
                    ]}
                    onPress={() => setIsPressedStory(!isPressedStory)}
                >
                    <Text style={styles.cashbackLabel}>Post Story</Text>
                    <View style={[
                        styles.cashbackLogoContainer,
                        {
                            backgroundColor: isPressedStory ? 'white' : 'black',
                        }
                    ]}>
                        <Image style={styles.logo} source={require('../../assets/instagram(2).png')} />
                    </View>
                    <Text style={[
                        styles.cashbackAmount,
                        { color: isPressedStory ? '#75f564' : 'white' }
                    ]}>2 €</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.cashbackContainer,
                        {
                            backgroundColor: isPressedPhoto ? 'black' : '#25262f',
                            borderColor: isPressedPhoto ? 'white' : 'gray',
                            borderWidth: 1
                        }
                    ]}
                    onPress={() => setIsPressedPhoto(!isPressedPhoto)}
                >
                    <Text style={styles.cashbackLabel}>Take Photos</Text>
                    <View style={[
                        styles.cashbackLogoContainer,
                        {
                            backgroundColor: isPressedPhoto ? 'white' : 'black',
                        }
                    ]}>
                        <Image style={styles.logo} source={require('../../assets/camera.png')} />
                    </View>
                    <Text style={[
                        styles.cashbackAmount,
                        { color: isPressedPhoto ? '#75f564' : 'white' }
                    ]}>2 €</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addCartContainer} onPress={handleCart}>
                <View style={styles.cartRow}>
                    <MaterialCommunityIcons name="cart-variant" size={30} color="white" />
                    <Text style={styles.addCartLabel}>Add to Cart</Text>
                </View>
            </TouchableOpacity>


        </View>


    )
}