import React from "react";
import {Text,View,Component} from 'react-native';
import { InputGroup,Input,List,ListItem } from 'native-base';
import styles from './SearchboxStyle';
import Icon from 'react-native-vector-icons/FontAwesome';


 export const Searchbox = ({getInputData,getAddressPrediction,identifyInput,predictions,getPredictedValue,selecteditem})=> {
  
	function handleInput(key, val){
        
		getInputData({
                  key,
                  value:val
                
            });
            getAddressPrediction(); 
    }
    


return(
        <View style={styles.Searchbox}>
        
            <List style={{backgroundColor:"#fff"}}> 
              
                      <ListItem>

                      <Icon style={styles.leftIcon} name="search" />
                    <InputGroup>
                    <Input onFocus ={()=>identifyInput("dropoff")} placeholder="Where To?" onChangeText={handleInput.bind(this,"dropoff")}  value = {selecteditem.name} />
                  
                    </InputGroup>

                    </ListItem>
                    </List>
          </View>
);
}
export default Searchbox;