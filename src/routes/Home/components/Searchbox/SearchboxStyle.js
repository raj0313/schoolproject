import  {Dimensions}  from 'react-native';

var {height,width} = Dimensions.get('window');
const styles ={
Searchbox:{
width:width,
position: 'absolute',
top: 0
},
destination:{
flex:1,
width:width/2,
height:50,
    

}
} 
export default styles;


