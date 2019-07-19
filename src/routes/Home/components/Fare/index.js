import React from "react";
import {View,Component, FlatList,TouchableOpacity, ActivityIndicator} from 'react-native';
import { InputGroup,Input,List,ListItem,Left,Body,Text,Container,Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native';
import  Button from 'react-native';
import styles from './FareStyles.js';
import SlidingUpPanel from 'rn-sliding-up-panel';

export const Fare = ({minimum,maximum,distance,duration,isloading})=> {  
 
        return(
            
        <View style={styles. searchResultsWrapper} >
     
        
        <View style={{flex: 1, flexDirection: 'row',alignItems:"center"}}>
        <View  style={{justifyContent:"center",alignItems:"center"}}>   
         <Icon  style ={styles.icon} name="dollar" size={20} />
         <Text  style ={styles.heading}> Fare </Text>
         <Text style ={styles.subheading}>  ${minimum.minimum} - ${maximum.farecharges}  {distance} </Text>  
         </View>
        <View  style={{justifyContent:"center",alignItems:"center",paddingLeft:40}}> 
         <Icon  style ={styles.icon} name="location-arrow" size={20} />
         <Text  style ={styles.heading}> Distance </Text>
         <Text style ={styles.subheading}>{distance} </Text>  
         </View>


     
        <View>
        <View style={{justifyContent:"center",alignItems:"center",paddingLeft:50}}>   
         <Icon  style ={styles.icon} name="clock-o" size={20} />
         <Text  style ={styles.heading}> Time </Text>
         <Text style ={styles.subheading}>  </Text>  
         </View>
            </View>
      
        </View>
     
        <TouchableOpacity  style ={styles.button}>
        <Text  style ={{color:"#fff"}}>  Request Pickup </Text>
        </TouchableOpacity>  
        
        </View>
         );
            };
export default Fare;
