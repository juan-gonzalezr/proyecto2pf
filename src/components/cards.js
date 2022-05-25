import React from 'react'
import Card1 from './card'
import '../estilos/cards.css'

const cardis=[
{
  id:1,
  title:'Sensor Acelerometro',
  image:"https://thingspeak.com/channels/1729242/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Sensor+Acelerometro&type=line",
  text:"Sensor acelerometro referencia"

},
{
  id:2,
  title:'Sensor Humedad',
  image:"https://thingspeak.com/channels/1729242/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Sensor+Humedad&type=line",
  text:"Sensor de humedad referencia"
          
},
{
  id:3,
  title:'Sensor Vibracion',
  image:"https://thingspeak.com/channels/1729242/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=Sensor+Vibraci%C3%B3n&type=line",
  text:"Sensor de virbacion referencia"
        
}

]


function cards() {
  return (
    <div className='container' d-flex justify-content-center bg-info>
        <div className="row">
          {
            cardis.map(car=>(
              <div className="col-md-4" key={car.id}>
            <Card1 title={car.title} imgSource={car.image} text={car.text}/>
          </div>
            ))
          }
          
        </div>
        
    </div>
  )
}

export default cards