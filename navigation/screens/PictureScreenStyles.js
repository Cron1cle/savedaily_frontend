import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({

    mainContainer: {
        backgroundColor: '#1C1D21',
        flex: 1,

    },
    handleBar: {
        width: 50,
        height: 5,
        backgroundColor: "#cacfd6",
        borderRadius: 3,
        alignSelf: "center",
        marginTop: 15
    },
    picturesContainer: {
        width: Dimensions.get('window').width,
        height: '100%',
       

    },
    picture: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    swipebuttons: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
        top: '50%',
    },
    title:{
        color:'white',
        textAlign:'center',
        fontSize: 30,
        fontWeight:'bold',
        marginTop:10
    },
    header:{
        backgroundColor:'black',
        width:'100%',
        height:80
    },



})