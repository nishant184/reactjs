import React,{Component} from 'react';
import logo from './image.jpg'; 
import './App.css';

class App extends Component(){
  render(){
    return(
      <div>     
         <h1>Hello</h1>
         <img src={logo} className="logo"/>
     </div>
   
    );
  }
}


export default App;
