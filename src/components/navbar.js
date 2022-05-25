import { Link } from "react-router-dom";
import logo from '../assets/logo.png';
import '../estilos/navbar.css';

function navbar() {
  return (
    <div > 
      <header>
        <nav class="menu">
            <ul>
              <li><a><Link to='/'><img id="im1" src={logo} className="App-logo" alt="logo" /></Link></a></li>
              <li><a><Link to='/'>Inicio</Link></a></li>
              <li><a><Link to='/Graficas'>Graficas</Link></a></li>
              <li><a><Link to='/Serial'>Serial</Link></a></li>
            </ul>
          </nav>
      </header>
        
      
    </div>
  );
}

export default navbar;
