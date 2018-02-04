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
                Dimensions
              } from 'react-native';
        import MapView, {  PROVIDER_GOOGLE  } from 'react-native-maps';
        import RetroMapStyle from './MapStyles/RetroMapStyle.json';
        import RNGooglePlaces from 'react-native-google-places';
        import  Icon  from 'react-native-vector-icons/FontAwesome';
        import SearchResult from './SearchResult.js';
        import { Menu, MenuProvider,
          MenuTrigger,
          MenuOptions,
          MenuOption,
          renderers} from 'react-native-popup-menu';
    /* Get Physical Device size */ 
    let {width, height} = Dimensions.get('window');
    /* declaring values as constants */
    const ASPECT_RATIO = width/height;
    const LATITUDE = 0;
    const LONGITUDE = 0;
    const LATITUDE_DELTA = 0.092;
    const LONGITUDE_DELTA = 0.041;
    const {SlideInMenu} = renderers;
   
    export default class HomeScreen extends Component {
      dragEnd= () => {
    console.log()
        }
    
    /* setting state and initializing values */
    constructor(){
    super();

        this.state =({
        region:{
                  latitude:LATITUDE,
                  longitude : LONGITUDE,
                  latitudeDelta : LATITUDE_DELTA,
                  longitudeDelta : LONGITUDE_DELTA,
              },
              text: 'Pickup',
              textt : 'Drop-Off'
        });

        
                }
 
    /* setting state and initializing values */
    componentDidMount(){
    navigator.geolocation.getCurrentPosition(
    position => {
    this.state=({
    region : {
          latitude: position.coords.latitude,
          longitude : position.coords.longitude,
          latitudeDelta :   LATITUDE_DELTA,
          longitudeDelta :  LONGITUDE_DELTA,
           }
             });
    },(error) => console.log(error.message),
    {enableHighAccuracy : true,timeout:20000,maximumAge: 1000},
    );
    this.watchID = navigator.geolocation.watchPosition(
    position => {
    this.setState({
    region:{
        latitude:position.coords.latitude,
        longitude : position.coords.longitude,
        latitudeDelta :   LATITUDE_DELTA,
        longitudeDelta :  LONGITUDE_DELTA,
          }
    });
    });
  

    }
    componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchID);
    }
      viewMarker()
      {
      console.log('marker')
      }
      openSearchModal(){
      RNGooglePlaces.openAutocompleteModal()
      .then((place) => {
      console.log(place.name);
       this.setstate =({
       text: place.name
      });
      
      })
      
      .catch(error => console.log(error.message));  // error is a Javascript Error object
    }
    render(){
    return( 
        <View>   
        <View style ={styles.destination}>
        <TextInput style={styles.button} 
        onFocus = {() => this.openSearchModal()} placeholder ={this.state.textt}>
        </TextInput>
        <MapView
          provider = {PROVIDER_GOOGLE}
          style = { styles.container }
          customMapStyle = {RetroMapStyle}
          showsUserLocation = {true}
          region = { this.state.region }
         //onRegionChange = {region => this.setState({region})}
        // onRegionChangeComplete = {region => this.setState({region})} //this.setState(region)}
          zoomEnabled={true}>
         
        </MapView>
        </View>
        </View>
           



    )}}
    const styles = StyleSheet.create({
    container:{
    height: '100%',
    width :'100%',
    },
    header:{
      height: '5%',
      marginTop:0,
    },
    buttoncontainer:{
    flexDirection :'column',
    justifyContent: 'flex-end',
    backgroundColor:'blue',
    position:'absolute',
    left: 0, 
    right: 0,
    bottom: 0

    }
   
   });
   module.exports = HomeScreen;