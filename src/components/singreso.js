import React, { Component } from 'react'
import axios from 'axios';
import DatosA from './datosA';
import DatosV from './datosV'
import DatosH from './datosH'

export default class singreso extends Component {

state={
  
  valor:""
}
// state1={
//   id:"",
//   valor:"",
//   fecha:""
// }


  
//   async componentDidMount(){
//     const res = await axios.get("http://localhost:4000/Serial/data");
//     this.setState({datos:res.data})
    
//     console.log(this.state.datos);
//   }


 
  onChange= e=>{
    this.setState({
      valor : e.target.value}
       )
       //console.log("entro al onchange"); 
       console.log(e.target.value);
    
    //console.log(res.data);
       // console.log(this.state.valor)
      }


  render() {
    let component ;
     if(this.state.valor==="DatA"){
       component=<DatosA/>
     }
     if(this.state.valor==="DatV"){
       component=<DatosV/>
     }
     if(this.state.valor==="DatH"){
       component=<DatosH/>
     }
    
    return (

      <div className='row'>



       <div className='col-md-12 card text-center bg-dark' >
          <card>
            <form onSubmit={this.onSubmit}>
              <br />
              <select name="" id="" onChange={this.onChange}>
                <option value="---"  >---</option>  
                <option value="DatA"  >Acelerometro</option>
                <option value="DatV"  >Vibración</option>
                <option value="DatH"  >Humedad</option>
              </select>
                                                
            </form>
          </card>
        </div> 
        {component}
        


      </div>
    )
  }
}
