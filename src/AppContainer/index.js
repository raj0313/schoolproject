import React, { Component } from "react";
import { Router } from "react-native-router-flux";
import {View, AsyncStorage } from 'react-native';

import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { NetInfo,Text } from "react-native";
import HomeContainer from '..//routes/Home/container/HomeContainer';
import Registration from '..//routes/Register/components/Register/Registration' 
import Register from '..//routes/Register/container/RegisterContainer';
import SwitchScreen from '..//routes/Register/components/SwitchScreen/Switchscreen'
import {Action,Scene} from 'react-native-router-flux';
/*

const scenes = Actions.create(
 
   
);
export default scenes; */

export default class AppContainer extends Component {

	static propTypes = {
		store: PropTypes.object.isRequired
	}
	constructor(){
		super()
		this.state={
			connected :false
		},
		this.state ={
			hastoken : ' ',
			//isloaded:false
		}
	}

	async componentDidMount(){
		NetInfo.getConnectionInfo().then((connectionInfo) =>{
			console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType)
			if(connectionInfo.type == "none"){
				this.setState({
					connected : true
				})
			}});
			try{
				 value = await AsyncStorage.getItem('token').then((values)=>{
					console.log(values);
					values = null;
					if(values != null){
						console.log(values);
						this.setState({hastoken:true})
						//Actions.home()
					}
					else{
						//this.setState({hastoken:false})
						console.log(this.state.hastoken)
						this.setState({hastoken:false})
						console.log(values);
					}

					
				})
				
					
				
			}catch(error){
				console.log(error);

			}
			



		
		}
		render(){
			let isloggedin = this.state.hastoken;
			console.log(isloggedin);
		if(this.state.connected){
		return(<View> 
				<Text>
				 Connect To Internet first 
				 </Text>
			  </View>
			)}else{
		return (
		
	    	<Provider store={this.props.store}>
	

			<Router>
			<Scene key="root">
				<Scene key ="switchscreen" component ={SwitchScreen} hideNavBar ="true" initial= {false}   />
				<Scene key ="login" component ={Register} hideNavBar ="true" />
				<Scene key ="register" component ={Registration}  title="REGISTRATION"  />
				<Scene key ="home" component ={HomeContainer}  hideNavBar ="true" title="HOME"  initial= {true} />
		    </Scene>
			</Router> 
			</Provider>
	
			);
		}
	}
}
