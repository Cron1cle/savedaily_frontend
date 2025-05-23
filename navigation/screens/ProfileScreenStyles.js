import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({

  mainContainer: {
    backgroundColor: '#1C1D21',
    flex: 1
  },
  profileInfo:{
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profileLogo:{
    width:80,
    height: 80,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center' ,
    marginBottom: 10,
    
  },
  content: {
    marginTop: 75
  },
  cashoutContainer: {
    width: 350,
    height: 75,
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    shadowColor: "#000",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
  cashoutNumber: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    right: 40,
    top: 3
  },
  cashoutButton: {
    width: 140,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,


  },
  cashoutLabel: {
    fontWeight: 'bold',
    fontSize: 17,
    fontStyle: 'italic',
  },
  greeting: {
    color: 'white',
    fontSize: 25,
    marginTop: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: '#25262f',
    height: 100,
    width: 100,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
  buttonLabel: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 17,
    fontStyle: 'italic'
  },
  supportContainer: {
    backgroundColor: '#25262f',
    width: 345,
    height: 50,
    borderRadius: 10,
    marginTop: 30,
    alignSelf: 'center',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
  supportRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 10,
  },
  inviteLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  bonusLabel:{
    color: 'gold',
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign:'center',
    bottom: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#1C1D21',
  },
  headlineContainer: {
    backgroundColor: 'black',
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    top: 20,
    left: 20
  },
  headlineLabel: {
    color: 'white',
    fontSize: 30,
    top: 20,
    left: 120,
    fontWeight: 'bold',
  },
  paymentSection: {
    top: 25
  },
  headLabel: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    left: 35,
  },
  paymentContainer: {
    backgroundColor: '#25262f',
    width: '85%',
    height: 75,
    borderRadius: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    top: 10,
  },
  paymentLabel: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 25
  },
  accountLabel: {
    color: 'gray',
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    bottom: 5
  },
  instagramSection: {
    top: 45
  },
  instagramContainer: {
    backgroundColor: '#25262f',
    width: '85%',
    height: 75,
    borderRadius: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20
  },
  instagramRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    top: 10,
  },
  instagramLabel: {
    color: 'gray',
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    bottom: 5
  },
  googleSection: {
    top: 65
  },
  googleContainer: {
    backgroundColor: '#25262f',
    width: '85%',
    height: 75,
    borderRadius: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20
  },
  googleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    top: 10,
  },
  googleLabel: {
    color: 'gray',
    fontSize: 10,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    bottom: 5
  },
  cashLabel: {
    color: 'white',
    fontSize: 30,
    top: 20,
    left: 105,
    fontWeight: 'bold',
  },
  request: {
    color: 'white',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 17,
    fontStyle: 'italic',
    marginTop: 30,
    width: '100%',
  },
  rowCash: {
    widht: '100%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  smallContainer: {
    height: 45,
    width: 150,
    backgroundColor: '#25262f',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    marginTop: 5
  },
  nameLabel: {
    color: 'white',
    fontSize: 17,
    left: 10,
    fontStyle: 'italic',
  },
  line: {
    height: 2,
    width: '85%',
    left: 30,
    backgroundColor: 'black',
    marginTop: 25
  },
  adressInfo: {
    width: '100%',
    height: 45,
    backgroundColor: 'red',
  },
  longContainer: {
    height: 45,
    width: 345,
    backgroundColor: '#25262f',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  availableCashbackLabel: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'italic',
    left: 25,
    marginTop: 10
  },
  availableCashbackContainer: {
    height: 45,
    width: 345,
    backgroundColor: '#25262f',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 15,
  },
  cashoutContainerModal: {
    width: 200,
    height: 60,
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    top: 75,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 1,
  },
  cashoutLabelModal: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  dropdownContainer: {
    backgroundColor: '#25262f',
    borderRadius: 10,
    width: '85%',
    height: 230,
    top: 90,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'gray'
  },
  dropdownHeader: {
    backgroundColor: 'black',
    width: '100%',
    height: 50,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: 'center',
  },
  dropdownLabel: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',

  },
  dropdownOption: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  optionLabel: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  lineOption: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
  },
  optionIcon: {
    width: 35,
    height: 35,
  },
  optionKlarna: {
    width: 50,
    height: 35,
  },
  addButton: {
    width: 120,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 5
  },
  addLabel: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  toggleSection: {
    width: '100%',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  toggleButton: {
    width: 150,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: 'white',
  },
  toggleLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  activeLabel: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    textAlign: 'center',
  },
  receiptContainer: {
    width: '100%',
    height: 85,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  receiptIcon: {
    width: 65,
    height: 65,
    borderRadius: 10,
  },
  receiptInfo: {
    width: 180,
    height: 60,
    justifyContent: 'space-between',

  },
  receiptTitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  receiptDate: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',

  },
  receiptDescription: {
    color: '#75f564',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  receiptExpenseDescription: {
    color: '#ff4f42',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  receiptExpenseAmount: {
    color: '#ff4f42',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  receiptAmount: {
    color: '#75f564',
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center'
  },
  receiptLine: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    flexDirection: 'column',
  },
  editTitle: {
    color: 'white',
    fontSize: 30,
    top: 20,
    left: 135,
    fontWeight: 'bold',
  },
  editSection: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
  },
  profileContainer: {
    width: 115,
    height: 115,
    borderColor: 'white',
    borderWidth: 3,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
  },
  editContainer: {
    backgroundColor: 'black',
    width: 135,
    height: 50,
    alignSelf: 'center',
    borderRadius: 25,
    justifyContent: 'center',
  },
  editLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  textContainer: {
    width: '65%',
    height: 45,
    backgroundColor: 'black',
    alignSelf: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'gray'
  },
  editText: {
    color: 'white',
    fontSize: 18,
    fontStyle: 'italic',
    left: 15
  },
  inputContainer: {
    backgroundColor: "black",
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%'
  },
  inputLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  pickerLabel: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    fontStyle: 'italic'
  },
  inviteTitle: {
    color: 'white',
    fontSize: 30,
    top: 20,
    left: 80,
    fontWeight: 'bold',
  },
  friendLabel:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign:'center',
    width:'80%',
    alignSelf: 'center',
  },
  friendInfo:{
    color: 'white',
    fontSize: 15,
    textAlign:'center',
    fontStyle: 'italic',
    width:'90%',
    alignSelf: 'center',
    marginTop: 15
  },
  referralButton:{
    alignSelf: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    width: 200,
    height:50,
    borderRadius: 10,
    marginTop: 75,
  },
  referralLabel:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  feedbackTitle:{
    color: 'white',
    fontSize: 30,
    top: 20,
    left: 100,
    fontWeight: 'bold',
  },
  feedbackLabel:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign:'center',
    width:'100%',
    alignSelf: 'center',
  },
  feedbackInfo:{
    color: 'white',
    fontSize: 15,
    textAlign:'center',
    fontStyle: 'italic',
    width:'90%',
    alignSelf: 'center',
    marginTop: 15
  },
  feedbackButton:{
    alignSelf: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    width: 210,
    height:50,
    borderRadius: 10,
    marginTop: 75,
  },
  genderContent:{
    width:'100%',
    height:75,
    marginTop:10
  },
  genderTitle:{
    color:'white',
    fontSize:17,
    fontWeight:'bold',
    fontStyle:'italic',
    left:25,
  },
  genderButtons:{
    height:40,
    width:'100%',
    
    left:0,
    flexDirection:'row',
    justifyContent:'space-around',
    paddingHorizontal:20,
    alignItems:'center'
  },
  genderCircle:{
    borderWidth:1,
    borderColor:'white',
    height:12,
    width:12,
    borderRadius:100
  },
  genderButtonLabel:{
    color:'white',
    fontSize:17,
    fontStyle:'italic',
    paddingRight:30,
  },
  genderLine:{
    width:'95%',
    height:1,
    backgroundColor:'gray',
    alignSelf:'center'
  },
  activeGenderButton:{
    borderWidth:1,
    borderColor:'white',
    backgroundColor:'white',
    height:12,
    width:12,
    borderRadius:100
  },











});