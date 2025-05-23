import * as React from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity, Modal,Pressable } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { useContext, useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './CheckoutScreenStyles.js';
import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';
import { CartContext } from '../../components/CartContext.js';


export default function CheckoutScreen({ navigation, route }) {
    const { cartItems, clearCart } = useContext(CartContext);
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handleBuyNow = () => {
        clearCart();
        navigation.goBack();
    };

    const paymentMethods = [
        { id: 'apple-pay', label: 'Apple Pay', icon: require('../../assets/apple-pay.png') },
        { id: 'paypal', label: 'Paypal', icon: require('../../assets/paypal.png') },
        { id: 'card', label: 'Card', icon: require('../../assets/credit-card.png') }
    ];





    return (
        <View style={styles.mainContainer}>
            <View style={styles.handleBar} />
            <View style={styles.header}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="window-close" size={32} color="white" />
                </TouchableOpacity>
                <Text style={styles.title}>Checkout</Text>
            </View>
            {cartItems.length > 0 && (
                <View style={styles.orderContainer}>
                    <Text style={styles.orderTitle}>Order</Text>


                    <Text style={styles.orderInfo}>
                        You're receiving <Text style={styles.cashbackAmountOverall}>
                            {cartItems
                                .reduce((total, item) => total + (item.productPrice - item.finalDealPrice) * item.quantity, 0)
                                .toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                        </Text> Cashback
                    </Text>

                    <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Quantity</Text>
                        <Text style={styles.price}>
                            {cartItems.reduce((total, item) => total + item.quantity, 0)}
                        </Text>
                    </View>

                    <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Products</Text>
                        <Text style={styles.price}>
                            {cartItems.length > 3
                                ? cartItems.slice(0, 3).map(item => item.productName).join(', ') + '...'
                                : cartItems.map(item => item.productName).join(', ')
                            }
                        </Text>
                    </View>

                    <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Regular Price</Text>
                        <Text style={styles.price}>
                            {cartItems
                                .reduce((total, item) => total + item.productPrice * item.quantity, 0)
                                .toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                        </Text>
                    </View>

                    <View style={styles.priceRow}>
                        <Text style={styles.totalPriceLabel}>Total Adjusted Price</Text>
                        <Text style={styles.totalPrice}>
                            {cartItems
                                .reduce((total, item) => total + item.finalDealPrice * item.quantity, 0)
                                .toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                        </Text>
                    </View>

                    <Text style={styles.summaryPriceInfo}>Total price incl. VAT</Text>
                    <Text style={styles.summaryPrice}>
                        {cartItems
                            .reduce((total, item) => total + item.finalDealPrice * item.quantity, 0)
                            .toLocaleString('de-DE', { minimumFractionDigits: 2 })} €
                    </Text>
                </View>
            )}

            <Text style={styles.paymentTitle}>Choose your payment method</Text>

            <View>
                {paymentMethods.map((method) => (
                    <TouchableOpacity
                        key={method.id}
                        style={[styles.paymentContainer,
                        selectedPayment === method.id && styles.selectedContainer

                        ]}
                        onPress={() => setSelectedPayment(method.id)}
                    >
                        <View
                            style={[
                                styles.selectButton,
                                selectedPayment === method.id && { backgroundColor: 'white' }
                            ]}
                        />
                        <Image style={styles.cardIcon} source={method.icon} />
                        <Text style={styles.paymentName}>{method.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.buyNowContainer} onPress={handleBuyNow}>
                <Text style={styles.buyNowLabel}>BUY NOW</Text>
            </TouchableOpacity>

        </View>


    )
}