import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import logo from "../estilos/logo.png";
import "../estilos/graficas.css";
import navbar from "./navbar";


function graficas() {
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          <li><a><Link to="/"><img id="im1" src={logo} className="App-logo" alt="logo" /></Link></a></li>
          <li><a><Link to="/">Inicio</Link></a></li>
          <li><a><Link to="/Graficas">Graficas</Link></a></li>
          <li><a><Link to="/Serial">Serial</Link></a></li>
        </ul>
      </header>
      <div id="contenido">
        <Card style={{ width: "30rem", height: "25rem" }} bg={"primary"} >
          <iframe
            width="440"
            height="260"
            src="https://thingspeak.com/channels/1729242/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Sensor+Acelerometro&type=line"
          ></iframe>

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
        <Card style={{ width: "30rem", height: "25rem" }} bg={"Info"} >
          <iframe
            width="440"
            height="260"
            src="https://thingspeak.com/channels/1729242/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Sensor+Vibraci%C3%B3n&type=line"
          ></iframe>

          <Card.Body>
            <Card.Title>Monitoreo Sensor Vibración</Card.Title>
            <Card.Text>Descripcion sensor vibración</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <h2>graficas</h2>
    </div>
  );
}

export default graficas;
