/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Button,
  KeyboardAvoidingView,
  ActivityIndicator,
  Keyboard,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './RegistrationStyle';
import { reduxForm, Field} from 'redux-form';
import request from '../../../../util/request';
import {Actions} from 'react-native-router-flux'
//mport {Loader} from './Loader';
import { actions } from 'redux-form';




const validate = values =>{
	const error ={};
	console.log(values);
	var emailtest = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email);
	var number	 = /^\d+$/.test(values.phone);
	
	 if(!values.fname)
	{
			 error.fname = "Please enter firstname"

		 //alert(values.email);

	}
	if(!values.lname)
	{
		error.lname = "Please enter lastname"
	}
	if(!values.email)
	{
		error.email = "Please enter email"
	}else if(!emailtest){
		error.email = "Invalid email"
	}
	if(!values.password && !values.cpassword )
	{
		error.password = "Please enter password"
	}
	if(!values.phone )
	{
		error.phone = "Please enter phone"
	}
	else if(!number){
		error.phone ="Please enter digits only"
	}
	
	return error;
 }

const fields= ({placeholder,textentry,meta:{error,touched},input:{onChange},loading}) =>
	{
		return(
			<View>
			<View style ={styles.container}>
			<TextInput  style={styles.email} 
					placeholder ={placeholder}
					style = {styles.input} 
					secureTextEntry = {textentry}
					onChangeText ={onChange}	
					underlineColorAndroid="transparent"
					>
					
			</TextInput>
			{touched && (error && (<Text style = {{color:"#000080"}}>{error}</Text>))} 
					
		


			</View>
			</View>
	
			);
	}
 
const loginbtn = values=>{

	console.log(values.email)
		
	request.post("http://54.252.173.49/api/passenger/register")
//fname
//lname
//password
//card
//email
//phone
//card
	.send({email:values.email,first_name:values.fname,last_name:values.lname,mobile:values.phone,card_no:values.card,password:values.password})
	.set('accept','json')
	.end((err,res)=>{
		console.log (res);
		
		var response = (JSON.parse((res.text)));
			Actions.home();
			const token = response.data.api_token;
			console.log(token);
			Keyboard.dismiss();
		})
	}
		
	
const RegistrationForm = props =>

	{   
		const {handleSubmit} = props;
		return(
	
			<View>
	<KeyboardAvoidingView behavior="padding">
			<View style ={styles.socialbuttons}>
			<Button title ="Facebook"/>
			<View style ={styles.google}>
			<Button title ="Google" />
			</View>
			</View>
				<View>
				
				<View style = {styles.firstname}>
								<Field
								name="fname"
								component ={fields}
								placeholder = "FirstName"	
								textentry = {false}/>
						
							
						
				</View>
			
								<View style = {styles.lastname}>
								<Field
								name="lname"
								component ={fields}
								placeholder = "Lastname"
								textentry = {false} />
								</View>
								<View style = {styles.email}>
								<Field 
								name="email"
								component ={fields}
								placeholder = "example@example.com"
								textentry = {false} />
								</View>
							<View style = {styles.email} >
								<Field
								name="password"
								component ={fields}
								placeholder = "Password"
								textentry = {true} />
								</View>
								<View style = {styles.email} > 
								<Field
								name="cpassword"
								component ={fields}
								placeholder = "Confirm Password"
								textentry = {true} />
								</View>
								<View style = {styles.email} > 
								<Field
								name="phone"
								component ={fields}
								placeholder = "Phone"
								textentry = {false} />
								</View>
								<View style = {styles.email} > 
								<Field
								name="card"
								component ={fields}
								placeholder = "Credit Card Number                       MM/YYYY  CVV"
								textentry = {false} />
								</View>
								
								<Button title ="Register" onPress={handleSubmit(loginbtn)}/>
							
					</View>
					</KeyboardAvoidingView>
			</View>
			);
	}


 const Registration =reduxForm({
	form:'registrationform', //uniqueid 
	validate,

	})(RegistrationForm);  
  
export default Registration;