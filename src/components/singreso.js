import React, { Component } from 'react'
import axios from 'axios';
export default class singreso extends Component {

state={
  datos:[],
  direccion:""
}
state1={
  id:"",
  valor:"",
  fecha:""
}


  
  async componentDidMount(){
    const res = await axios.get("http://localhost:4000/Serial");
    this.setState({datos:res.data})
    
    console.log(this.state.datos);
  }


  onHandleChange=(e) =>{
    this.setState({
      direccion : e.target.value}
    )
    console.log(e.target.value);


  }
  onSubmit=async e=>{
    e.preventDefault();
    const res=await axios.get("http://localhost:4000/Serial"+"/"+this.state.direccion)
    //console.log(res.data);

    // this.setState1({
    //   id:res.data._id,
    //   valor:res.data.val,
    //   fecha:res.data.createdAt
    // })
    console.log("http://localhost:4000/Serial"+"/"+this.state.direccion);
  }
  render() {
   
    return (

      <div className='row'>
        <div className='col-md-4 card text-center bg-dark' >
          <card>
            <form onSubmit={this.onSubmit}>
              <br />
            <p>
                Direccion: <input  type="text" name="texto" placeholder="ingrese valor en hexa "
                onChange={this.onHandleChange} />
                </p>
                <button type='submit' className='btn btn-primary' >
                  Enviar
                </button>
                
                
            </form>
          </card>
        </div>

        <div className='col-md-8 card text-center bg-dark'>
          <ul className='list-group'>


                {
                this.state.datos.map(dato=> <li className='list-group list-group-item-action' key={dato._id}>
                  {dato.date}
                </li>
                  )
                }


                
            </ul>
              
        </div>
        


      </div>
    )
  }
}