import { StyleSheet, Dimensions } from 'react-native';






export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1D21',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 60,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontSize: 30,
        fontFamily: 'Helvetica',
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    loginTitle: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loginContainer: {
        width: '70%',
        height: 45,
        borderRadius: 10,
        backgroundColor: 'black',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
        paddingLeft: 10,

    },
    loginLabel: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        marginLeft: 5,
    },
    loginButton: {
        width: '20%',
        height: 35,
        borderRadius: 10,
        backgroundColor: 'black',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerLabel: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    },
    toastButton: {
        height: 50,
        width: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        alignSelf: 'center',
    },
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
        marginLeft:'auto',
        right:25  
    },
});