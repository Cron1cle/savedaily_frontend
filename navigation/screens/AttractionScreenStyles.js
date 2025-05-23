import { StyleSheet, Dimensions } from 'react-native';

const modalHeight = Dimensions.get('window').height - 800;

export default StyleSheet.create({

  maincontainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1C1D21',
  },

  smallheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 15,
    position: 'absolute',
    top: 50,
    zIndex: 1000,
  },
  iconLeft: {
    flex: 1,
    alignItems: 'flex-start',
  },
  iconRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 3,
    marginHorizontal: 10,

  },
  bigheader: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginVertical: 60,
    marginHorizontal: 15,
    zIndex: 1000
  },
  bigfooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    height: 65,
    width: 65,
    borderRadius: 50,
    marginHorizontal: 15,
    marginVertical: -5,
  },
  companyinfo: {
    width: '100%',
    flex: 1
  },
  companylabel: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    marginVertical: 10
  },
  descriptionlabel: {
    textAlign: 'center',
    color: 'white',
    marginVertical: 10,
    fontStyle: 'italic'
  },
  headline: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  headlinetext: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  dot: {
    height: 5,
    width: 5,
    borderRadius: 100,
    backgroundColor: 'white',
    marginVertical: 7
  },
  openinglabel: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
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
  groupordermodal: {
    height: 150,
    width: 200,
    backgroundColor: '#2e3038',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: '85%'

  },
  cancelbutton: {
    marginRight: 10,
    marginTop: 5,
    alignSelf: 'flex-end'
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

  infobutton: {
    height: 40,
    width: 95,
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 15,
    paddingHorizontal: 20,
    backgroundColor: '-rgba(0, 0, 0, 0.5)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infolabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  line: {
    height: 2,
    width: '100%',
    backgroundColor: 'gray',
  },
  dealsinfo: {
    width: '100%',
    flex: 1,
  },
  deallabel: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  deal: {
    flex: 1,
    width: 140,
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 10,

  },
  deallogo: {
    height: 230,
    width: '100%',
    borderRadius: 20,

  },
  dealname: {
    fontSize: 14,
    color: 'white',
    marginVertical: 5,
    textAlign: 'center',
    height: 40,
    marginTop: 12
  },
  cashbackcontainer: {
    width: 120,
    height: 35,
    borderRadius: 5,
    backgroundColor: 'black',
    alignSelf: 'center',
    marginBottom: 20,

  },
  cashbackpercentagelabel: {
    color: '#b8f3af',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,

  },
  dishesinfo: {
    width: '100%',
    flex: 1


  },
  dish: {
    flex: 1,
    width: 140,
    borderRadius: 20,
    marginVertical: 15,
    marginHorizontal: 10,

  },
  disheslabel: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  dishlogo: {
    height: 230,
    width: '100%',
    borderRadius: 20,
  },
  dishname: {
    fontSize: 14,
    color: 'white',
    marginVertical: 5,
    textAlign: 'center',
    height: 40,
    marginTop: 12
  },
  picturesinfo: {
    width: '100%',
    flex: 1

  },
  pictureslabel: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  picturescontainer: {
    width: 350,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: 15
  },
  swipebuttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: -115,
    marginHorizontal: 10,
  },
  picture: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  locationinfo: {
    width: '100%',
    height: 280,
  },
  locationlabel: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    fontSize: 25,
  },
  locationcontainer: {
    width: 350,
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 5,

  },
  touchable: {
    width: '100%',
    height: modalHeight
  },
  modalContainer: {
    width: "100%",
    height: "100%",


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
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  locationcontainerModal: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  fowardbuttonContainer: {
    backgroundColor: 'black',
    height: '80%',
    width: '50%',
    alignSelf: 'center',
    borderRadius: 30,
    justifyContent: 'center',
  },
  fowardbuttonlabel: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',

    alignSelf: 'center',
    fontSize: 20,
  },





});