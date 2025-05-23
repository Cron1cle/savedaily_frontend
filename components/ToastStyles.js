import { StyleSheet } from 'react-native';

const ToastStyles = StyleSheet.create({
    toastCashback: {
        height: 65,
        width: '95%',
        backgroundColor: 'black',
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
    },
    toastTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
    },
    closeIcon: {
        marginLeft: 'auto',
        right: 25
    },
});

export default ToastStyles;