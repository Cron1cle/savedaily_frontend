import { StyleSheet, Dimensions } from 'react-native';

const modalHeight = Dimensions.get('window').height / 2.5;



export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1C1D21',

    },
    title: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50,
    },
    challengesSection: {
        flex: 'wrap',
        width: '100%',
        marginTop: 30,

    },
    challengeContainer: {
        backgroundColor: 'black',
        height: 'auto',
        width: '95%',
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        marginTop: 20,
        marginBottom: 20,

    },
    logo: {
        height: 65,
        width: 65,
        borderRadius: 10,
    },
    challengeTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 10
    },
    progressCounter: {
        backgroundColor: 'black',
        height: 65,
        width: 65,
        borderRadius: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray'
    },
    progressCounterLabel: {
        color: 'black',
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: 'bold'

    },
    challengeLabel: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center',
        width: '45%',
        fontWeight: 'bold',
        fontStyle: 'italic',
        
    },
    progressLabel: {
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        left: 15,
        fontWeight: 'bold'
    },
    modalContainer: {
        paddingTop: 30,
        width: "100%",
        height: "100%",
        backgroundColor: '#1C1D22',
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        alignItems: 'center',
        borderRadius: 30,
    },
    touchable: {
        width: '100%',
        height: modalHeight
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
        marginVertical: 20,
    },
    closeButton: {
        height: 40,
        width: 40,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 50,
        justifyContent: 'center',
        alignSelf: 'flex-start'
    },
    stepPathSection: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20

    },
    stepItem: {
        height: 90,
        width: 100,
        backgroundColor: '#25262f',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 6,
    },
    stepContainer: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',


    },
    stepNumber: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    stepLabel: {
        color: 'white',
        fontStyle: 'italic',
        fontSize: 12,
        marginTop: 5,
        textAlign: 'center'
    },

   
    
    modalTitle: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        left:5,
        marginTop:5
    },
    challengeInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        width: '100%',
        paddingHorizontal: 10,
    },
    modalLogo: {
        height: 55,
        width: 55,
        borderRadius: 10,
    },
    
    deadlineLabel: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:15,
        left: 5
    },
    dot: {
        height: 5,
        width: 5,
        backgroundColor: 'white',
        borderRadius: 50,
        left: 10
    },
    
    awardTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: 20,
        marginTop: 5,
        marginLeft: 10
    },
    modalLine: {
        height: 1,
        width: '100%',
        backgroundColor: 'white',
        marginTop: 5
    },
    challengeStyleLabel: {
        color: 'white'
    },
    
   
    earnContainer:{
        width:130,
        height:125,
        backgroundColor:'black',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        alignSelf:'center',
        borderWidth:1,
        borderColor:'white',
       
    },
    earningAmountContainer:{
        width: '100%',
        height: 50,
        backgroundColor: 'black',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'white',
    },
    challengeEarnContainer:{
        height:20,
        width:100,
        backgroundColor:'white',
        alignSelf:'center',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        
       
    },
    challengeEarnLabel:{
        color:'black',
        fontSize:15,
        fontStyle:'italic',
        fontWeight:'bold',
        
        
    },

    
   








});
