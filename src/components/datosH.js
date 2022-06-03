import React, { Component } from 'react'
import axios from 'axios';
export default class datosH extends Component {

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
    const res = await axios.get("http://localhost:4000/Serial/dath");
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
    const res=await axios.get("http://localhost:4000/Serial/dath"+"/"+this.state.direccion)
    //console.log(res.data);

    // this.setState1({
    //   id:res.data._id,
    //   valor:res.data.val,
    //   fecha:res.data.createdAt
    // })
    console.log("http://localhost:4000/Serial/dath"+"/"+this.state.direccion);
  }
  render() {
   
    return (

      <div className='row'>
        <div className='col-md-12 card text-center bg-dark' >
          <card>
            <form onSubmit={this.onSubmit}>
              <br />
            <p>
                Hora: <input  type="text" name="texto" placeholder="AAAA-MM-DDTHH:MM:SS.###Z "
                onChange={this.onHandleChange} />
                </p>
                <p>Modo Normal</p>
                <input type="radio" id="css" name="fav_language" value="CSS"></input>
                
                <p>Modo Bajo Consumo</p><input type="radio" id="css" name="fav_language" value="CSS"/>
                                               
                <br></br>
                <button type='submit' className='btn btn-primary' >
                  Enviar
                </button>
                
                
            </form>
          </card>
        </div>
        <div className='col-md-2 card text-center bg-dark'>
          <ul className='list-group'>


                {
                this.state.datos.map(dato=> <li className='list-group list-group-item-action' key={dato._id}>
                  {dato._id}
                  
                </li>
                  )
                }
                


                
            </ul>
              
        </div>

        <div className='col-md-6 card text-center bg-dark'>
          <ul className='list-group'>


                {
                this.state.datos.map(dato=> <li className='list-group list-group-item-action' key={dato._id}>
                  {dato.date}
                  
                </li>
                  )
                }
                


                
            </ul>
              
        </div>
        <div className='col-md-4 card text-center bg-dark'>
          <ul className='list-group'>


                {
                this.state.datos.map(dato=> <li className='list-group list-group-item-action' key={dato._id}>
                  {dato.val}
                  
                </li>
                  )
                }
                


                
            </ul>
              
        </div>


      </div>
    )
  }
}
