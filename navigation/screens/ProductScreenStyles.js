import { StyleSheet, Dimensions } from 'react-native';

const modalHeight = Dimensions.get('window').height - 845;

export default StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: '#1C1D21',
    },
    header: {
        height: 200,
        width: '100%',
    },
    headerbuttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop:40,
        marginHorizontal: 10,
    },
    deallogo: {
        width: '100%',
        height: '100%',
    },
    movietitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        marginTop: 10
    },
    headline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    headlinetext: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    },
    descriptionlabel: {
        textAlign: 'center',
        color: 'white',
        marginVertical: 10,
    },
    headlineactions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
        marginHorizontal: 10,
    },
    buttonlabel: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 14,
    },
    grouporderbutton: {
        height: 40,
        width: 125,
        backgroundColor: 'black',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    qrcodebutton: {
        height: 40,
        width: 140,
        backgroundColor: 'black',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    line: {
        height: 2,
        width: '100%',
        backgroundColor: 'gray',
    },
    priceContainerSmall: {
        width: '100%',
        height: 80,
        backgroundColor: 'black',
    },
    priceType: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
        fontSize: 20,
    },
    priceLabel: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 3,
        fontStyle: 'italic',
        fontSize: 15,
    },
    priceSeat: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 3,
        fontSize: 15,
        fontStyle: 'italic',
    },
    priceContainerMedium: {
        width: '100%',
        height: 115,
        backgroundColor: 'black',
    },
    priceInfo: {
        color: 'white',
        marginTop: 3,
        marginLeft: 10,
        fontStyle: 'italic',
        fontSize: 12,
    },
    priceContainerBig: {
        width: '100%',
        height: 115,
        backgroundColor: 'black',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addbutton: {
        marginTop: 10,
        marginRight: 15,
    },
    touchable: {
        width: '100%',
        height: modalHeight
    },
    modalContainer: {
        width: "100%",
        height: "100%",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: '#1C1D21',
    },
    handleBarCashback: {
        width: 50,
        height: 5,
        backgroundColor: "gray",
        borderRadius: 3,
        alignSelf: "center",
        marginVertical: 15,
    },
    modalHeader: {
        marginTop: modalHeight + 50,
    },
    orderTitle: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
    },
    orderInfo: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontStyle: 'italic',
        marginTop: 15
    },
    orderPrice: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginTop: 5

    },
    cashbacktitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        fontStyle: 'italic',
    },
    cashbackEssential: {
        color: '#75f564',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginTop: 15
    },
    rowModal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    cashbackboostInfoContainer: {
        height: 50,
        width: '100%',
        backgroundColor: 'black',
        marginTop: 160,
    },
    cashbackboostLabel: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',

    },
    cashbackboostInfo: {
        height: '30%',
        width: '100%',
        backgroundColor: 'black'
    },
    savingContainer: {
        backgroundColor: '#2e3038',
        height: 260,
        width: 360,
        borderRadius: 15,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
    },
    savingTitle: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10
    },

    regularPrice: {
        color: 'gray',
        fontSize: 20,
        fontStyle: 'italic',
        marginTop: 20,
        fontWeight: 'bold',
    },
    totalPrice: {
        color: '#ff4f42',
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: 10
    },
    savingLabel: {
        color: '#ff4f42',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5
    },
    totalpriceLabel: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    totalpriceVat: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#ff4f42'
    },
    priceBoostLabel: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 20,
        fontStyle: 'italic',
        fontSize: 20,
    },
    boostContainer: {
        backgroundColor: '#2e3038',
        height: 130,
        width: 85,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
    },
    boostLabel: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        alignSelf: 'center',
    },
    boostRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
    },
    
    addCartLabel: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginRight: 80
    },
    cartRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 15,
    },
    mediumCircle: {
        alignSelf: 'center',
        height: 45,
        width: 45,
        borderRadius: 100,
        backgroundColor: 'black',
        marginTop: 10,
    },
    boostDisscount: {
        textAlign: 'center',
        color: '#75f564',
        marginTop: 10,
        fontWeight: 'bold'
    },
    filterSection: {
        width: '100%',
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,

    },
    filterContainer: {
        height: 40,
        width: 95,
        backgroundColor: '#2e3038',
        borderRadius: 10,
        marginRight: 10,
        justifyContent:'center'


    },
    filterRow: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10
    },
    filterLabel: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        fontStyle: 'italic',
        

    },
    priceinfo: {
        backgroundColor: 'black',
    },
    badge: {
        position: 'absolute',
        top: -10,
        right: -10,
        backgroundColor: 'white',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    badgeText: {
        color: 'black',
        fontSize: 12,
        fontWeight: 'bold',
    },
    handleBar:{
        width: 50,
        height: 5,
        backgroundColor: "#cacfd6",
        borderRadius: 3,
        alignSelf: "center",
        marginTop:10
    },
    productContainer: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'black',    
    },
    productName:{
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10
    },
    productPrice:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
        
        
    },
    productInfo:{
        color: 'white',
        fontSize: 17,
        fontStyle: 'italic',
        width:'60%'
    },
    productBannerContainer:{
        width:60,
        height:70,
        borderRadius: 10,
        borderWidth: 1,
        marginTop:20,
        borderColor: 'gray',
        alignSelf: 'flex-end',
        marginRight: 0,
        bottom:10
    },
    productBanner:{
        width:'100%',
        height:'100%',
        borderRadius: 10,
    },
    productRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10
    },
    
    


});