import { StyleSheet, Dimensions } from 'react-native';



export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1C1D21',
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 50
    },
    toggleSection: {
        width: '100%',
        height: 75,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop:0
    },
    toggleButton: {
        width: 105,
        height: 45,
        backgroundColor: 'black',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
    },
    activeButton:{
        backgroundColor:'white'
    },
    activeLabel:{
        color:'black'
    },
    toggleLabel: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
        marginLeft:10
    },
    contentSection:{
        marginTop:3,
        height:'100%',
        width:'95%',
        alignSelf:'center'
    },
    searchbarbox: {
        width: '95%',
        height: 50,
        borderRadius: 30,
        backgroundColor: '#25262f',
        alignSelf: 'center',
        marginBottom: 20,
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
    
        elevation: 5
      },
      searchbar: {
        flex: 1,
        height: '100%',
        color: 'white',
        paddingHorizontal: 10,
        fontSize: 20,
        fontFamily: 'Verdana',
        fontWeight: 'medium'
    
      },



});