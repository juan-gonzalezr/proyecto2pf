import { Link } from "react-router-dom";
import logo from './assets/logo.png';
import logo1 from './assets/sistemaMonitoreo.png';
import facebook from './assets/icon/facebook.png'
import instagram from './assets/icon/instagram.png'
import youtube from './assets/icon/youtube.png'
import github from './assets/icon/github.png'
import './App.css';
import Navbar from './components/navbar'
import './estilos/navbar.css'
import graficas from './components/graficas';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <div id="contenido">
        <div id="fil1">
          <div id="col1a">
            <h1 id="titulo1">Quienes somos?</h1>
              <p id="parrafo1">Somos un grupo de estuiantes de ingenierie electronica, los cuales diseñamos una solucion a un problema
                el cual era la medicion de variables refrenetes a un muro estructural el que sera construido en el departamento
                de Manizales, Colombia. 
                Se realizo una solucion iot para este proyecto, teniendo encuenta el manejo de 3 sensores que seran presentados 
                a continuacion. 
              </p>
          </div>
          <div id="col2a">
              <img id="im2" src={logo} className="App-logo" alt="logo" />
          </div>
        </div>

        <div id="titulo2"><h2 >"Implementaciones Iot y CDIO"</h2></div>
        

        <div id="fil2">
          <div id="col1b">
              <img id="im2" src={logo1} className="App-logo" alt="logo" />
          </div>
          <div id="col2b">
            <h1>Problematica</h1>
              <p>La integridad estructural implica la medición antes, durante y después de la construcción de un
                proyecto de ingeniería civil, especialmente en un país tan geológicamente diverso como lo es
                Colombia, por esta razón la implementación de sensores conectados de forma continua con el fin
                de ayudar al monitoreo de la salud estructural es completamente necesaria ya que una avería dentro
                de la estructura del edificio
              </p>
          </div>
          
        </div>

        <div id="sep"><h2 >"Diseños con seguimiento de requerimientos"</h2></div>

        <div id="fil3">
          <div id="col1c">
            <h1>P2 grupo SaS</h1>
              <p>Calidad, beneficio y responsabilidad, pilares fundamentales de P2 grupo SaS, donde nos enfocamos en
                el mejor uso y manejo de las ideas para la creacion y desarrollo de proyectos a pequeña y gran escala
              </p>
          </div>
          <div id="col2c">
              <img id="im3" src={logo} className="App-logo" alt="logo" />
          </div>
        </div>




        <div id="foot">
          <h2>Contactenos</h2>
          <ul id="ul1">
            <li id="li1" ><a href="https://www.facebook.com" target="_blanck"><img src={facebook} width="30" /></a></li>
            <li id="li1"><a href="https://www.instagram.com" target="_blanck"><img src={instagram} width="30" /></a></li>
            <li id="li1"><a href="https://www.youtube.com" target="_blanck"><img src={youtube} width="30" /></a></li>
            <li id="li1"><a href="https://github.com/juan-gonzalezr" target="_blanck"><img src={github} width="30" /></a></li>
          </ul>
        </div>  
      
      </div>
    </div>
  );
}

export default App;
