import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import logo from "../assets/logo.png"
import "../estilos/graficas.css";
import Navbar from './navbar'
import Cards1 from './cards'

function graficas() {
  return (
    <div className="App">
      <Navbar/>
      
      <div id="contenido">
       <Cards1/>
      </div>
      
    </div>
  );
}

export default graficas;
