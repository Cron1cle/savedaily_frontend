import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: '#1C1D21',
    },
    handleBar: {
        width: 50,
        height: 5,
        backgroundColor: "#cacfd6",
        borderRadius: 3,
        alignSelf: "center",
        marginTop: 10,
    },
    productTitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 15,
    },
    productPrice: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        textDecorationLine: 'line-through',
        textDecorationColor: '#ff4f42',
        fontStyle: 'italic',
    },
    dealPrice: {
        color: '#75f564',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        fontStyle: 'italic',
        alignSelf: 'center',
    },
    dealInfo: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10,
        fontStyle: 'italic',
    },
    cashbackAmountOverall: {
        color: '#75f564',
        fontSize: 21,
        fontWeight: 'bold',
    },
    cashbackContainer: {
        width: 160,
        height: 'auto',
        backgroundColor: '#25262f',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    cashbackLabel:{
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        fontStyle: 'italic',
    },
    cashbackLogoContainer:{
        height: 55,
        width: 55,
        borderRadius: 100,
        backgroundColor: 'black',
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo:{
        width:'60%',
        height: '60%',
    },
    cashbackAmount:{
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        fontStyle: 'italic',
    },
    addCartContainer: {
        backgroundColor: 'black',
        alignSelf: 'center',
        height: 60,
        width: 330,
        borderRadius: 30,
        top:30,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cartRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        
    },
    addCartLabel: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 80
    },
    productBannerContainer:{
        width:110,
        height:110,
        borderRadius: 10,
        borderWidth: 1,
        marginTop:20,
        borderColor: 'gray',
        alignSelf: 'center',
    },
    productBanner:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    

    
    
    

});