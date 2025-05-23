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
    header: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        height: 50,
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    icon: {
        position: 'absolute',
        left: 20,
        height: 50,
        width: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    orderContainer: {
        width: '90%',
        height: 'auto',
        borderRadius: 10,
        backgroundColor: '#25262f',
        alignSelf: 'center',
        marginTop: 20,

    },
    orderTitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    },
    product: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'hsl(0, 0%, 100%)',
        marginLeft: 45,
        marginTop: 5

    },
    orderInfo: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 17,
        color: 'hsl(0, 0%, 95%)',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    cashbackAmountOverall: {
        color: '#75f564'
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 5
    },
    priceLabel: {
        color: 'hsl(0, 0%, 80%)',
        fontSize: 15,
        fontStyle: 'italic'
    },
    price: {
        color: 'hsl(0, 0%, 80%)',
        fontSize: 15,
        fontStyle: 'italic',

    },
    totalPriceLabel: {
        color: 'hsl(0, 0%, 100%)',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    totalPrice: {
        color: 'hsl(0, 0%, 100%)',
        fontSize: 15,
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
    summaryPriceInfo: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10
    },
    summaryPrice: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 5,
        fontStyle: 'italic',
        marginBottom: 10
    },
    paymentTitle: {
        fontSize: 20,
        marginLeft: 25,
        marginTop: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    paymentContainer: {
        height: 50,
        width: '90%',
        backgroundColor: '#25262f',
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,


    },
    selectButton: {
        borderWidth: 1,
        borderColor: 'white',
        height: 20,
        width: 20,
        borderRadius: 100,
        marginRight: 10
    },
    paymentName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    paypalIcon: {
        height: 20,
        width: 20,
        marginRight: 5
    },
    cardIcon: {
        height: 30,
        width: 30,
        marginRight: 10
    },
    buyNowContainer: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 50
    },
    buyNowLabel: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    selectedContainer: {
        borderWidth: 1,
        borderColor: 'white'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },






})