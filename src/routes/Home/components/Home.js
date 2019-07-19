import React,{Component} from 'react';
import { Text,View, AsyncStorage } from 'react-native';
import Mapview from 'react-native-maps';
import MapContainer from './Mapcontainer';
import { Container } from 'native-base';



class Home extends Component{

    componentDidMount(){
  
         
     this.props.getCurrentLocation();
       
    
    }
            render(){ 
                const region ={
                    latitude: -36.8485,
                    longitude: 174.7633,
                    latitudeDelta:0.0101,
                    longitudeDelta:0.01,

                }
                
            return(
                <View style ={{flex:1}}>
               
            
               {this.props.region.latitude &&
                <MapContainer region= {this.props.region}
                getInputData={this.props.getInputData}
                getAddressPrediction ={this.props.getAddressPrediction}
                identifyInput ={this.props.identifyInput}
                inputtype = {this.props.inputtype}
                predictions ={this.props.predictions}
                predictedvalue ={this.props.predictedvalue}
                getSelectedItem = {this.props.getSelectedItem}
                selecteditem = {this.props.selecteditem}
                points ={this.props.points}
                minimum ={this.props.minimum}
                maximum = {this.props.maximum}
                isloading ={this.props.isloading}
                clear ={this.props.clear}
              
                />
            }
               
             
               
                 </View>

            );
         
        }
            }
export default Home;