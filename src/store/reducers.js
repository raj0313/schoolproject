import { combineReducers } from 'redux';
import {HomeReducer as home} from '../routes/Home/module/home';
import {RegisterReducer as register} from '../routes/Register/module/register';
import {reducer as formReducer} from 'redux-form';
 export const makeRootReducer= () =>{
	return combineReducers({
		form: formReducer,
		register,
		home
	});


}
export default makeRootReducer;