import { Dimensions } from "react-native";
var {height,width} = Dimensions.get("window"); //full width
const styles = {
    searchResultsWrapper:{
        top:height/2 +160,
        position:"absolute",
        width:width,
        height:height/5,
        backgroundColor:"#fff",
        opacity:0.9
    },icon:{
        color:"#000080"
    },
    heading:{
        fontSize:20,
    },
    bottombutton:{
        top:height/2 +120,
        position:"absolute",
    },
    button: {
        position :"absolute",
        top: 100,
        width:width,
        alignItems: 'center',
        backgroundColor: '#000080',
       
        
       
      },

    fares:{
        flex:1,
        justifyContent :"center",
       
    },
    distance:{
        flexDirection:"row",
        position:"absolute",
        left:50
    },
    secondaryText:{
        fontStyle: "italic",
        color:"#7D7D7D",
    },
    leftContainer:{
        flexWrap: "wrap",
        alignItems: "flex-start",
        borderLeftColor:"#7D7D7D",
    },
    leftIcon:{
        fontSize:20,
        color:"#7D7D7D",
    },
    distance:{
        fontSize:12,
    }
};

export default styles;