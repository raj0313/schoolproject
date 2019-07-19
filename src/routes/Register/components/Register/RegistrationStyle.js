import {Dimensions} from 'react-native';

let {width, height} = Dimensions.get('window');

const styles = {
    input:{
        width:width/2
    },
    lastname:{
        position:"absolute",
        left:width/2,
        top: 1,
        borderWidth : 0.5,
        borderTopWidth : 0.2,
        borderLeftWidth : 0.2
    },
    firstname:{
      borderWidth : 0.5,
      borderTopWidth : 0,
      borderRightWidth : 0.2,
      width:width/2
    
 
    },
    textspace:{
      width:width,
      height: 0.30,
       },
       email:{
        borderWidth : 0.5,
        borderTopWidth : 0,
        borderRightWidth : 0.2,
        width:width 
       },
       phone:{
        borderWidth : 0,
        borderTopWidth : 0,
        borderRightWidth : 0.5,
        width:width/6
       },
       socialbuttons:{
        width:width/2
       },
       google:{
           position:"absolute",
           left:width/2,
           width:width/2,

       },
       buttoncontainer:{
          top:25,
           justifyContent :"center",
           backgroundColor: "rgba(0,0,0,0.2)",
           
       },
       buttontext:{
      
        height:50,
        left:width/2-50,
        alignItems:"center",
        },
        emailphone:{
            borderWidth : 0.5,
            borderTopWidth : 0,
            borderRightWidth : 0.2,
            width:width/1,
            left:50,
            top:-20
           },
      
};
    export default styles;