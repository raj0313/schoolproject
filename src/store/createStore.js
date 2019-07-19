import{createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { makeRootReducer } from './reducers';
import createSocketIoMiddleware from "redux-socket.io";
window.navigator.userAgent = "react-native"
import io from "socket.io-client/dist/socket.io";
// requesting server connection 
let socket = io('http://54.252.173.49:6001',{jsonp:false});
// applymiddleware
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");



const log = createLogger({ diff: true, collapsed: true });
const enhancers =[];
// a function which can create our store and auto-persist the data

export default (initialState) =>{

const middleware = [thunk,log,socketIoMiddleware]



const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
        applyMiddleware(...middleware),
        ...enhancers
       
    )
);
return store;



}