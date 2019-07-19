    /**
     * Sample React Native App
     * https://github.com/facebook/react-native
     * @flow
     */

    import React, { Component } from 'react';
    import MapView from 'react-native-maps';
 //   import { Polyline } from 'react-native-maps';
    import {View,Text,ActivityIndicator } from 'react-native';
    import styles from './MapStyles.js';
    import {PROVIDER_GOOGLE} from "react-native-maps" 
    import { Searchbox }from '../Searchbox';
    import { SearchModal }from '../SearchModal';
    import { Marker } from 'react-native-maps';
    import { Fare } from '../Fare/index';
    import SlidingUpPanel from 'rn-sliding-up-panel'
   

 export const MapContainer = ({region,distance,duration,clear,minimum,maximum,isloading,getInputData,getAddressPrediction,identifyInput,inputtype,predictions,getSelectedItem,getPredictedValue,selecteditem,points})=>{

        var Spinner = require('react-native-spinkit');
        
return(
    <View style={styles.container}>
   
            <MapView provider = {PROVIDER_GOOGLE}
                    style = { styles.container }
                    showsUserLocation = {true}
                    region = {region}
                    followUserLocation={true}
            >
                {points && <MapView.Polyline
                        coordinates ={points}
                />}
         

          <MapView.Marker coordinate ={region}/>
              
       
            </MapView>
            <Searchbox 
                    getInputData ={getInputData} 
                    getAddressPrediction = {getAddressPrediction}
                    identifyInput ={identifyInput}
                    inputtype ={inputtype}
                    getPredictedValue ={getPredictedValue}
                    selecteditem = {selecteditem}
                    clear ={clear}
            />
           {(inputtype.pickup || inputtype.dropoff) &&
             <SearchModal predictions ={predictions} getSelectedItem ={getSelectedItem} clear ={clear} />  }
           
           {(maximum.farecharges || minimum.minimum)  && 
           <Fare minimum = {minimum} maximum ={maximum} distance ={distance} duration = {duration} isloading = {isloading} /> 
           }     
    </View>

);

};
export default MapContainer;








