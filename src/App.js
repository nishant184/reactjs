import React,{Component} from 'react';
import logo from './image.jpg'; 
import './App.css';

class App extends Component(){
constructor(props){
  super(props);
  this.state={
              newitem:"",
              list:[]
            }
}
additem(toadd){
  if(toadd !==  '')
  {
    const newitem={
                    id:Date.now(),
                    value:this.additem,
                    isDone:false
                  }
              const list=[...this.state.list];
              list.push(newitem);
              this.setstate(
                {
                  list,
                  newitem:""
                }
              )  
  }
}
deleteitem(id)
{
  const list=[...this.state.list];
  const updatelist=list.filter(item=>item.id !=="");
  this.setstate({list:updatelist});
}
updateinput(input)
{
  this.setstate({newitem:input});
}
  render(){
    return(
      <div>     
         <h1>Hello</h1>
         <img src={logo} className="logo"/>
         <div className="container">
           add typess of disasters
           <br/>
           <input type="text" className="input-text" value={this.state.newitem} onChange={a=> this.updateinput(a.target.value)}/>
           <button className="btn" onClick={() =>   this.additem(this.state.newitem)}>add disasters </button>
           <div className="list">
             <ul>
               {this.state.list.map(item => {
                 return(
                   <li key={item.id}>
                     <input
                     type="checkbox"
                     name="idDone"
                     checked={item.isDOne}
                     onChange={()=>{}}/>
                     {item.value}
                     <button
                     className="btn"
                     onClick={()=> this.deleteitem(item.id)}
                     >Delete</button>
                     </li>
                 )
               })}
               <li> <input type="Checkbox"  />avalanche</li>
               <button className="btn">Delete</button>
               
            </ul>
           </div>
         </div>
     </div>
   
    );
  }
}


export default App;
