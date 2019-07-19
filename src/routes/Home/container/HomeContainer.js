import {connect} from 'react-redux';
import Home from  "../components/Home";
import {bindActionCreators} from 'redux';

import  { getCurrentLocation,getInputData,clear,isloading,getloginstatus,getAddressPrediction,identifyInput,getSelectedAddress,getPredictedValue,getSelectedItem} from '../module/home';

const mapStatetoProps=(state)=>({
	region:state.home.region,
	inputData:state.home.inputData || {},
	predictions:state.home.predictions || [],
	inputtype : state.home.inputtype || {},
	selecteditem : state.home.selecteditem || {},
	points :state.home.points || [],
	minimum:state.home.minimum || {},
	maximum:state.home.maximum || {},
	distance :state.home.distance || {},
	duration :state.home.duration || {},
	isloading :state.home.isloading || {},
	

	
});


const mapDispatchToProps =(dispatch) =>{
return bindActionCreators({getCurrentLocation,
getInputData,
getAddressPrediction,
identifyInput,
getSelectedAddress,
getPredictedValue,
getSelectedItem,
clear,
getloginstatus
},dispatch);

}
export default connect(mapStatetoProps,mapDispatchToProps)(Home)


