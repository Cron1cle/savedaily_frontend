import { StyleSheet, Dimensions } from 'react-native';




export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#1C1D21',
    },
    header: {
        width: '100%',
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        right: 160,
    },
    cartInfo: {
        borderRadius: 10,
        marginTop: 40
    },
    cartLogo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 10
    },
    mainInfo: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        fontStyle: 'italic',
        marginTop: 20,
    },
    sideInfo: {
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
        marginTop: 10,
        fontStyle: 'italic',
        width: '65%',
        alignSelf: 'center'
    },
    fowardshopContainer: {
        backgroundColor: 'black',
        width: 125,
        height: 45,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    fowardshopLabel: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    
    line: {
        backgroundColor: 'white',
        height: 2,
        width: '7.5%',
        left: 20,
    },
    suggestedLabel: {
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
        left: 20,
        marginTop: 20,
        fontSize: 15,
    },
    suggestedInfo:{
        marginTop:10
    },
    suggestedContainer: {
        width: 125,
        height: 100,
        borderRadius: 15,
        backgroundColor: '#25262f',
        marginTop: 15,
        left: 10,
        marginHorizontal: 10,
        borderWidth:1,
        borderColor:'white',
        justifyContent:'center',
        alignItems:'center',
        
    },
    cartItemContainer: {
        width: '90%',
        height: 175,
        borderRadius: 10,
        backgroundColor: '#25262f',
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
    },
    productBannerContainer: {
        width: 120,
        height: 150,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        marginLeft:15
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    productBanner: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    details: {
        flex: 1, 
        marginLeft: 10, 
    },
    productName: {
        color: 'white',
        width: '100%',
        fontSize: 20,
        fontWeight: 'bold',

    },
    productPrice: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',

        fontStyle: 'italic',
        textDecorationColor: 'red',
        textDecorationLine: 'line-through',
    },
    dealPrice: {
        color: '#75f564',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginTop:3

    },
    cashbackBoost: {
        color: 'hsl(0, 0%, 70%)',
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',


    },
    rowDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cashbackCircle: {
        height: 20,
        width: 20,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 3,
    },
    image: {
        height: '70%',
        width: '70%',
        borderRadius: 50,
    },
    dealDiscountContainer: {
        backgroundColor: 'black',
        borderRadius: 10,
        width: 60,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        right:80
    },
    dealDiscountLabel: {
        color: '#ff4f42',
        fontSize: 12,
        fontStyle: 'italic',

    },
    rowPercentage: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 3,
    },
    addDeleteSection:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        marginTop:20,
        marginHorizontal:25
    },
    counter:{
        color:'white',
        fontSize:20,
        fontWeight:"bold"
    },
    button:{
        width:40,
        height:40,
        backgroundColor:'black',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'gray',
        borderWidth:1
        
    },
    cartItems:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        marginTop:10,
        marginLeft:20
    },
    
    buttonTrash:{
        right:35,
        top:5,
    },
    checkoutSection:{
        height:140,
        width:'100%',
        borderTopRadius:50,
        backgroundColor:'#25262f'
    },
    line:{
        width:'100%',
        height:1,
        backgroundColor:'hsl(0, 0%, 50%)',
    },
    totalPriceLabel:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    },
    rowCheckout:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        marginHorizontal:10
    },
    totalPrice:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    totalPriceInfo:{
        color:'hsl(0, 0%, 80%)',
        marginTop:3,
        marginLeft:12
    },
    checkoutContainer:{
        width:'85%',
        height:50,
        backgroundColor:'black',
        borderRadius:5,
        alignSelf:'center',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    continueLabel:{
        fontSize:20,
        color:'white',
        fontWeight:'bold'
    },
    recentProductImage:{
        height:75,
        width:75,
        borderRadius:10,
        
        
        
        
    },
    recentProductLogo:{
       width:'100%',
       height:'100%',
       borderRadius:5 
    },
    recentHeaderSection:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between',
        marginHorizontal:10
    },
    recentProductName:{
        color:'white',
        fontSize:15,
        fontStyle:'italic',
        fontWeight:'bold',
        textAlign:'center',
        width:125,
        marginLeft:20,
        marginTop:5,
    },
    recentProductPrice:{
        color:'white',
        fontSize:13,
        fontStyle:'italic',
        fontWeight:'bold',
        textAlign:'center',
        width:125,
        marginLeft:20,
        textDecorationLine: 'line-through',
        textDecorationColor: '#ff4f42',
    },
    recentFinalPrice:{
        color:'#75f564',
        fontSize:15,
        fontStyle:'italic',
        fontWeight:'bold',
        textAlign:'center',
        width:125,
        marginLeft:20,
        marginBottom:10
        
    },

    





});