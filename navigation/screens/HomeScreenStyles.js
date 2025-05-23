import { StyleSheet, Dimensions } from 'react-native';


const modalHeight = Dimensions.get('window').height / 2.5;




export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#1C1D21',
    padding: 10
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  content: {
    width: '100%',
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,

  },
  contentbox: {
    flex: 1,
    width: '100%',
    borderRadius: 35,
  },
  attraction: {
    width: '100%',
    height: 200,
    borderRadius: 50,
    backgroundColor: '#25262f',
    alignSelf: 'center',
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  searchbarbox: {
    width: '95%',
    height: 50,
    borderRadius: 27,
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

    elevation: 5,


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

  filtertitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  touchable: {
    width: '100%',
    height: modalHeight
  },
  modalContainer: {
    paddingTop: 30,
    width: "100%",
    height: "100%",
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
    marginVertical: 20,
  },
  priceSection: {
    width: '90%',
    height: 60,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonEuro: {
    backgroundColor: '#2e3038',
    height: 50,
    width: 80,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },



  submitButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,


  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: 'center',
    alignSelf: 'center'


  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10
  },
  categoryButton: {
    backgroundColor: "#2e3038",
    padding: 10,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '28%',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 90,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  activeButton: {
    backgroundColor: "black",
  },
  activeCategoryButton: {
    backgroundColor: 'black',
  },
  sliderContainer: {
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column'

  },
  slider: {
    width: Dimensions.get('window').width - 35,
  },
  sliderLabeldistance: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: 10



  },
  sliderLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginHorizontal: 10

  },



  eurLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontStyle: 'italic'
  },

  containerContent: {
    flex: 1,
    marginTop: 40
  },
  containerHeader: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#F1F1F1',
  },

  Modal: {
    backgroundColor: '#005252',
    marginTop: 0,
  },
  dropdownItemTxtStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    marginVertical: 5,

    fontSize: 16,

  },
  dropdownMenuStyle: {
    backgroundColor: '#1C1D22',
    borderRadius: 20,
    width: '50%',
    height: '30%',
    display: 'flex',
    marginHorizontal: -160,
    marginVertical: 20,
    flexDirection: 'column',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

  },
  dropdownItemIconStyle: {
    color: 'white',
    fontSize: 22,
    ichWarHier: 1
  },
  bigLogo: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  attractionLogo: {
    height: 60,
    width: 60,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 100,

    marginVertical: -80,

  },
  attractioncontainer: {
    width: 380,
    height: 390,
    backgroundColor: '#25262f',
    borderRadius: 30,
    marginTop: 10,
    paddingBottom: 30
  },
  attractionimage: {
    width: '95%',
    height: 200,
    borderRadius: 50,
    backgroundColor: '#25262f',
    alignSelf: 'center',
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,


  },
  bigLogo: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  attractionLogo: {
    height: 60,
    width: 60,

    marginHorizontal: 20,
    borderRadius: 100,
    marginVertical: -80,
  },
  attractionlabel: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
  dealcontainer: {
    backgroundColor: 'white',
    height: 70,
    width: 70,
    borderRadius: 50

  },
  dealslabel: {
    fontStyle: 'italic',
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 30,
    top: 0,
    color: 'gold'


  },
  headline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: '10%',
  },


  headlineinfos: {
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  rating: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',

  },
  attractioninput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: -80,
    marginHorizontal: 10,
  },
  attractionqrcode: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 45,
    height: 45,
    backgroundColor: 'black',
    borderRadius: 10,
    marginHorizontal: 10
  },
  attractionheart: {
    height: 45,
    width: 45,
    borderRadius: 10,
    marginVertical: -5,
    marginHorizontal: 15,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 2
  },
  headlinetext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  openinghoursclosed: {
    color: '#ff4f42',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',

  },
  openinghoursopen: {
    color: '#75f564',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  circleDeals: {
    backgroundColor: 'black',
    borderRadius: 20,
    width: 80,
    height: 75,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gold',
  },
  interactionSection: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 5,
    alignItems: 'center',
  },
  interactionCounter: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 3,
  },
  line: {
    width: '90%',
    height: 1,
    backgroundColor: 'gray',
    alignSelf: 'center',
    marginTop: 3
  },
  commentTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop:10,
    marginBottom:10,
  },
  commentsHandleBar: {
    width: 30,
    height: 5,
    backgroundColor: "#cacfd6",
    borderRadius: 3,
    alignSelf: "center",
    marginTop: 10,
  },
  commentSection:{
    width:'100%',
    flex:1
  },
  commentMessageContainer:{
    width:'100%',
    height:70,
    marginTop:10,
    flexDirection:'row',
    alignItems:'center'
  },
  profilePictureContainer:{
    height:50,
    width:50,
    borderRadius:100,
    marginLeft:10
  },
  userName:{
    fontWeight:'bold',
    fontSize:12,
    color:'white'
  },
  commentDate:{
    color:'hsl(0,0%,70%)',
    fontSize:12,
    marginLeft:5
  },
  comment:{
    fontSize:12,
    color:'white'
  },
  userSection:{
    marginLeft:10,
    marginBottom:15
  },
  likeSection:{
    height:50,
    width:50,
    marginLeft:'auto',
    marginRight:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:5
  },
  commentLikes:{
    fontSize:12,
    color:'hsl(0, 0%, 70%)',
    marginTop:3,
    fontWeight:'bold'
  },
  profilePicture:{
    width:'100%',
    height:'100%',
    borderRadius:100
  },
  commentContainer:{
    width:'100%',
    height:75,
    flexDirection:'row',
    alignItems:'center',
  },
  messageContainer:{
    width:300,
    height:40,
    borderRadius:15,
    borderWidth:1,
    borderColor:'hsl(0, 0%, 30%)',
    marginLeft:15,
    justifyContent:'center',
    alignItems:'center',
    fontSize:12,
    fontWeight:'bold',
    fontStyle:'italic',
    paddingLeft:10,
    marginTop:3,
    color:'white'
    
    
  },
  messageInput:{
    fontSize:12,
    color:'hsl(0,0%, 70%)',
    fontWeight:'bold',
    fontStyle:'italic',
  },
  commentLine:{
    width:'100%',
    height:1,
    backgroundColor:'hsl(0, 0%,15%)'
  },











});


