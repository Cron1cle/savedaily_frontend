import { StyleSheet, Dimensions } from 'react-native';
const modalHeight = Dimensions.get('window').height -800;



export default StyleSheet.create({
    maincontainer: {
        flex: 1,
        backgroundColor: '#1C1D21',
    },
    invitelabel: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 10,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        marginHorizontal: 20,
        height: 50
    },
    invitesection: {
        width: '100%',
        flex: 1,
        marginTop: 25,
        // backgroundColor: 'red',
    },
    invitecontainer: {
        height: 225,
        width: '50%',
        backgroundColor: 'black',
        borderRadius: 20,
        // margin: 5
        marginVertical: 5,
        marginHorizontal: 5

    },
    section: {
        width: '100%',
        flexDirection: 'row',
        justifycontent: 'space-between',
        marginTop: 10,
        flexWrap: 'wrap'
    },
    addbutton: {
        alignSelf: 'center',
        marginTop: 15,
// backgroundColor: 'red',
    },
    profile: {
        alignSelf: 'center',
        marginTop: 30,

    },
    usernamelabel: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        textAlign: 'center',
        textTransform: 'uppercase'

    },
    numbersection: {
        backgroundColor: 'blue',
        flex: 1,
    },
    slidingcontainer: {
        alignSelf: 'center',
        marginTop: 35,

    },
    slidingcounter: {
        backgroundColor: 'black',
        borderRadius: 10,


    },
    amountLabel: {
        textAlign: 'center',
        color: '#ff4f42',
        fontWeight: 'bold',
        fontSize: 20,
    },
    confirmButton: {
        backgroundColor: 'black',
        width: 170,
        height: 60,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 30,
    },
    confirmLabel: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    
    grouporderModal: {
        height:'100%',
        backgroundColor: '#1C1D22',
        borderRadius: 30,
    },
    modalHeader: {
        marginTop: modalHeight + 50,
       
    },
    handleBar: {
        width: 50,
        height: 5,
        backgroundColor: "gray",
        borderRadius: 3,
        alignSelf: "center",
        marginTop: 20,
    },
    touchable: {
        width: '100%',
        height: modalHeight
    },
    searchbarbox: {
        width: '95%',
        height: 50,
        borderRadius: 25,
        backgroundColor: '#25262f',
        alignSelf: 'center',
        marginTop: 40,
        shadowColor: "#000",
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',


        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    searchbar: {
        flex: 1,
        height: '100%',
        color: 'white',
        paddingHorizontal: 10,
        fontSize: 20,
        fontFamily: 'Verdana',
        fontWeight: 'medium',

    },
    friendContainer: {
        backgroundColor: 'black',
        height: 100,
        width: 335,
        borderRadius: 30,
        alignSelf: 'center',
        marginTop: 15,
    },
    formation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        marginHorizontal: 25,
    },
    profileContainer: {
        height: 54,
        width: 54,
        borderRadius: 100,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'white',

    },
    profilelogo: {
        height: '100%',
        width: '100%',
        borderRadius: 100,
    },
    usernameLabel: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25,
        marginRight:10,
        textAlign: 'center',
        

    },







});