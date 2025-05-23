import styles from './PictureScreenStyles.js';
import { Octicons } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

export default function PictureScreen({ navigation, route }) {

    const { images, initialIndex } = route.params || {};
    const flatListRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);

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
            flatListRef.current.scrollToIndex({ index, animated: true });
        }
    };


    return (
        <View style={styles.mainContainer}>
            <View style={styles.header}>
                <View style={styles.handleBar} />
                    <Text style={styles.title}>Pictures</Text>
            </View>
            <FlatList
                ref={flatListRef}
                horizontal
                pagingEnabled
                data={images}
                initialScrollIndex={initialIndex}
                style={styles.picturesContainer}
                keyExtractor={(item) => item.attractionPictureId.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.picturesContainer}>
                            <Image style={styles.picture} source={{ uri: item.attractionPicture }} />
                            <View style={styles.swipebuttons}>
                                <TouchableOpacity onPress={handlePrevious}>
                                    <Octicons name="chevron-left" size={45} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleNext}>
                                    <Octicons name="chevron-right" size={45} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>

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
    )
}