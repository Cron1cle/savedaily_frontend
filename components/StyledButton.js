import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StyledButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity  style={{...styles.button, buttonStyle}} onPress={onPress}>
        <Text style = {{...styles.buttonLabel, textStyle}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        padding: 20,
        // width: 200,
        marginHorizontal: 30,
        marginVertical: 5,
        borderRadius:10,
        alignSelf: 'center',
        marginVertical: 30,
    },
    buttonLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        // marginTop: 20,
        textTransform: 'uppercase'
    },
});

export {StyledButton};
