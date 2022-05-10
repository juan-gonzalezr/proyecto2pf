import logo from '../estilos/logo.png';
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import '../estilos/serial.css';
import '../estilos/navbar.css'

function serial() {
  return (
    <div className="App">
      <header className="App-header">
         <ul>
            <li><a><Link to='/'><img id="im1" src={logo} className="App-logo" alt="logo" /></Link></a></li>
            <li><a><Link to='/'>Inicio</Link></a></li>
            <li><a><Link to='/Graficas'>Graficas</Link></a></li>
            <li><a><Link to='/Serial'>Serial</Link></a></li>
          </ul>
      </header>
      <div id="contenido">
        <div>
        <Card style={{ width: "30rem", height: "25rem" }} bg={"primary"} >
          <form>
              <p> 
                <select name="menu">
                  <option value="RB">RB</option>
                  <option value="RS">RS</option>
                  <option value="WB">WB</option>
                  <option value="WS">WS</option>
                </select>
              </p>
              <p>
              Valor: <input type="text" name="texto" placeholder="ingrese dato en hexa "/>
              </p>
              <button>Enviar</button>
            </form>

          <Card.Body>
            <Card.Title>Monitoreo sensor acelerometro</Card.Title>
            <Card.Text>Descripcion del acelerometro</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "30rem", height: "25rem" }} bg={"Info"} >
          <iframe
            width="440"
            height="260"
            src="https://thingspeak.com/channels/1729242/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Sensor+Humedad&type=line"
          ></iframe>

          <Card.Body>
            <Card.Title>Monitoreo Sensor Humedad</Card.Title>
            <Card.Text>Descripcion sensor humedad</Card.Text>
          </Card.Body>
        </Card>
          
        </div>
        
      </div>
      
        
      
    </div>
  );
}

export default serial;
