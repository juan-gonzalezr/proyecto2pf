//import logo from '../assets/logo.png';
//import { Link } from "react-router-dom";
//import Card from "react-bootstrap/Card";
import '../estilos/serial.css';
import '../estilos/navbar.css'
import Singreso from './singreso'
import Navbar from './navbar'
import Svisual from  './svisual'
//import serialP from 'serialport';

const rep=[
  {
    id:1,
    comp:{Singreso}

  },
  {
    id:2,
    comp:{Svisual}
  }
]


function serial() {
  return (
    <div className="App">
      <header>
         <Navbar/> 
      </header>
      
      
      
      <div id="contenido">
        <div className="row">
          <div className="col-md-4" key={rep.id}>
          <Singreso/>
          
        </div>
        </div>
        
      
          
      </div>
      
        
      
    </div>
  );
}

export default serial;
