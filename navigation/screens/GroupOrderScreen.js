import styles from './GroupOrderScreenStyles.js'
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import * as Haptics from 'expo-haptics';
import React, { useState, useEffect } from 'react';
import Octicons from '@expo/vector-icons/Octicons';
import { TextInput, Animated, Modal, Pressable, Share, Platform, Linking, StyleSheet, Text, View, ScrollView, Dimensions, SafeAreaView, TouchableOpacity, Image, ImageBackground, FlatList, TouchableWithoutFeedback } from 'react-native';
import { StyledButton } from '../../components/StyledButton.js';
import { fetchFriends } from '../../components/backendapi.js';
export default function GroupOrderScreen({ navigation }) {
    let [ShowComment, setShowModelComment] = useState(false);
    let [animateModal, setanimateModal] = useState(false);

    const [invitedFriends, setInvitedFriends] = useState([])
    const [friends, setFriends] = useState([]);
    const [error, setError] = useState(null);

    

    const handleInviteFriend = (friend) => {
        if (invitedFriends.length < 29) {
            setInvitedFriends([...invitedFriends, friend]);
        }
    };

    const handleRemoveFriend = (friend) => {
        setInvitedFriends(invitedFriends.filter((i) => i.id!== friend.id));

    }
        

    const size = Dimensions.get('window')

    useEffect(() => {
        // API-Methode aufrufen
        const loadFriends = async () => {
          try {
            const data = await fetchFriends(); 
          } catch (err) {
            setError(err.message); 
          }
        };
    
        loadFriends();
      }, []);


    

    







    const handleShare = async () => {
        try {
            const result = await Share.share({
                message: 'Hier ist eine Einladung zur SAVE DAILY APP : https://save-daily.app/share/deddad4c-7267-4f1b-b05b-fa9c0684e72d ', // Dein zu teilender Link
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
    return (
        <View style={styles.maincontainer}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Octicons name="chevron-left" size={40} color="white" />
                </TouchableOpacity>
                <Text style={styles.invitelabel}>Group Order</Text>
                <TouchableOpacity onPress={handleShare}>
                    <Octicons name="share" size={35} color="white" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={styles.invitesection}>



                    <View style={styles.section}>

                        <View style={{
                            ...styles.invitecontainer,
                            width: size.width / 2 - 10,
                            height: 170,
                            borderStyle: 'solid',
                            borderWidth: 1,
                            borderColor: 'black',

                        }}>
                            <View style={styles.profile}>
                                <View style={{ alignSelf: 'center' }}>
                                    <Octicons name={'person'} size={54} color="white" />
                                </View>
                                <Text style={{ ...styles.usernamelabel, fontSize: 16 }}>{'YOU'}</Text>
                            </View>

                        </View>

                        {
                            invitedFriends.map((invitedFriend, index) => (
                                <View
                                    key={index}
                                    style={{
                                        ...styles.invitecontainer,
                                        width: size.width / 2 - 10,
                                        height: 170,
                                        borderStyle: 'solid',
                                        borderWidth: 1,
                                        borderColor: 'black',

                                    }}>
                                    <View style={styles.profile}>
                                        <View style={{ alignSelf: 'center' }}>
                                            <View style={styles.profileContainer}>
                                                <Image style={styles.profilelogo} source={invitedFriend.profileLogo} />
                                            </View>
                                        </View>
                                        <Text style={{ ...styles.usernamelabel, fontSize: 16 }}>{invitedFriend.username}</Text>
                                    </View>
                                    <View style={styles.addbutton}>


                                        <TouchableOpacity onPress={() => { Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy); handleRemoveFriend(invitedFriend)}}>
                                            <Octicons name="x-circle" size={25} color="#ff4f42" />
                                        </TouchableOpacity>



                                    </View>
                                </View>
                            ))
                        }



                        <TouchableOpacity
                            onPress={() => {
                                setShowModelComment(true);
                                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                                
                            }}
                            style={{
                                ...styles.invitecontainer,
                                width: size.width / 2 - 10,
                                height: 170,
                                borderStyle: 'dashed',
                                borderWidth: 1,
                                borderColor: '#75f564',

                            }}

                        >

                            <View >
                                <View style={styles.profile}>
                                    <View style={{ alignSelf: 'center' }}>
                                        <Octicons name={'person-add'} size={54} color="white" />
                                    </View>
                                    <Text style={{ ...styles.usernamelabel, fontSize: 16 }}>Invite</Text>
                                </View>
                                <View style={styles.addbutton}>
                                    <Octicons name="plus-circle" size={25} color="#75f564" />
                                </View>
                            </View>

                        </TouchableOpacity>







                    </View>



                </View>
                <Text style={{ ...styles.amountLabel, display: invitedFriends.length < 25 ? 'none' : 'flex' }}>{invitedFriends.length + 1} / 30</Text>

                <StyledButton title='Confirm' onPress={() =>{ navigation.goBack();Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}} />
                <SwipeUpDownModal
                    modalVisible={ShowComment}
                    
                    duration={375}
                    fade={false}
                   
                    ContentModal={
                        <View>
                            <TouchableWithoutFeedback onPress={() => setanimateModal(true)}>
                                <View style={styles.touchable}></View>
                            </TouchableWithoutFeedback>
                            <View style={styles.grouporderModal}>
                                <ScrollView showsVerticalScrollIndicator={false}>
                                    <View style={styles.searchbarbox}>
                                        <Octicons name="search" size={24} color="white" />

                                        <TextInput style={styles.searchbar}
                                            placeholder="Who is around?"
                                            placeholderTextColor={'white'}

                                        />

                                    </View>

                                    {
                                    friends.map((friend, index) => (
                                    <TouchableWithoutFeedback
                                    key={index}
                                    disabled={invitedFriends.some((invited) => invited.id === friend.id)}
                                    onPress={() => { setanimateModal(true); handleInviteFriend(friend); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)}}>
                                        <View style={{...styles.friendContainer, opacity: invitedFriends.some((invited) => invited.id === friend.id) ? 0.2 : 1}}>
                                            <View style={styles.formation}>

                                                <View style={styles.profileContainer}>
                                                    <Image style={styles.profilelogo} source={friend.profileLogo} />
                                                </View>

                                                <Text style={styles.usernameLabel}>{friend.username}</Text>

                                                <Octicons name="plus-circle" size={30} color={invitedFriends.some((invited) => invited.id === friend.id) ? 'transparent' : 'white'}/>


                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                    ))}
                                </ScrollView>
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

            </ScrollView>
        </View>
    )
}