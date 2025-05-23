import styles from './CartScreenStyles.js';
import Octicons from '@expo/vector-icons/Octicons';
import * as React from 'react';
import { useContext } from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CartContext } from '../../components/CartContext.js';



export default function CartScreen({ navigation }) {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity, recentlyViewedProducts, showToast} = useContext(CartContext);


    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ left: 20 }}>
                        <Octicons name="chevron-left" size={40} color="white" />
                    </View>
                </TouchableOpacity>
                <Text style={styles.title}>Cart</Text>
            </View>

            



            <ScrollView showsHorizontalScrollIndicator={false}>
                {cartItems.length === 0 ? (

                    <View style={styles.cartInfo}>

                        <Image
                            style={styles.cartLogo}
                            source={require('../../assets/shopping-cart.png')}
                        />
                        <Text style={{color: 'red', fontSize: 50}}>Context: {showToast.toString()}</Text>
                        <Text style={styles.mainInfo}>Your shopping cart is empty</Text>
                        <Text style={styles.sideInfo}>No items in your cart yet! Discover exciting attractions and add them to your adventure.</Text>
                    </View>
                ) : (

                    <View>
                        <Text style={styles.cartItems}>Your Items ({cartItems.length})</Text>
                        <Text style={{color: 'red', fontSize: 50}}>Context: {showToast.toString()}</Text>
                        {cartItems.map((item, index) => (
                            <View key={index} style={styles.cartItemContainer}>
                                <View style={styles.row}>
                                    <View style={styles.productBannerContainer}>
                                        <Image
                                            style={styles.productBanner}
                                            source={{ uri: item.productBanner }}
                                        />
                                    </View>
                                    <View style={styles.details}>

                                        <Text style={styles.productName}>{item.productName}</Text>


                                        <Text style={styles.cashbackBoost}>Leave Review</Text>

                                        <View style={styles.rowPercentage}>
                                            <Text style={styles.productPrice}>
                                                {(item.productPrice * item.quantity).toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                                            </Text>
                                            <View style={styles.dealDiscountContainer}>
                                                <Text style={styles.dealDiscountLabel}>
                                                    {parseFloat(((((item.finalDealPrice) / item.productPrice) - 1) * 100)
                                                        .toFixed(2))
                                                        .toString()
                                                        .replace(/\.00$/, '')}%
                                                </Text>
                                            </View>
                                        </View>
                                        <Text style={styles.dealPrice}>
                                            {(item.finalDealPrice * item.quantity).toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                                        </Text>
                                        <View style={styles.addDeleteSection}>
                                            <TouchableOpacity style={styles.button} onPress={() => decrementQuantity(index)}>
                                                <Octicons name="no-entry" size={20} color="white" />
                                            </TouchableOpacity>
                                            <Text style={styles.counter}>{item.quantity}</Text>
                                            <TouchableOpacity style={styles.button} onPress={() => incrementQuantity(index)}>
                                                <Octicons name="plus-circle" size={20} color="white" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>


                        ))}
                    </View>
                )}
                <View style={styles.suggestedInfo}>

                    <Text style={styles.suggestedLabel}>YOUR RECENTLY VIEWED PRODUCTS</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {recentlyViewedProducts.length > 0 ? (
                            recentlyViewedProducts.map((product, index) => (
                                <View key={product.productId}>
                                    <TouchableOpacity
                                        key={index}
                                        style={styles.suggestedContainer}
                                        onPress={() =>
                                            navigation.navigate('DealScreen', {
                                                productName: product.productName,
                                                productPrice: product.productPrice,
                                                productBanner: product.productBanner,
                                                productId: product.productId
                                            })
                                        }
                                    >
                                        <View style={styles.recentProductImage}>
                                            <Image source={{ uri: product.productBanner }} style={styles.recentProductLogo} />
                                        </View>


                                    </TouchableOpacity>
                                    <Text style={styles.recentProductName}>{product.productName}</Text>
                                    <Text style={styles.recentProductPrice}>{product.productPrice.toLocaleString('de-DE', { minimumFractionDigits: 2 })} €</Text>
                                    <Text style={styles.recentFinalPrice}>3,50 €</Text>
                                </View>
                            ))
                        ) : (
                            <Text style={styles.noProductsText}></Text>
                        )}

                    </ScrollView>
                </View>
            </ScrollView>

            {cartItems.length > 0 && (
                <View style={styles.checkoutSection}>
                    <View style={styles.line} />
                    <View style={styles.rowCheckout}>
                        <Text style={styles.totalPriceLabel}>Total Price</Text>
                        <Text style={styles.totalPrice}>
                            {cartItems
                                .reduce((total, item) => total + item.finalDealPrice * item.quantity, 0)
                                .toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                        </Text>
                    </View>
                    <Text style={styles.totalPriceInfo}>incl. VAT</Text>
                    <TouchableOpacity style={styles.checkoutContainer} onPress={() => navigation.navigate('CheckoutScreen')}>
                        <Text style={styles.continueLabel}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            )}

        </View>

    );
}