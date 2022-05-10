import { Link } from "react-router-dom";
import logo from './estilos/logo.png';
import logo1 from './estilos/sistemaMonitoreo.png';
import facebook from './icon/facebook.png'
import instagram from './icon/instagram.png'
import youtube from './icon/youtube.png'
import github from './icon/github.png'
import './App.css';

import './estilos/navbar.css'
import graficas from './components/graficas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            
          <ul>
            <li><a><Link to='/'><img id="im1" src={logo} className="App-logo" alt="logo" /></Link></a></li>
            <li><a><Link to='/'>Inicio</Link></a></li>
            <li><a><Link to='Graficas'>Graficas</Link></a></li>
            <li><a><Link to='Serial'>Serial</Link></a></li>
          </ul>
                
      </header>
      <div id="contenido">
        <div id="fil1">
          <div id="col1a">
            <h1>Quienes somos?</h1>
              <p>Somos un grupo de estuiantes de ingenierie electronica, los cuales diseñamos una solucion a un problema
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

        <div id="sep"><h2 >"Implementaciones CDIwO y Iot"</h2></div>
        

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

        <div id="sep"><h2 >"Implementaciones CDIwO y Iot"</h2></div>

        <div id="fil3">
          <div id="col1c">
            <h1>unicos</h1>
              <p>Somos un grupo de estuiantes de ingenierie electronica, los cuales diseñamos una solucion a un problema
                el cual era la medicion de variables refrenetes a un muro estructural el que sera construido en el departamento
                de Manizales, Colombia. 
                Se realizo una solucion iot para este proyecto, teniendo encuenta el manejo de 3 sensores que seran presentados 
                a continuacion. 
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
