import React from "react";
import {View,Component, FlatList,} from 'react-native';
import { InputGroup,Input,List,ListItem,Left,Body,Text,Container,Content} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native';
import styles from '../SearchModal/SearchModalStyle.js';
var Spinner = require('react-native-spinkit');
export const SearchModal = ({predictions,getSelectedItem,isloading})=> {
  function handleSelectedAddress(placeID){
    getSelectedItem(placeID)

  }
    
	return (
            
      <View style={styles.searchResultsWrapper} >
			{!predictions &&  <ActivityIndicator /> } 
			
				<List 
					dataArray={predictions}
					renderRow={(item)=>
						<View>
							<ListItem onPress={()=>handleSelectedAddress(item.placeID)} button avatar>
								<Left style={styles.leftContainer}>
									<Icon style={styles.leftIcon} name="check-circle-o" />
								</Left>
								<Body>
									<Text style={styles.primaryText}>{item.primaryText}</Text>
									<Text style={styles.secondaryText}>{item.secondaryText}</Text>
								</Body>
							</ListItem>
						</View>
					}
				/>
			</View>

		);
};
export default SearchModal;
