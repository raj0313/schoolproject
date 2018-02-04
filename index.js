		import React,{Component} from 'react';
		import {
		AppRegistry,
		StyleSheet,
		Text,
		View
		} from 'react-native';

		import App from './App';
		import FirstScreen from './src/components/firstscreen.js';
		import HomeScreen from './src/components/HomeScreen.js';
		import { StackNavigator } from 'react-navigation';
		import { MenuProvider } from 'react-native-popup-menu';
		export default class Index extends Component{
		render(){
		const {navigate} = this.props.navigation;
		return(	
			<View style ={styles.regcontainer}>
			</View>
			);
			}
			}
		const styles = StyleSheet.create({
		regcontainer:{
		flex :1,
		backgroundColor: '#fff',
		}
		})
		const navigation = StackNavigator(
		{
				Login :{screen : FirstScreen},
				Home:{screen : HomeScreen},
		},

				{
					headerMode: 'none',
					mode: 'card',
		
				},
			
		);
		

		AppRegistry.registerComponent('KiwiTaxis', () => navigation);
