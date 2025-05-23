import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({

    mainContainer: {
        flex:1,
        backgroundColor: '#1C1D21',
    },
    qrcodeContainer: {
    height: 250,
    width: 275,        
    alignSelf: 'center',
    
    marginTop: 60,
    borderRadius: 15
    },
    qrcodelabel: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 25,
    },
    header:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop:50,
    marginHorizontal:20     
    },
    timercontainer:{
    height:40,
    width:40,
    backgroundColor: 'white',
    borderRadius:10,
    marginTop:5,
    justifyContent:'center', 
    },
    timerlabel:{
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    },
    refreshContainer:{
     width: 150,
    height: 65,
    backgroundColor: '#2E3038',
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: 20,
    marginTop: 150,
    },
    refreshlabel:{
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:20,
    marginTop:20
    },
    

});